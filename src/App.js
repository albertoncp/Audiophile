import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router} from "react-router-dom"
import ScrollToTop from "react-scroll-to-top"
import Footer from './components/Footer/Footer';

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
    <footer>
      <Footer/>
    </footer>
    </Router>
  );
}

export default App;
