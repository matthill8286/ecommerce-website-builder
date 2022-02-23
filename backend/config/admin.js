module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2cdb295d0aa0ae44dea15143e8db5525'),
  },
});
