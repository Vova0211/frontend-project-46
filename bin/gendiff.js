#!/usr/bin/env node
import { program } from 'commander'
import gendiff from '../src/index.js'

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .version('1.0.0')
  .action((path1, path2) => {
    const format = program.opts().format
    console.log(gendiff(path1, path2, format))
  })

program.parse()
