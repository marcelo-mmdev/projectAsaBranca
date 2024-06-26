"use client";

import { AuthProvider } from "@/context/auth/AuthProvider";
import { BrowserRouter } from "react-router-dom";
// import { AuthProvider } from '@/context/auth/AuthProvider';
// import { InputText } from 'primereact/inputtext'
// import { CiUser } from "react-icons/ci"
// import { IoKeyOutline } from "react-icons/io5"
// import { Divider } from 'primereact/divider'
// import "./Login.css";

import { useContext, useEffect, useState } from "react";
// import InfoSystem from "../../components/informations/InfoSystem";
// import { AuthContext } from '../../context/AuthProvider/AuthProvider
const Login = () => {
  const  login  = useContext(AuthProvider);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    login(username, password);
  };

  // VerifyLoggedIn();

  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="page">
          <div className="container containerLogin">
            <div className="row justify-content-center">
              <div className="mt-3">
                <div>
                  {/* <InfoSystem />
                            <Divider /> */}
                  <h5 className="p-card-title text-center textLogin">Login</h5>
                  <form>
                    <div className="p-inputgroup mb-3">
                      <span className="p-inputgroup-addon">
                        {/* <CiUser size="30px" /> */}
                      </span>
                      <input
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="p-inputgroup mb-3">
                      <span className="p-inputgroup-addon">
                        {/* <IoKeyOutline size="30px" /> */}
                      </span>
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                    {/* {mensagemToast} */}
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="container containerLogin">
            Utilize suas redes Socias para fazer o Login
          </div>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
};
export default Login;
