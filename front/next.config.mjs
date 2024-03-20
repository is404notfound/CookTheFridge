/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        dirs: ['app', 'components', 'layouts', 'scripts', 'recoil', 'hooks', 'generators'],
      },
      basePath: "/CookTheFridge",
};

export default nextConfig;
