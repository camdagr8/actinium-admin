import { actionTypes } from 'appdir/app';
import { services } from 'appdir/app';

export default {
    mount: (data) => (dispatch, getState) => {
        dispatch({type: actionTypes.RIBBON_MOUNT, data: data, state: getState()});
    },
};
