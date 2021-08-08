import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcss from 'rollup-plugin-postcss';
import scss from 'rollup-plugin-scss';

let postcssConfig = {
	plugins: [
    autoprefixer({
      overrideBrowserslist: 'last 4 versions',
      sourceMap: (process.env.TARGET === 'development' ? true : false)
    })
  ],
};

// If we are in production mode, then add cssnano
if (process.env.TARGET === 'production') {
	postcssConfig.plugins.push(
		cssnano({
			preset: 'default',
		})
	);
} 

export default {
  input: 'entry.js',
  plugins: [
    scss({
      includePaths: ['node_modules/'],
      output: '../public/css/dist/styles.css',
      processor: () => postcss()
    })
  ]
}
