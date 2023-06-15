import { data } from '../mock';
import { CREATE, DELETE, SEARCH, GETVALUE, UPDATE, GETNAME, SAVE } from './types';


export const reducer = (state, action) => {


    switch (action.type) {
        // search
        case SEARCH: return {
            ...state,
            data: data.filter((value) => value.name.toLowerCase().includes(action.payload.toLowerCase()))
        }
        // update
        case UPDATE: return {
            ...state,
            select: action.payload.mock.id,
            title: action.payload.mock.name,
        }
        case GETNAME: return {
            ...state,
            title: action.payload.titleEvent
        }
        case SAVE: return {
            data: state.data.map((value) => value.id === state.select ? { ...value, name: state.title } : value)
        }
        // delete
        case DELETE: return {
            ...state,
            data: state.data.filter((value) => value.id !== action.payload.ids)
        }

        default: return state
    }
};

