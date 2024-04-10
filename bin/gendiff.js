#!/usr/bin/env node

import { program } from 'commander';
import generateDifferences from '../src/core.js';

program
  .name('gendiff')
  .description(
    'Compares two configuration files and shows a difference.\n'
  + 'Supported input formats (file extension): "json", "yaml".\n'
  + 'Supported output formats: "plain", "stylish" or "json".',
  )
  .version('1.0.0')
  .option('-f, --format [type]', 'output format', 'stylish')
  .argument('<pathToFile1>', 'relative or absolute')
  .argument('<pathToFile2>', 'relative or absolute')
  .action((pathToFile1, pathToFile2) => {
    console.log(generateDifferences(pathToFile1, pathToFile2, program.opts().format));
  });

program.parse();
