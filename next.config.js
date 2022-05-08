/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'links.papareact.com',
			'lh3.googleusercontent.com',
			'linkedin.com',
			'github.com',
		],
		loader: 'akamai',
		path: '',
	},
};

module.exports = nextConfig;
