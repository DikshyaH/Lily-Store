import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase.utils";


//as the actual value you want to access
export const UserContext = createContext({
    currentUserContext : null,
    setCurrentUserContext : () => null

});

export const UserProvider = ({ children }) => {
    const [currentUserContext, setCurrentUserContext]= useState(null);
    const value = {currentUserContext, setCurrentUserContext};


    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user){
                createUserDocumentFromAuth(user);
            }
            
            setCurrentUserContext(user);
            
        })
        return unsubscribe
    },[])
    
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}