const path = require('path');
const fs = require('fs');
// for 1.x
// const defaultVars = require('antd-mobile/lib/style/themes/default');
// for 2.x
const defaultVars = require('antd-mobile-rn/lib/style/themes/default.native');
const customVars = require('../theme');
// for 1.x
// const themePath = path.resolve(require.resolve('antd-mobile'), '../style/themes/default.js');
// for 2.x
const themePath = path.resolve(require.resolve('antd-mobile-rn'), '../style/themes/default.native.js');
const themeVars = Object.assign({}, defaultVars, customVars);

if (fs.statSync(themePath).isFile()) {
  fs.writeFileSync(
    themePath,
    'var brandPrimary = "#108ee9"; var brandPrimaryTap = "#1284d6";module.exports = ' + JSON.stringify(themeVars)
  );
}
