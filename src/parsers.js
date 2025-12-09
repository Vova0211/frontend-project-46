import { load } from 'js-yaml'

const file_types = {
  yaml: load,
  yml: load,
  json: JSON.parse,
}

function parseFile(file, extend) {
  return file_types[extend](file)
}

export default parseFile
