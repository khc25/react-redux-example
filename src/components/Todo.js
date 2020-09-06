import React, { Component } from 'react'
import AddTodo from './addTodo';
import TodoList from './todoList'

class Todo extends Component {
    constructor(props){
        super(props)
    }

    render () {
        return (
            <div>
            <h1>Todo List</h1>
            <AddTodo />
            <TodoList />
            </div>
        )
    }
}

export default Todo