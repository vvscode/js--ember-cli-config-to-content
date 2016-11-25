/* jshint node: true */
'use strict';

const getConfig = ({APP}) => `(
  ${JSON.stringify(APP, null, 2)}
)`;

module.exports = {
  name: 'config-to-html',

  contentFor(type, config) {
    if (type === 'config') {
      return getConfig(config);
    }
  }
};
