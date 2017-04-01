import bem from 'posthtml-bem';
import inlineAssets from 'posthtml-inline-assets';
import include from 'posthtml-include';
import mixins from 'posthtml-mixins';
import extend from 'posthtml-extend';
import expressions from 'posthtml-expressions';
import minifier from 'posthtml-minifier';

import { ASSETS_ROOT } from '../constants';

export default {
  plugins: [
    bem({ elemPrefix: '__', modPrefix: '--', modDlmtr: '-' }),
    inlineAssets({
      from: ASSETS_ROOT,
      inline: {
        images: {
          then(node, data) {
            node.tag = 'img';
            node.attrs.src = `data:${data.mime};base64,${data.buffer.toString('base64')}`;
          }
        },
        medias: {
          then(node, data) {
            node.tag = 'source';
            node.attrs.src = `data:${data.mime};base64,${data.buffer.toString('base64')}`;
          }
        }
      }
    }),
    include(),
    mixins(),
    extend(),
    expressions(),
    minifier({
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeComments: true
    })
  ],
  template: true
};
