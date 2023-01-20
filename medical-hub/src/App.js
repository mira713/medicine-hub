import "./App.css";

import Navbar from "./component/Navbar/Navbar";
import Category from "../src/component/Navbar/Category.jsx";
import SearchNav from "../src/component/Navbar/searchnav.jsx";
import AllRoute from "./AllRoute/AllRoute";

function App() {
  return (
    <div>
      <Navbar />
      <SearchNav />
      <Category />
      <AllRoute />
    </div>
  );
}

export default App;
