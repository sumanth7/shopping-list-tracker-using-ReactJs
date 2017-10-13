import React, { Component } from 'react';

class AddList extends Component {
  constructor(props){
    super(props);
    this.state={val:""};
    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }


  handleChange(e){
    this.setState({val:e.target.value});
  }
  handleSubmit(e) {
      e.preventDefault(); // this prevents the page from reloading -- do not delete this line!
  //  console.log(this.state.val);
    this.props.addList(this.state.val);

  }

  render() {
    return (
      <div id="addListDiv">
      <form onSubmit={this.handleSubmit}>
      <div id='addList'>
      <label>What will be on your next list?&nbsp;
      <input type='text' ref='id' id='newID' onChange={this.handleChange}></input>
      </label>
      </div><br />
      <input type='submit' value='Create List' />
      </form>
      </div>
    );
  }
}

export default AddList;
