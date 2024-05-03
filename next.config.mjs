/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['loremflickr.com', 'images.pexels.com','cdn.dribbble.com'],
  },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: [{ loader: "@svgr/webpack", options: { icon: true } }],
      });
      return config;
    },
  };

export default nextConfig;
