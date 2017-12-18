
/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'appdir/app';
import Ribbon from 'appdir/components/Ribbon';
import LinearIcon from 'appdir/components/LinearIcon';
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';

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

    onCollapseToggle(e, expanded) {
        log(expanded);
    }

    render() {
        let self = this;
        return (
            <div>
                <Ribbon />
                <div className="hbox">
                    <div className="vbox" style={{width: 320, overflowY: 'auto'}}>
                        <div>
                            Top
                        </div>
                        <div>
                            middle
                        </div>
                    </div>
                    <div className="panel">
                        Preview
                    </div>
                    <div className="affix-bottom" style={{width: 320}}>
                        Bottom Bar
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentEditor);
