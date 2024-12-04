/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                },
                {protocol: "https",
                hostname: "unsplash.com",
                },
                {
                protocol: "https",
                hostname: "flowbite.com",
                },
              
                {protocol: "https",
                hostname: "mighty.tools",
                },

                {protocol: "https",
                    hostname: "cdn.pixabay.com",
                    },
        ]
    }
};

export default nextConfig;
