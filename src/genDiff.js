import reader from "./reader.js";
import getDiffPairs from "./functions.js";
export default function genDiff(path1, path2) {
  const objs = reader(path1, path2);
  return getDiffPairs(...objs)
}