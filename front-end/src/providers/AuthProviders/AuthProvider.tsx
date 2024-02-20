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
import { LogoutModal } from "@/components/LogoutModal";

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
  setModal: Dispatch<SetStateAction<boolean>>;
  logoutModal: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  signup: (params: signupParams) => Promise<void>;
  login: (params: loginParams) => Promise<void>;
  logout: () => void;
  checkToken: boolean;
};
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logoutModal, setModal] = useState(false);
  const [checkToken, setCheckToken] = useState(false);
  const router = useRouter();

  const login = async (params: loginParams) => {
    try {
      const { data } = await api.post("/login", params);

      const { token, username } = data;

      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      setCheckToken((prev) => !prev);
      setIsLoggedIn(true);
      toast.success("Хэрэглэгч амжилттай нэвтэрлээ");
      router.push("/home");
    } catch (error: any) {
      toast.warn(error.response.data.message);
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    setCheckToken((prev) => !prev);
    setIsLoggedIn(false);
    toast.success("Logged out!");
    router.push("/login");
  };

  const signup = async (params: signupParams) => {
    try {
      const { data } = await api.post("/signup", params);
      const { token } = data;
      localStorage.setItem("token", token);
      router.push("/login");
      toast.success("Хэрэглэгч амжилттай бүртгэгдлээ!");
    } catch (error) {
      if (error) {
        toast.success("Алдаа гарлаа.");
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        setIsLoggedIn,
        signup,
        login,
        logout,
        setModal,
        isLoggedIn,
        logoutModal,
        checkToken,
      }}
    >
      {children}
      {logoutModal ? <LogoutModal /> : null}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
