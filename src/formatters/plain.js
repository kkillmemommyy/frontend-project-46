import _ from 'lodash';

const stringify = (item) => {
  if (_.isObject(item)) {
    return '[complex value]';
  }

  if (typeof item === 'string') {
    return `'${item}'`;
  }

  return item;
};

const makePlain = (diff, path = '') => {
  const stringifyDiff = diff.map((node) => {
    const {
      key, oldValue, value, status,
    } = node;

    const newPath = path === '' ? `${key}` : `${path}.${key}`;

    if (status === 'added') {
      return `Property '${newPath}' was added with value: ${stringify(value)}`;
    }

    if (status === 'deleted') {
      return `Property '${newPath}' was removed`;
    }

    if (status === 'changed') {
      return `Property '${newPath}' was updated. From ${stringify(oldValue)} to ${stringify(value)}`;
    }

    if (status === 'hasChild') {
      return makePlain(value, newPath);
    }

    return undefined;
  });

  return stringifyDiff.filter((item) => item !== undefined).join('\n');
};

export default makePlain;
