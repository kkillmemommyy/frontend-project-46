import { readFileSync } from 'fs';
import { cwd } from 'process';
import { resolve } from 'path';
import yaml from 'js-yaml';

const isSupportedFormat = (format, stream = 'input') => {
  const supportedFormats = {
    'input': ['.json', '.yaml', '.yml'],
    'output': ['json', 'plain', 'stylish'],
  };
  const currentStream = supportedFormats[stream];
  for (const currentFormat of currentStream) {
    if (format === currentFormat) {
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
