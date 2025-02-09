import React, { useEffect, useState, forwardRef } from "react";
import './listing.css';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import WifiIcon from '@mui/icons-material/Wifi';
import ChairIcon from '@mui/icons-material/Chair';
import KingBedIcon from '@mui/icons-material/KingBed';
import CountertopsIcon from '@mui/icons-material/Countertops';
import TvIcon from '@mui/icons-material/Tv';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ShowerIcon from '@mui/icons-material/Shower';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PoolIcon from '@mui/icons-material/Pool';
import PanoramaIcon from '@mui/icons-material/Panorama';

function Listing({}, ref){

    let [image, setImage] = useState(1);

    useEffect(()=>{

        let images = document.querySelectorAll(".img-select");
        let imagesArr = Array.from(images);
        
        imagesArr.forEach((img)=>{
            if (Number(img.getAttribute('id')) === image) {
                img.classList.add('active');
            } else {
               img.classList.remove('active');
            }
        })

    
        
        

    }, [image]);


    const handleNextImage = ()=>{
        image++
        setImage(image)
    }
    const handlePreviousImage = ()=>{
        image--
        setImage(image)
    }

    const handleImageClick = (e)=>{
        let current = e.currentTarget;
        let id = Number(current.getAttribute('id'));
        setImage(id);
        
    }
   
    

    return (<>
    <div ref={ref} id="listing-div">
     <p className="listing-title">Our Listings</p>
     <div className="listing">
        <p className="listing-name">One Bedroom apartment at Laiser Place by Tsavo, Rongai.</p>
        <h5 className="listing-price">PRICE: 3000/= per Night</h5>
        <div className="listing-image">
            <img className="img" src={`images/listing1img${image}.jpg`} alt="" srcset="" />
            <ArrowBackIosIcon  className="arrowback" style={{display: `${image > 1 ? `block` : `none` }`}} onClick={handlePreviousImage}/>
            <ArrowForwardIosIcon className="arrowforward" style={{display: `${image < 13 ? `block` : `none` }`}} onClick={handleNextImage}/>
        </div>
        <div className="otherimages">
            <img id="1" className="active img-select" src="images/listing1img1.jpg" alt="" srcset="" onClick={handleImageClick}/>
            <img id="2" className="img-select" src="images/listing1img2.jpg" alt="" srcset="" onClick={handleImageClick}/>
            <img id="3" className="img-select" src="images/listing1img3.jpg" alt="" srcset="" onClick={handleImageClick}/>
            <img id="4" className="img-select" src="images/listing1img4.jpg" alt="" srcset="" onClick={handleImageClick}/>
            <img id="5" className="img-select" src="images/listing1img5.jpg" alt="" srcset="" onClick={handleImageClick}/>
            <img id="6" className="img-select" src="images/listing1img6.jpg" alt="" srcset="" onClick={handleImageClick}/>
            <img id="7" className="img-select" src="images/listing1img7.jpg" alt="" srcset="" onClick={handleImageClick}/>
            <img id="8" className="img-select" src="images/listing1img8.jpg" alt="" srcset="" onClick={handleImageClick}/>
            <img id="9" className="img-select" src="images/listing1img9.jpg" alt="" srcset="" onClick={handleImageClick}/>
            <img id="10" className="img-select" src="images/listing1img10.jpg" alt="" srcset="" onClick={handleImageClick}/>
            <img id="11" className="img-select" src="images/listing1img11.jpg" alt="" srcset="" onClick={handleImageClick}/>
            <img id="12" className="img-select" src="images/listing1img12.jpg" alt="" srcset="" onClick={handleImageClick}/>
            <img id="13" className="img-select" src="images/listing1img13.jpg" alt="" srcset="" onClick={handleImageClick}/>

        </div>
        <div className="description">
            <h4>Description</h4>
            <p>Laiser place is an amazing apartment, overlooking Ngong Hills in the serene suburbs of Rongai town.
            Comes with a swimming pool, a pool deck, and a children's play area.</p>
        </div>
        <div className="offers">
            <h4>What our place offers</h4>
            <div className="offers-div">
              <div className="offer-item">
                <WifiIcon fontSize="large"/>
                <p>Wifi</p>
              </div>
              <div className="offer-item">
                <ChairIcon fontSize="large" />
                <p>Furnished Livingroom</p>
              </div>
              <div className="offer-item">
                <KingBedIcon fontSize="large" />
                <p>Furnished Bedroom</p>
              </div>
              <div className="offer-item">
                <CountertopsIcon fontSize="large" />
                <p>Furnished Kitchen</p>
              </div>
              <div className="offer-item">
                <TvIcon fontSize="large" />
                <p>Television</p>
              </div>
              <div className="offer-item">
                <DryCleaningIcon fontSize="large" />
                <p>Bed linen & towels</p>
              </div>
              <div className="offer-item">
                <WaterDropIcon fontSize="large" />
                <p>Clean water</p>
              </div>
              <div className="offer-item">
                <ShowerIcon fontSize="large" />
                <p>Hot shower</p>
              </div>
              <div className="offer-item">
                <DirectionsCarIcon fontSize="large" />
                <p>Ample parking</p>
              </div>
              <div className="offer-item">
                <PoolIcon fontSize="large" />
                <p>Outdoor pool</p>
              </div>
              <div className="offer-item">
                <PanoramaIcon fontSize="large" />
                <p>Scenic views</p>
              </div>
              <div className="offer-item">
              <img src="images/cctv.png" style={{width: '35px', height: '35px'}} alt="" srcset="" />
              <p>24/7 Security</p>
              </div>
            </div>
        </div>
        <Link to={'/booking'} style={{textDecoration: "none"}}>
        <div className="booking-btn">
              <p>BOOK NOW</p>
            </div>
        </Link>
        
     </div>
    </div>

    <div id="listing-div1">
    <p className="listing-title1">Our Listings</p>
    <div className="listing1">
    <p className="listing-name1">One Bedroom apartment at Laiser Place by Tsavo, Rongai.</p>
    <h5 className="listing-price1">PRICE: 3000/= per Night</h5>
    <div className="listing1-info">
      <div className="listing1-info1">
      <div className="description1">
            <h4>Description</h4>
            <p>Laiser place is an amazing apartment, overlooking Ngong Hills in the serene suburbs of Rongai town.
            Comes with a swimming pool, a pool deck, and a children's play area.</p>
        </div>
        <div className="offers">
            <h4>What our place offers</h4>
            <div className="offers-div">
              <div className="offer-item">
                <WifiIcon fontSize="large"/>
                <p>Wifi</p>
              </div>
              <div className="offer-item">
                <ChairIcon fontSize="large" />
                <p>Furnished Livingroom</p>
              </div>
              <div className="offer-item">
                <KingBedIcon fontSize="large" />
                <p>Furnished Bedroom</p>
              </div>
              <div className="offer-item">
                <CountertopsIcon fontSize="large" />
                <p>Furnished Kitchen</p>
              </div>
              <div className="offer-item">
                <TvIcon fontSize="large" />
                <p>Television</p>
              </div>
              <div className="offer-item">
                <DryCleaningIcon fontSize="large" />
                <p>Bed linen & towels</p>
              </div>
              <div className="offer-item">
                <WaterDropIcon fontSize="large" />
                <p>Clean water</p>
              </div>
              <div className="offer-item">
                <ShowerIcon fontSize="large" />
                <p>Hot shower</p>
              </div>
              <div className="offer-item">
                <DirectionsCarIcon fontSize="large" />
                <p>Ample parking</p>
              </div>
              <div className="offer-item">
                <PoolIcon fontSize="large" />
                <p>Outdoor pool</p>
              </div>
              <div className="offer-item">
                <PanoramaIcon fontSize="large" />
                <p>Scenic views</p>
              </div>
              <div className="offer-item">
              <img src="images/cctv.png" style={{width: '35px', height: '35px'}} alt="" srcset="" />
              <p>24/7 Security</p>
              </div>
            </div>
        </div>
        <Link to={'/booking'} style={{textDecoration: "none"}}>
        <div className="booking-btn">
              <p>BOOK NOW</p>
            </div>
        </Link>

      </div>
      <div className="listing1-info2">
      <div className="listing-image1">
            <img className="img1" src={`images/listing1img${image}.jpg`} alt="" srcset="" />
            <ArrowBackIosIcon  className="arrowback" style={{display: `${image > 1 ? `block` : `none` }`}} onClick={handlePreviousImage}/>
            <ArrowForwardIosIcon className="arrowforward" style={{display: `${image < 13 ? `block` : `none` }`}} onClick={handleNextImage}/>
        </div>
        <div className="otherimages">
            <img id="1" className="active img-select" src="images/listing1img1.jpg" alt="" srcset="" onClick={handleImageClick}/>
            <img id="2" className="img-select" src="images/listing1img2.jpg" alt="" srcset="" onClick={handleImageClick}/>
            <img id="3" className="img-select" src="images/listing1img3.jpg" alt="" srcset="" onClick={handleImageClick}/>
            <img id="4" className="img-select" src="images/listing1img4.jpg" alt="" srcset="" onClick={handleImageClick}/>
            <img id="5" className="img-select" src="images/listing1img5.jpg" alt="" srcset="" onClick={handleImageClick}/>
            <img id="6" className="img-select" src="images/listing1img6.jpg" alt="" srcset="" onClick={handleImageClick}/>
            <img id="7" className="img-select" src="images/listing1img7.jpg" alt="" srcset="" onClick={handleImageClick}/>
            <img id="8" className="img-select" src="images/listing1img8.jpg" alt="" srcset="" onClick={handleImageClick}/>
            <img id="9" className="img-select" src="images/listing1img9.jpg" alt="" srcset="" onClick={handleImageClick}/>
            <img id="10" className="img-select" src="images/listing1img10.jpg" alt="" srcset="" onClick={handleImageClick}/>
            <img id="11" className="img-select" src="images/listing1img11.jpg" alt="" srcset="" onClick={handleImageClick}/>
            <img id="12" className="img-select" src="images/listing1img12.jpg" alt="" srcset="" onClick={handleImageClick}/>
            <img id="13" className="img-select" src="images/listing1img13.jpg" alt="" srcset="" onClick={handleImageClick}/>

        </div>

      </div>

    </div>

    </div>


    </div>

    
    </>


    )
}

export default forwardRef(Listing);