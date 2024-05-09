import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import LoginList from './components/LoginList';
import Main from './components/Main';
import SignupList from './components/SignupList';
import LoginDoctor from './components/LoginDoctor';
import LoginPatient from './components/LoginPatient';
import LoginPathology from './components/LoginPathology';
import LoginManufacturer from './components/LoginManufacturer';
import SignDoctor from './components/SignDoctor';
import SignManufacturer from './components/SignManufacturer';
import SignPathology from './components/SignPathology';
import SignPatient from './components/SignPatient';
import Web3 from 'web3';
import { useEffect, useState } from 'react';


function App() {

  const [accountName, setAccountName] = useState('');
  const [accountBalance, setAccountBalance] = useState(0);
  const detectProvider = () => {
    let provider;
    if (window.ethereum) {
      // provider=new Web3.providers.WebsocketProvider(window.ethereum);
      // window.ethereum.enable();
      provider = window.ethereum;
      console.log("window.ethereum");
    } else if (window.web3) {
      provider = window.web3.currentProvider;
      console.log("window.web3");
    } else {
      console.log("non-ethereum browser");
    }
    return provider;
  }

  useEffect(() => {
    const onConnect = async () => {
      try {
        const currProvider = detectProvider();
        if (currProvider) {
          await currProvider.request({ method: 'eth_requestAccounts' });
          const web3 = new Web3(currProvider);
          const userAccounts = await web3.eth.getAccounts();
          setAccountName(userAccounts[0]);
          const balance = await web3.eth.getBalance(userAccounts[0]);
          setAccountBalance(balance);
          console.log("Account: " + accountName);
          console.log("Balance: " + accountBalance);
        }
      } catch (error) {
        console.log(error);
      }
    }

    onConnect();

    return () => {
    };
  }, [accountBalance,accountName]);




  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/signDoctor' element={<SignDoctor />}></Route>
        <Route path='/signPatient' element={<SignPatient />}></Route>
        <Route path='/signPathologist' element={<SignPathology />}></Route>
        <Route path='/signManufacturer' element={<SignManufacturer />}></Route>
        <Route path='/logDoctor' element={<LoginDoctor />}></Route>
        <Route path='/logPatient' element={<LoginPatient />}></Route>
        <Route path='/logPathologist' element={<LoginPathology />}></Route>
        <Route path='/logManufacturer' element={<LoginManufacturer />}></Route>
        <Route path='/loginList' element={<LoginList />}></Route>
        <Route path='/signupList' element={<SignupList />}></Route>
      </Routes>

      {/* <SignIn/> */}
      {/* <Test/> */}


      {/* <LoginList/> */}
      {/* <SignupList/> */}
      {/* <LoginDoctor/> */}
      {/* <LoginPatient/> */}
      {/* <SignDoctor/> */}
    </div>
  );
}

export default App;
