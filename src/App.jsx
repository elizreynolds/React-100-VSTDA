import React, { Component } from 'react';
import Todoinput from './components/Todoinput';
import Todolist from './components/Todolist';

import uuid from "uuid";

class App extends Component {
  constructor(props) {
  super(props);
    this.state = {
    items: [],
    id: uuid(),
    item: '', 
    editItem: false,
  }};

handleChange(e) {
  this.setState({ item: e.target.value });
};

handleSubmit(e) {
  e.preventDefault();

const newItem = {
  id: this.state.id,
  title: this.state.item
};


const updatedItems = [...this.state.items, newItem];

this.setState({
  items: updatedItems, 
  item: '',
  id: uuid(),
  editItem: false
});

};
handleDelete(id) {
  const filteredItems = this.state.items.filter(item => item.id !== id);
  this.setState({
    items: filteredItems
  });
};

handleEdit(id) {
  const filteredItems = this.state.items.filter(item => item.id !== id);
  const newItem = {id: this.state.id, title: this.state.item};
  const updatedItems = [...this.state.items, newItem];
  const selectedItem = this.state.items.find(item => item.id === id);
  
  this.setState({
    items: filteredItems, updatedItems,
    item: selectedItem.title,
    editItem: true,
    id: id,
  });
};

  render() {

    return (
      <div className='container'>
        <div className='row'>
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h1>Very Simple Todo App</h1>
            <h3>Keep track of all the things</h3><hr />
          <h3 className="text-capitalize text-center">Add New Todo</h3>
          <Todoinput item={this.state.item} 
          items={this.state.items}
          handleChange={this.handleChange.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
          editItem={this.state.editItem}
          />
          <Todolist item={this.state.item} 
          items={this.state.items}
          handleDelete={this.handleDelete.bind(this)}
          handleEdit={this.handleEdit.bind(this)}
          editItem={this.state.editItem}
          />  
          </div>     
        </div>
      </div> 
    );
  }    
}                

export default App;
