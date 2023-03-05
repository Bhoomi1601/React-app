
import Nav from "./Nav";
import  "./AppMain.css";
import Login from "./Login"
import { Route,Routes } from "react-router-dom";
import BookingPage from "./BookingPage";

function AppMain() {
  return (
    <div className="app-main">
    <Routes>
        <Route path="/" element={<Nav/>}></Route>
          <Route path="/bookingpage" element={<BookingPage />}> </Route>
          <Route path="/login" element={<Login />}> </Route>
      </Routes>

    </div>

  );
}

export default AppMain;

// html5 tags
// nav
// header
// footer
// aside
// article
// main

// meta
// open graph protocol
