
/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'appdir/app';
import Drawer from 'material-ui/Drawer';

/**
 * -----------------------------------------------------------------------------
 * React Component: Sidebar
 * -----------------------------------------------------------------------------
 */
const mapStateToProps = (state, props) => {
    return Object.assign({}, state['Sidebar'], props);
};

const mapDispatchToProps = (dispatch, props) => ({
    mount: () => dispatch(actions.Sidebar.mount()),
});

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = Object.assign({}, this.props);
    }

    componentDidMount() {
        this.props.mount();
    }

    componentWillReceiveProps(nextProps) {
        this.setState((prevState) => {
            return Object.assign({}, prevState, nextProps);
        });
    }

    render() {
        let styles = this.state.styles;

        return (
            <div style={styles.drawer}>
                SIDEBAR
            </div>
        );
    }
}

Sidebar.defaultProps = {
    styles: {
        drawer: {

        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
