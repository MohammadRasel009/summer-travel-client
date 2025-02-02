import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Home/Shared/Footer/Footer";
import Navbar from "../Pages/Home/Home/Shared/Navbar/Navbar";
import Banner from "../Pages/Banner/Banner";
import Featured from "../Pages/Featured/Featured";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Outlet></Outlet>
      <Featured></Featured>
      <Footer></Footer>
    </div>
  );
};

export default Main;