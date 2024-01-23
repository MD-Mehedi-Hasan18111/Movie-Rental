import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import { CinemaCartContext, ThemeContext } from "./context/CinemaContext";

const App = () => {
  const [cart, setCart] = useState([]);
  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <CinemaCartContext.Provider value={{ cart, setCart }}>
        <div className={`w-full h-full ${isDark ? "dark" : ""} container`}>
          <Header />
          <Main />
          <Footer />
        </div>
      </CinemaCartContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
