import React from "react";
import { useState } from "react";
// import "./SignDoctor.css";
import Web3 from "web3";


const SignManufacturer = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [pwdMsg, setPwdMsg] = useState('');
    const [rePassword, setRePassword] = useState('');
    const ABI = [
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
        },
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
            "inputs": [
                {
                    "internalType": "string",
                    "name": "username",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "password",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "special",
                    "type": "string"
                }
            ],
            "name": "setRegistration",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "viewRegistration",
            "outputs": [
                {
                    "internalType": "string[]",
                    "name": "",
                    "type": "string[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];

    const ADD = '0x8b0c3224164fe609dad93882a34ed9a79a444fea';
    const [accountName, setAccountName] = useState('');
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

    const onConnect = async (username, password) => {
        try {
            const currProvider = detectProvider();
            if (currProvider) {
                await currProvider.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(currProvider);
                const userAccounts = await web3.eth.getAccounts();
                setAccountName(userAccounts[0]);
                const ContractInstance = new web3.eth.Contract(ABI, ADD);
                setConstract(ContractInstance);
                // await contract.methods.setRegistration(username, password, "world").send({ from: accountName, gas: 300000 });
                // const res = await contract.methods.viewRegistration().call();
                // console.log(res);
            }
        } catch (error) {
            console.log(error);
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Username:", username);
        console.log("Password:", password);
        onConnect(username, password);
        setUsername('');
        setPassword('');
        setRePassword('');
    }

    const rePasswordHandler = (e) => {
        setRePassword(e.target.value);
        if (e.target.value != password) { setPwdMsg("Password doesn't match."); }
        else setPwdMsg('');
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if (password == "") setPwdMsg('');
    }

    return (
        <div className="sign-manu1">
            <div className="signin1">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2 className="form-title1">Register as a Manufacturer</h2>
                    <div className="form-group">
                        <label htmlFor="username" className="form-label2">License ID</label>
                        <input
                            type="text"
                            id="username"
                            className="form-input"
                            placeholder="Enter your ID"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label1">Create Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-input"
                            placeholder="Enter your password"
                            value={password}
                            onChange={passwordHandler}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rePassword" className="form-label1">Re-Enter Password</label>
                        <input
                            type="password"
                            id="rePassword"
                            className="form-input"
                            placeholder="Enter your password"
                            value={rePassword}
                            onChange={rePasswordHandler}
                            required
                        />
                    </div>
                    <p className="passwordErrorMsg">{pwdMsg}</p>
                    <button type="submit" className="btn-submit" id="submitloginDoc">Create an Account</button>
                </form>
            </div>
        </div>
    );
}

export default SignManufacturer;

