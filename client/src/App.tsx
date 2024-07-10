import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages and components
import Home from "./pages/Home";
import CV from "./pages/CV/CV";
import Travels from "./pages/Travels/Travels";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/travels" element={<Travels />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
