import { useEffect, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { doLogin, getUserById } from "../services/UserService";

// Creating context for User
export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [userData, setUserData] = useState({
    id: 52,
    username: "Asha",
    password: null,
    firstName: "Asha",
    lastName: "Singh",
    email: "asha.sgsits@gmail.com",
    phoneNumber: "9876543210",
    address: "12345 Apt C",
    zipCode: "63043",
    city: "Maryland Heights",
    state: "MO",
    role: "Admin",
  });

  //login
  const doLogin = async (data) => {
    console.log("userdata" + data);
    const response = await doLogin(data);
    setIsLogin(true);
    setUserData(response);
  };

  return (
    <UserContext.Provider
      value={{
        isLogin,
        setIsLogin,
        userData,
        setUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
