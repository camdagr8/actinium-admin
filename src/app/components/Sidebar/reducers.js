import { actionTypes } from 'appdir/app';

export default (state = {}, action) => {

    let newState;

    switch (action.type) {

        case actionTypes.SIDEBAR_MOUNT:
            newState = Object.assign({}, state, {...action.data});
            return newState;
            break;

        case actionTypes.SIDEBAR_ANIMATING:
            newState = Object.assign({}, state, {animating: true});
            return newState;

        case actionTypes.SIDEBAR_CLOSED:
            newState = Object.assign({}, state, {animating: false, status: 'closed'});
            return newState;

        case actionTypes.SIDEBAR_OPENED:
            newState = Object.assign({}, state, {animating: false, status: 'opened'});
            return newState;

        default:
            return state;
    }
};
