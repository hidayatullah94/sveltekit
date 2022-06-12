import adapter from 'svelte-adapter-github';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			domain: null,
			jekyll: false,
			fallback: null,
			precompress: false,
			fallback: '200.html'
		}),
		paths: {
			base: dev ? '' : '/https://github.com/hidayatullah94/sveltekit',
			assets: ''
		}
	}
};

export default config;
