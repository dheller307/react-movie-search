import './css/App.css';
import Favorites from "./pages/Favorites";
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom"
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
    <main className="main-content">
      <Routes>
        <route path="/" element={<Home />}/>
        <route path="/favorites" element={<Favorites />}/>
      </Routes>
    </main>
    </div>
  );
}

export default App;
