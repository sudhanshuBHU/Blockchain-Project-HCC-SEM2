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
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { increaseCards, increaseCertificates, increaseMeds, increaseVisitors } from './redux/CounterSlice';



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

function App() {

  // const [contract1, setContract] = useState(null);
  // const dispatch = useDispatch();
  const detectProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
      console.log("window.ethereum");
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      console.log("non-ethereum browser");
    }
    return provider;
  }

  useEffect(() => {
    const onConnect = async () => {
      try {
        // console.log("step1 clear");
        const currProvider = detectProvider();
        // console.log("step2 clear");
        if (currProvider) {
          // console.log("step3 clear");
          await currProvider.request({ method: 'eth_requestAccounts' });
          // console.log("step4 clear");
          const web3 = new Web3(currProvider);
          // console.log("step4 clear");
          // const userAccounts = await web3.eth.getAccounts();
          const ContractInstance = new web3.eth.Contract(ABI, ADD);
          // console.log("step5 clear");
          console.log(ContractInstance);
          // setContract(ContractInstance);
          // console.log("step6 clear");
          // const res = await ContractInstance.methods.getCount().call();
          // console.log(contract1);
          // console.log(contract1);
          // console.log("step7 clear");
          // console.log(res);
          // dispatch(parseInt(increaseVisitors(res[0])));
          // dispatch(parseInt(increaseCards(res[1])));
          // console.log("step8 clear");
          // dispatch(parseInt(increaseMeds(res[2])));
          // dispatch(parseInt(increaseCertificates(res[3])));
          // console.log("step9 clear");
        }
      } catch (error) {
        console.log("error at app.js");
        console.log(error);
      }
    }

    onConnect();

    return () => {
    };
  }, []);


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
    </div>
  );
}

export default App;
