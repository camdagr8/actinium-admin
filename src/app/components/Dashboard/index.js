
/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'appdir/app';
import Ribbon from 'appdir/components/Ribbon';

/**
 * -----------------------------------------------------------------------------
 * React Component: Dashboard
 * -----------------------------------------------------------------------------
 */
const mapStateToProps = (state, props) => {
    return Object.assign({}, state['Dashboard'], props);
};

const mapDispatchToProps = (dispatch, props) => ({
    mount: () => dispatch(actions.Dashboard.mount(props)),
});

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = Object.assign({}, this.props);
    }

    componentDidMount() {
        this.props.mount(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.setState((prevState) => {
            return Object.assign({}, prevState, nextProps);
        });
    }

    render() {
        return (
            <div className="flex-grow">
                <Ribbon />
                <div>

                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
