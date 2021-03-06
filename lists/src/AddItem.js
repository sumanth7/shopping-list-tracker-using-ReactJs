import React, { Component } from 'react';

class AddItem extends Component {

  constructor(props) {
    super(props);
    this.state = {

      newItem:{}
    }
  }

handleitemchange(e){

//var y = this.state.name;

  this.setState({newItem: e.target.value});
}
  handleSubmit(e) {
      e.preventDefault(); // this prevents the page from reloading -- do not delete this line!
    this.props.addItem(this.state.newItem,this.props.idName);

  }


  render() {
    var divName = 'add' + this.props.idName;
    return (
      <div className='addItemDiv'>
      <h4>Add {this.props.idName}</h4>
      <form ref='form' onSubmit={this.handleSubmit.bind(this)}>
      <div id={divName} ref={divName}>
        <label>Name</label><br />
        <input type='text' ref='id' onChange={this.handleitemchange.bind(this)} />
        </div>
        <br />
        <input type='submit' value='Submit' />
        <br />
      </form>
      </div>
    );
  }

}

export default AddItem;
