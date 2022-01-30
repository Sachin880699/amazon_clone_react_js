import logo from './logo.svg';
import './App.css';
import Landingpage from './Components/layout/LandingPage';
import NavbarContainer from "./Components/layout/Navbar/NavbarContainer";
import Footer from './Components/layout/Footer';
import Logincontainer from './Components/Login/LoginContainer';
function App() {
  return (
    <div className="App">
      {/* <Landingpage/> */}
      <NavbarContainer/>
      <Logincontainer/>
      <Footer/>
    </div>
  );
}

export default App;
