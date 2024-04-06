import { readFile, isSupportedFormat, deserialize, extname } from './ParseFileUtils.js';
import { existsSync } from 'fs';
import { extname } from 'path';

const generateDifferences = (filepath1, filepath2, outputFormat = 'json') => {
  if (!isSupportedFormat(filepath1)) {
    return `file1 extension must be ".json" or ".yaml" but given "${extname(filepath1)}"`;
  }
  if (!isSupportedFormat(filepath2)) {
    return `file2 extension must be ".json" or ".yaml" but given "${extname(filepath2)}"`;
  }
  if (!existsSync(filepath1)) {
    return `file with path ${filepath1} does not exist`;
  }
  if (!existsSync(filepath2)) {
    return `file with path ${filepath2} does not exist`;
  }

  const [fileData1, format1] = [readFile(filepath1), extname(filepath1)];
  const [fileData2, format2] = [readFile(filepath2), extname(filepath2)];

  const fileDeserialized1 = deserialize(fileData1, format1);
  const fileDeserialized2 = deserialize(fileData2, format2);
};

export { generateDifferences };
