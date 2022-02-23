"use strict";

const boostrap = require("./bootstrap");

module.exports = {
  async bootstrap() {
    await boostrap();
  },
  register({ strapi }) {
    const extensionService = strapi.plugin("graphql").service("extension");

    extensionService.use({
      resolversConfig: {
        "Query.products": {
          /**
           * Querying the Products content-type
           * bypasses the authorization system.
           */
          auth: false,
        },
        "Query.categories": {
          /**
           * Querying the Categories content-type
           * requires the find permission
           * on the 'Address' content-type
           * of the 'Address' API
           */
          auth: false,
        },
      },
    });
  },
};
