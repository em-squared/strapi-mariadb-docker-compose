module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3e53c1f1c83de600a3aa1759acc2e283'),
  },
});
