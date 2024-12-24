
export const Reducer = (state, action) => {

    switch (action.type) {
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
        case "open-calendar":
            return{
                ...state,
                openCalendar : true
            }        
        case "close-calendar":
             return{
                 ...state,
                 openCalendar : false
            } 
        default:
            break;
    }
}