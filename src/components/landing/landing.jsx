import React, { useRef } from "react";
import "./landing.css";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Listing from "../listings/listing";
import Host from "../host/host";
import Footer from "../footer/footer";

function Landing(){
  const listingDiv = useRef(null)


  const handleExplore = ()=>{
    
    listingDiv.current?.scrollIntoView({behavior : "smooth"});
    
  }

    return (<>
    <div id="landing-page">
     <img className="landing-img" src="images/landing3.png" alt="" srcset="" />
     <div className="landing-content">
       <p className="landing-info"><span>Experience</span> <span>Comfort,</span> <span>Style</span> <span>and</span> <span>the</span> <span>Warmth</span> <span>of a</span> <span>home</span> <span>away</span> <span>from</span> <span>home.</span></p>
     </div>
     <div className="explore-div">
     <div className="explore" onClick={handleExplore}>
        <p>EXPLORE</p>
        <KeyboardDoubleArrowDownIcon fontSize="large" className="downarrow"/>
     </div>
     </div>
     <div className="sign-in">
      <p>SIGN IN</p>
     </div>
    </div>
    <Listing ref={listingDiv}/>
    <Host />
    <Footer />
    </>


    );
}

export default Landing;