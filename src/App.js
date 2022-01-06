import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Home from './Routes/Home';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/comp-421" element={<Footer/>}/> */}
      {/* <Route path="/comp-555" element={}/>
      <Route path="/comp-590" element={}/>
      <Route path="/econ-460" element={}/>
      <Route path="/econ-485" element={}/> */}
    </Routes>
  );
}

export default App;
