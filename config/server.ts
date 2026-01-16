export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});

// export default ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   // port: env.int('PORT', 1337),
//   port: env.int('PORT', 3000),

//   proxy: true,
//   url: env('PUBLIC_URL'),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
// });

// export default ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT',1337),

//   proxy: true,
//   url: env('PUBLIC_URL'),

//   app: {
//     keys: env.array('APP_KEYS'),
//   },
// });

// export default ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 3000),

//   proxy: true,

//   url: env('PUBLIC_URL', 'https://friendly-dev-backend-k5b7.onrender.com'),

//   app: {
//     keys: env.array('APP_KEYS'),
//   },
// });
