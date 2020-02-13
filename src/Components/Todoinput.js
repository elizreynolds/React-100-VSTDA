import React, { Component } from 'react';

export default class TodoInput extends Component {
    render() {
        const {item,handleChange,handleSubmit, editItem} = this.props
        return (
           <div className="card card-body my-3">
               <form onSubmit={handleSubmit}>
                   <div className="input-group">
                       <div className="input-group-prepend">
                           <div className="input-group-text bg-primary text-white">
                           </div>
                       </div>
                       <input type="text"  className="form-control" 
                       placeholder="I want to..." 
                       value={item} 
                       onChange={handleChange} />
                   </div>
                   <div>
                   <h5>How much of a priority is this?</h5>
        <select className="browser-default custom-select custom-select-lg mb-3 create-todo-priority" 
                name='priority' 
                value={this.props.priority} 
                onChange={this.props.handleChange}>
                    
          <option defaultValue>Select one below</option>
          <option value="1">High</option>
          <option value="2">Medium</option>
          <option value="3">Low</option>
        </select>
      </div>
                   <button type="submit" 
                   className="btn btn-block btn-primary mt-3"> Add Item </button>
               </form>
           </div>
        );
    }
}