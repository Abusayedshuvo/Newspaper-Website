import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet> </Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
