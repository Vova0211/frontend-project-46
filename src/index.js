import path from 'path'
import { readFileSync } from 'fs'
import parseFile from './parser.js'
import formatter from './buildAST.js'

const getExtension = filename => path.extname(filename).slice(1)

const resolvePath = filePath => path.resolve(process.cwd(), filePath)

const readFile = path => parseFile(readFileSync(path), getExtension(path))

export default function gendiff(filepath1, filepath2) {
  const files = [filepath1, filepath2]
    .map(path => resolvePath(path))
    .map(path => readFile(path))

  return formatter(...files)
}
