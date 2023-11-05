import React, { createContext, useState } from "react";

export const RequestContext = createContext();

export const RequestProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState();

  
    return (
      <RequestContext.Provider value={{ }}>
        {children}
      </RequestContext.Provider>
    );
  };