#!/usr/bin/env node
import { program } from "commander";
import genDiff from "../src/genDiff.js";

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .version('1.0.0')  
  .action((path1, path2) => {
    console.log(genDiff(path1, path2));
  })

program.parse();

// const options = program.opts();
// if (options.format) console.log("lol");
