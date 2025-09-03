import { FlatCompat } from '@eslint/eslintrc';
import reactConfig from './eslint.react.mjs';

const compat = new FlatCompat({
  baseDirectory: process.cwd(),
});

export default [
  ...reactConfig,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];
