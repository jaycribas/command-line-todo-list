const expect = require('chai').expect
const { listTodos } = require('../commands/list')
const { addTodo } = require('../commands/add')
const { doneTodo } = require('../commands/done')

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
  const jsonWithAdd = addTodo(json, 'Make test pass')

  it('Returns a JSON object', () => {
    expect(jsonWithAdd).to.be.an('object')
  })
  it('checks "serialId" is a number', () => {
    expect(jsonWithAdd.serialId).to.be.a('number')
  })
  it('checks "todos" is an array', () => {
    expect(jsonWithAdd.todos).to.be.an('array')
  })
})

describe('List to dos', () => {
  const todoList = listTodos(json)

  it('checks new JSON is an object', () => {
    expect(todoList).to.be.an('array')
  })
  it('checks for "ID" and "Description" keys', () => {
    expect(...todoList).to.have.all.keys('ID', 'Description')
  })
})

describe('Complete a to do', () => {
  const jsonWithoutDone = doneTodo(json, 3)

  it('Returns a JSON object', () => {
    expect(jsonWithoutDone).to.be.an('object')
  })
  it('checks "serialId" is a number', () => {
    expect(jsonWithoutDone.serialId).to.be.a('number')
  })
  it('checks "todos" is an array', () => {
    expect(jsonWithoutDone.todos).to.be.an('array')
  })
})
