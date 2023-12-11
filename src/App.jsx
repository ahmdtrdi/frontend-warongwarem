import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import Reservation from "./pages/Reservation";
import CostumerService from "./pages/CostumerService";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/costumerservice" element={<CostumerService />} />
      </Routes>
    </Router>
  );
};
export default App;
