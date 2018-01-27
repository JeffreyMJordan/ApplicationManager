import React from "react";
import {Link} from 'react-router-dom';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.buttons = this.buttons.bind(this)
  }

  render(){

    return (
    <div className="header">
      <div className="header-title">
        <h2><Link to="/">Application Tracker</Link></h2>
      </div>
      {this.buttons()}
    </div>);
  }

  buttons(){
    if (this.props.currentUser.id){
      return (
        <ul className="header-buttons">
          <li>Hi {this.props.currentUser.username}</li>
          <li onClick={() => this.props.logout()}>Log Out</li>
        </ul>
      );
    }else{
      return (
        <ul className="header-buttons">
          <li><Link to="/login">Sign In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      );
    }
  }
}

export default Header;