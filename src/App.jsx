import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import About from './Pages/About'
import Login from './Pages/Login'

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router>
  )
}
export default App
