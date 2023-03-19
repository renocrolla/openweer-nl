import React, {useContext, useEffect, useState} from "react";
import './LoginForm.css';
import {AuthContext} from "../../context/AuthContextProvider";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validEmail, setValidEmail] = useState("");
  const [validPassword, setValidPassword] = useState("");
  const [emailError, toggleEmailError] = useState(false);
  const [passwordError, togglePasswordError] = useState(false);
  const [registerError, toggleRegisterError] = useState(false);
  const [loginRequest, toggleLoginRequest] = useState(false);
  const [registerRequest, toggleRegisterRequest] = useState(false);
  const [registerButton, toggleRegisterButton] = useState(false);
  const [registerSuccess, toggleRegisterSuccess] = useState(false);
  const [loading, toggleLoading] = useState(false);

  const { login } = useContext(AuthContext);

  useEffect(() => {
    const controller = new AbortController();

    async function sendLoginRequest() {
      try {
        toggleLoading(true);
        const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
          "username": `${validEmail}`,
          "password": `${validPassword}`,
        }, {signal: controller.signal});
        login(response.data.accessToken);
        toggleLoading(false);
      } catch (e) {
        console.error(e);
        toggleLoading(false);
        toggleRegisterError(true);
      }
    }

    if (loginRequest === true) {
      sendLoginRequest();
    }

    return function unmount() {
      controller.abort();
    }
  }, [loginRequest, validEmail, validPassword, login]);

  useEffect(() => {
    const controller = new AbortController();

    async function sendRegisterRequest() {
      try {
        toggleLoading(true);
        toggleRegisterError(false);
        toggleRegisterSuccess(false);
        const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
          "username": `${validEmail}`,
          "email": `${validEmail}`,
          "password": `${validPassword}`,
          "role": ["user"],
        }, {signal: controller.signal});
        if (response) {
          toggleLoading(false);
          toggleRegisterSuccess(true);
          toggleRegisterButton(false);
        }
      } catch (e) {
        console.error(e);
        toggleLoading(false);
        toggleRegisterError(true);
      }
    }

    if (registerRequest === true) {
      sendRegisterRequest();
    }

    return function unmount() {
      controller.abort();
    }
  }, [registerRequest, validEmail, validPassword])

  function processLogin(e) {
    e.preventDefault();
    toggleRegisterSuccess(false);

    if (!isValidEmail(email)) {
      toggleEmailError(true);
    } else if (isValidEmail(email)) {
      toggleEmailError(false);
      setValidEmail(email);
    }

    if (!isValidPassword(password)) {
      togglePasswordError(true);
    } else if (isValidPassword(password)) {
      togglePasswordError(false);
      setValidPassword(password);
    }

    if (emailError === false && email.length > 4 && passwordError === false && password.length > 5) {
      toggleRegisterError(false);
      toggleLoginRequest(true);
    }
  }

  function processRegister(e) {
    e.preventDefault();
    toggleRegisterSuccess(false);

    if (!isValidEmail(email)) {
      toggleEmailError(true);
    } else if (isValidEmail(email)) {
      toggleEmailError(false);
      setValidEmail(email);
    }

    if (!isValidPassword(password)) {
      togglePasswordError(true);
    } else if (isValidPassword(password)) {
      togglePasswordError(false);
      setValidPassword(password);
    }

    if (emailError === false && email.length > 4 && passwordError === false && password.length > 5) {
      toggleRegisterRequest(true);
    }
  }

  function isValidEmail(emailState) {
    return /^\S+@\S+\.\S+$/.test(emailState);
  }

  function isValidPassword(passwordState) {
    return /^[a-zA-Z0-9]{6,}$/.test(passwordState);
  }

  return (
    <form className="login-container">
      {loading && <p>Een ogenblik geduld...</p>}
      {emailError && <p className="error">Email adres met een @ en . bevatten.</p>}
      {passwordError && <p className="error">Wachtwoord moet minimaal 6 karakters zijn.</p>}
      {registerError && <p className="error">Er is een probleem opgetreden, probeer het nogmaals.</p>}
      {registerSuccess && <p className="success">Succesvol geregistreerd! Je kunt nu inloggen. 😄</p>}
      <input
        type="email"
        value={email}
        placeholder="Emailadres"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="Wachtwoord"
        onChange={(e) => setPassword(e.target.value)}
      />
      {!registerButton && <button type="submit" onClick={processLogin}>Login</button>}
      {!registerButton && <button type="button" id="register-login-button" onClick={() => toggleRegisterButton(true)}>Account registreren?</button>}
      {registerButton && <button type="submit" onClick={processRegister}>Registreer</button>}
      {registerButton && <button type="button" id="register-login-button" onClick={() => toggleRegisterButton(false)}>Inloggen?</button>}
    </form>
  );
}

export default LoginForm;
