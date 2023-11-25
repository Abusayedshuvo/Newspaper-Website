import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  const fontFamily = {
    fontFamily: "Helvetica Neue",
  };
  return (
    <div style={fontFamily}>
      <Navbar></Navbar>
      <Outlet> </Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
