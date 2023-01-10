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
import Ital241 from './Routes/Ital241';
import Econ520 from './Routes/Econ520';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/ital-241" element={<Ital241/>}/>
      <Route path="/econ-520" element={<Econ520/>}/>
    </Routes>
  );
}

export default App;
