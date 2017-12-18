import { actionTypes } from 'appdir/app';
import { selected } from './index';
import { actions } from 'appdir/app';

export default (state = {}, action) => {

    let newState;

    switch (action.type) {
        case actionTypes.UPDATE_ROUTE:
            let { history, location } = action;
            let sel = selected(location.pathname, state.items);
            newState = Object.assign({}, state, {
                location,
                history,
                selected: sel
            });

            return newState;

        case actionTypes.SIDEBAR_MOUNT:
            newState = Object.assign({}, state, {...action.data});
            return newState;

        case actionTypes.SIDEBAR_ANIMATING:
            newState = Object.assign({}, state, {animating: true});
            return newState;

        case actionTypes.SIDEBAR_CLOSED:
            newState = Object.assign({}, state, {animating: false, status: 'closed'});
            return newState;

        case actionTypes.SIDEBAR_OPENED:
            newState = Object.assign({}, state, {animating: false, status: 'opened'});
            return newState;

        case actionTypes.SIDEBAR_CHANGE:
            newState = Object.assign({}, state, {selected: action.selected});
            return newState;

        case actionTypes.SIDEBAR_NAVIGATE_TO:
            newState = Object.assign({}, state, {url: action.url});
            return newState;

        default:
            return state;
    }
};
