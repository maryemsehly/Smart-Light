import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Login from './Components/Login';
import Main from './Components/main/Main'
import Signup from './Components/Signup/Signup';
import Home from './Components/Home/Home';
import Functionalities from './Pages/Functionalities';
import Technologies from './Pages/Technologies';
import Equipe from './Pages/Equipe';
import Contact from './Components/Contact/Contact';
function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/Functionalities' element={<Functionalities />} />
        <Route path='/Technologies' element={<Technologies />} />
        <Route path='/Equipe' element={<Equipe />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/traffic' element={<Main />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;