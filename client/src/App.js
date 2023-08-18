import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeRoute from './routes/Home/Home';
import RiflesRoute from './routes/Rifles/Rifles';
import LoginRoute from './routes/Login/Login';
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
        <Route path="/login" element={<LoginRoute/>}/>
        <Route path="/admin" element={<Admin />}/>
        <Route path="/product" element={<IndividualProduct />}/>
        
      </Routes>
    </BrowserRouter>);
}

export default App;
