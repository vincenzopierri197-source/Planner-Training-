import { copyFile, mkdir, rm } from 'node:fs/promises';

const output = new URL('./dist/', import.meta.url);

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await Promise.all([
  copyFile(new URL('./index.html', import.meta.url), new URL('./dist/index.html', import.meta.url)),
  copyFile(new URL('./exercises.js', import.meta.url), new URL('./dist/exercises.js', import.meta.url))
]);
