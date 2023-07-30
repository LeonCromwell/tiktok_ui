const { override, useBabelRc} = require("customize-cra");

// config-overrides.js
module.exports = override(
    useBabelRc()
  );
  
 