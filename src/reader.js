import path from 'path';
import { parse } from 'yaml';
import { readFileSync } from 'fs';

const file_types = { '.yaml': parse, '.json': JSON.parse };

export default function(filepath1, filepath2) {
  const filepaths = [...arguments];
  return filepaths.map(fpath => {
    const extend_name = path.extname(fpath);
    const raw_file = readFileSync(fpath);
    
    return file_types[extend_name](raw_file)
  })
}