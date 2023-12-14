import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Sign from "./Pages/Sign";
import Reservation from "./Pages/Reservation";
import CostumerService from "./Pages/CostumerService";
import History from "./Pages/History";
import Waiter from "./Pages/Waiter";
import WT from "./Pages/WT";
import Manager from "./Pages/Manager";

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
        <Route path="/history" element={<History />} />
        <Route path="/waiter" element={<Waiter />} />
        <Route path="/wt" element={<WT />} />
        <Route path="/manager" element={<Manager />} />
      </Routes>
    </Router>
  );
};
export default App;
