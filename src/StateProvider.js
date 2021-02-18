import React, { createContext, useContext, useReducer } from 'react'

// prepares the data layer
export const StateContext = createContext();

// wrap our app
export const StateProvider = ({reducer, initialState, children}) => {
    return(
        < StateContext.Provider value={ useReducer(reducer, initialState) }>
            { children }
        </StateContext.Provider> 
    )
}

// Pull imformation from the data layer
export const useStateValue = () => useContext(StateContext);
