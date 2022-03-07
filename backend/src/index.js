"use strict";

module.exports = {
  async bootstrap() {},
  register({ strapi }) {
    const extensionService = strapi.plugin("graphql").service("extension");

    extensionService.use({
      resolversConfig: {
        "Query.collections": {
          auth: false,
        },
        "Query.collection": {
          auth: false,
        },
        "Query.products": {
          auth: false,
        },
        "Query.product": {
          auth: false,
        },
        "Query.pages": {
          auth: false,
        },
        "Query.categories": {
          auth: false,
        },
        "Query.category": {
          auth: false,
        },
      },
    });
  },
};
