import React from "react";
import {Link} from "react-router-dom";

class ApplicationsIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.indexApplications();
  }

  render(){
    return (
      <ul>
        <h1>Current Applications</h1>
        {this.props.applications.map((el) => 
        <li><Link to={`application/${el.id}`}>{el.first_name}</Link></li>)}
      </ul>
    );
  }


}

export default ApplicationsIndex;