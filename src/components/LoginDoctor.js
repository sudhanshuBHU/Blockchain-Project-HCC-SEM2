import React from "react";
import { useState } from "react";
import "./LoginDoctor.css";
import Web3 from "web3";
import { Link } from "react-router-dom";




const LoginDoctor = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const ABI = [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "u",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "pass",
                    "type": "string"
                }
            ],
            "name": "setUserPass",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "u",
                    "type": "string"
                }
            ],
            "name": "getUser",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    const ADD = '0xacb4916010b077d18883359dba83039010566fdd';
    const [accountName, setAccountName] = useState('');


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

                const res = await ContractInstance.methods.getUser(username).call();
                if (res === password) console.log("log in successful");
                else console.log("user not found");

                // await ContractInstance.methods.setUserPass(username, password).send({ from: accountName, gas: 300000 });
                // console.log("user registered");
                // setConstract(ContractInstance);

                // await contract.methods.setRegistration(username, password, special).send({ from: accountName, gas: 300000 });
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

    }
    return (
        <div className="sign-manu1">
            <div className="signin1">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2 className="form-title1">Login as Doctor</h2>
                    <div className="form-group">
                        <label htmlFor="username" className="form-label2">ID</label>
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
                        <label htmlFor="password" className="form-label1">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-input"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn-submit" id="submitloginDoc">Login</button>
                </form>
                <div className="newDoctor">
                    <Link to="">Forget Password</Link>
                </div>
                <div className="newDoctor">
                    Create new account as Doctor <Link to="/signDoctor" id="newDoc" >Sign Up</Link>
                </div>
            </div>
        </div>
    );
}

export default LoginDoctor;