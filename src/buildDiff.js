import _ from 'lodash';

const buildDiff = (data1, data2) => {
  const dataKeys1 = Object.keys(data1);
  const dataKeys2 = Object.keys(data2);
  const keys = _.sortBy(_.uniq([...dataKeys1, ...dataKeys2]));

  const diff = keys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (!Object.hasOwn(data1, key)) {
      return { key, value: value2, status: 'added' };
    }

    if (!Object.hasOwn(data2, key)) {
      return { key, value: value1, status: 'deleted' };
    }

    if (value1 === value2) {
      return { key, value: value1, status: 'unchanged' };
    }

    if (typeof value1 === 'object' && typeof value2 === 'object') {
      return { key, value: buildDiff(value1, value2), status: 'hasChild' };
    }

    return {
      key,
      oldValue: value1,
      value: value2,
      status: 'changed',
    };
  });

  return diff;
};

export default buildDiff;
