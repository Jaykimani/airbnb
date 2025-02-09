import React, { useRef } from "react";
import "./landing.css";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Listing from "../listings/listing";
import Host from "../host/host";
import Footer from "../footer/footer";

function Landing(){
  const listingDiv = useRef(null);

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
    </div>

    <div id="landing-page1">
    <div className="images-div">
        <div className="logo-div">
          <img src="images/logo.jpg" alt="" srcset="" />
        </div>
         <div className="img-div">
          <img src="images/listing1img1.jpg" alt="" srcset="" />
         </div>
         <div className="img-div">
          <img src="images/listing1img7.jpg" alt="" srcset="" />
         </div>
         <div className="img-div">
          <img src="images/listing1img3.jpg" alt="" srcset="" />
         </div>
         <div className="img-div">
          <img src="images/listing1img10.jpg" alt="" srcset="" />
         </div>
         <div className="img-div">
          <img src="images/listing1img4.jpg" alt="" srcset="" />
         </div>
         <div className="img-div">
          <img src="images/listing1img13.jpg" alt="" srcset="" />
         </div>
      </div>
      <div className="landing-content1">
      <p className="landing-info1"><span>Experience</span> <span>Comfort,</span> <span>Style</span> <span>and</span> <span>the</span> <span>Warmth</span> <span>of a</span> <span>home</span> <span>away</span> <span>from</span> <span>home.</span></p>
      <div className="explore-div1">
     <div className="explore1">
        <p>EXPLORE</p>
        <KeyboardDoubleArrowDownIcon fontSize="large" className="downarrow1"/>
     </div>
     </div>
      </div>
      
    </div>
    <Listing ref={listingDiv}/>
    <Host />
    <Footer />
    </>


    );
}

export default Landing;