import React, {useContext} from "react";
import './Logout.css';
import {AuthContext} from "../../context/AuthContextProvider";

function Logout() {

  const { email, logout } = useContext(AuthContext);

  return (
    <section className="logout-container">
      <p>Hoi, <strong>{email}</strong> je bent al ingelogd! Wil je uitloggen?</p>
      <button className="logout-button" type="button" onClick={logout}>Uitloggen</button>
    </section>
  );
}

  export default Logout;
