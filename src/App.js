import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router} from "react-router-dom"
import ScrollToTop from "react-scroll-to-top"

function App() {
  
  return (
    <Router>
    <ScrollToTop smooth 
   />
    <div className="App">
    
  <header>
    <Navbar/>
  </header>
      <Routes>
          <Route path='' element={<Home/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
