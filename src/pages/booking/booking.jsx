import React, { useEffect, useRef, useState } from "react";
import './booking.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CloseIcon from '@mui/icons-material/Close';
import Calendar from "../../components/calendar/calendar";
import { CountContext } from "../../context/context";
import { useContext } from "react";

function Booking(){
    const {state, dispatch} = useContext(CountContext);
    const [newGuest, setNewGuest] = useState(false);
    const [oldGuest, setOldGuest] = useState(false);
    let [adult, setAdult] = useState(1);
    let [children, setChildren] = useState(0);
    let [infant, setInfant] = useState(0);
    const [wishList, setWishList] = useState([]);
    let [listNumber, setListNumber] = useState(0);
    const [confirm, setConfirm] = useState(false);
    let wishlistItem = useRef();

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
    }

    const handleCheckinCalendar = ()=>{
      dispatch({type: "checkin-clicked"})
       dispatch({type: "open-calendar"})
    }
    const handleCheckoutCalendar = ()=>{
      dispatch({type: "checkout-clicked"})
      dispatch({type: "open-calendar"})
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
      setInfant(infant-=1)
    }
    const handleAddInfant = ()=>{
      setInfant(infant+=1)
    }

    const handleWishlist = ()=>{
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
      setConfirm(true);
    }
    const handleRemoveConfirm = ()=>{
      setConfirm(false);
    }
    const handleInputFocus = ()=>{
      setConfirm(true);
    }

    return (<>
      <div id="bookings">
         <div className="booking-div">
            <h2 className="booking-title">WELCOME</h2>
            <p className="booking-sign">Sign In</p>
            <div className="guest" onClick={handleOldGuest}>
                <p>I've been a guest before</p>
              {oldGuest ? <KeyboardArrowUpIcon fontSize="large"/> : <KeyboardArrowDownIcon fontSize="large" />} 
              </div>
              <div className="old-signin" style={{display: `${oldGuest ? `block` : `none`}`}}>
                <div>
                <input className="old-input" type="text" name="" id="" placeholder="Sign in using ID number or passport"/>
                <button type="submit" className="old-submit">Submit</button>
                </div>
              </div>
            <div className="guest" onClick={handleNewGuest}>
              <p>I am a new guest</p>
              {newGuest ? <KeyboardArrowUpIcon fontSize="large" /> : <KeyboardArrowDownIcon fontSize="large" />}               
              </div>
              <div className="new-signin" style={{display: `${newGuest ? `block` : `none`}`}}>
                <div className="names">
                  <input className="name" type="text" name="" id="" placeholder="First name"/>
                  <input className="name" type="text" name="" id="" placeholder="First name"/>
                </div>
                <input className="other-inputs" type="text" name="" id="" placeholder="ID/Passport number"/>
                <input className="other-inputs" type="text" name="" id="" placeholder="Phone number"/>
                <input className="other-inputs" type="text" name="" id="" placeholder="Email address"/>
                <button type="submit" className="new-submit">Submit</button>

              </div>
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
              
              </div><div className="guest-div">
              <div className="guest-categ">
               <p>Infants</p>
               <p>Under 2yrs</p>
              </div>
              <div className="guest-count">
              <span onClick={handleLessInfant}>-</span>
              <span>{infant}</span>
              <span onClick={handleAddInfant}>+</span>
              </div>
              
              </div>
              </div>
              <div className="wishlist-div">
              <p className="booking-sign">Wishlist</p>
              <p className="wishlist-desc">Items or Accessories you would like to find present.(OPTIONAL)</p>
              {wishList?.length > 0 && (wishList?.map((item)=>{
                return(
                  <div id={item?.[0]} className="wishlist-item">
                  <p> - {item?.[1]}</p>
                  <CloseIcon fontSize="small" style={{color: "black"}} onClick={handleItemDelete}/>
                 </div>
                )
              }))}
              <div className="wish-input">
                <input type="text" name="" id="" ref={wishlistItem} placeholder="Write here"/>
                <span onClick={handleWishlist}>+</span>
              </div>
              </div>
             <div className="reserve-div" onClick={handleReserve}>
              <h4>RESERVE</h4>
             </div>
         </div>

         <div className="confirmation-div" style={{display: `${confirm ? `block` : `none`}`}} onClick={handleRemoveConfirm}>
         </div>
          <div className="confirmation" style={{display: `${confirm ? `block` : `none`}`}}>
          <p className="booking-sign">Payment</p>
           <p className="payment-desc">To secure your reservation and ensure everything is ready for your stay, we kindly request a payment of at least 50% of the total cost at the time of booking.</p>
           <p className="mpesa">PAY USING M-PESA</p>
           <input className="pay-input" type="text" name="" id="" placeholder="Enter M-pesa phone number" onFocus={handleInputFocus}/>
           <button type="submit" className="prompt">PROMPT</button>
          </div>
        

      </div>
    </>

    )
}

export default Booking;