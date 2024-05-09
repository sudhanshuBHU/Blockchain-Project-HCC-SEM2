import React from "react";
import { useState } from "react";
// import "./LoginDoctor.css";
const LoginPathology = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Username:", username);
        console.log("Password:", password);}
        return (
            <div className="sign-manu">
                <div className="signin">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h2 className="form-title1">Login as Pathology</h2>
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
                </div>
            </div>
        );
    }

export default LoginPathology;