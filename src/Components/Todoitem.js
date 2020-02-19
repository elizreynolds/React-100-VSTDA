import React, { Component } from 'react';

export default class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
          };
          this.handleCheck = this.handleCheck.bind(this)
        }
      
        handleCheck() {
          this.setState({
            isChecked: !this.state.isChecked
          });
        }
    render() {
        const { title, handleDelete, handleEdit, } = this.props;
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2" type="checkbox" >     
        <div className={this.props.alert}>
        <div className='row'>{title}
          <input className='col-sm-3 col-md-3 col-lg-2 ' type='checkbox' id="checkbox" onClick={this.handleCheck} />
          <div className={this.state.isChecked ? 'col-sm-2 col-md-2 col-lg-2 strike-through' : 'col-sm-2 col-md-2 col-lg-2'}>{this.props.description}</div>
          <div className='col-sm-3 col-md-3 col-lg-3'></div>

                    <span><button className="mx-2 text-success" onClick={handleEdit}>
                        <i className="fas fa-pen" />Edit
                        </button></span>
                        
                       <span> <button className="mx-2 text-danger" onClick={handleDelete}>
                        <i className="fas fa-trash" />Delete
                        </button></span>
                        </div>
                        </div>
                        
                        
            </li>

        
        );
    }
}