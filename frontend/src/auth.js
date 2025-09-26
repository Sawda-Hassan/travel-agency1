import { createContext, useContext, useState, useEffect } from "react";
import { getToken, setToken as save, clearToken as drop } from "./api";

const AuthCtx = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(getToken());
  useEffect(() => { token ? save(token) : drop(); }, [token]);
  return <AuthCtx.Provider value={{ token, setToken }}>{children}</AuthCtx.Provider>;
}
export const useAuth = () => useContext(AuthCtx);
