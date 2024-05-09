import { Route,Routes } from 'react-router-dom';
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

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/signDoctor' element={<SignDoctor/>}></Route>
        <Route path='/signPatient' element={<SignPatient/>}></Route>
        <Route path='/signPathologist' element={<SignPathology/>}></Route>
        <Route path='/signManufacturer' element={<SignManufacturer/>}></Route>
        <Route path='/logDoctor' element={<LoginDoctor/>}></Route>
        <Route path='/logPatient' element={<LoginPatient/>}></Route>
        <Route path='/logPathologist' element={<LoginPathology/>}></Route>
        <Route path='/logManufacturer' element={<LoginManufacturer/>}></Route>
        <Route path='/loginList' element={<LoginList/>}></Route>
        <Route path='/signupList' element={<SignupList/>}></Route>
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
