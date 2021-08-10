import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './index.css'

export default class Footer extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        clearDone: PropTypes.func.isRequired,
        checkAllTodo: PropTypes.func.isRequired
    }
    
    render() {
        const {todos} = this.props
        const total = todos.length,
              doneItems = todos.reduce((prev, current) => {
                return current.done ? prev + 1 : prev;
              }, 0)

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={doneItems === total && total !== 0}/>
                </label>
                <span>
                    <span>Finish: {doneItems}</span> / Total: {total}
                </span>
                <button onClick={this.clearAllDone} className="btn btn-danger">Delete Finished Task</button>
            </div>
        )
    }

    handleCheckAll = (event)=> {
        this.props.checkAllTodo(event.target.checked)
    }

    clearAllDone = ()=> {
        const doneItem = this.props.todos.reduce((prev, current)=> {
            return prev + (current.done ? 1 : 0);
        }, 0)
        
        if(doneItem === 0) return
        if(window.confirm(`Delete ${doneItem} task${doneItem > 1 ? 's' : ''}?`)) {
            this.props.clearDone();
        }
    }
}
