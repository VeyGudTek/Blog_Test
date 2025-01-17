import logo from './logo.svg';
import Navbar from './Navbar'
import Home from './Home'
import Create from './Create'
import Update from './Update'
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import {useState} from 'react'
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  const [loggedIn] = useState(false)

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/create/*" element={<Create/>} />
            <Route path="/update/:id/*" element={<Update/>} />
            <Route path="/blogs/:id/*" element={<BlogDetails/>} />
            <Route path='*' element={<NotFound/>} />
            <Route path="/test" element={(
              <div>
                <h2>Test Page</h2>
              </div>
            )}/>
            <Route path="/redirect" element={loggedIn ? <Navigate to='/test'/> : <Navigate to='/create'/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
