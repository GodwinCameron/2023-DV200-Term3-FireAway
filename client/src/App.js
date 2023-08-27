import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeRoute from './routes/Home/Home';
import RiflesRoute from './routes/Rifles/Rifles';
import RegisterRoute from './routes/Register/Register';
import Admin from './routes/Admin/Admin';
import IndividualProduct from './routes/Single Product/IndividualProduct';
import PistolsRoute from './routes/Pistols/Pistols';
import LoginRoute from './routes/Login/Login';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ShotgunsRoute from './routes/Shotguns/Shotguns';

function App() {
 const [admin, setAdmin] = useState(false);
 const [user, setUser] = useState();

  useEffect(()=>{
    
    let verifyUser = {token: sessionStorage.getItem('JWT')};
    if(!verifyUser.token){
      sessionStorage.clear();
    }else{
      axios.post('http://localhost:5000/api/verifytoken', verifyUser)
      .then(res =>{
        if(res.data.verified === false){
          sessionStorage.clear();
        } else if (res.data.user.superuser === true) {
          console.log("admin");
          setUser(res.data.user);
          setAdmin(true);
        } else {
          setUser(res.data.user);
        }
      })
    }
  }, []);

  // 
// path="/*" 

console.log("Data from App.js:", "Admin - ",admin , "User data - ", user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute admin={admin} user={user}/>}/>
        <Route path="/rifles" element={<RiflesRoute admin={admin} user={user}/>}/>
        <Route path="/pistols" element={<PistolsRoute admin={admin} user={user}/>}/>
        <Route path="/shotguns" element={<ShotgunsRoute admin={admin} user={user}/>}/>
        <Route path="/register" element={<RegisterRoute admin={admin} user={user}/>}/>
        <Route path="/login" element={<LoginRoute admin={admin} user={user}/>}/>
        { admin &&  <Route if  path="/admin" element={<Admin />}/> }
        <Route path="/product" element={<IndividualProduct admin={admin} user={user} />}/>
      </Routes>
    </BrowserRouter>);
}

export default App;
