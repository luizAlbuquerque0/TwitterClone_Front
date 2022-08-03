import "./App.css";

//react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
