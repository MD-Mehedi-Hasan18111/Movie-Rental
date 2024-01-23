import { useReducer, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import { CinemaCartContext, ThemeContext } from "./context/CinemaContext";
import { cartReducer, initialState } from "./reducers/cartReducer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <CinemaCartContext.Provider value={{ state, dispatch }}>
        <div className={`w-full h-full ${isDark ? "dark" : ""} container`}>
          <Header />
          <Main />
          <Footer />
        </div>
        <ToastContainer />
      </CinemaCartContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
