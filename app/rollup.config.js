import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';

export default {
    input: 'src/index.js', // notre fichier source au format ESM
    output: {
        format: 'iife',
        file: 'lib/main.iife.min.js',
        // les modules iife doivent être nommés afin de pouvoir y faire référence depuis d'autres modules
        name: 'minimap'
    },
    plugins: [
        commonjs(), // prise en charge de require
        resolve(), // prise en charge des modules depuis node_modules
        babel(), // transpilation
        terser(), // minification,
        copy({
            targets: [
                { src: 'src/background.js', dest: 'lib' },
                { src: 'src/manifest.json', dest: 'lib' },
                { src: '../logo/logo.png', dest: 'lib' },
            ]
        })
    ]
};