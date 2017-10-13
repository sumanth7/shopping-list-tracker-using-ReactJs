import React, { Component } from 'react';

class ListItem extends Component {

    constructor(props) {
	super(props);
	this.state = { toggle: true };
    }

    handleClick() {
   this.setState({toggle : !this.state.toggle})
    }

  render() {
    var item = this.props.item;
    var name = item.name;
   var colour = this.state.toggle?'black' :'grey';
    return (
	    <span onClick={this.handleClick.bind(this)} style={{color: colour}}>
        <strong>{name}</strong>
      </span>
    );

  }

}
export default ListItem;
