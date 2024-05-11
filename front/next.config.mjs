/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        dirs: ['app', 'components', 'layouts', 'scripts', 'recoil', 'hooks', 'generators', 'utils', 'pages', 'assets'],
      },
      basePath: "/CookTheFridge",
};

export default nextConfig;
