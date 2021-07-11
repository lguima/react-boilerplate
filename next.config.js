// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    // Unset client-side JavaScript that only works server-side
    config.resolve.fallback = { fs: false, module: false }

    return config
  }
}

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
