import React, { Component } from 'react'
import Header from './Component/Header'
import List from './Component/List'
import Footer from './Component/Footer'
import './App.css'

export default class App extends Component {
    state = {
        todos: []
    }

    componentDidMount() {
        let list = JSON.parse(localStorage.getItem('react_todo_list'));
        if(list) {
            this.setState({todos: list});
        }
    }

    render() {
        const { todos } = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <h1 className="title">To do List</h1>
                    <Header appGetData={this.appGetData} />
                    <List delTodo={this.delTodo} updateTodo={this.updateTodo} todos={todos} />
                    <Footer clearDone={this.clearDone} checkAllTodo={this.checkAllTodo} todos={todos} />
                </div>
            </div>
        )
    }

    appGetData = (item) => {
        const { todos } = this.state;
        const newTodos = [item, ...todos];
        
        localStorage.setItem('react_todo_list', JSON.stringify(newTodos));
        this.setState({ todos:  newTodos});
    }
    //透過props將該函式傳入header子組件並且將其內部資料，透過props的this向外傳遞給App組件, 於VUE中則由emit實現

    updateTodo = (id, done) => {
        const { todos } = this.state;
        const newTodos = todos.map(el => {
            if (el.id === id) {
                return { ...el, done }
            } else {
                return el
            }
        })

        localStorage.setItem('react_todo_list', JSON.stringify(newTodos));
        this.setState({ todos: newTodos })
    }
    //透過props將該函式傳入header子組件並且將其內部資料，透過props的this向外傳遞給App組件, 於VUE中則由emit實現

    delTodo = (id) => {
        if (window.confirm('Delete Pernemently?')) {
            const { todos } = this.state;
            const newTodos = todos.filter(el => {
                return id !== el.id
            })

            localStorage.setItem('react_todo_list', JSON.stringify(newTodos));
            this.setState({ todos: newTodos });
        }
    }

    checkAllTodo = (done) => {
        const {todos} = this.state;
        const newTodos = todos.map(el => {
            return {...el, done}
        })

        localStorage.setItem('react_todo_list', JSON.stringify(newTodos));
        this.setState({todos: newTodos});
    }

    clearDone = ()=> {
        const {todos} = this.state;
        const newTodos = todos.filter(el => {
            return !el.done
        })

        localStorage.setItem('react_todo_list', JSON.stringify(newTodos));
        this.setState({todos: newTodos})
    }
}

