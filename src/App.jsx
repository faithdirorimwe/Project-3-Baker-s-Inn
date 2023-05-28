import './App.scss';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Navbar from './Navbar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import Productpage from './pages/Productpage';
import Recipespage from './pages/Recipespage';
import Kidspage from './pages/Kidspage';


function App() {

  return (
    <Router>
    <div className="app">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={ <Home/>}/>
        <Route exact path="/AboutPage" element={<AboutPage/>}/>
        <Route exact path= "/Productpage" element={<Productpage/>}/>
        <Route exact path= "/Recipespage" element={<Recipespage/>}/>
        <Route exact path= "/Kidspage" element={<Kidspage/>}/>
      </Routes>
      
      </div>  
      <Footer/>
    </Router>
  )
}

export default App
