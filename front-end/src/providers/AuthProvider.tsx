import { emailcode } from "@/app/forgetPass/page";
import { api } from "@/common/axios/page";
import { useRouter } from "next/navigation";
import {
  PropsWithChildren,
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

type loginParams = {
  email: string;
  password: string;
};
type signupParams = {
  username: string;
  email: string;
  password: string;
  address: string;
};

type AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  signup: (params: signupParams) => Promise<void>;
  login: (params: loginParams) => Promise<void>;
};
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const login = async (params: loginParams) => {
    try {
      const { data } = await api.post("/login", params);

      const { token } = data;

      localStorage.setItem("token", token);
      console.log(data.message);
      setIsLoggedIn(true);
    } catch (error) {
      console.log("login error");
    }
  };

  const signup = async (params: signupParams) => {
    try {
      const { data } = await api.post("/signup", params);
      router.push("/login");
      toast.success("Cadastro realizado com sucesso!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } catch (error) {
      if (error) {
        alert("aldaa garlaa");
      }
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
