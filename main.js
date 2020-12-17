#! /usr/bin/env node

const { resolve } = require('path')
const { readFileSync } = require('fs')
const removeMd = require('remove-markdown')

const md = readFileSync(resolve(__dirname, 'README.md'), 'utf-8')
const output = removeMd(md)

console.log('\n' + output)
