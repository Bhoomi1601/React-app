import { FaFacebook,FaTwitter,FaLinkedinIn } from 'react-icons/fa';
import "./Footer.css"

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
        <li className="foot-li"><a href="#" className="foot-a">Home</a></li>
        <li className="foot-li"><a href="#" className="foot-a">About</a></li>
        <li className="foot-li"><a href="#" className="foot-a">Menu</a></li>
        <li className="foot-li"><a href="#" className="foot-a">Reservation</a></li>
        <li className="foot-li"><a href="#" className="foot-a">Login</a></li>


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