import React, {useContext} from "react";
import { TransactionContext } from "../context/TransactionContext";

const Header = () => {
  const {connectWallet, currentAccount} = useContext(TransactionContext);
    return <header className=" py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <h1 className="text-blue-300 text-bold-400"> GrandidaFX</h1>
          </a>
          {!currentAccount && (
            <button type="button" onClick={connectWallet}  className="btn btn-sm text-gradient-button">Connnect Your Wallet</button>
          )}
        </div>
      </div>
    </header>
  };
  
  export default Header;