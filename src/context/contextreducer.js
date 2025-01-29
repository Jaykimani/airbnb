
export const Reducer = (state, action) => {

    switch (action.type) {
        case "add-guestdata":
            return {
                ...state,
                guestData: {...action.payload}
            }  
        case "add-checkin":
            return{
                ...state,
                checkIn : action.payload
            }
        case "add-checkout":
            return{
                 ...state,
                checkOut : action.payload
            }
        case "checkin-clicked":
            return{
                 ...state,
                 checkinBox : true,
                 checkoutBox: false
            } 
            
        case "checkout-clicked":
                return{
                     ...state,
                     checkinBox : false,
                     checkoutBox: true
            }
            case "add-guests":
                return{
                    ...state,
                    guests: {...action.payload}
                }
                case "add-wishlist":
                    return{
                        ...state,
                        wishlist: [...action.payload]
                    } 
            case "edit-foodSelected":
                return{
                     ...state,
                     foodSelected: {...action.payload}      
                } 
                case "edit-basket":
                return{
                     ...state,
                     basket: [...state.basket, action.payload]     
                } 

            case "edit-foodOrder":
                return{
                     ...state,
                     foodOrders: {...action.payload}      
                }                   
       
        default:
            break;
    }
}