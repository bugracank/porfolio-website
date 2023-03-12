import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/navbar/navbar";
import Main from "./Components/main/Main";
import Tech from "./Components/tech/Tech";
import Scroll from "./Components/scroller/Scroll";
import Contact from "./Components/contact/Contact";

export default function App() {
  const styles = {
    background: {
      backgroundColor: "#111A21",
    },
  };
  return (
    <BrowserRouter>
      <div style={styles.background}>
        <Navbar />
        <Main />
        <Tech />
        <Contact />
        <Scroll />
      </div>
    </BrowserRouter>
  );
}
