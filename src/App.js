// import React from 'react';
// import Header from './components/Header';

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Sidebar />
//     </div>
//   );
// };

// export default App;
// App.js
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MyProfile from './pages/MyProfile';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <Router>
      <Header />
      <Sidebar />
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">My Profile</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<MyProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
