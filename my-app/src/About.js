
import "./About.css";
function About(){
    return(
        <>
        <section id="about" className="sec-abt">
<article id="article-abt1">
<img src={require("./assets/images/home_dessert.jpg")}  alt="img 1" className="image-1"/>
</article>
<article id="article-abt2">
<h1 id="abt-head">Welcome to REMO'S RESTAURANT,</h1>
<h2 id="abt-h2">At Our Restaurant, we believe that food is more than just sustenance - it's an experience.</h2>
<p id="abt-para">Our story begins with a passion for cooking 
    and a love of sharing meals with loved ones. 
    We wanted to create a place where people 
    could come together to enjoy delicious food 
    and create unforgettable memories.
    Our mission is simple: to serve the freshest,
     most flavorful dishes possible using only the finest ingredients. 
     We source our ingredients locally whenever possible, 
     and our menu features a mix of classic favorites and innovative new creations.
    </p>


</article>

        </section>
        </>
    );
}
export default About;