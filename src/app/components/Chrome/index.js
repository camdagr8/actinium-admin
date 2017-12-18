
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
    render() {
        return (
            <div id="admin-container">
                <Topbar />
                <Sidebar/>
                <main id="admin-content">
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Chrome;
