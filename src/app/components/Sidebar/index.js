
/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'appdir/app';
import Skeleton from 'react-loading-skeleton';
import LinearIcon from 'appdir/components/LinearIcon';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from 'material-ui/List';

/**
 * -----------------------------------------------------------------------------
 * React Component: Sidebar
 * -----------------------------------------------------------------------------
 */
const mapStateToProps = (state, props) => {
    return Object.assign({}, state['Sidebar'], props);
};

const mapDispatchToProps = (dispatch, props) => ({
    mount: (data) => dispatch(actions.Sidebar.mount(data)),
});

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props);
    }

    componentDidMount() {
        this.props.mount({refs: this.refs});
    }

    componentWillReceiveProps(nextProps) {
        this.setState((prevState) => {
            return Object.assign({}, prevState, nextProps);
        });
    }

    renderItems(items) {
        if (items.length < 1) {
            return [0, 1, 2].map((item, i) => {
                return (
                    <ListItem key={'item-' + i}>
                        <Skeleton />
                    </ListItem>
                );
            });
        } else {
            return items.map((item, i) => {
                let icon = (item.hasOwnProperty('icon'))
                    ? (
                        <ListItemIcon>
                            <LinearIcon name={item.icon} className="md" style={this.state.style.text} />
                        </ListItemIcon>
                    )
                    : '';

                let add = (item.hasOwnProperty('new'))
                    ? (
                        <ListItemSecondaryAction>
                            <IconButton aria-label="Delete">
                                <LinearIcon name="plus" className="sm" />
                            </IconButton>
                        </ListItemSecondaryAction>
                    )
                    : '';

                let cname = (item.hasOwnProperty('className')) ? item.className : null;

                return (
                    <ListItem className={cname} button={item.hasOwnProperty('url')} key={'item-' + i}>
                        {icon}
                        <ListItemText primary={item.label} style={this.state.style.text} />
                        {add}
                    </ListItem>
                )
            });
        }
    }

    render() {
        return (
            <aside ref={"sidebar"} style={this.state.style.sidebar}>

                {(this.state.items.top.length > 0)
                    ? (
                        <List style={this.state.style.list}>
                            {this.renderItems(this.state.items.top)}
                        </List>
                    )
                    : ''
                }

                {(this.state.items.top.length > 0 && this.state.items.middle.length > 0)
                    ? (<Divider/>)
                    : ''
                }

                {(this.state.items.middle.length > 0)
                    ? (
                        <List style={this.state.style.list}>
                            {this.renderItems(this.state.items.middle)}
                        </List>
                    )
                    : ''
                }

                {(this.state.items.middle.length > 0 && this.state.items.bottom.length > 0)
                    ? (<Divider/>)
                    : ''
                }

                {(this.state.items.bottom.length > 0)
                    ? (
                        <List style={this.state.style.list}>
                            {this.renderItems(this.state.items.bottom)}
                        </List>
                    )
                    : ''
                }

            </aside>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
