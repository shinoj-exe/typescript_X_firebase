import React from 'react';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import Main from './pages/main/main';
import './App.css';
import Login from './pages/login';
import Navbar from './components/navbar';
import CreatePost from './pages/createPost/createPost';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/createpost" element={<CreatePost/>}></Route>

          {/* <Route path="/" element={<Main/>}/> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
