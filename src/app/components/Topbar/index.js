
/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'appdir/app';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Badge from 'material-ui/Badge';
import Theme from 'appdir/components/Theme';
import LinearIcon from 'appdir/components/LinearIcon';
import { MuiThemeProvider } from 'material-ui/styles';


/**
 * -----------------------------------------------------------------------------
 * React Component: Topbar
 * -----------------------------------------------------------------------------
 */

const mapStateToProps = (state, props) => {
    return Object.assign({}, state['Topbar'], props);
};

const mapDispatchToProps = (dispatch, props) => ({
    mount: () => dispatch(actions.Topbar.mount()),

    menuToggle: () => dispatch(actions.Sidebar.toggle()),
});

class Topbar extends Component {
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

    menuToggle() {
        this.props.menuToggle();
    }

    render() {
        let styles = this.state.styles;
        return (
            <MuiThemeProvider theme={Theme}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton style={styles.menuButton} color="contrast" aria-label="Menu" onClick={this.menuToggle.bind(this)}>
                            <LinearIcon name="menu" />
                        </IconButton>
                        <Typography type="title" color="inherit" style={styles.flex}>
                            {this.state.title}
                        </Typography>
                        <Button style={styles.userButton} color="contrast" aria-label="User">
                            {(this.state.badge)
                                ? (
                                    <Badge badgeContent={this.state.badge} color="accent" style={styles.badge} >
                                        <div style={styles.flexbox}>
                                            <LinearIcon name={(this.state.username) ? 'user' : 'lock'} />
                                            <Typography type="button" color="inherit" style={styles.userName}>
                                                {this.state.username || this.state.signin}
                                            </Typography>
                                        </div>
                                    </Badge>
                                )
                                : (
                                    <div style={styles.flexbox}>
                                        <LinearIcon name={(this.state.username) ? 'user' : 'lock'} />
                                        <Typography type="button" color="inherit" style={styles.userName}>
                                            {this.state.username || this.state.signin}
                                        </Typography>
                                    </div>
                                )
                            }
                        </Button>
                    </Toolbar>
                </AppBar>
            </MuiThemeProvider>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
