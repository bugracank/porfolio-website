import React from "react";
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
    red: {
      backgroundColor: "red",
    },
  };
  return (
    <div style={styles.background}>
      <Navbar />
      <Main />
      <Tech />
      <Contact />
      <Scroll />
    </div>
  );
}
