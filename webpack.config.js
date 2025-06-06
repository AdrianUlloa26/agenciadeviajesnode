import { resolve } from 'path';

export const entry = './src/index.js';
export const output = {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
};
export const mode = 'development';