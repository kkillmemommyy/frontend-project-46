import _ from 'lodash';

const shift = '    ';

const stringify = (item, depth) => {
  if (!_.isObject(item)) {
    return `${item}`;
  }

  const currentShift = shift.repeat(depth);
  const entries = Object.entries(item);
  const strings = entries.map(([key, value]) => `${currentShift}    ${key}: ${stringify(value, depth + 1)}`);
  return `{\n${strings.join('\n')}\n${currentShift}}`;
};

const makeStylish = (diff, depth = 0) => {
  const currentShift = shift.repeat(depth);

  const stringifyDiff = diff.map((node) => {
    const {
      key, oldValue, value, status,
    } = node;

    if (status === 'unchanged') {
      return `${currentShift}    ${key}: ${stringify(value, depth + 1)}`;
    }

    if (status === 'added') {
      return `${currentShift}  + ${key}: ${stringify(value, depth + 1)}`;
    }

    if (status === 'deleted') {
      return `${currentShift}  - ${key}: ${stringify(value, depth + 1)}`;
    }

    if (status === 'changed') {
      return `${currentShift}  - ${key}: ${stringify(oldValue, depth + 1)}\n`
           + `${currentShift}  + ${key}: ${stringify(value, depth + 1)}`;
    }

    return `${currentShift}    ${key}: ${makeStylish(value, depth + 1)}`;
  });

  return `{\n${stringifyDiff.join('\n')}\n${currentShift}}`;
};

export default makeStylish;
