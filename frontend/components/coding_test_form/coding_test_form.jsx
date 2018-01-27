import React from "react";

class CodingTestForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: "",
      application_id: this.props.appId
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type){
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createTest(this.state);
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit} action="">
           Test 
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <input type="submit" value={"Submit Test"}/>
        </form>
      </div>
    );
  }
}

export default CodingTestForm;