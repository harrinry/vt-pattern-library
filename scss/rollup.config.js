import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcss from 'rollup-plugin-postcss';
import scss from 'rollup-plugin-scss';

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

export default {
  input: 'entry.js',
  plugins: [
    scss({
      includePaths: ['node_modules/'],
      output: '../public/css/dist/styles.css',
      processor: () => postcss(),
      sourceMap: (process.env.NODE_ENV == 'development' ? true : false)
    })
  ]
}