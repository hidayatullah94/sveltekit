import static_adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import node from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),
	kit: {
		adapter: static_adapter(),
		paths: {
			base: '/https://hidayatullah94.github.io/sveltekit',
			assets: ''
		}
	}
};

export default config;
