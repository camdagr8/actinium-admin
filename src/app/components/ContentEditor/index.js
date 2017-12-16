
/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'appdir/app';


/**
 * -----------------------------------------------------------------------------
 * React Component: ContentEditor
 * -----------------------------------------------------------------------------
 */
const mapStateToProps = (state, props) => {
    return Object.assign({}, state['ContentEditor'], props);
};

const mapDispatchToProps = (dispatch) => ({
    mount: () => dispatch(actions.ContentEditor.mount()),
});

class ContentEditor extends Component {
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
            <div>
            Content Editor
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentEditor);
