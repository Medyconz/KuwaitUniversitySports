const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProduction ? '/KuwaitUniversitySports' : '',
  assetPrefix: isProduction ? '/KuwaitUniversitySports/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
