import "./Nav.css"
function Nav(){
    return(
<>
<nav className="nav-main">
    <img src={require("./assets/images/logo.webp")} alt="logo" height={100} />
    <ul className="Nav-tag">
        <li className="main-li"><a href="#" className="main-a">Home</a></li>
        <li className="main-li"><a href="#" className="main-a">About</a></li>
        <li className="main-li"><a href="#" className="main-a">Menu</a></li>
        <li className="main-li"><a href="#" className="main-a">Reservation</a></li>
        <li className="main-li"><a href="#" className="main-a">Order Online  </a></li>
        <li className="main-li"><a href="#" className="main-a">Login</a></li>


    </ul>
</nav>
</>
    );
}
export default Nav;