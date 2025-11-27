import _ from "lodash";

function parseArr(acc, [key, value, status]) {
  return acc += `  ${status} ${key}: ${value}\n`;
}

export default function getDiffPairs(obj1, obj2) {
  const obj1_keys = Object.keys(obj1);
  const obj2_keys = Object.keys(obj2);
  const keys_sorted = [...new Set(obj1_keys.concat(obj2_keys))];
  const result = [];
  keys_sorted.forEach(key => {
    const isFirst = key in obj1;
    const isSecond = key in obj2;
    if (obj1[key] === obj2[key]) {
      result.push([key, obj1[key], ' ']);

    } else if (isFirst && isSecond) {
      result.push([key, obj1[key], '-']);
      result.push([key, obj2[key], '+']);

    } else if (isFirst && !isSecond) {
      result.push([key, obj1[key], '-']);

    } else {
      result.push([key, obj2[key], '+']);
      
    }
  });
  const result_sorted = _.sortBy(result, [e => e[0]]);
  return result_sorted.reduce(parseArr, '{\n') + '}';
}