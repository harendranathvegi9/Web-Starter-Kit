import { layout } from '../../components/layout';

import template from './home.html';
import data from './home.json';

export const home = () => {
  page('/', () => {
    layout('home', template(data));
    componentHandler.upgradeAllRegistered();
  });
};
