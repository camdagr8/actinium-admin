import { actionTypes } from 'appdir/app';
import { services } from 'appdir/app';
import { TweenMax, Power2 } from 'gsap';


const animation = (elm, width, callback) => {
    TweenMax.to(elm, .2, {
        width: width,
        ease: Power2.easeInOut,
        onComplete: callback
    });
};

const open = (dispatch, getState, animate) => {
    let state    = getState().Sidebar;
    let elm      = state.refs.sidebar;
    let width    = window.getComputedStyle(elm, null).getPropertyValue('max-width');

    if (state.animating === true) {
        return;
    }

    if (animate === true) {
        dispatch({type: actionTypes.SIDEBAR_ANIMATING});
        animation(elm, width, function () { dispatch({type: actionTypes.SIDEBAR_OPENED}); });
    } else {
        TweenMax.set(elm, {width: width});
        dispatch({type: actionTypes.SIDEBAR_OPENED});
    }
};

const close = (dispatch, getState, animate) => {
    let state    = getState().Sidebar;
    let elm      = state.refs.sidebar;
    let width    = window.getComputedStyle(elm, null).getPropertyValue('min-width');

    if (state.animating === true) {
        return;
    }

    if (animate === true) {
        dispatch({type: actionTypes.SIDEBAR_ANIMATING});
        animation(elm, width, function () { dispatch({type: actionTypes.SIDEBAR_CLOSED}); });
    } else {
        TweenMax.set(elm, {width: width});
        dispatch({type: actionTypes.SIDEBAR_CLOSED});
    }
};


export default {
    mount: (data) => (dispatch, getState) => {
        dispatch({type: actionTypes.SIDEBAR_MOUNT, data: data});

        let state = getState().Sidebar;
        if (state.status !== 'opened') {
            close(dispatch, getState);
        }
    },

    toggle: () => (dispatch, getState) => {
        let state = getState().Sidebar;

        if (state.animating === true) {
            return;
        }

        if (state.status === 'opened') {
            close(dispatch, getState, true);
        } else {
            open(dispatch, getState, true);
        }
    },

    close: (animate) => (dispatch, getState) => {
        close(dispatch, getState, animate);
    },

    open: (animate) => (dispatch, getState) => {
        open(dispatch, getState, animate);
    },

    navigateTo: (url) => (dispatch, getState) => {
        let state = getState().Sidebar;
        state.history.push(url);
    }
};
