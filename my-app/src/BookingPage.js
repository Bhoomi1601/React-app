import React,{ useReducer }  from 'react';
import BookingForm from './BookingForm';
import "./Nav.css";
import { Link} from 'react-router-dom';
import "./BookingPage.css";
import "./Nav.css";
import { fetchAPI } from './bookingApi';
// import BookingForm from './BookingForm';
function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);



  return (
    <>
    <nav className="nav-main">
                <ul className="Nav-tag">
                    <img src={require("./assets/images/logo.webp")} alt="logo" height={100} id="logo" />
                    <li className="main-li"><Link to="/" className="main-a" >Home</Link></li>
                </ul>
            </nav>
    <div id='book-page'> 
      <h1 id='book-pageh1'>Book an appointment</h1>
      <p id='book-pagep1'>Please fill out the form below to schedule an appointment.</p>
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
      <p id='book-pagep2'>We look forward to seeing you!</p>
    </div>
    </>
  );
}

export default BookingPage;






