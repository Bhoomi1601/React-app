import "./Header.css"
function Header() {
    return (
      <>
      <header>
<section>
  <div>
<h1>
  REMO'S RESTAURANT
</h1>
<h2>KOLKATA</h2>
<p>
Welcome to our restaurant! 
We offer an unparalleled dining experience that will tantalize your taste buds and 
leave you craving for more.
Our menu is crafted with the freshest and highest quality ingredients, sourced from local farmers and producers. 
From savory appetizers to mouth-watering entrees,
 each dish is expertly prepared by our skilled chefs who take pride in creating culinary masterpieces.
</p>
</div>

<div>
  <img src={require("./assets/images/home.jpg")} alt="home" id="home"/>
  </div>
</section>
      </header>
      </>
    );
  }
  export default Header;