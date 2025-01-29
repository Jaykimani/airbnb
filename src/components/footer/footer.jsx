import React from "react";
import './footer.css';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';

function Footer() {
    return (
        <>
        <div id="footer-div">
            <h4>CONTACT INFORMATION</h4>
            <div className="contact">
            <PhoneIcon fontSize="large" style={{color: "white"}}/>
            <p>0712345678 - Marvin</p>
            </div>
            <div className="contact">
            <WhatsAppIcon fontSize="large" style={{color: "white"}}/>
            <p>0712345678 - Marvin</p>
            </div>
            <div className="contact">
            <MailIcon fontSize="large" style={{color: "white"}}/>
            <p>abcdefgh@gmail.com</p>
            </div>

        </div>

        <div id="footer-div1">
            <div className="footer-info1">
             <img className="logo-img" src="images/logo.jpg" alt="" srcset="" />

            </div>
            <div className="footer-info">
            <h4>CONTACT INFORMATION</h4>
            <div className="contact1">
            <PhoneIcon fontSize="large" style={{color: "white"}}/>
            <p>0712345678 - Marvin</p>
            </div>
            <div className="contact1">
            <WhatsAppIcon fontSize="large" style={{color: "white"}}/>
            <p>0712345678 - Marvin</p>
            </div>
            <div className="contact1">
            <MailIcon fontSize="large" style={{color: "white"}}/>
            <p>abcdefgh@gmail.com</p>
            </div>
            </div>

        </div>
        </>
    )
    
}

export default Footer;