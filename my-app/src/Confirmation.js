import { Link } from "react-router-dom";
import "./Confirmation.css"
function Confirmation(){
    return(
        <>
        <section className="reserve-header-text">
        <h1 id="c-h1">Your Reservation is Confirmed!</h1>
        </section>
        <section className="reserve-header-text">
        <h2 id="c-h2">Thank You!!</h2>
      </section>
      <section className="reserve-header-text">
        <Link to="/" id="c-l1">Navigate to Home</Link>
      </section>
        </>
    )
}

export default Confirmation;