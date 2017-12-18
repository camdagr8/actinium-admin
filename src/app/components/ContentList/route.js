import ContentList from './index';
import { actions } from 'appdir/app';

export default {
    order: 1,
    path: '/admin/content',
    exact: false,
    component: ContentList,
    load: params => actions.ContentList.mount(params),
};
