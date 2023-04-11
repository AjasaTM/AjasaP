import React, { useEffect, useState, useCallback } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utilitiesFunctions/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = (provider) => {
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );
    const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(web3Provider); // check that this logs the Web3Provider object
    return transactionContract;
};

export const TransactionProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  const [transactionsCount, setTransactionsCount] = useState(
    parseInt(localStorage.getItem("transactionsCount")) || 0
  );

  const connectWallet = useCallback(async () => {
    try {
      if (!ethereum) {
        throw new Error("No ethereum object.");
      }
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }, []);

  const checkIfWalletIsConnected = useCallback(async () => {
    try {
      if (!ethereum) {
        throw new Error("No ethereum object.");
      }
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }, []);

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [checkIfWalletIsConnected]);

  const handleChange = useCallback((e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  }, []);

  const sendTransaction = useCallback(async () => {
    try {
      if (!window.ethereum) {
        throw new Error("Please install Metamask");
      }
      const { addressTo, amount, keyword, message } = formData;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const transactionContract = getEthereumContract(provider);
      const parsedAmount = ethers.utils.parseEther(amount);

      const transaction = {
        from: currentAccount,
        to: addressTo,
        gasLimit: ethers.utils.hexlify(21000),
        gasPrice: ethers.utils.parseUnits("21", "gwei"),
        value: parsedAmount.toHexString(),
      };

      const txHash = await ethereum.request({
        method: "eth_sendTransaction",
        params: [transaction],
      });

      setIsLoading(true);
      console.log(`Loading - ${txHash}`);
      const receipt = await provider.waitForTransaction(txHash);
      console.log(`Success - ${receipt.transactionHash}`);

      const transactionHash = await transactionContract.addTransaction(
        addressTo,
        parsedAmount,
        message,
        keyword
      );
      console.log(`Transaction hash - ${transactionHash.hash}`);
      await transactionHash.wait();
      setIsLoading(false);

      const updatedTransactionsCount = await transactionContract.getTransactionsCount();
      setTransactionsCount(updatedTransactionsCount.toNumber());
      localStorage.setItem("transactionsCount", updatedTransactionsCount);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }, [currentAccount, formData]);

  return (
        <TransactionContext.Provider value={{ connectWallet, currentAccount,sendTransaction, handleChange, formData, setFormData, isLoading }}>
            {children}
        </TransactionContext.Provider>
    );
}