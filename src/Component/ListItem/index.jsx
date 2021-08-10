import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ListItem extends Component {
    state = {
        isHover: false
    }

    static propTypes = {
        updateTodo: PropTypes.func.isRequired,
        delTodo: PropTypes.func.isRequired
    }

    render() {
        const {id, task, done} = this.props;
        const {isHover} = this.state;
        return (
            <li onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)} style={{backgroundColor: isHover ? '#888' : '#222'}}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.changeDoneState(id)}/>
                    <span>
                        {task}
                    </span>
                </label>
                <button onClick={()=> this.props.delTodo(id)} className="btn btn-danger" style={{ display: isHover ? 'block' : 'none' }}>Delete</button>
            </li>
        )
    }

    handleMouse = (boolean) => {
        return ()=>{
            this.setState({isHover: boolean});
        }
    }

    changeDoneState = (id)=> {
        return (e)=> {
            this.props.updateTodo(id, e.target.checked);
        }
    }
}
