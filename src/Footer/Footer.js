
import "./Footer.css"
import { FaFacebookSquare } from "react-icons/fa";


function Footer(){
    return(
        <div className="footer flex ">
            <div className="footer-infos flex ">
                <h3 className="pointer">
                    Y_STORE35
                </h3>
                <div className="contact-email-footer flex ">
                    <strong>CONTACT</strong>
                    <p>hiyacollection@gmail.com</p>
                </div>
            </div>
            <p>© 2024 - All rights reserved.</p>
        </div>
    )
}



export default Footer;