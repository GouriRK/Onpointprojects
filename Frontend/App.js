import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Productlist from "./Updated/Productlist";
import Productdetails from "./Updated/Productdetails";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Productlist />} />
            <Route path="/book/:id" element={<Productdetails />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
