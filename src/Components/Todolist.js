import React, { Component } from 'react';
import Todoitem from './Todoitem';

export default class TodoInput extends Component {
    render() {
        const {items, handleDelete, handleEdit } = this.props;
        return (
           <ul className="list-group mt-5">
               <h3 className="text-caapitalize text-center">View Todo List</h3>
              {items.map(item => {
                      return ( 
                      <Todoitem 
                      key={item.id} 
                      title={item.title} 
                      handleDelete={()=> handleDelete(item.id)}
                      handleEdit={()=> handleEdit(item.id)}
                      />
                    );
                  })} 
           <button 
            type="button" 
            className="btn btn-danger btn-block text-capitalize mt-5">Save</button>
           </ul>
        );
    }
}