import './App.scss';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Navbar from './Navbar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';


function App() {

  return (
    <Router>
    <div className="app">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={ <Home/>}/>
        <Route exact path="/AboutPage" element={<AboutPage/>}/>
      </Routes>
      
      </div>  
      <Footer/>
    </Router>
  )
}

export default App
