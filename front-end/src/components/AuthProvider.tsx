import { emailcode } from "@/app/forgetPass/page";
import { api } from "@/common/axios";
import { useRouter } from "next/navigation";
import {
  PropsWithChildren,
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
// import { toast } from "react-toastify";

type User = {
  email: string;
  _id: string;
};

type AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  signup: (email: String, password: String, name: String) => void;
  login: (email: String, password: String) => void;
};
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const login = async (email: String, password: String) => {
    try {
      const { data } = await api.post("login", {
        email,
        password,
      });

      const { token } = data;

      localStorage.setItem("token", token);
      console.log(data.message);
      setIsLoggedIn(true);
    } catch (error) {
      console.log("login error");
    }
  };

  const signup = async (email: String, password: String, username: String) => {
    try {
      const { data } = await api.post("signUp", {
        email,
        password,
        username,
      });

      const { token } = data;
      router.push("/");
      localStorage.setItem("token", token);
    } catch (error) {
      console.log("login error");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        signup,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
