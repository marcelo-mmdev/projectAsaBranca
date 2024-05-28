import { createContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { UsuarioLoginDTO } from '../../models/UsuarioLoginDTO'
// import ApiService from '../../services/ApiService.jsx'
// import ToastSystem from '../../components/Toast/ToastSystem.jsx'
import Cookies from "js-cookie";
import ApiService from "@/services/services.ts";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [recoveryPassword, setRecoveryPassword] = useState(false);
  const [showToastError, setShowToastError] = useState(false);
  const [mensagemToast, setMensagemToast] = useState("");

  // const [usuarioLoginDTO] = useState(new UsuarioLoginDTO())

  let logado = Cookies.get("sess") !== undefined ? true : false;

  useEffect(() => {
    const recoveredUser = Cookies.get("sess");
    if (recoveredUser) {
      setUser(recoveredUser);
    }
    setLoading(false);
  }, []);

  const login = (username, password) => {
    // usuarioLoginDTO.setUsername(login);
    // usuarioLoginDTO.setPassword(senha);

    ApiService.post("login", { username, password })
      .then((response) => {
        console.log(response);
        const LoggedUser = {
          login,
          data: null,
          message: "OK.",
          code: 1,
        };

        setUser(`${LoggedUser}`);
        setRecoveryPassword(false);
        setShowToastError(false);
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
        logado = false;
        setRecoveryPassword(true);
        setShowToastError(true);
        setMensagemToast(error.response.data.mensagem);
      });
  };

  const logout = () => {
    ApiService.get("logout").catch((error) => {
      console.error(error);
    });
    setUser("");
    logado = false;
    navigate("/login");
  };

  return (
    <>
      {/* <ToastSystem 
                message={mensagemToast} 
                severity="error" 
                summary="Error" 
                life={3000} 
                position="top-right" 
                show={showToastError} 
                setShow={setShowToastError} 
            /> */}
      <AuthContext.Provider
        value={{
          // authenticate: logado,
          login,
          user,
          loading,
          logout,
          recoveryPassword,
          mensagemToast,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};
