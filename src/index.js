import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Hello extends Component {
  render(){
    var place = "Seoul";
    return(
      <h1>Hello {place}</h1>
    );
  }
}

class GroceryList extends Component{
  render(){
    return(
      <ul>
        <ListItem quantity='1' name="Bread" />
        <ListItem quantity='3' name="Eggs" />
        <ListItem quantity='5' name="milk" />
      </ul>
    );
  }
}


class ListItem extends Component{
  render(){
    return(
      <li>{this.props.quantity} x {this.props.name}</li>
    )
  }
}



 ReactDOM.render(<GroceryList />, document.getElementById('root'));
