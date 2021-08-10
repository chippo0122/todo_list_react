import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListItem from '../ListItem'
import './index.css'

export default class List extends Component {
    static propTypes = {
        updateTodo: PropTypes.func.isRequired,
        delTodo: PropTypes.func.isRequired
    }

    render() {
        const {todos, updateTodo, delTodo} = this.props;
        return (
            <ul className="todo-main">
               {
                   todos.map(el => {
                       return <ListItem delTodo={delTodo} updateTodo={updateTodo} {...el} key={el.id}/>
                   })
               }
            </ul>
        )
    }
}
