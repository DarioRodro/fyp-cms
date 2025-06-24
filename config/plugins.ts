export default ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  upload: {
    config: {
      provider: '@strapi/provider-upload-cloudinary',
      providerOptions: {
        cloud_name: env('dmflxxhkn'),
        api_key: env('761547111135628'),
        api_secret: env('__vBfyevMgSUgPRHBUk2tOrpS3Y'),
      },
    },
  },
});
