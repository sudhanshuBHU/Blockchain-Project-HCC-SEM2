import React from "react";
import { useState } from "react";
import "./SignIn.css"
const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Username:", username);
        console.log("Password:", password);
    };
    return (
        <div className="sign-manu">
        <div className="signin">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="form-title">Login</h2>
                <div className="form-group">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        id="username"
                        className="form-input"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
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
                <button type="submit" className="btn-submit">Login</button>
            </form>
        </div>
        </div>
    );
}

export default SignIn;
// return (

//     <div className="sign-manu">
//         <div className="signin">
//             <div className="signin-title">Manufacturer</div>
//             <div className="inputs">
//                 {/* <label>EMAIL</label> */}
//                 {/* <input type="email" placeholder="example@test.com" />/ */}
//                 <label>PASSWORD</label>
//                 <input type="password" placeholder="Min 6 charaters long" />
//                 <button type="submit">LOGIN</button>
//             </div>
//         </div>
//     </div>
// );