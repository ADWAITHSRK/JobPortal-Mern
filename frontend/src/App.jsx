import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './projectComponents/Navbar/Navbar'
import Login from './projectPages/Login/Login';
import SignUp from './projectPages/Signup/Signup';

const App = () => {
  return (
    <div>
       <Router>
       {/* <Navbar/> */}
       <Login/>
       {/* <SignUp/> */}
       </Router>
      
    </div>
  )
}

export default App