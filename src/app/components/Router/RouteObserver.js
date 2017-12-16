import React, { Component } from 'react';
import { connect } from 'react-redux';
import { matchPath, withRouter } from 'react-router'
import { actions, routes } from 'appdir/app';

class RouteObserver extends Component {
    /**
     * When route updates, find matching route and dispatch update.
     * @see actions to see how to load data on route changes
     * e.g. appdir/product-page/route
     */
    processRoute() {
        const { location, Router, updateRoute, history } = this.props;

        if ( ! Router.pathname || location.pathname !== Router.pathname ) {
            let [ route ] = Object.keys(routes).map(r => routes[r]).filter(route => {
                let match = matchPath(location.pathname, route);
                return match && match.isExact;
            });

            if ( location ) {
                let routeParams = matchPath(location.pathname, route).params;

                updateRoute(
                    location,
                    route,
                    routeParams,
                    history,
                );
            }
        }
    }

    componentDidMount() {
        this.processRoute();
    }

    componentDidUpdate() {
        this.processRoute();
    }

    render() {
        return null;
    }
}

const initialState = {
    Router: {
        pathname: false,
    },
};

const mapStateToProps = ({Router = {
    pathname: false
}}) => ({
    ...initialState,
    Router,
});

const mapDispatchToProps = dispatch => ({
    updateRoute: (location, route, params, history) => dispatch(actions.Router.updateRoute(location, route, params, history)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RouteObserver));
