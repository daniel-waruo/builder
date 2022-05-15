/* eslint-disable */
const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  modifyVars: {
    '@primary-color': '#ffcd31',
    '@link-color': '#ffcd31',
    '@text-color': '#13162a',
    '@border-color-base': '#e9e9e8',
    '@font-family': 'Poppins, san-serif',
    '@link-decoration': 'none',
    '@link-hover-decoration': 'underline',
    '@link-focus-decoration': 'underline',
    '@link-focus-outline': 0,
  },
  webpack(config) {
    return config;
  },
});
