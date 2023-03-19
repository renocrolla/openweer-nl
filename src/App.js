import React, {useContext} from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home.js';
import Search from './pages/search/Search.js';
import Login from './pages/login/Login.js';
import Faq from './pages/faq/Faq.js';
import Contact from './pages/contact/Contact.js';
import NotFound from './pages/notfound/NotFound.js';
import Header from "./components/header/Header.js";
import Main from "./components/main/Main.js";
import Footer from "./components/footer/Footer";
import {AuthContext} from "./context/AuthContextProvider";

function App() {
  const { isAuth } = useContext(AuthContext);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={isAuth === true ? <Search/> : <Navigate to="/"/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

      export default App;
