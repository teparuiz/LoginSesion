import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import User from './components/User';


function App() {
  const [userOne, setLoginUser] = useState(false)

  const [user, setUser] = useState({
    email: "",
    password: "",
  });


  return (
    <div>
      <Router>
        <Routes>
          <Route path="/"
          element={userOne && userOne._id ? (<User user={user} setUser={setUser}/>) : ( <Login user={user} setUser={setUser} setLoginUser={setLoginUser}/>)}/>

          <Route path="/user" element={<User user={user} setUser={setUser}/>}/>
          <Route path="/login" element={<Login user={user} setUser={setUser}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
