import { Link } from "react-router-dom";
import "./Nav.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import About from "./About";

function Nav(){
    return(
<>
<nav className="nav-main">
    <ul className="Nav-tag">
    <img src={require("./assets/images/logo.webp")} alt="logo" height={100} id="logo"/>
        <li className="main-li"><Link to="/" className="main-a" >Home</Link></li>
        <li className="main-li"><a href="#about" className="main-a" >About</a></li>
        <li className="main-li"><a href="#main-id" className="main-a" >Menu</a></li>
        <li className="main-li"><Link to="/bookingpage" className="main-a" >BookingPage</Link></li>
        <li className="main-li"><Link to="/login" className="main-a" >Login</Link></li>

    </ul> 
    </nav>
    <Header/>
    <Main/>
    <About/>
    <Footer/>
</>
    );
}
export default Nav;