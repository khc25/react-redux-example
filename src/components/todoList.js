import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DeleteTodoActionThunk, LoadTodoActionThunk } from '../redux/Actions/todoAction'

class TodoList extends Component {
    constructor(props) {
        super(props);
        //state from subcomponent
        this.state = {

        }
    }
    //load something before render
    componentDidMount() {
        //load
        this.props.LoadTodoActionThunk()
    }
    
    handleDelete = e => {
        const id = e.target.id;
        this.props.delete(id);
    }



    render() {
        console.log(this.props.dataFromReducer)
        const mapping = this.props.dataFromReducer.map(rows => {
            return (
                <div>
                    <div>{rows.id}</div>
                    <div>{rows.content}</div>
                    <button id={rows.id} onClick={this.handleDelete}>delete</button>
                </div>
            )
        })
        return (
            <h1>{mapping}</h1>
        )
    }
}

//state from store
const mapStateToProps = state => {
    //call state from store
    console.log(state);

    //put into props
    return {
        dataFromReducer: state.todoReducer.datas
    }
}

const mapDispatchToProps = dispatch => {
    return {
        delete: (id)=> {
            dispatch(DeleteTodoActionThunk(id))
        },
        //load
        LoadTodoActionThunk
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
