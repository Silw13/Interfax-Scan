import React, { createContext, useState } from "react";

export const RequestContext = createContext();

export const RequestProvider = ({ children }) => {
    const [requestData, setRequestData] = useState({});

    return (
        <RequestContext.Provider value={{ requestData, setRequestData }}>
            {children}
        </RequestContext.Provider>
    );
};