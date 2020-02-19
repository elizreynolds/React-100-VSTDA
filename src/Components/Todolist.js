import React, { Component } from 'react';
import Todoitem from './Todoitem';

export default class TodoInput extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {items, handleDelete, handleEdit, editItem } = this.props;
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
                    
           </ul>
                  );
    }
}