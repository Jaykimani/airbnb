import React, { useReducer } from "react";
import {Reducer} from "./contextreducer";

const defaultState = {
    guestData: {},
    checkIn: "",
    checkOut: "",
    checkinBox: true,
    checkoutBox: false,
    guests: {},
    foodSelected: {},
    basket: [],
    foodOrders: {},
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