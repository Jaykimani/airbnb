import React from "react";
import './host.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

function Host() {
    return (
        <>
        <div id="host-main">
            <p className="host-title">Your Host</p>
            <div className="host-div">
              <div className="host-image">
                 <img src="images/host.jpg" alt="" srcset="" />
              </div>
              <p className="host-name">MARVIN OCHIENG'</p>
              <div className="host-content">
                <FormatQuoteIcon fontSize="large"/>
               <p className="host-word">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
               <p className="host-rules">House Rules</p>
               <div className="check-rule">
                <p className="check-heading">Check in & Check out</p>
                <div className="check-time">
                <AccessTimeIcon style={{marginRight : '40px'}}/>
                <p>Check in after 3:00pm</p>
                </div>
                <div className="check-time">
                <AccessTimeIcon style={{marginRight : '40px'}}/>
                <p>Check out before 10:00am</p>
                </div>
                <p className="notice">NOTE: In any case if you wish to arrive earlier or depart later than the mentioned hours feel free to contact us and we will fulfill your request if the place is available with no extra cost.</p>
               </div>
               <div className="check-rule">
                <p className="check-heading">During your stay</p>
                <div className="check-time">
                <img className="vacuum" style={{marginRight : '40px'}} src="images/vacuuming.png" alt="" srcset="" />
                <p style={{fontSize: '14px'}}>House cleaning services are provided by the apartment staff everyday from 10:00AM to 11:00AM</p>
                </div>
                <div className="check-time">
                <PhotoCameraIcon style={{marginRight : '40px'}}/>
                <p>Photography allowed</p>
                </div>
               </div>
               <div className="check-rule">
                <p className="check-heading">Before you leave</p>
                <div className="check-time">
                <img className="vacuum" src="images/towel.png" style={{marginRight : '40px'}} alt="" srcset="" />
                <p>Gather used towels</p>
                </div>
                <div className="check-time">
                <img className="vacuum" src="images/disposal.png" style={{marginRight : '40px'}} alt="" srcset="" />
                <p>Gather the trash</p>
                </div>
                <div className="check-time">
                <img className="vacuum" src="images/shutdown.png" style={{marginRight : '40px'}} alt="" srcset="" />
                <p>Turn off devices and equipment</p>
                </div>
                <div className="check-time">
                <img className="vacuum" src="images/lock.png" style={{marginRight : '40px'}} alt="" srcset="" />
                <p>Lock up</p>
                </div>
                <div className="check-time">
                <img className="vacuum" src="images/lease.png" style={{marginRight : '40px'}} alt="" srcset="" />
                <p>Return keys</p>
                </div>
                <p className="notice">NOTE: Please leave the house in the same condition as you found it.</p>
               </div>
              </div>
            </div>
        </div>

        <div id="host-main1">
        <p className="host-title">Your Host</p>
         <div className="host-div">
         <div className="host-image">
                 <img src="images/host.jpg" alt="" srcset="" />
            </div>
            <p className="host-name">MARVIN OCHIENG'</p>
            <p className="host-word">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            <div className="house-rules">
              <div className="house-rules1">
              <div className="check-rule">
                <p className="check-heading">Check in & Check out</p>
                <div className="check-time">
                <AccessTimeIcon fontSize='large' style={{marginRight : '40px'}}/>
                <p>Check in after 3:00pm</p>
                </div>
                <div className="check-time">
                <AccessTimeIcon fontSize='large' style={{marginRight : '40px'}}/>
                <p>Check out before 10:00am</p>
                </div>
                <p className="notice">NOTE: In any case if you wish to arrive earlier or depart later than the mentioned hours feel free to contact us and we will fulfill your request if the place is available with no extra cost.</p>
               </div>
               <div className="check-rule">
                <p className="check-heading">During your stay</p>
                <div className="check-time">
                <img className="vacuum" style={{marginRight : '40px'}} src="images/vacuuming.png" alt="" srcset="" />
                <p style={{fontSize: '18px'}}>House cleaning services are provided by the apartment staff everyday from 10:00AM to 11:00AM</p>
                </div>
                <div className="check-time">
                <PhotoCameraIcon fontSize='large' style={{marginRight : '40px'}}/>
                <p>Photography allowed</p>
                </div>
               </div>
              </div>
              <div className="house-rules1">
              <div className="check-rule">
                <p className="check-heading">Before you leave</p>
                <div className="check-time">
                <img className="vacuum" src="images/towel.png" style={{marginRight : '40px'}} alt="" srcset="" />
                <p>Gather used towels</p>
                </div>
                <div className="check-time">
                <img className="vacuum" src="images/disposal.png" style={{marginRight : '40px'}} alt="" srcset="" />
                <p>Gather the trash</p>
                </div>
                <div className="check-time">
                <img className="vacuum" src="images/shutdown.png" style={{marginRight : '40px'}} alt="" srcset="" />
                <p>Turn off devices and equipment</p>
                </div>
                <div className="check-time">
                <img className="vacuum" src="images/lock.png" style={{marginRight : '40px'}} alt="" srcset="" />
                <p>Lock up</p>
                </div>
                <div className="check-time">
                <img className="vacuum" src="images/lease.png" style={{marginRight : '40px'}} alt="" srcset="" />
                <p>Return keys</p>
                </div>
                <p className="notice">NOTE: Please leave the house in the same condition as you found it.</p>
               </div>

              </div>
            </div>
         </div>
        </div>
        </>
    )
}

export default Host;