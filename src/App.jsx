import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext";
import Home from "./pages/home/Home";
import { useState } from "react";
import LoginModal from "./components/loginModal/LoginModal";
// import "./App.css";

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  
  return (
    <>
      {" "}
      <Header setShowLoginModal={setShowLoginModal} />
      <StoreContextProvider>
        {showLoginModal ? (
          <LoginModal setShowLoginModal={setShowLoginModal} />
        ) : (
          <></>
        )}{" "}
        <Outlet />
      </StoreContextProvider>
      <Footer />
    </>
  );
}

export default App;
