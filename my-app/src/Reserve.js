import { useState } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import "./Nav.css";
import "./Reserve.css"

function validateMobileNumber(phone) {
    const regex = /^(\+?\d{1,3}[- ]?)?\d{10}$/;
    return regex.test(phone);
  }


function BookingForm() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [date, setDate] = useState("");
    const [isDateValid, setIsDateValid] = useState(true);
    const [time, setTime] = useState("");
    const [availableTimes, setavailableTimes] = useState([
        '10:00 AM',
        '2:00 PM',
        '3:00 PM',
        '4:00 PM',
    ]);
    const [guest,setGuest] =useState("");
    const [occasion,setOccasion]= useState("");
        




    function handleDateChange(e) {
        const value = e.target.value;
        setDate(value);
        setIsDateValid(moment(value).isSameOrAfter(moment(), 'day'));
      }
    


    function handlePhone(e) {
        const value = e.target.value;
        setPhone(value);
        setIsValid(validateMobileNumber(value));
      }



    const isFormValid=()=>{
        return(
            name && validateMobileNumber(phone) && isDateValid && time && occasion && guest 
        )
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        setPhone("");
        setDate("");
        setTime("");
        setGuest("");
        setOccasion("");
        // console.log("form submitted")
        alert("Form Submitted");
    }
    return (
        <>
            <nav className="nav-main">
                <ul className="Nav-tag">
                    <img src={require("./assets/images/logo.webp")} alt="logo" height={100} id="logo" />
                    <li className="main-li"><Link to="/" className="main-a" >Home</Link></li>
                </ul>
            </nav>
            <h1 id="title">BOOKING FORM</h1>
            <div id="reserve" className="form-app">
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <label htmlFor="name">Name:
                            <input id="name" type="text" name="guests" placeholder="Enter Your Name"
                                value={name} onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="phone">Enter Phone Number:
                            <input id="phone" type="tel" name="phone" placeholder="Enter phone no"
                                value={phone} onChange={handlePhone}
                            />
                        </label>
                        {!isValid && <div style={{
          fontWeight: 'bold',
          color: 'red',
        }}>Please enter a valid mobile number.</div>}
                    </fieldset>


                    <fieldset>
                        <label htmlFor="res-date">Date:
                            <input id="res-date" type="date" name="res-date"
                                value={date} onChange={handleDateChange}
                            />
                        </label>
                        {!isDateValid && <div style={{
          fontWeight: 'bold',
          color: 'red',
        }} >Please enter a valid future date.</div>}
                    </fieldset>
                    <fieldset>
                        <label htmlFor="res-time">Choose Time: 
                            <select value={time} id="res-time" onChange={(e) => setTime(e.target.value)}>
                                {/* <option>17:00</option>
                                <option>18:00</option>
                                <option>19:00</option>
                                <option>20:00</option>
                                <option>21:00</option>
                                <option>22:00</option> */}
                                {availableTimes.map((availableTimes)=>(
                                    <option>{availableTimes}</option>
                                ))}
                            </select>
                            </label>

                    </fieldset>
                    <fieldset>
                        <label htmlFor="no-guest">Number Of Guests:
                            <input id="no-guest" type="number" name="no-guest"
                                value={guest} onChange={(e) => setGuest(e.target.value)}
                                placeholder="1" min="1" max="10"
                            />
                        </label>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="event">Occasion:
                            <select id="event" value={occasion} onChange={(e)=>setOccasion(e.target.value)}>
                                <option>Birthday</option>
                                <option>Anniversary</option>

                            </select>
                        </label>
                    </fieldset>


                    <button disabled={!isFormValid()} type="Submit" className="update">Submit</button>
                </form>
            </div>
        </>
    )
}
export default BookingForm;