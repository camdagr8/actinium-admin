/**
 Sidebar Initial State
*/
import * as Color from 'material-ui/colors';

const maxWidth = 280;
const minWidth = 70;

export default {
    maxWidth: maxWidth,
    minWidth: minWidth,
    status: 'opened',
    animating: false,
    style: {
        text: {
        },
        sidebar: {
            width: maxWidth,
            minWidth: minWidth,
            maxWidth: maxWidth,
            height: '100%',
            color: '#DFDFDF',
            backgroundColor: Color.blueGrey[900],
        },
        list: {
            width: maxWidth,
        }
    },
    items: {
        top: [
            {
                "index": 0,
                "label": "Dashboard",
                "url": "/admin",
                "icon": "desktop",
                "className": "active",
            },
        ],
        middle: [
            {
                "index": 10,
                "label": "Pages",
                "new": "/admin/page",
                "url": "/admin/pages",
                "icon": "file-empty",
            },
            {
                "index": 11,
                "label": "Templates",
                "new": "/admin/template",
                "url": "/admin/templates",
                "icon": "file-code",
            },
        ],
        bottom: [
            {
                "index": 12,
                "label": "Users",
                "new": "/admin/user",
                "url": "/admin/users",
                "icon": "users2",
            }
        ],
    }
};
