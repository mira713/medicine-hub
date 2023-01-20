import logo from "./logo.svg";
import "./App.css";
import Combo from "./component/product/combo";
import Disease from "./component/product/Disease";
import Medicine from "./component/product/Medicine";
import LightningDeals from "./component/product/Product";
import Navbar from "./component/Navbar/Navbar";
import Category from "../src/component/Navbar/Category.jsx";
import SearchNav from "../src/component/Navbar/searchnav.jsx";
import Home from "./Pages/Home";
import Footer from "../src/Footer/Footer.jsx";
import HomeFooter from "./Footer/HomeFooter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchNav />
      <Category />
      <Home />
      <LightningDeals />
      <Combo />
      <Medicine />
      <Disease />
      <HomeFooter />
      <Footer />
    </div>
  );
}

export default App;
