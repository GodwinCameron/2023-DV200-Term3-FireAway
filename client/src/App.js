import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeRoute from './routes/Home/Home';
import RiflesRoute from './routes/Rifles/Rifles';
import RegisterRoute from './routes/Register/Register';
import Admin from './routes/Admin/Admin';
import IndividualProduct from './routes/Single Product/IndividualProduct';
import PistolsRoute from './routes/Pistols/Pistols';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute/>}/>
        <Route path="/rifles" element={<RiflesRoute/>}/>
        <Route path="/pistols" element={<PistolsRoute/>}/>
        <Route path="/register" element={<RegisterRoute/>}/>
        <Route path="/admin" element={<Admin />}/>
        <Route path="/product" element={<IndividualProduct />}/>
        
      </Routes>
    </BrowserRouter>);
}

export default App;
