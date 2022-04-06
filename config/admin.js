module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd97727c75a713b0de4410a94f9c9598e'),
  },
});
