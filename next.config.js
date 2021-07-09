module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    // Unset client-side JavaScript that only works server-side
    config.resolve.fallback = { fs: false, module: false }

    return config
  }
}
