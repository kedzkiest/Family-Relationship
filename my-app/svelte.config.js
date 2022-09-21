import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	paths: {
		base: 'Family_Relationship',
		assets: '/Family_Relationship'
	}
};

export default config;
