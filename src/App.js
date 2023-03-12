import React from "react";
import Navbar from "./Components/navbar/navbar";
import Main from "./Components/main/main";
import Tech from "./Components/tech/Tech";

export default function App() {
  const styles = {
    background: {
      backgroundColor: "#111A21",
    },
  };
  return (
    <div style={styles.background}>
      <Navbar />
      <Main />
      <Tech />
    </div>
  );
}
