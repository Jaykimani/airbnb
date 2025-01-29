import React, { useEffect, useRef, useState } from "react";
import './guest.css';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import CloseIcon from '@mui/icons-material/Close';
import Footer from "../../components/footer/footer";
import foodItems from "../../menu";
import { CountContext } from "../../context/context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


function Guest(){
    const {state, dispatch} = useContext(CountContext);
    const [guestList, setGuestList] = useState([]);
    let [listNum, setListNum] = useState(0);
    const [checkout, setCheckout] = useState(false);
    let guestlistItem = useRef();
    const myMenu = useRef();
    const stayEasy = useRef();
    const laundry = useRef();
    const navigate = useNavigate();

    useEffect(()=>{
      window.scrollTo(0,0);
    }, [])

    

    const handleGuestlist = ()=>{
        if(guestlistItem.current.value !== ''){
        setListNum(listNum+=1);
        setGuestList([...guestList, [listNum, guestlistItem.current.value]])
        guestlistItem.current.value = '';
        }
        
      }
      const handleItemDelete = (e)=>{
        let elementId = e.currentTarget.parentElement.getAttribute("id");
  
        let newWishlist = guestList.filter((item)=>{
          return item[0] !== Number(elementId);
        });
  
        setGuestList([...newWishlist])
      } 
      
      const handleFoodItem = (e)=>{
        let foodId = e.currentTarget.getAttribute("id");
        let foodClicked = foodItems.find(item => item.id === Number(foodId));
        
        dispatch({type: "edit-foodSelected", payload: foodClicked});
         
        navigate('/food-info');
      }


      // const handleViewBasket = ()=>{
      //   let total = basket?.reduce((start, item)=>{
      //     return start += (item.price * item.number)

      //   }, 0);
        
      //   setCheckout(true);

      //   dispatch({type : "edit-foodOrder", payload: {foodItems : basket, total: total}});
       
        
      // }

      // const handleRemoveOrder = (e)=>{
      //   let itemId = e.currentTarget.getAttribute("id");
      //   let newBasket = basket?.filter((item)=>{
      //     return item.id !== Number(itemId);
      //   });
      //   setBasket(newBasket)
      //   let total = newBasket?.reduce((start, item)=>{
      //     return start += (item.price * item.number)

      //   }, 0);
        
      //   dispatch({type : "edit-foodOrder", payload: {foodItems : newBasket, total: total}});

        
      // }

      // const handlePlaceOrder = ()=>{
      //   console.log(state?.foodOrders);
        
      // }

      // const handleCancelOrders = ()=>{
      //   setBasket([]);
      //   setCheckout(false);
      // }


    return (
        <>
        <div className="guest-landing">
        <div className="intro-div">
        <p className="intro">Dear Guest,</p>
        <p className="intro">We’re thrilled to have you as our guest and hope you have a wonderful and relaxing time. If there’s anything you need or if we can make your stay even better, please don’t hesitate to let us know.</p>
        </div>  
            
        <div className="guest-content">
            <p>Feel free to access any of our services below:</p>

            <div className="service" onClick={() => myMenu.current?.scrollIntoView({
  behavior: 'smooth'
}) }>
            <RestaurantIcon fontSize="large" style={{color: "white"}}/>
            <p>Order food</p>
            </div>
            <div className="service" onClick={() => stayEasy.current?.scrollIntoView({
  behavior: 'smooth'
}) }>
            <img src="images/shoppingcart.png" style={{width: '35px', height: '35px'}} alt="" srcset="" />
            <p>Stay easy service</p>
            </div>
            <div className="service" onClick={() => laundry.current?.scrollIntoView({
  behavior: 'smooth'
}) }>
            <LocalLaundryServiceIcon fontSize="large" style={{color: "white"}}/>
            <p>Laundry services</p>
            </div>
                
         </div>

        </div>
        <div className="guest-menu" ref={myMenu}>
            <h4>Our Menu</h4>
            <div className="menu-choice">
             <span className="menu-span spanactive">FOODS</span>
             <span className="menu-span">DRINKS</span>
            </div>
            <div className="menu-items">
              {foodItems?.map((item)=>{
                return (
                  <div className="menu-item">
                    <img src={item.image} alt="" srcset="" />
                    <div className="item-info">
                        <p>{item.name}</p>
                        <p>Ksh {item.price}/=</p>
                    </div>
                    <span id={item.id} className="item-add" onClick={handleFoodItem}>+</span>
                </div>
                )
              })}
                
            </div>
            <div className="menu-basket">
                   <p>VIEW BASKET</p>
                </div>
        </div>
        <div className="guest-wishlist" ref={stayEasy}>
            
            <h4>Stay Easy Service</h4>
            <p className="wishlist-content">You can ask for equipment you need and is lacking from the house and we will try our best to provide it. You can also use this space to create a shopping list.</p>
            <div className="guest-wishdiv">
            <div className="guestlist-input">
            {guestList?.length > 0 && (guestList?.map((item)=>{
                return(
                  <div id={item?.[0]} className="guestlist-item">
                  <p>- {item?.[1]}</p>
                  <CloseIcon fontSize="small" style={{color: "black"}} onClick={handleItemDelete}/>
                 </div>
                )
              }))}
                <input type="text" name="" id="" ref={guestlistItem} placeholder="Write here"/>
                <span onClick={handleGuestlist}>+</span>
              </div>
            </div>
            
          <div className="guestlist-button">
            <p>SUBMIT LIST</p>
          </div>
        </div>
        <div className="laundry-section"ref={laundry} >
          <h4>Laundry Services</h4>
          <div className="laundry-content">
           <p>Laundry services are provided in the building. The charges depend on the amount(Kilograms or pounds) of the laundry you need cleaned. Feel free to reach out for more information!</p>
          </div>
        </div>
        <Footer />


        <div className="bucketlist" style={{display: `${checkout ? `block` : `none`}`}}>
            <p className="checkout">CHECKOUT</p>
            {state.basket?.map((item)=>{
              return(
                <div className="basket-item">
                    <img src={item.image} alt="" srcset="" />
                    <div className="basket-info">
                        <p>{item.name}</p>
                        <p className="pricing-info"><span>{item.price}</span> <span>{item.number}</span>  <span>Ksh {item.price * item.number}/=</span></p>
                    </div>
                    <span id={item.id} className="item-add">-</span>
                </div>
              )
            })}
            <div className="total-div">
              <p>TOTAL: <span>{state.basket?.reduce((start, item)=>{
          return start += (item.price * item.number)

        }, 0)}/=</span></p>
            </div>
                <div className="item-order">
              <p>PLACE ORDER</p>
            </div>
            <div className="item-cancel">
              <p>CANCEL</p>
            </div> 

        </div>

        <div className="guest-options">
        <RestaurantIcon fontSize="large" style={{color: "black"}} onClick={() => myMenu.current?.scrollIntoView({
  behavior: 'smooth'
}) }/>
        <img src="images/blackcart.png" style={{width: '35px', height: '35px'}} alt="" srcset="" onClick={() => stayEasy.current?.scrollIntoView({
  behavior: 'smooth'
}) }/>
        <LocalLaundryServiceIcon fontSize="large" style={{color: "black"}} onClick={() => laundry.current?.scrollIntoView({
  behavior: 'smooth'
}) }/>

        </div>
        </>
    )
}

export default Guest;