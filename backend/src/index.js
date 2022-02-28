"use strict";

module.exports = {
  async bootstrap() {},
  register({ strapi }) {
    const extensionService = strapi.plugin("graphql").service("extension");

    extensionService.use({
      resolversConfig: {},
    });
  },
};
