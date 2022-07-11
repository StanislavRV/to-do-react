import React, { useState } from "react";



const ModalContext = React.createContext(null);
export{ModalContext}



export default function ModalContextProvider({children}) {
    
    const[modal, setmodal] = useState ('');

    return (
        <ModalContext.Provider value={{
            modal, setmodal
        }}>
            {children}
        </ModalContext.Provider>
    )
}