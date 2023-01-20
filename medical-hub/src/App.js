import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Category from "../src/component/Navbar/Category.jsx";
import SearchNav from "../src/component/Navbar/searchnav.jsx";

import AllRoutes from "./AllRoutes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchNav />
      <Category />

      <AllRoutes />
    </div>
  );
}

export default App;
