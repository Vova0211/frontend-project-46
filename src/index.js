import path from 'path'
import { readFileSync } from 'fs'
import parseFile from './parsers.js'
import buildTree from './buildAST.js'
import stylish from './formatters/stylish.js'

const getExtension = filename => path.extname(filename).slice(1)

const resolvePath = filePath => path.resolve(process.cwd(), filePath)

const readFile = path => parseFile(readFileSync(path), getExtension(path))

const formatters = {
  stylish,
}

function gendiff(filepath1, filepath2, format = 'stylish') {
  const files = [filepath1, filepath2]
    .map(path => resolvePath(path))
    .map(path => readFile(path))
  const tree = buildTree(...files)
  return formatters[format](tree)
}

export default gendiff
