import './App.css';
import NavBar from './NavBar';
import Login from './Login';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NutHome from './NutHome';
import UserHome from './UserHome';

function App() {
  const [userType, setUserType] = useState(null);

  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <div className="Home">
              {userType === "nutrizionista" && <NutHome />}
              {userType === "client" && <UserHome />}
              {!userType && <p>Benvenuto! Fai login per continuare.</p>}
            </div>
          }
        />

        {/* Login */}
        <Route path="/login" element={<Login setUserType={setUserType} />} />
      </Routes>
    </Router>
  );
}

export default App;
