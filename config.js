'use strict';

module.exports = {
    serviceName: "test",
    serviceVersion: 1,
    servicePort: 5456,
    extKeyRequired: false,
	oauth:false,
    type: "service",
    prerequisites: {
        cpu: '',
        memory: ''
    },
    "errors": {
        400: "Error Executing Operations!",
        401: "Entry not found!",
        402: "Error fetching Entries!",
        403: "Error Deleting Entry!",
        404: "Error Adding Entry!",
        405: "Error Updating Entry!",
    },
    "schema": {
        "commonFields": {
            "id": {
                "source": ['params.id'],
                "required": false,
                "validation": {
                    "type": "string"
                }
            },
            "model": {
                "source": ['query.model'],
                "required": false,
                "default": "memory",
                "validation": {
                    "type": "string",
                    "enum": ["memory", "mongo"]
                }
            }
        },
        "get": {
            "/contact/:id": {
                "_apiInfo": {
                    "l": "Get contact by ID",
                    "group": "Basic",
                    "groupMain": false
                },
                "commonFields": ["id", "model"]
            },
          "/contacts/:id": {
            "_apiInfo": {
              "l": "Get contact by ID",
              "group": "Basic",
              "groupMain": false
            },
            "commonFields": ["id", "model"]
          },
        },
    }
};
