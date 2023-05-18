import './App.scss';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Navbar from './Navbar';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {

  return (
    <Router>
    <div className="app">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={ <Home/>}/>
      </Routes>
      </div>  
    </Router>
  )
}

export default App
