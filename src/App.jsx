import {BrowserRouter as Router,Route,Link, Routes } from 'react-router-dom' 
import './App.css'
import Fullstack from './Fullstack'
import Cybersecurity from './Cybersecurity'
import Career from './Career'
import Datascience from './Datascience'
import All from './All'

function App() {

  return (
    <>
<Router>
  <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
   
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul className="navbar-nav  mb-2 mb-lg-0 mx-auto px-5">
        <li className="nav-item">
          {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
          <Link to="/" className='nav-link'>All</Link>
        </li>
        <li className="nav-item"><Link to="/datascience" className='nav-link'>Data Science</Link></li>
        <li className="nav-item"><Link to="/cybersecurity" className='nav-link'>Cyber security</Link></li>
        <li className="nav-item"><Link to="/fullstack"className='nav-link'>Full stack</Link></li>
       <li className="nav-item"><Link to="/career" className='nav-link'>Career</Link></li>
      </ul>
     
    </div>
  </div>
</nav>
  
  {/* <div><ul>
    <li><Link to="/">All</Link></li>
    <li><Link to="/datascience">Data Science</Link></li>
    <li><Link to="/cybersecurity">Cyber security</Link></li>
    <li><Link to="/fullstack">Full stack</Link></li>
    <li><Link to="/career">Career</Link></li>

    </ul> */}
    <Routes>
      <Route path='/' exact Component={All}></Route>
      <Route path='/datascience' Component={Datascience}></Route>

      <Route path='/cybersecurity' Component={Cybersecurity}></Route>
      <Route path='/fullstack' Component={Fullstack}></Route>

      <Route path='/career' Component={Career}></Route>

      </Routes>
</Router></>
  )
}

export default App
