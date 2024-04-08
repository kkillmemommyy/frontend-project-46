import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import path from 'path';
import generateDifferences from '../src/core.js';

const pathToCurrentDir = fileURLToPath(path.dirname(import.meta.url));
const pathToFixturesDir = path.join(pathToCurrentDir, '..', '__fixtures__');

const pathToFixture = (filename) => `${pathToFixturesDir}/${filename}`;
const readFile = (filename) => readFileSync(pathToFixture(filename), 'utf-8');

test('flat json with result in stylish', () => {
  const file1Path = pathToFixture('flat1.json');
  const file2Path = pathToFixture('flat2.json');
  const expected = readFile('stylishFlat.txt');

  expect(generateDifferences(file1Path, file2Path)).toEqual(expected);
});
