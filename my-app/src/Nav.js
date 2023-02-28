function Nav(){
    return(
<>
<nav>
    <img src={require("./assets/images/logo.webp")} alt="logo" height={100} />
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservation</a></li>
        <li><a href="#">Order Online</a></li>
        <li><a href="#">Login</a></li>


    </ul>
</nav>
</>
    );
}
export default Nav;