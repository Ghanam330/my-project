module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '47e2e4fc3e8b9bde8234f0f83973da94'),
  },
});
