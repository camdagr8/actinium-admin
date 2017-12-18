import { actionTypes } from 'appdir/app';
import { actions } from 'appdir/app';

export default (state = {}, action) => {

    let newState;

    switch (action.type) {

        case actionTypes.RIBBON_MOUNT:
            newState = Object.assign({}, state, {...action.data}, {...action.state.Sidebar.selected});
            return newState;

        case actionTypes.SIDEBAR_CHANGE:
            newState = Object.assign({}, state, {...action.selected});
            return newState;

        default:
            return state;
    }
};
