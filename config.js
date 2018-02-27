'use strict';
module.exports = {
  serviceName: "cart",
  serviceVersion: 1,
  servicePort: 6532,
  serviceGroup: "SOAJS",
  extKeyRequired: false,
  oauth: false,
  urac: false,
  type: "service",
  prerequisites: {
    cpu: '',
    memory: ''
  },
  "errors": {},
  "schema": {
    "get": {
      "/test": {
        "_apiInfo": {
          "l": "Get userId",
          "group": "Basic",
          "groupMain": false
        },
      }
    }
  }
};
