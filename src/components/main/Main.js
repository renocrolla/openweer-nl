import React from "react";
import './Main.css';
import Background from "../../assets/background.jpg";

function Main({ children }) {

  const background = {
    backgroundImage: `url(${Background})`,
  }

  return (
    <main style={background} className="main-outer-container">
      <section className="main-inner-container">
        {children}
      </section>
    </main>
  );
}

export default Main;
