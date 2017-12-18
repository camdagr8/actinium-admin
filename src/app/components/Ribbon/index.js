
/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'appdir/app';
import LinearIcon from 'appdir/components/LinearIcon';
import Typography from 'material-ui/Typography';


/**
 * -----------------------------------------------------------------------------
 * React Component: Ribbon
 * -----------------------------------------------------------------------------
 */
const mapStateToProps = (state, props) => {
    return Object.assign({}, state['Ribbon'], props);
};

const mapDispatchToProps = (dispatch) => ({
    mount: (props) => dispatch(actions.Ribbon.mount(props)),
});

class Ribbon extends Component {
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

        return (
            <header className="ribbon">
                <LinearIcon name={this.state.icon} style={{fontSize: 42}} />
                <Typography type="headline">{this.state.label}</Typography>
            </header>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ribbon);
