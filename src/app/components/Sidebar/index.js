
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
import List, { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import _ from 'underscore';

/**
 * -----------------------------------------------------------------------------
 * React Component: Sidebar
 * -----------------------------------------------------------------------------
 */
const mapStateToProps = (state, props) => {
    return Object.assign({}, state['Sidebar'], props);
};

const mapDispatchToProps = (dispatch) => ({
    mount: (data) => dispatch(actions.Sidebar.mount(data)),
    navigateTo: (url) => {
        dispatch(actions.Sidebar.navigateTo(url));
    },
    change: (data) => {
        dispatch(actions.Sidebar.change(data));
    }
});

class Sidebar extends Component {
    static isActive(current, paths) {

        paths = (typeof paths === 'string') ? [paths] : paths;

        if (paths.length < 1) {
            return false;
        }

        let cur = current.split('/');
        if (cur[0].length < 1) {
            cur.shift();
        }

        while (paths.length > 0) {

            if (paths[0] === current) {
                return true;
            }

            let path = paths[0].split('/');
            if (path[0].length < 1) {
                path.shift();
            }

            let match = _.intersection(cur, path);
            let per = Math.ceil(Number(Number(match.length) / Number(cur.length)) * 100);

            if (per > 50) {
                return true;
            }

            paths.shift();
        }
    }

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

    onAddClick(data) {
        this.props.change(data);
        this.props.navigateTo(data.new);
    }

    onLinkClick(data) {
        this.props.change(data);
        this.props.navigateTo(data.url);
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
                let onclick = (item.hasOwnProperty('url')) ? this.onLinkClick.bind(this, item) : null;
                let cname = null;

                if (this.state.selected !== null) {
                    cname = (this.state.selected.index === i) ? 'active' : cname;
                }

                let icon = (item.hasOwnProperty('icon'))
                    ? (
                        <ListItemIcon>
                            <LinearIcon name={item.icon} className="md" style={this.state.style.text} />
                        </ListItemIcon>
                    )
                    : '';

                let addBtn = (item.hasOwnProperty('new'))
                    ? (
                        <ListItemSecondaryAction>
                            <IconButton aria-label={`add ${item.label}`} onClick={this.onAddClick.bind(this, item)}>
                                <LinearIcon name="plus" className="sm" />
                            </IconButton>
                        </ListItemSecondaryAction>
                    )
                    : '';

                return (
                    <ListItem className={cname} button={item.hasOwnProperty('url')} key={'item-' + i} onClick={onclick}>
                        {icon}
                        <ListItemText primary={item.label} style={this.state.style.text} />
                        {addBtn}
                    </ListItem>
                )
            });
        }
    }

    render() {
        return (
            <aside ref={"sidebar"} style={this.state.style.sidebar} id="admin-sidebar">
                <List style={this.state.style.list}>
                    {this.renderItems(this.state.items)}
                </List>
            </aside>
        );
    }
}

export const selected = (current, items) => {
    let output = null;

    for (let i = 0; i < items.length; i++) {
        let paths    = [];
        let item     = items[i];

        if (item.hasOwnProperty('url')) { paths.push(item.url); }
        if (item.hasOwnProperty('new')) { paths.push(item.new); }

        if (Sidebar.isActive(current, paths) === true) {
            item['index'] = i;
            output = item;
            break;
        }
    }

    output = (output === null) ? Object.assign({}, items[0], {index: 0}) : output;

    return output;
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
