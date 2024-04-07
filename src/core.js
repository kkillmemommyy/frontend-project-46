import { readFile, isSupportedFormat, deserialize } from './ParseFileUtils.js';
import { Compare } from './Compare.js';
import { existsSync } from 'fs';
import { extname } from 'path';

const generateDifferences = (filepath1, filepath2, outputFormat = 'plain') => {
  const [fileExtension1, fileExtension2] = [extname(filepath1), extname(filepath2)];

  if (!isSupportedFormat(fileExtension1)) {
    return `file1 extension must be ".json" or ".yaml" but given "${fileExtension1}"`;
  }
  if (!isSupportedFormat(fileExtension2)) {
    return `file2 extension must be ".json" or ".yaml" but given "${fileExtension2}"`;
  }
  if (!isSupportedFormat(outputFormat, 'output')) {
    return `supported formats are "json", "plain" or "stylish" but given "${outputFormat}"`
  }
  if (!existsSync(filepath1)) {
    return `file with path "${filepath1}" does not exist`;
  }
  if (!existsSync(filepath2)) {
    return `file with path "${filepath2}" does not exist`;
  }

  const [fileData1, fileData2] = [readFile(filepath1), readFile(filepath2)];

  const deserializedData1 = deserialize(fileData1, fileExtension1);
  const deserializedData2 = deserialize(fileData2, fileExtension2);

  return Compare(deserializedData1, deserializedData2);
};

export { generateDifferences };
