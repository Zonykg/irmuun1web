
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'blog.lulu.com', pathname: '/**' },
      { protocol: 'https', hostname: 'm.media-amazon.com', pathname: '/**' },
      { protocol: 'https', hostname: 't3.ftcdn.net', pathname: '/**' },
      { protocol: 'https', hostname: 'encrypted-tbn0.gstatic.com', pathname: '/**' },
      { protocol: 'https', hostname: 'axiomprint.com', pathname: '/**' },
      { protocol: 'https', hostname: 'printingstudio.in', pathname: '/**' },
      { protocol: 'https', hostname: 'static.vecteezy.com', pathname: '/**' },
      { protocol: 'https', hostname: 'media.architecturaldigest.com', pathname: '/**' },
      { protocol: 'https', hostname: 'blogimage.vantagecircle.com', pathname: '/**' },
    ],
  },
};

export default nextConfig;
