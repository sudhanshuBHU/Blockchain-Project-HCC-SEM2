import './App.css';
import Navbar from './components/Navbar';
import ControlledCarousel from './components/ControlledCarousel';
import Test from './components/Test';
import SignIn from './components/SignIn';
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <ControlledCarousel/> */}
      <SignIn/>
      {/* <Test/> */}
    </div>
  );
}

export default App;
