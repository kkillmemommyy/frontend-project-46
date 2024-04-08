import _ from 'lodash';

const compare = (data1, data2) => {
  const dataKeys1 = Object.keys(data1);
  const dataKeys2 = Object.keys(data2);
  const keys = _.sortBy(_.uniq([...dataKeys1, ...dataKeys2]));

  const diff = keys.reduce((acc, key) => {
    if (!Object.hasOwn(data1, key)) {
      acc.push(`  + ${key}: ${data2[key]}`);
    } else if (!Object.hasOwn(data2, key)) {
      acc.push(`  - ${key}: ${data1[key]}`);
    } else if (data1[key] === data2[key]) {
      acc.push(`    ${key}: ${data1[key]}`);
    } else {
      acc.push(`  - ${key}: ${data1[key]}`);
      acc.push(`  + ${key}: ${data2[key]}`);
    }

    return acc;
  }, []);

  return `{\n${diff.join('\n')}\n}`;
};

export default compare;
