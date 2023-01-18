
import './App.css';
import Nav from './Category'
import Category from './compo/Category'
import Consult from "./doctor/consult"
function App() {
  return (
    <div className="App">
      <Nav/>
      <Category/>
      <Consult/>
    </div>
  );
}

export default App;
