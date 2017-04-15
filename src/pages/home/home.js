import { layout } from '../../components/layout';

import template from './home.html';
import data from './home.json';

import { fileUpload } from '../../components/file-upload';

export const home = () => {
  page('/', () => {
    layout(template(data));
    fileUpload('example-1');
    fileUpload('example-2', 'Choose a file');
    componentHandler.upgradeAllRegistered();
  });
};
