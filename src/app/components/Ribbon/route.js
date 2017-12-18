import Ribbon from './index';
import { actions } from 'appdir/app';

export default {
    path: 'n',
    exact: true,
    component: Ribbon,
    load: params => actions.Ribbon.mount(params),
};
