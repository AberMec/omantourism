import React, { createContext, useContext, useState } from "react";

/**
 * UserContext — manages authentication state.
 * Currently a stub; full auth will be wired after backend deployment.
 */
const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null); // null = not logged in

  const login = (userData) => {
    // TODO: connect to auth API after deployment
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, isLoggedIn: !!user }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used inside <UserProvider>");
  return ctx;
}

export default UserContext;
