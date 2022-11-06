import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home'
import Login from './pages/Login'
import NewProject from './pages/NewProject';
import Register from './pages/Register'
import Projects from './pages/Projects'
import Project from './pages/Project';


function App() {
  return (
    <>
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/new-project' element={<PrivateRoute />}> 
           <Route path='/new-project' element={<NewProject />} />
          </Route>
          <Route path='/projects' element={<PrivateRoute />}> 
           <Route path='/projects' element={<Projects />} />
          </Route>
          <Route path='/project/:projectId' element={<PrivateRoute />}> 
           <Route path='/project/:projectId' element={<Project />} />
          </Route>
        </Routes>
      </div>
    </Router>
    <ToastContainer />
    
    </>
  );
}

export default App;
