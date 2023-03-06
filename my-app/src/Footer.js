import { FaFacebook,FaTwitter,FaLinkedinIn } from 'react-icons/fa';
import "./assets/css/Footer.css";
import { Link } from 'react-router-dom';
function Footer(){
    return(
<>
<footer>
        <section className='foot'>
            <div className="foot-1">
            <img src={require("./assets/images/logo.webp")} alt="logo" height={100} className="foot-img"/>
            </div>
            <div className="foot-2">
            <ul className="foot-tag">
        <li className="main-li"><Link to="/" className="main-a" >Home</Link></li>
        <li className="main-li"><a href="#about" className="main-a" >About</a></li>
        <li className="main-li"><a href="#main-id" className="main-a" >Menu</a></li>
        <li className="main-li"><Link to="/bookingpage" className="main-a" >BookingPage</Link></li>
        <li className="main-li"><Link to="/login" className="main-a" >Login</Link></li>


    </ul>
            </div>

            
            <div className="foot-3">
                <address>
                <p>Box 564, Disneyland</p>
               <p>USA</p>
                
                <a href="mailto:jim@rock.com">jim@rock.com</a>
                <br></br>
                <a href="tel:+13115552368">(311) 555-2368</a>
                </address>
            </div>
            <div className="foot-4">
            <a href="https://www.facebook.com/YourFacebookPage" className='a-foot'><FaFacebook  className='icon' /></a>
            <a href="https://www.linkedin.com/YourLinkedinPage"  className='a-foot'><FaLinkedinIn className='icon'/></a>
            <a href="https://www.linkedin.com/YourLinkedinPage"  className='a-foot'><FaTwitter className='icon'/></a>
            </div>

        </section>
</footer>
</>
    );
}
export default Footer;