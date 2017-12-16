
/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import React, { Component } from 'react';
import Topbar from 'appdir/components/Topbar';
import Sidebar from 'appdir/components/Sidebar';

/**
 * -----------------------------------------------------------------------------
 * React Component: Chrome
 * -----------------------------------------------------------------------------
 */

class Chrome extends Component {
    constructor(props) {
        super(props);

        this.state = Object.assign({}, this.props);
    }

    componentDidMount() {
        if (this.state.hasOwnProperty('onMount')) {
            this.state.onMount(this);
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState((prevState) => {
            return Object.assign({}, prevState, nextProps);
        });
    }

    render() {
        return (
            <div id="admin-container">
                <Topbar />
                <div className="flex fullwidth fullheight">
                    <Sidebar />
                    <main id="admin-content">
                        {this.props.children}
                    </main>
                </div>
            </div>
        );
    }
}

export default Chrome;
