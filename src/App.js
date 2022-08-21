import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Comp421 from './Routes/Comp421';
import Comp555 from './Routes/Comp555';
import Comp590 from './Routes/Comp590';
import Econ485 from './Routes/Econ485';

import Geol101 from './Routes/Geol101';
import Arth387 from './Routes/Arth387';
import Econ411 from  './Routes/Econ411';
import Lfit113 from './Routes/Lfit113';
import Comp495 from './Routes/Comp495';

import Home from './Routes/Home';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/geol-101" element={<Geol101/>}/>
      <Route path="/arth-387" element={<Arth387/>}/>
      <Route path="/econ-411" element={<Econ411/>}/>
      <Route path="/lfit-113" element={<Lfit113/>}/>
      <Route path="/comp-495" element={<Comp495/>}/>
    </Routes>
  );
}

export default App;
