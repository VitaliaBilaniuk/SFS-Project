// const pkg = require('./package.json');

// module.exports = {
//   presets: [
//     [
//       '@babel/preset-env',
//       {
//         targets: {
//           browsers: pkg.browserslist,
//           node: 'current',
//         },
//         modules: 'auto',
//         useBuiltIns: false,
//         debug: false,
//       },
//     ],
//     '@babel/preset-flow',
//     '@babel/preset-react',
//   ],
//   plugins: [
//     '@babel/plugin-proposal-class-properties',
//     '@babel/plugin-transform-runtime',
//     '@babel/plugin-syntax-import-meta',
//     '@babel/plugin-syntax-dynamic-import',
//     '@babel/plugin-transform-spread',
//     '@babel/plugin-proposal-object-rest-spread',
//     '@babel/plugin-transform-destructuring',
//   ],
//   env: {
//     development: {
//       plugins: ['react-hot-loader/babel'],
//     },
//     production: {
//       plugins: ['babel-plugin-transform-react-remove-prop-types'],
//     },
//   },
//   ignore: ['node_modules', 'dist'],
// };
