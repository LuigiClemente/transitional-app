import createNextIntlPlugin from 'next-intl/plugin';
import { withContentlayer } from 'next-contentlayer'


/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    domains: ['res.cloudinary.com'], // Allow Cloudinary images
  },
};

const withNextIntl = createNextIntlPlugin();
export default withContentlayer(withNextIntl(nextConfig));
