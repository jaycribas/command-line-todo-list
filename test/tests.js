const expect = require('chai').expect
const list = require('../commands/list')
const add = require('../commands/add')
const done = require('../commands/done')

const json = {
  "serialId": 3,
  "todos": [
    {
      "ID": 1,
      "Description": "Play ball"
    },
    {
      "ID": 2,
      "Description": "Make a thing"
    },
    {
      "ID": 3,
      "Description": "Be yonce"
  }]
}

describe('Add a to do', () => {
  const addedNewJson = add(json, 'Make test pass')

  it('Returns a JSON object', () => {
    expect(addedNewJson).to.be.an('object')
  })
  it('checks "serialId" is a number', () => {
    expect(addedNewJson.serialId).to.be.a('number')
  })
  it('checks "todos" is an array', () => {
    expect(addedNewJson.todos).to.be.an('array')
  })
})

describe('List to dos', () => {
  const todoList = list(json)

  it('checks new JSON is an object', () => {
    expect(todoList).to.be.an('array')
  })
  it('checks for "ID" and "Description" keys', () => {
    expect(...todoList).to.have.all.keys('ID', 'Description')
  })
})

describe('Complete a to do', () => {
  const doneNewJson = done(json, 3)

  it('Returns a JSON object', () => {
    expect(doneNewJson).to.be.an('object')
  })
  it('checks "serialId" is a number', () => {
    expect(doneNewJson.serialId).to.be.a('number')
  })
  it('checks "todos" is an array', () => {
    expect(doneNewJson.todos).to.be.an('array')
  })
})
