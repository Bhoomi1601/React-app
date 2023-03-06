import "./assets/css/Main.css";

function Main(){
    return(
<>
<main id="main-id">
    <section className="main-1">
    <h2>Todays's Special</h2>

    <button className="btn-1">Online Menu</button>
    </section>
    <section className="main-2">
        <section className="m-2">
        <h2>Chicken</h2>
        <h3>$12.00</h3>
        <p>A chicken dish typically consists of chicken meat that has been cooked in some way, 
            whether it's grilled, roasted, fried, baked, or stewed. 
            The dish may feature boneless, skinless chicken breast or thigh meat, 
            </p>
        </section>
        <section className="m-2">
        <h2>Rasmalai</h2>
        <h3>$9.00</h3>
        <p>Rasmalai is a popular dessert in the Indian subcontinent. 
            It is made by soaking flattened balls of chenna (a type of fresh cheese made from milk) in a sweet, flavored syrup. 
           
           </p>
        </section>
        <section className="m-2">
        <h2>Idli</h2>
        <h3>$10.00</h3>
        <p>Idli is a popular South Indian dish that is typically eaten for breakfast or as a snack. 
            It is a savory steamed cake made from a batter of fermented black lentils and rice
            </p>
        </section>
    </section>
</main>
</>
    );
}
export default Main;