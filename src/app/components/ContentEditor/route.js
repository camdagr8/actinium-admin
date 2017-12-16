import ContentEditor from './index';
import { actions } from 'appdir/app';

export default {
    order: 0,
    path: ['/admin/content/new', '/admin/content/:id'],
    exact: true,
    component: ContentEditor,
    load: params => actions.ContentEditor.mount(params),
};
