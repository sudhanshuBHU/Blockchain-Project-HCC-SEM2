import React from "react";
import "./CheckWallet.css";
import Web3 from 'web3';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


const ABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "setCount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "getCount",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
const ADD = '0xd7c112e14c204614234523f712006fe449cb40d2';
const CheckWallet = () => {

    const dispatch = useDispatch();
    const addressCurr = useSelector((state) => state.account.addressAccount);
    const balanceCurr = useSelector((state) => state.account.bal);
    const [accountName, setAccountName] = useState(addressCurr);
    const [accountBalance, setAccountBalance] = useState(balanceCurr);
    const [contract, setConstract] = useState(null);



    const detectProvider = () => {
        let provider;
        if (window.ethereum) {
            provider = window.ethereum;
            // console.log("window.ethereum");
        } else if (window.web3) {
            provider = window.web3.currentProvider;
            // console.log("window.web3");
        } else {
            console.log("non-ethereum browser");
        }
        return provider;
    }


    const onConnect = async () => {
        try {
            const currProvider = detectProvider();
            if (currProvider) {
                await currProvider.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(currProvider);
                const userAccounts = await web3.eth.getAccounts();
                setAccountName(userAccounts[0]);
                const balance1 = await web3.eth.getBalance(userAccounts[0]);
                setAccountBalance(balance1);
                console.log("Account: " + accountName);
                console.log("Balance: " + accountBalance);
                const ContractInstance = new web3.eth.Contract(ABI, ADD);
                setConstract(ContractInstance);
                const res = await contract.methods.getCount().call();
                console.log(res);
                // Add the account to Redux store
                // dispatch(address(accountName));
                // dispatch(balance(accountBalance));
            }
        } catch (error) {
            console.log(error);
        }
    }


    function clickHandler() {
        console.log("clicked");
        onConnect();
    }


    return (
        <div className="signContainer-wrapper" id="div1">
            <h2 id="h2div1">Connect to your Wallet</h2>
            <button onClick={clickHandler} className="about" id="sign-btn1">Check Connection</button>
        </div>
    );
}

export default CheckWallet;