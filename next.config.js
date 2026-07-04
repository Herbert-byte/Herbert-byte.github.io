const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : '',
};
