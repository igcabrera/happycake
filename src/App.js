import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contacto from './components/Contacto';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/happycake' element={<Home />} />
        <Route path='contacto' element={<Contacto />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
