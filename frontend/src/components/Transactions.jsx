import React, { useContext } from "react";
import Data from "../utilitiesFunctions/Data";
import { TransactionContext } from "../context/TransactionContext"; // importing the TransactionContext component from the TransactionsContext.js file
import TransactionCard from "./TransactionCard"; // importing the TransactionCard component from the TransactionCard.js file

const Transactions = () => {
  const { currentAccount, transactions } = useContext(TransactionContext); // using the useContext hook to access the state data (currentAccount and transactions) from the TransactionContext component

 
  if (!currentAccount) { // if there's no currentAccount data in the context, display a message to the user
    return (
      <div className="flex w-full justify-center items-center gradient-bg-transactions">
        <h3 className="text-white text-3xl text-center my-2">
          Connect your account to see the latest transactions
        </h3>
      </div>
    );
  }

  // if there is currentAccount data in the context, display the transactions
  return (
    <section className="section" id="Transactions">
      <div className="flex flex-col w-full justify-center items-center gradient-bg-transactions py-12 px-4 md:p-12">
        <h3 className="text-white text-3xl text-center my-2">
          Latest Transactions
        </h3>
        <div className="flex flex-wrap justify-center mt-10">
          {Data.reverse().map((transaction, i) => (
            <TransactionCard key={i} {...transaction} /> // iterate through each transaction object and create a TransactionCard component for it
          ))}
        </div>
      </div>
    </section>
  );

};

export default Transactions;
