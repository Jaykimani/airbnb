import React, { useEffect, useRef, useState } from "react";
import './booking.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CloseIcon from '@mui/icons-material/Close';
import Calendar from "../../components/calendar/calendar";
import { CountContext } from "../../context/context";
import { useContext } from "react";
import {axiosInstance} from "../../config"


function Booking(){
    const {state, dispatch} = useContext(CountContext);
    const [newGuest, setNewGuest] = useState(false);
    const [oldGuest, setOldGuest] = useState(false);
    let [adult, setAdult] = useState(1);
    let [children, setChildren] = useState(0);
    let [infants, setInfants] = useState(0);
    const [wishList, setWishList] = useState([]);
    let [listNumber, setListNumber] = useState(0);
    const [confirm, setConfirm] = useState(false);
    const [signin, setSignin] = useState(false);
    const [searching, setSearching] = useState(false);
    const [resp, setResp] = useState(false);
    const [dataFound, setDataFound] = useState(false);
    let wishlistItem = useRef();
    let oldId = useRef();
    let fName = useRef();
    let lName = useRef();
    let idPassport = useRef();
    let phoneNumber = useRef();
    let email = useRef();
    let telNumber = useRef();


    useEffect(()=>{
      window.scrollTo(0,0);
     
    }, []);
    
    
    const handleNewGuest = ()=>{
        setNewGuest(!newGuest);
        setOldGuest(false);
    }
    const handleOldGuest = ()=>{
        setOldGuest(!oldGuest);
        setNewGuest(false);
        document.getElementById("focus").focus();
    }

    const handleOldSubmit = async(e)=>{
      e.preventDefault();
      setSearching(true);
      let oldNumber = oldId.current.value;
      let response =   await axiosInstance.post('/search', {oldNumber});
      setDataFound(true);
      setTimeout(() => {
        setSearching(false);
        setResp(true);
      }, 1000);

      fName.current.value = response.data.firstName;
      lName.current.value = response.data.lastName;
      idPassport.current.value = response.data.id;
      phoneNumber.current.value = response.data.phone;
      email.current.value = response.data.email;

      if (response.data === "naaah") {
        setDataFound(false);
        setTimeout(() => {
          setSearching(false);
          setResp(true);
          setTimeout(() => {
            setResp(false);
          }, 4000);
        }, 1000);

        fName.current.value = '';
      lName.current.value = '';
      idPassport.current.value = '';
      phoneNumber.current.value = '';
      email.current.value = '';
      }

      }

    const handleCheckinCalendar = ()=>{
      dispatch({type: "checkin-clicked"})
    }
    const handleCheckoutCalendar = ()=>{
      dispatch({type: "checkout-clicked"})
    }

    const handleLessAdult = ()=>{
      setAdult(adult-=1)
    }
    const handleAddAdult = ()=>{
      setAdult(adult+=1)
    }
    const handleLessChildren = ()=>{
      setChildren(children-=1)
    }
    const handleAddChildren = ()=>{
      setChildren(children+=1)
    }
    const handleLessInfant = ()=>{
      setInfants(infants-=1)
    }
    const handleAddInfant = ()=>{
      setInfants(infants+=1)
    }

    const handleWishlist = (e)=>{
      e.preventDefault();
      if(wishlistItem.current.value !== ''){
      setListNumber(listNumber+=1);
      setWishList([...wishList, [listNumber, wishlistItem.current.value]])
      wishlistItem.current.value = '';
      }
      
    }
    const handleItemDelete = (e)=>{
      let elementId = e.currentTarget.parentElement.getAttribute("id");

      let newWishlist = wishList.filter((item)=>{
        return item[0] !== Number(elementId);
      });

      setWishList([...newWishlist])
    }

    const handleReserve = ()=>{
      let bookingDiv = document.querySelector(".booking-div");

      if (fName.current.value === '' || lName.current.value === '' || idPassport.current.value === '' || phoneNumber.current.value === '' || email.current.value === '') {
          setSignin(true);
          window.scrollTo(0,0);
          bookingDiv.scrollTo(0,0);
      } else {
        setSignin(false);
        setConfirm(true);
        const userInfo = {
          firstName: fName.current.value,
          lastName: lName.current.value,
          idPassport: idPassport.current.value,
          phoneNo: phoneNumber.current.value,
          emailAddress: email.current.value
       }
       const guests = {
         adults: adult,
         childs: children,
         infant: infants
       }
       console.log(userInfo);
       
       dispatch({type: "add-guestdata", payload: userInfo});
       dispatch({type: "add-guests", payload: guests});
       dispatch({type: "add-wishlist", payload: wishList})
        
      }
      
    }
    const handlePrompt = async()=>{
       let userDetails = {
        id: state.guestData.idPassport,
        firstName: state.guestData.firstName,
        lastName: state.guestData.lastName,
        phoneNumber: state.guestData.phoneNo,
        emailAddress: state.guestData.emailAddress,
        checkin: state.checkIn,
        checkout: state.checkOut,
        guests: state.guests,
        wishlist: state.wishlist
       }


       await axiosInstance.post('/content', userDetails);
       

      //   const phoneNumber = telNumber.current.value;
      //  const money = 1;
   
      //      const response = await axiosInstance.post('/pay', {phoneNumber, money});
   
          //  const result = await response.json();
          //  console.log(result);
      
    }
    const handleRemoveConfirm = ()=>{
      setConfirm(false);
    }
    const handleInputFocus = ()=>{
      setConfirm(true);
    }

    return (<>
      <div id="bookings">
      <div className="images-div1">
        <div className="dark">

        </div>
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
         <div className="booking-div">
            <h2 className="booking-title">WELCOME</h2>
            <p className="booking-sign">Sign In</p>
            <p className="caution" style={{display: `${signin ? `block` : `none`}`}}>Please fill in missing sign in details</p>
            <div className="guest" onClick={handleOldGuest}>
                <p>I've been a guest before</p>
              {oldGuest ? <KeyboardArrowUpIcon fontSize="large"/> : <KeyboardArrowDownIcon fontSize="large" />} 
              </div>
              <div className="old-signin" style={{display: `${oldGuest ? `block` : `none`}`}}>
                {resp ? <div className="user-response" >
                  {dataFound ? <p>Hello {fName.current.value}, We are glad to have you back!</p>
                  :
                  <p>Sorry, We do not have your information. Try again or sign in as a new guest!</p>
                  }
                  
                </div> :
                 <form onSubmit={handleOldSubmit}>
                 <input className="old-input" type="text" name="" id="focus" placeholder="Sign in using ID number or passport" ref={oldId}/>
                 <button type="submit" className="old-submit" >
                  {searching ? <span></span> : <p>Submit</p>} 
                   
                 </button>
                 </form>
                }
                
              </div>
            <div className="guest" onClick={handleNewGuest}>
              <p>I am a new guest</p>
              {newGuest ? <KeyboardArrowUpIcon fontSize="large" /> : <KeyboardArrowDownIcon fontSize="large" />}               
              </div>
              <div className="new-signin" style={{display: `${newGuest ? `block` : `none`}`}}>
                <div className="names">
                  <input className="name" type="text" name="" id="" placeholder="First name" ref={fName}/>
                  <input className="name" type="text" name="" id="" placeholder="Last name" ref={lName}/>
                </div>
                <input className="other-inputs" type="text" name="" id="" placeholder="ID/Passport number" ref={idPassport}/>
                <input className="other-inputs" type="text" name="" id="" placeholder="Phone number" ref={phoneNumber}/>
                <input className="other-inputs" type="text" name="" id="" placeholder="Email address" ref={email}/>

              </div>
              <div className="checkinout">
              <p className="booking-sign">Check-in/Check-out</p>
              <div className="check-div">
                <div className={state.checkinBox ? "check-box check-active" : "check-box"} onClick={handleCheckinCalendar}>
                  <p className="check-header">Check In</p>
                  <p className="check-in">{state.checkIn === "" ? "DD/MM/YYY" : state.checkIn}</p>
                </div>
                <div className={state.checkoutBox ? "check-box check-active" : "check-box"} onClick={handleCheckoutCalendar}>
                  <p className="check-header">Check Out</p>
                  <p className="check-out">{state.checkOut === "" ? "DD/MM/YYY" : state.checkOut}</p>
                </div>

              </div>
              <Calendar />
              </div>
              
              <div className="guests-div">
              <p className="booking-sign">Select guests</p>
              <div className="guest-div">
              <div className="guest-categ">
               <p>Adults</p>
               <p>Age 13+</p>
              </div>
              <div className="guest-count">
              <span onClick={handleLessAdult}>-</span>
              <span>{adult}</span>
              <span onClick={handleAddAdult}>+</span>
              </div>
              
              </div>
              <div className="guest-div">
              <div className="guest-categ">
               <p>Children</p>
               <p>Age 2 - 12</p>
              </div>
              <div className="guest-count">
              <span onClick={handleLessChildren}>-</span>
              <span>{children}</span>
              <span onClick={handleAddChildren}>+</span>
              </div>
              
              </div>
              <div className="guest-div">
              <div className="guest-categ">
               <p>Infants</p>
               <p>Under 2yrs</p>
              </div>
              <div className="guest-count">
              <span onClick={handleLessInfant}>-</span>
              <span>{infants}</span>
              <span onClick={handleAddInfant}>+</span>
              </div>
              
              </div>
              </div>
              <div className="wishlist-div">
              <p className="booking-sign">Wishlist</p>
              <p className="wishlist-desc">Items or Accessories you would like to find present.(OPTIONAL). You can also use this space to create a shopping list.</p>
              {wishList?.length > 0 && (wishList?.map((item)=>{
                return(
                  <div id={item?.[0]} className="wishlist-item">
                  <p> - {item?.[1]}</p>
                  <CloseIcon fontSize="small" style={{color: "black"}} onClick={handleItemDelete}/>
                 </div>
                )
              }))}
              <form className="wish-input" onSubmit={handleWishlist}>
                <input type="text" name="" id="" ref={wishlistItem} placeholder="Write here"/>
                <button type="submit">+</button>
              </form>
              </div>
             <div className="reserve-div" onClick={handleReserve}>
              <h4>RESERVE</h4>
             </div>
         </div>

         <div className="confirmation-div" style={{display: `${confirm ? `block` : `none`}`}} onClick={handleRemoveConfirm}>
         </div>
          <div className="confirmation" style={{display: `${confirm ? `block` : `none`}`}}>
          <p className="booking-sign">Payment</p>
           <p className="payment-desc">To secure your reservation and ensure everything is ready for your stay, we kindly request a payment of atleast 50% of the total cost at the time of booking.</p>
           <p className="mpesa">PAY USING <span className="mpesa-word">M<span className="dash">-</span>PESA</span></p>
           <input className="pay-input" type="text" name="" id="" placeholder="Enter M-pesa phone number" onFocus={handleInputFocus} ref={telNumber}/>
           <button type="submit" className="prompt" onClick={handlePrompt}>PROMPT</button>
          </div>
        

      </div>


      
    </>

    )
}

export default Booking;