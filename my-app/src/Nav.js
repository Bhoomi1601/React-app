import "./Nav.css"
function Nav(){
    return(
<>
<nav className="nav-main">
    
   
    <ul className="Nav-tag">
    <img src={require("./assets/images/logo.webp")} alt="logo" height={100} id="logo"/>

        <li className="main-li"><a href="#" className="main-a">Home</a></li>
        <li className="main-li"><a href="#" className="main-a">About</a></li>
        <li className="main-li"><a href="#main-id" className="main-a">Menu</a></li>
        <li className="main-li"><a href="#" className="main-a">Reservation</a></li>
        <li className="main-li"><a href="#" className="main-a">Login</a></li>


    </ul>
</nav>
</>
    );
}
export default Nav;