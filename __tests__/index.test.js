import result from '../__fixtures__/result.js'
import gendiff from '../src/index.js'
import { resolve } from 'path'

const paths = {
  json: ['file1.json', 'file2.json'],
}

const resolvePath = filePath => resolve(process.cwd(), `__fixtures__/${filePath}`)

test('first json test', () => {
  const jsonPaths = paths.json.map(path => resolvePath(path))
  expect(gendiff(...jsonPaths)).toBe(result)
})
