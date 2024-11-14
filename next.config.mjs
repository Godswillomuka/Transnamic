/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'images.pexels.com', // For Pexels images
          'encrypted-tbn0.gstatic.com', // For Google images
          'cdn.dealerspike.com', // For Harley-Davidson images
          'cars.usnews.com', // For Yamaha images
          'www.bikesmedia.in' // For Kawasaki images
        ],
        
      },
};

export default nextConfig;


