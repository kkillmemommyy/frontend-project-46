import makeStylish from './stylish.js';
import makePlain from './plain.js';

const formatter = (diff, format) => {
  if (format === 'stylish') {
    return makeStylish(diff);
  }

  if (format === 'plain') {
    return makePlain(diff);
  }

  return JSON.stringify(diff, null, ' ');
};

export default formatter;
