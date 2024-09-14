// https://cn.rollupjs.org/configuration-options/
const path = require('path')
const postcss = require('rollup-plugin-postcss')
const alias = require('@rollup/plugin-alias')
const terser = require('@rollup/plugin-terser')
const resolve = require('@rollup/plugin-node-resolve')
const babel = require('@rollup/plugin-babel')

const name = 'jyf-color-picker.js';
const minName = name.replace('.js', '.min.js');

module.exports = {
  input: 'src/main.js',
  output: [
    {
      file: `lib/umd/${name}`,
      format: 'umd',
      name: 'JyfColorPicker',
    },
    {
      file: `lib/umd/${minName}`,
      format: 'umd',
      name: 'JyfColorPicker',
      plugins: [terser()]
    },
    {
      file: `lib/es/${name}`,
      format: 'es',
      name: 'JyfColorPicker',
    },
    {
      file: `lib/cjs/${name}`,
      format: 'cjs',
      name: 'JyfColorPicker',
      exports: 'auto'
    }
  ],
  plugins: [
    alias({
      entries: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src')
        }
      ],
      customResolver: resolve({
        extensions: ['.mjs', '.js']
      })
    }),
    resolve(),
    babel({ babelHelpers: 'bundled' }),
    postcss()
  ],
  watch: {
    clearScreen: true,
    include: 'src/**'
  }
};