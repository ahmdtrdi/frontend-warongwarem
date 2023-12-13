import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Sign from "./Pages/Sign";
import Reservation from "./Pages/Reservation";
import LandingPage from "./Pages/LandingPage";
import Waiter from "./Pages/Waiters";
import WT from "./Pages/WT";
import Waiterlefry from "./Pages/Waiterlefry";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/waiter" element={<Waiter />} />
        <Route path="/wt" element={<WT />} />
        <Route path="/waiterepi" element={<Waiterlefry />} />
      </Routes>
    </Router>
  );
};
export default App;
