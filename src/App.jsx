import { BrowserRouter as Router, Routes, Route }
from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Sign from "./Pages/Sign";
import Reservation from "./Pages/Reservation";
import CostumerService from "./Pages/CostumerService";

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
