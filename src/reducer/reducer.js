import { ADDONE, ADDTEN, GETVALUE, ADDNUM } from "./types";


export const reducer = (state, action) => {
    switch (action.type) {
        case ADDONE: return {...state, count: state.count + 1};
        case ADDTEN: return {...state, count: state.count + 10};
        case GETVALUE: return {...state, name: action.payload };
        case ADDNUM: return {...state, count: state.count + +state.name}
        default: return state;
    }
}