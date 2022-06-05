/* eslint-env mocha */

import '../src/'

import assert from 'assert'
import { plugins } from '@citation-js/core'

import data from './data/'

console.log(`
These test cases are constructed from the examples in the documentation of the
Citation Style 1 templates: https://en.wikipedia.org/wiki/Template:Citation_Style_documentation/cs1
Licensed under CC-BY-SA-3.0.`)

describe('wikipediaTemplate', function () {
  for (const group in data) {
    describe(group, function () {
      for (const [input, output] of data[group]) {
        const format = output.includes('\n') ? 'vertical' : 'horizontal'
        it(input.title, function () {
          assert.deepStrictEqual(plugins.output.format('wikipediaTemplate', [input], { format } ), output)
        })
      }
    })
  }

  describe('option', function () {
    it('accepts absent options', function () {
      assert.deepStrictEqual(plugins.output.format(
        'wikipediaTemplate',
        [{ title: 'test' }]
      ), `{{Citation
 | title = test
}}`)
    })
  })
})
