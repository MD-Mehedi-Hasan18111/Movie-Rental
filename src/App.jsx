import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import { CinemaCartContext } from "./context/CinemaContext";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <CinemaCartContext.Provider value={{ cart, setCart }}>
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </CinemaCartContext.Provider>
  );
};

export default App;
