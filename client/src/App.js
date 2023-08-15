import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeRoute from './routes/Home/Home';
import RiflesRoute from './routes/Rifles';
import LoginRoute from './routes/Login/Login';
import Admin from './routes/Admin/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute/>}/>
        <Route path="/rifles" element={<RiflesRoute/>}/>
        <Route path="/login" element={<LoginRoute/>}/>
        <Route path="/admin" element={<Admin />}/>
      </Routes>
    </BrowserRouter>);
}

export default App;
