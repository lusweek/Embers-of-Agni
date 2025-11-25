import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

export default defineConfig({
	plugins: [
		tailwindcss(), 
		sveltekit(),
	]
});

await imagemin(['images/*.{jpg,png}'], {
	destination: 'build/images',
	plugins: [
		imageminWebp({quality: 50})
	]
});

console.log('Images optimized');