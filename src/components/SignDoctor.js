import React from "react";
import { useState } from "react";
import "./SignDoctor.css";
import Web3 from "web3";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";




const SignDoctor = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [special, setSpecial] = useState('');
    const [pwdMsg, setPwdMsg] = useState('');
    const [rePassword, setRePassword] = useState('');


    const navigate = useNavigate();
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
    // const [contract, setConstract] = useState(null);


    const sweetAlertSuccess = () => {
        Swal.fire({
            title: "Success",
            text: `${username} has been registered`,
            icon: "success"
        })
    }

    const sweetAlertError = (res = "Oops Error Occured. Please Try Again.") => {
        Swal.fire({
            title: "Error",
            text: res,
            icon: "error"
        })
    }



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


    const onConnect = async (username, password, special) => {
        try {
            const currProvider = detectProvider();
            if (currProvider) {
                await currProvider.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(currProvider);
                const userAccounts = await web3.eth.getAccounts();
                setAccountName(userAccounts[0]);
                const ContractInstance = new web3.eth.Contract(ABI, ADD);
                console.log(ContractInstance);
                const existingUser = await ContractInstance.methods.getUser(username).call();
                if (existingUser === '') {
                    const response = await ContractInstance.methods.setUserPass(username, password).send({ from: accountName, gas: 300000 });
                    if (response === true) {
                        console.log(`${username} has been registered`);
                        sweetAlertSuccess();
                        navigate('/logDoctor');
                        return true;
                    }
                } else {
                    sweetAlertError(`${username} already exists. Try loging in.`);
                    navigate('/logDoctor');
                }
                // else {
                //     console.log("Try again, failed to create account.");
                //     sweetAlertError();
                //     return false;
                // }


                // const navigate = useNavigate();
                // setConstract(ContractInstance);

                // await contract.methods.setRegistration(username, password, special).send({ from: accountName, gas: 300000 });
                // const res = await contract.methods.viewRegistration().call();
                // console.log(res);
            }
        } catch (error) {
            console.log("Error at signDoctor");
            console.log(error);
        }
        return false;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Username:", username);
        console.log("Password:", password);
        console.log("special:", special);
        if (rePassword === password) {
            const res = onConnect(username, password, special);
            if (res === true) {
                setUsername('');
                setSpecial('');
                setPassword('');
                setRePassword('');
            } else {
                sweetAlertError("Problem in gas transaction, Try again");
            }
        } else {
            console.log("Password didn't matched");
            sweetAlertError("Password didn't matched");
        }


        // navigate('/logDoctor');
    }

    const rePasswordHandler = (e) => {
        setRePassword(e.target.value);
        if (e.target.value !== password) { setPwdMsg("Password doesn't match."); }
        else setPwdMsg('');
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if (password === "") setPwdMsg('');
    }

    return (
        <div className="innerDiv">
            <div className="signin ">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2 className="form-title1">Register as a Doctor</h2>
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
                    <div className="form-group">
                        <label htmlFor="special" className="form-label2">Specialization</label>
                        <input
                            type="text"
                            id="special"
                            className="form-input"
                            placeholder="Enter your ID"
                            value={special}
                            onChange={(e) => setSpecial(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn-submit" id="submitloginDoc">Create an Account</button>
                </form>
                <div className="logDoc">
                    Already have an account?<Link to="/logDoctor" id=""> Log in</Link> 
                </div>
            </div>
        </div>
    );
}

export default SignDoctor;