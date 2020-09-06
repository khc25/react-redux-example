import axios from 'axios'

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO"
export const LOAD_TODO = "LOAD_TODO"



let nextTodoId = 0;

//action to store
export const AddTodoAction = content => {
    return {
        type: ADD_TODO,
        payload: {
            id: ++nextTodoId,
            content: content,
        }
    }
};

//send request to server and send action
export const AddTodoActionThunk = content => {
    return (dispatch) => {
        axios.post(`${process.env.SERVER}`, { content: content }).then(res => {
            console.log(res);
            dispatch(AddTodoAction(content))
        })
    }
}



export const DeleteTodoAction = id => {
    return {
        type: DELETE_TODO,
        id: id,
    }
}

export const DeleteTodoActionThunk = id => {
    return (dispatch) => {
        axios.delete(`${process.env.SERVER}`, 
        {
             id: id 
        }).then(res => {
            console.log(res);
            dispatch(DeleteTodoAction(id));
        })
    }
}


export const LoadTodoAction = (payload) => {
    return {
        type: LOAD_TODO,
        payload : payload
    }
}

export const LoadTodoActionThunk = () => {
    return (dispatch) => {
        axios.get(`${process.env.SERVER}`).then(res => {
            console.log(res);
            const payload = res.data
            // send data from server to action -> reducer -> store
            dispatch(LoadTodoAction(payload))
        })
    }
}

