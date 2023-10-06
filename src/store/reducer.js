import defaultState from "./store"
import * as ACTIONS from "./actions";

export function reducer(state = defaultState, action) {
    switch (action.type) {
        case ACTIONS.CHANGE_SERVICE:
            return {...state, service: action.payload};
        default:
            return state;
    }
}