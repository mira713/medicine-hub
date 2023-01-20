import "./App.css";

import Navbar from "./component/Navbar/Navbar";
import Category from "../src/component/Navbar/Category.jsx";
import SearchNav from "../src/component/Navbar/searchnav.jsx";
import AllRoute from "./AllRoute/AllRoute";
import Footer from "../src/component/Footer/Footer"
function App() {
  return (
    <div>
      <Navbar />
      <SearchNav />
      <Category />
      <AllRoute />
      <Footer/>
    </div>
  );
}

export default App;
