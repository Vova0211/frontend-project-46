#!/usr/bin/env node
import { program } from "commander";
import genDiff from "../src/gendiff.js";
import fs from 'fs';

const opt = {
  // '.'
}

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .version('1.0.0')  
  .action((path1, path2) => {
    const file1_raw = fs.readFileSync(path1);
    const file2_raw = fs.readFileSync(path2);
    

    console.log(genDiff(JSON.parse(file1_raw), JSON.parse(file2_raw)));
  })

program.parse();

const options = program.opts();
if (options.format) console.log("lol");
