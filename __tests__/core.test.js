import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const pathToCurrentDir = fileURLToPath(path.dirname(import.meta.url));
const pathToFixturesDir = path.join(pathToCurrentDir, '..', '__fixtures__');

const pathToFixture = (filename) => `${pathToFixturesDir}/${filename}`;
const readFile = (filename) => readFileSync(pathToFixture(filename), 'utf-8');

test('json with result in stylish', () => {
  const file1Path = pathToFixture('file1.json');
  const file2Path = pathToFixture('file2.json');
  const expected = readFile('stylish.txt');

  expect(genDiff(file1Path, file2Path)).toEqual(expected);
});

test('json with result in plain', () => {
  const file1Path = pathToFixture('file1.json');
  const file2Path = pathToFixture('file2.json');
  const expected = readFile('plain.txt');

  expect(genDiff(file1Path, file2Path, 'plain')).toEqual(expected);
});

test('json with result in json', () => {
  const file1Path = pathToFixture('file1.json');
  const file2Path = pathToFixture('file2.json');
  const expected = readFile('json.txt');

  expect(genDiff(file1Path, file2Path, 'json')).toEqual(expected);
});

test('yaml with result in stylish', () => {
  const file1Path = pathToFixture('file1.yml');
  const file2Path = pathToFixture('file2.yaml');
  const expected = readFile('stylish.txt');

  expect(genDiff(file1Path, file2Path)).toEqual(expected);
});

test('yaml with result in plain', () => {
  const file1Path = pathToFixture('file1.yml');
  const file2Path = pathToFixture('file2.yaml');
  const expected = readFile('plain.txt');

  expect(genDiff(file1Path, file2Path, 'plain')).toEqual(expected);
});

test('yaml with result in json', () => {
  const file1Path = pathToFixture('file1.yml');
  const file2Path = pathToFixture('file2.yaml');
  const expected = readFile('json.txt');

  expect(genDiff(file1Path, file2Path, 'json')).toEqual(expected);
});

test('get errors', () => {
  const file1Path = pathToFixture('flat1.txt');
  const file2Path = pathToFixture('flat2.mp3');

  const expected = 'file1 extension must be ".json" or ".yaml" but given ".txt"\n'
  + 'file2 extension must be ".json" or ".yaml" but given ".mp3"\n'
  + 'supported formats are "json", "plain" or "stylish" but given "epub"\n'
  + `file with path "${file1Path}" does not exist\n`
  + `file with path "${file2Path}" does not exist`;

  expect(genDiff(file1Path, file2Path, 'epub')).toEqual(expected);
});
