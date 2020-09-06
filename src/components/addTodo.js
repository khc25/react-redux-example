import React , { Component } from 'react';
import { connect } from 'react-redux';
import { AddTodoActionThunk } from '../redux/Actions/todoAction'


class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    handleChange = e => {
        let data = e.target.value
        this.setState({
            data
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        //AddTodoAction(this.state.data)
        this.props.add(this.state.data);
        //axuis
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Add Todo</button>
            </div>
        )
    }
}


// const mapStateToProps //load data

const mapDispatchToProps = (dispatch) => {
    //put add method into props
    return { //like object
        add: (content) => {
            //dispatch to Action
            dispatch(AddTodoActionThunk(content))
        }
    }
    
}; // send data

// export default AddTodo;

export default connect(null, mapDispatchToProps)(AddTodo);