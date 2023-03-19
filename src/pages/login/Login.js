import React, {useContext} from "react";
import './Login.css';
import {AuthContext} from "../../context/AuthContextProvider";
import LoginForm from "../../components/loginForm/LoginForm";
import Logout from "../../components/logout/Logout";

function Login() {

  const { isAuth } = useContext(AuthContext);

  return (
    <>
      {isAuth ? <Logout /> : <LoginForm /> }
    </>
  );
}

export default Login;
