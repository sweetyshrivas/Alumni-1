import React, { createContext, useContext, useState } from 'react';

// Create a context for Auth
const AuthContext = createContext();

// Provide auth context
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    // Instead of navigation here, handle navigation where the routing is defined
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
