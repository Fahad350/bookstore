import { useContext } from "react";
import { AuthContext } from "../ContextApi/AuthContext";

const useAuth = () => useContext(AuthContext);
export default useAuth;
