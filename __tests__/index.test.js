import result from '../__fixtures__/result.js'
import resultPlain from '../__fixtures__/resultPlain.js'
import gendiff from '../src/index.js'
import { resolve } from 'path'
import { expect, test } from '@jest/globals'

const extensNames = ['json', 'yml', 'yaml']
const fileNames = ['file1', 'file2']

const resolvePath = filePath => resolve(process.cwd(), `__fixtures__/${filePath}`)

test.each(extensNames)('gendiff %s', (format) => {
  const paths = fileNames.map(path => `${resolvePath(path)}.${format}`)
  expect(gendiff(...paths, 'stylish')).toBe(result)
  expect(gendiff(...paths, 'plain')).toBe(resultPlain)
})
