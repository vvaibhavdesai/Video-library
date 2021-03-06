import { useContext, createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify"
export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isUserLogin, setUserLogin] = useState(false);
  const [token, setToken] = useState(null);
  const [ userData, setUserData ] = useState(null)

  const setLocalStorage = ({ token }) => {
    if (localStorage) {
      setToken(token)
      return localStorage.setItem(
        "login",
        JSON.stringify({ userLoggedin: true, token })
      );
    }
  };
const notify = (message)=>toast.dark(message, {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  });
  
  const loginUser = async (email, password) => {
    try {
      const { data } = await axios.post(
        "https://mongoDBInventorySetup.vaibhavdesai888.repl.co/user/login",
        {
          data: {
            email: email,
            password: password,
          },
        }
      );
      setUserData(data.user)
      setLocalStorage(data)
      setUserLogin((prev)=>!prev)
      notify('Welcome Back!')
    } catch (error) {
      notify('Please check Email/Password')
    }
  };

  const signUpUser = async (name, email, password) => {
    try {
      const data = await axios.post(
        "https://mongoDBInventorySetup.vaibhavdesai888.repl.co/user/signup",
        {
          data: {
            name: name,
            email: email,
            password: password,
          },
        }
      );
      setLocalStorage(data)
      setUserData(data.user)
      setUserLogin((prev)=>!prev)
      notify('Welcome Back!')
    } catch (error) {
      notify('Something went wrong,Please try after some time')
    }
  };
  const logout = async()=>{
    try{
      if(localStorage){
       setUserLogin(false)
       setToken(null)
       return localStorage.removeItem("login")
       
      }
    }
    catch(error){

    }
  }

  return (
    <AuthContext.Provider
      value={{
        signUpUser,
        loginUser,
        isUserLogin,
        setUserLogin,
        token,
        setToken,
        setUserData,
        userData,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
