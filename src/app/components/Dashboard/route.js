import Dashboard from './index';
import { actions } from 'appdir/app';

export default {
    order: 1000,
    path: '/admin',
    exact: true,
    component: Dashboard,
    load: params => actions.Dashboard.mount(params),
};
