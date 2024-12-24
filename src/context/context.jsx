import React, { useReducer } from "react";
import {Reducer} from "./contextreducer";

const defaultState = {
    oldGuest: {},
    newGuest: {},
    checkIn: "",
    checkOut: "",
    checkinBox: false,
    checkoutBox: false,
    openCalendar: false,
    guests: {
        adults: '',
        children: '',
        infants: ''
    },
    wishlist: []
};

export const CountContext = React.createContext(defaultState);

export const CountContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, defaultState);

    return (
        <CountContext.Provider value={{state, dispatch}}>
            {children}
        </CountContext.Provider>
    )
}