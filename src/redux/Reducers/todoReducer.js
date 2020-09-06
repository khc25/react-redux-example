import { ADD_TODO, DELETE_TODO, LOAD_TODO  } from '../Actions/todoAction';


const initialState = {
    datas:[]
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            const {id, content } = action.payload;
            return {
                ...state,
                datas:[...state.datas, {id, content}]
            }
        }

        case DELETE_TODO: {
            const id = action.id;
            return {
                ...state,
                datas:[...state.datas.filter(data => data.id != id)]
            }
        }

        case LOAD_TODO: {
            return {
                ...state,
                datas:[ state.datas.concat([action.payload])]
            }
        }
        default:
            return state;
    }

}