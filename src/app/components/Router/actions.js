import { actionTypes } from 'appdir/app';

export default {
    updateRoute: (location, route = {}, params, history) => (dispatch, getState) => {
        let state = getState();
        const { Router } = state;

        if ( Router.pathname !== location.pathname ) {
            window.scrollTo(0,0);
        }

        dispatch({
            type: actionTypes.UPDATE_ROUTE,
            location,
            history,
        });

        // load route data
        if ( 'load' in route ) {
            dispatch(route.load(params));
        }
    },
};
