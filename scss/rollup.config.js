import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcss from 'postcss';
import postcssImport from 'postcss-import';
import scss from 'rollup-plugin-scss';

const target = process.env.TARGET;

const postcssConfig = [
  postcssImport(),
  autoprefixer({
    overrideBrowserslist: 'last 4 versions',
  })
];

// If we are in production mode, then add cssnano to minify CSS
if (target === 'production') {
	postcssConfig.push(
		cssnano({
			preset: 'default',
		})
	);
} 

export default {
  input: 'entry.js',
  output: false,
  plugins: [
    scss({
      includePaths: [
          'node_modules/'
        ],
      output: 'dist/styles.css',
      processor: () => postcss(postcssConfig),
      sourceMap: (target === 'development' ? true : false)
    })
  ]
}
