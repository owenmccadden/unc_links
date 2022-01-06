import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Comp421 from './Routes/Comp421';
import Comp555 from './Routes/Comp555';
import Comp590 from './Routes/Comp590';
import Econ460 from './Routes/Econ460';
import Econ485 from './Routes/Econ485';
import Home from './Routes/Home';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/comp-421" element={<Comp421/>}/>
      <Route path="/comp-555" element={<Comp555/>}/>
      <Route path="/comp-590" element={<Comp590/>}/>
      <Route path="/econ-460" element={<Econ460/>}/>
      <Route path="/econ-485" element={<Econ485/>}/>
    </Routes>
  );
}

export default App;
