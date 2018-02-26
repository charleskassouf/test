'use strict';
module.exports = {
  serviceName: "cart",
  serviceVersion: 1,
  servicePort: 6531,
  serviceGroup: "SOAJS ",
  extKeyRequired: true,
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
      "/test/:userId": {
        "_apiInfo": {
          "l": "Get userId",
          "group": "Basic",
          "groupMain": false
        },
      }
    }
  }
};
