import { createContext, useState } from "react";
const AppContext = ({ children }) => {
    return (
        <Context.Provider>
            {children}
        </Context.Provider>
    );
};
export default AppContext;