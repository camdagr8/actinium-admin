/**
 Sidebar Initial State
*/
import * as Color from 'material-ui/colors';

const maxWidth = 280;
const minWidth = 62;

export default {
    maxWidth: maxWidth,
    minWidth: minWidth,
    status: 'opened',
    animating: false,
    selected: null,
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
    items: [
        {
            "label": "Dashboard",
            "url": "/admin",
            "icon": "desktop",
        },
        {
            "label": "Content",
            "new": "/admin/content/new",
            "url": "/admin/content",
            "icon": "folder",
            "items": [
                {"label": "Pages", "type": "page", "icon": "file-empty"},
                {"label": "Posts", "type": "post", "icon": "document2"},
            ]
        },
        {
            "label": "Media Library",
            "url": "/admin/media-library",
            "icon": "camera2",
        },
        {
            "label": "Users",
            "new": "/admin/user",
            "url": "/admin/users",
            "icon": "users2",
        },
        {
            "label": "Settings",
            "url": "/admin/settings",
            "icon": "equalizer",
        },
    ],
};
