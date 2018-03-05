"use strict";

module.exports = {
  "name": "core_provision",
  "prefix": "",
  "servers": [
    {
      "host": "dashboard-soajsdata",
      "port": "27017"
    }
  ],
  "credentials": null,
  "streaming": {
    "batchSize": 10000,
    "colName": {
      "batchSize": 10000
    }
  },
  "URLParam": {
    "poolSize": 5,
    "bufferMaxEntries": -1
  }
};
