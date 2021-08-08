import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcss from 'postcss';
import scss from 'rollup-plugin-scss';

export default {
  input: 'entry.js',
  plugins: [
    scss({
      includePaths: [
          'node_modules/'
        ],
      output: '../public/css/dist/styles.css',
      processor: () => postcss([
        autoprefixer(),
        cssnano()
      ]),
    })
  ]
}