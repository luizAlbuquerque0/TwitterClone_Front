import "./App.css";

//react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Register from "./Pages/Auth/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
