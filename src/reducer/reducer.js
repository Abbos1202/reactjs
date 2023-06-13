// import { INCREMENT, DECREMENT } from "./types";
import { data } from '../mock';
import { CREATE, DELETE, SEARCH } from './types';


export const abbosReducer = (state, action) => {

    console.log(action.payload);

    switch (action.type) {
        // delete
        case DELETE: return state.filter((value) => value.id !== action.payload.ids);
        // search
        case SEARCH: return data.filter((value) => value.name.toLowerCase().includes(action.payload.toLowerCase()));
        // create
        case CREATE: return [...state, {
            id: state.length + 1,
            name: action.payload.name,
        }]
        default: return state
    }
};



// export const reducer = (state, action) => {
//     //  console.log(action.type);
//     //  console.log(state);
//     // console.log(action);
//     console.log(action.payload);
//     switch (action.type) {
//         //   case INCREMENT: return state = state + 1;
//         //   case DECREMENT: return state = state > 0 ? state - 1 : state;
//         case INCREMENT: return state = action.payload;
//         case DECREMENT: return state = action.payload;
//         default: return state;
//     }
// }