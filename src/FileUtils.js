import { readFileSync, existsSync } from 'fs';
import { cwd } from 'process';
import { resolve, extname as getFileExtension } from 'path';
import yaml from 'js-yaml';

const isSupportedFormat = (format, stream = 'input') => {
  const supportedFormats = {
    input: ['.json', '.yaml', '.yml'],
    output: ['json', 'plain', 'stylish'],
  };
  const currentStream = supportedFormats[stream];
  for (const currentFormat of currentStream) {
    if (format === currentFormat) {
      return true;
    }
  }
  return false;
};

const validate = (filepath1, filepath2, outputFormat) => {
  const errors = [];
  const fileExtension1 = getFileExtension(filepath1);
  const fileExtension2 = getFileExtension(filepath2);

  if (!isSupportedFormat(fileExtension1)) {
    errors.push(`file1 extension must be ".json" or ".yaml" but given "${fileExtension1}"`);
  }
  if (!isSupportedFormat(fileExtension2)) {
    errors.push(`file2 extension must be ".json" or ".yaml" but given "${fileExtension2}"`);
  }
  if (!isSupportedFormat(outputFormat, 'output')) {
    errors.push(`supported formats are "json", "plain" or "stylish" but given "${outputFormat}"`);
  }
  if (!existsSync(filepath1)) {
    errors.push(`file with path "${filepath1}" does not exist`);
  }
  if (!existsSync(filepath2)) {
    errors.push(`file with path "${filepath2}" does not exist`);
  }

  return errors;
};

const deserialize = (data, format) => {
  const parsers = {
    '.json': JSON.parse,
    '.yaml': yaml.load,
    '.yml': yaml.load,
  };

  return parsers[format](data);
};

const readFile = (filepath) => {
  const workingDir = cwd();
  const absolutePath = resolve(workingDir, filepath);
  const fileData = readFileSync(absolutePath, 'utf-8');
  return fileData;
};

export {
  readFile,
  isSupportedFormat,
  deserialize,
  validate,
  getFileExtension,
};
