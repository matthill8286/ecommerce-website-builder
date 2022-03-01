const axios = require("axios");

module.exports = async (ctx, next) => {
  if (ctx.request && ctx.request.header && ctx.request.header.authorization) {
    try {
      const { id, isAdmin = false } = await strapi.plugins[
        "users-permissions"
      ].services.jwt.getToken(ctx);

      console.log(">> logging", { id, isAdmin });
    } catch (err) {
      try {
        const data = await axios({
          method: "post",
          url: `http://localhost:1337/userinfo`,
          headers: {
            Authorization: ctx.request.header.authorization,
          },
        });

        console.log(">> logging data", {
          data,
          auth: ctx.request.header.authorization,
        });

        // if you want do more validation test
        // feel free to add your code here.

        return await next();
      } catch (error) {
        return handleErrors(
          ctx,
          new Error("Invalid token: Token did not match with Strapi"),
          "unauthorized"
        );
      }
    }
  }
};
