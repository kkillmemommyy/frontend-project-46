import { readFileSync } from 'fs';
import { cwd } from 'process';
import { resolve, extname } from 'path';
import yaml from 'js-yaml';

const isSupportedFormat = (filepath) => {
  const supportedExtensions = ['.json', '.yaml', '.yml'];
  const fileExtension = extname(filepath);
  for (const currentExtension of supportedExtensions) {
    if (fileExtension === currentExtension) {
      return true;
    }
  }
  return false;
};

const readFile = (filepath) => {
  const workingDir = cwd();
  const absolutePath = resolve(workingDir, filepath);
  const fileData = readFileSync(absolutePath, 'utf-8');
  return fileData;
};

const deserialize = (data, format) => {
  const parsers = { 
    '.json': JSON.parse, 
    '.yaml': yaml.load, '.yml': yaml.load,
  };

  return parsers[format](data);
};

export { readFile, isSupportedFormat, deserialize };
