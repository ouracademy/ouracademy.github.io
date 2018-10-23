const { getProps, writeJSON } = require('../file-reader')
const { existsSync, readFileSync } = require('fs')
const path = require('path')

describe('getProps()', () => {
  it('should get all posts with a path property from test data', () => {
    const posts = getProps(path.join(__dirname, 'data'))
    expect(posts).toHaveLength(2)
    expect(posts).toContainEqual({
      title: 'Lo primero',
      description: '¿Por que las pruebas de software son lo primero?',
      publishedAt: '2018-02-21',
      author: '@arthur',
      tags: ['practica', 'testing'],
      path: 'a-sample-post'
    })
  })
})

describe('writeJSON()', () => {
  it('should return a function that can write a json file', () => {
    const testDataPath = path.join(__dirname, 'out-write-json')

    const anObject = { name: 'A super object with special char ñ' }
    writeJSON(testDataPath)('an-object', anObject)

    const outputPath = path.join(testDataPath, 'an-object.json')
    expect(existsSync(outputPath)).toBeTruthy()
    expect(JSON.parse(readFileSync(outputPath, 'utf-8'))).toEqual(anObject)
  })
})
