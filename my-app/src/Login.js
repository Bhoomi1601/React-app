import { Link } from "react-router-dom";
import "./Nav.css"
function Login(){
    return(
        <>
        <nav className="nav-main">
                <ul className="Nav-tag">
                    <img src={require("./assets/images/logo.webp")} alt="logo" height={100} id="logo" />
                    <li className="main-li"><Link to="/" className="main-a" >Home</Link></li>
                </ul>
            </nav>
        <h1>Hi</h1>
        </>
    )
}
export default Login;