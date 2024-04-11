import buildDiff from './buildDiff.js';
import formatter from './formatters/index.js';
import {
  readFile,
  deserialize,
  validate,
  getFileExtension,
} from './fileUtils.js';

const genDiff = (pathToFile1, pathToFile2, outputFormat = 'stylish') => {
  const errors = validate(pathToFile1, pathToFile2, outputFormat);

  if (errors.length > 0) {
    return errors.join('\n');
  }

  const [fileData1, fileData2] = [readFile(pathToFile1), readFile(pathToFile2)];

  const deserializedData1 = deserialize(fileData1, getFileExtension(pathToFile1));
  const deserializedData2 = deserialize(fileData2, getFileExtension(pathToFile2));

  const diff = buildDiff(deserializedData1, deserializedData2);

  return formatter(diff, outputFormat);
};

export default genDiff;
