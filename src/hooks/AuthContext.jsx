import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState('');

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, accessToken, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};