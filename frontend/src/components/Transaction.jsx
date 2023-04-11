import React, {useContext } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { FaEthereum } from 'react-icons/fa';
import Spinner from './Spinner';
import { TransactionContext } from '../context/TransactionContext';


const shortenAddress = (address) => {
    const prefix = address.slice(0, 6);
    const suffix = address.slice(-4);
    return `${prefix}...${suffix}`;
};
  


const Input = ({placeholder, name, type, value, handleChange }) => (
    <input
        placeholder={placeholder}
        type={type}
        step='0.0001'
        value={value}
        onChange={(e) => handleChange(e, name)}
        className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-small white-glassmorphism'
    />
);


const Transaction = () => {
    const {connectWallet, currentAccount, handleChange, sendTransaction, formData, isLoading} = useContext(TransactionContext);


    const handleSubmit = (e) => {
        const {addressTo, amount, keyword, message } = formData;
        e.preventDefault();
        if(!addressTo || !amount || !keyword || !message) return;
        sendTransaction();
    }



  return(
    <section className="section" id="Transaction">
        <div className='flex w-full justify-center items-center'>
            <div className='flex mf:flex-row flex-col items-start justify-between md: p-20 py-12 px-4'>
                <div className=' flex flex-1 justify-start flex-col mf:mr-10'>
                    <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>
                        Borderless trade <br/> with secure Crypto exchange
                    </h1>
                    <p className='text-white mt-5 text-left font-light md:w-9/12 w-11/12 text-base'>
                        Join the cryptocurrency community and be at the forefront of crypto-ovation
                    </p>
                    {!currentAccount && (
                        <button type="button" onClick={connectWallet}
                            className="flex shadow-xl shadow-black flex-row justify-center items-center my-5 bg-blue-900 hover:bg-blue-800 p-3 rounded-full cursor-pointer ">
                            <AiFillPlayCircle className="text-white mr-2" />
                            <span> Connect Wallet </span>
                        </button>
                    )}
                    <div className='flex justify-between flex-col h-full'>
                        <div className='flex justify-between items-start'>
                            <div className='w-10 h-10 rounded-full border-2 border-white flex justify-center item-center py-2 px-2 shadow-xl shadow-black'>
                                <FaEthereum fontSize={21} color='#9dc219' />
                            </div>
                            <BsInfoCircle fontSize={17} color= '#063970' className='shadow-outer shadow-black'/>
                        </div>
                        <div>
                            <p className='text-white font-light text-sm shadow-inner shadow-black'>
                                {shortenAddress(currentAccount)}
                            </p>
                            <p className='text-white font-semibold text-lg mt-1 shadow-inner shadow-black'>
                                Ethereum
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex-col flex flex-1 items-center justify-start w-full mf:mt-0 mt-10'>
                    <div className='p-4 sm:w-90 w-full flex flex-col justify-start items-center white-glassmorphism shadow-inner shadow-black'>
                        <Input placeholder='Address To' name='addressTo' type='text' handleChange={handleChange} />
                        <Input placeholder='Amouth(Ether)' name='amount' type='number' handleChange={handleChange} />
                        <Input placeholder='Keyword(gif)' name='keyword' type='text' handleChange={handleChange} />
                        <Input placeholder='Message' name='message' type='text' handleChange={handleChange} />
                        <div className='h-[1px] w-full bg-gray-400 my-2'/>

                        {isLoading ? (
                            <Spinner />
                        ) : (
                          <button type='button' onClick={handleSubmit}
                          className='text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer shadow-xl shadow-black'>
                            Send Now
                          </button>
                        )}
                    </div>
                </div>
            </div>
       </div>;
    </section>
  )
};

export default Transaction;