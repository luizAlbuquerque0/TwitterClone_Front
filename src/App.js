import "./App.css";

//react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
