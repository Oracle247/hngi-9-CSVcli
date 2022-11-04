#! /usr/bin/env node
const { program } = require("commander");
const generate = require("./commands/generate");

//  Defining the generate command
program
  .command("generate <filename>")
  .description(
    "Creating a new CSV file with the hash of the older file appended to it"
  )
  .action(generate);

program.parse(process.argv);
