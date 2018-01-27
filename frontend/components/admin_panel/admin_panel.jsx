import React from "react";

class AdminPanel extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.admin){
      return (<div className="admin-panel">
        <h2>Welcome Admin!</h2>
      </div>)
    }else{
      return (
        <div></div>
      );
    }
  }
}

export default AdminPanel;