/* jshint node: true */
'use strict';

const getConfig = (config) => `<script>
  (function() {
    // put APP-config here
  })();
</script>`;

module.exports = {
  name: 'config-to-html',

  contentFor(type, config) {
    if (type === 'config') {
      return getConfig(config);
    }
  }
};
