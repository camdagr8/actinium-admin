
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
 * React Component: ContentList
 * -----------------------------------------------------------------------------
 */
const mapStateToProps = (state, props) => {
    return Object.assign({}, state['ContentList'], props);
};

const mapDispatchToProps = (dispatch) => ({
    mount: () => dispatch(actions.ContentList.mount()),
});

class ContentList extends Component {
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
            <div className="flex-grow">
                <Ribbon />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentList);
