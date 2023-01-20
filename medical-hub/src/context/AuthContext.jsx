import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();

let regStatus = JSON.parse(localStorage.getItem("regStatus")) || false;
let user = JSON.parse(localStorage.getItem("user")) || {};

function AuthContextProvider({ children }) {
  const [mobileNumberAuth, setMobileNumberAuth] = useState(false);
  const [isReg, setIsReg] = useState(regStatus);
  const [userData, setUserData] = useState(user);

  useEffect(() => {
    localStorage.setItem("regStatus", JSON.stringify(isReg));
  }, [isReg]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userData));
  }, [userData]);

  const handleIsReg = (bool) => {
    setIsReg(bool);
  };

  const handleUser = (user) => {
    setUserData({ ...user });
  };

  return (
    <AuthContext.Provider
      value={{
        mobileNumberAuth,
        setMobileNumberAuth,
        isReg,
        handleIsReg,
        userData,
        handleUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
