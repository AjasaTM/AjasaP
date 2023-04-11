// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Transactions is Ownable {
    using SafeMath for uint256;

    uint256 private transactionCount; // The total number of transactions
    uint256 private constant PAGE_SIZE = 20; // The number of transactions to return per page

    event Transfer(address indexed from, address indexed receiver, uint256 amount, bytes message, uint256 timestamp, bytes32 account, bytes32 keyword);

    struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
        bytes message;
        uint256 timestamp;
        bytes32 keyword;
    }

    TransferStruct[] private transactions; // An array of all transactions

    // Adds a new transaction to the array and emits a Transfer event
    function addTransaction(address payable receiver, uint256 amount, bytes memory message, bytes32 keyword) public onlyOwner returns (bool) {
        transactionCount = transactionCount.add(1); // Increment the total transaction count
        TransferStruct memory transfer = TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword); // Create a new transaction struct
        transactions.push(transfer); // Add the transaction to the array
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, toBytes32(msg.sender), keyword); // Emit a Transfer event
        return true;
    }

    // Returns the total number of transactions
    function getTransactionsCount() public view returns (uint256) {
        return transactionCount;
    }

    // Returns an array of transactions for a specific page
    function getTransactions(uint256 page) public view returns (TransferStruct[] memory) {
        uint256 start = page.mul(PAGE_SIZE); // Calculate the starting index for the page
        uint256 end = (page.add(1)).mul(PAGE_SIZE); // Calculate the ending index for the page
        if (end > transactions.length) { // Check if the ending index is greater than the total number of transactions
            end = transactions.length;
        }
        TransferStruct[] memory result = new TransferStruct[](end.sub(start)); // Create a new array to hold the transactions for the page
        for (uint256 i = start; i < end; i++) { // Loop through the transactions for the page
            result[i.sub(start)] = transactions[i]; // Add the transaction to the result array
        }
        return result; // Return the array of transactions for the page
    }

    // Converts an address to a bytes32 value
    function toBytes32(address a) private pure returns (bytes32) {
        return bytes32(uint256(uint160(a)));
    }
}
