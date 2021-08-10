import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {
    static propTypes = {
        appGetData: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="Please insert your Task, and Press Enter Key" />
            </div>
        )
    }

    handleKeyUp = (e) => {
        let { target, code } = e;

        if(code !== 'Enter') return
        if(target.value === '') {
            alert("Insertion shouldn't be blanked");
            return
        }

        const item = {
            id: nanoid(),
            task: target.value,
            done: false
        }
        this.props.appGetData(item);
        target.value = '';
    }
}
