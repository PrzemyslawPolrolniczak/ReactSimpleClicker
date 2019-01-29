import { INCREMENT, DECREMENT } from '../actions/action-types'; 

export default (state, action) => {
    switch(action.type) {
        case "rotate":
            return {
                ...state,
                rotating: action.payload
            }
        case INCREMENT:
            return {
                ...state,
                points: state.points + 1
            }
        case DECREMENT:
            return {
                ...state,
                points: state.points + 1
            }
        default:
            return state;
    }
}