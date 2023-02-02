import React, { useEffect, createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
 const [showNav, setShowNav] = useState(false)

 return (
    <ShopContext.Provider
    value={{
            showNav,
            setShowNav
        }}
    >
        {children}
    </ShopContext.Provider>
 )

}

export const useStateContext = () => useContext(ShopContext);
