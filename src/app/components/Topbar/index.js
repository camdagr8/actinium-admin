
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
import Person from 'material-ui-icons/Person';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Badge from 'material-ui/Badge';
import Theme from 'appdir/components/Theme';
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

    render() {
        let styles = this.state.styles;

        return (
            <MuiThemeProvider theme={Theme}>
                <header style={styles.root}>
                    <AppBar position="fixed" style={styles.topbar} >
                        <Toolbar>
                            <IconButton style={styles.menuButton} color="contrast" aria-label="Menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography type="title" color="inherit" style={styles.flex}>
                                {this.state.title}
                            </Typography>
                            <Button style={styles.userButton} color="contrast" aria-label="User">
                                {(this.state.badge)
                                    ? (
                                        <Badge badgeContent={this.state.badge} color="accent" style={styles.badge} >
                                            <div style={styles.flexbox}>
                                                <Person />
                                                <Typography type="button" color="inherit" style={styles.userName}>
                                                    {this.state.username || this.state.signin}
                                                </Typography>
                                            </div>
                                        </Badge>
                                    )
                                    : (
                                        <div style={styles.flexbox}>
                                            <Person />
                                            <Typography type="button" color="inherit" style={styles.userName}>
                                                {this.state.username || this.state.signin}
                                            </Typography>
                                        </div>
                                    )
                                }
                            </Button>
                        </Toolbar>
                    </AppBar>
                </header>
            </MuiThemeProvider>
        );
    }
}

Topbar.defaultProps = {
    title: 'Actinium',
    signin: 'Sign In',
    badge: 99,
    styles: {
        badge: {
            marginRight: -10,
            paddingRight: 15,
        },
        topbar: {
            zIndex: Theme.zIndex.navDrawer + 1
        },
        root: {
            width: '100%',
        },
        flex: {
            flex: 1,
        },
        flexbox: {
            display: 'flex',
            alignItems: 'center',
        },
        menuButton: {
            marginLeft: -12,
            marginRight: 20,
        },
        userButton: {
            marginLeft: 20,
            marginRight: -12,
        },
        userName: {
            marginLeft: 10,
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
