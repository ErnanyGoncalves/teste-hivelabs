import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <nav className="navbar navbar-light bg-light">
        <Link to="/"><span className="navbar-brand mb-0 h1">Developer Test</span></Link> 
        <Link to="/user/new" className="mr-5 btn btn-success">Create User</Link>
      </nav>
    );
  }


export default Header;