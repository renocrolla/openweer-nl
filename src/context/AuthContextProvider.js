import React, {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState({
    isAuth: false,
    email: null,
    status: 'pending',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('jwt_token');

    if (accessToken && isValidToken() === true) {
      async function getUserData () {
        try {
          const response = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user', {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${accessToken}`,
            }
          });
          setAuth({
            isAuth: true,
            email: response.data.email,
            status: 'done',
          });
        } catch (e) {
          console.error(e);
          localStorage.clear();
          setAuth({
            isAuth: false,
            email: null,
            status: 'done',
          });
        }
      }
      getUserData();
    } else {
      setAuth({
        isAuth: false,
        email: null,
        status: 'done',
      });
    }
  }, [])

  function isValidToken() {
    const accessToken = localStorage.getItem('jwt_token');

    try {
      const { exp } = jwtDecode(accessToken);

      if (Date.now() >= exp * 1000) {
        return false;
      }
    } catch (e) {
      return false;
    }
    return true;
  }

  function login(accessToken) {
    const decodedToken = jwtDecode(accessToken)
    localStorage.setItem('jwt_token', accessToken);

    setAuth({
      ...auth,
      isAuth: true,
      email: decodedToken.sub,
      status: 'done',
    });
    navigate("/search");
  }

  function logout() {
    localStorage.clear();
    setAuth({
      ...auth,
      isAuth: false,
      email: null,
      status: 'done',
    });;
  }

  const data = {
    isAuth: auth.isAuth,
    email: auth.email,
    login: login,
    logout: logout,
  }

  return (
    <AuthContext.Provider value={data}>
      {auth.status === 'done' ? children : <p>Een ogenblik geduld...</p>}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
