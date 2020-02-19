import React, { Component } from 'react';

export default class TodoInput extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {item ,handleChange, handleSubmit, editItem} = this.props;
        return (
           <div className="card card-body my-3">
               <form onSubmit={handleSubmit}>
                   <div className="input">
                       <div className="input-prepend">
                           <div className="input-group-text bg-primary text-white">
                           </div>
                       </div>
                       <input type="text"  
                       placeholder="I want to..." 
                       value={item} 
                       onChange={handleChange} />
                   </div>
                   <button type="submit" 
    className="btn btn-block btn-primary mt-3"> {editItem ? 'Edit Item' : 'Add Item'} </button>
               </form>
           </div>
        );
    }
}