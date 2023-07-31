import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeRoute from './routes/Home';
import RiflesRoute from './routes/Rifles';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute/>}/>
        <Route path="/rifles" element={<RiflesRoute/>}/>
      </Routes>
    </BrowserRouter>);
}

export default App;
