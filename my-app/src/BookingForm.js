import { useState } from "react";
// import moment from 'moment';
import "./assets/css/Nav.css";

import "./assets/css/BookingForm.css";
import { Link } from "react-router-dom";


function validateMobileNumber(phone) {
    const regex = /^(\+?\d{1,3}[- ]?)?\d{10}$/;
    return regex.test(phone);
}


function BookingForm(props) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [date, setDate] = useState("");
    // const [isDateValid, setIsDateValid] = useState(true);
    const [time, setTime] = useState("");
    const [guest, setGuest] = useState("");
    const [occasion, setOccasion] = useState("");

    const [finalTime, setFinalTime] = useState(
        props.availableTimes.map((times) => <option key={times}>{times}</option>)
    );

    function handleTheDateChange(e) {
        setDate(e.target.value);

        var stringify = e.target.value;
        const date = new Date(stringify);


        props.updateTimes(date);

        setFinalTime(props.availableTimes.map((times) => <option key={times}>{times}</option>));
    }





    // function handleDateChange(e) {
    //     const value = e.target.value;
    //     setDate(value);
    //     setIsDateValid(moment(value).isSameOrAfter(moment(), 'day'));
    //   }

    //   function handleDate(){
    //     handleDateChange();
    //     handleTheDateChange();
    //   }


    function handlePhone(e) {
        const value = e.target.value;
        setPhone(value);
        setIsValid(validateMobileNumber(value));
    }



    const isFormValid = () => {
        return (
            name && validateMobileNumber(phone) && occasion && guest
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
                            <input id="phone" type="tel" name="phone" placeholder="(xxx)-xxx-xxxx"
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
                            <input id="res-date" type="date" name="res-date" required
                                value={date} onChange={handleTheDateChange} />
                        </label>
                        {/* {!isDateValid && <div style={{
          fontWeight: 'bold',
          color: 'red',
        }} >Please enter a valid future date.</div>} */}
                    </fieldset>
                    <fieldset>
                        <label htmlFor="res-time">Choose Time:
                            <select id="res-time" required>
                                {finalTime}
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
                            <select id="event" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option selected>None</option>
                                <option>Birthday</option>
                                <option>Engagement</option>
                                <option>Anniversary</option>

                            </select>
                        </label>
                    </fieldset>

                    <fieldset>
                    <small>
          <p style={{
          fontWeight: 'bold',
          color: 'red',
        }}>
            Note: You cannot edit your reservation after submission. 
            <br></br>
            Please double-check your answer before submitting your reservation request.
          </p>
        </small>
        </fieldset>
                    <fieldset>

            <Link to="/confirmation">
                    <button disabled={!isFormValid()} type="Submit" className="update">Book Table</button>
                </Link>
                    </fieldset>
                </form>

            </div>
        </>
    )
}
export default BookingForm;