// eslint-disable-next-line object-curly-newline
import { readFile, deserialize, validate, getFileExtension } from './FileUtils.js';
import compare from './Compare.js';

const generateDifferences = (filepath1, filepath2, outputFormat = 'plain') => {
  const errors = validate(filepath1, filepath2, outputFormat);

  if (errors.length > 0) {
    return errors.join('\n');
  }

  const [fileData1, fileData2] = [readFile(filepath1), readFile(filepath2)];

  const deserializedData1 = deserialize(fileData1, getFileExtension(filepath1));
  const deserializedData2 = deserialize(fileData2, getFileExtension(filepath2));

  return compare(deserializedData1, deserializedData2);
};

export default generateDifferences;
