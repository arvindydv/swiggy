import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext";
import Home from "./pages/home/Home";
import { useState } from "react";
import LoginModal from "./components/loginModal/LoginModal";
import Search from "./components/search/Search";
// import "./App.css";

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSerachBar, setShowSerachBar] = useState(false);
  // const [searchValue, setSearchValue] = useState("");

  return (
    <>
      {" "}
      <Header
        setShowLoginModal={setShowLoginModal}
        setShowSerachBar={setShowSerachBar}
      />
      <StoreContextProvider>
        {showLoginModal ? (
          <LoginModal setShowLoginModal={setShowLoginModal} />
        ) : (
          <></>
        )}{" "}
        {showSerachBar ? <Search setShowSerachBar={setShowSerachBar} /> : <></>}
        <Outlet />
      </StoreContextProvider>
      <Footer />
    </>
  );
}

export default App;
