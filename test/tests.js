const expect = require('chai').expect

describe('List to dos', () => {
  const { listTodos } = require('../commands/list')
  const todoList = listTodos()

  it('checks list is an array', () => {
    expect(todoList).to.be.an('array')
  })
  it('checks for "ID" and "Description" keys', () => {
    expect(...todoList).to.have.all.keys('ID', 'Description')
  })
})

describe('Add a to do', () => {
  const { addTodo } = require('../commands/add')
  const json = addTodo('Make test pass')

  it('Returns a JSON object', () => {
    expect(json).to.be.an('object')
  })
  it('checks "serialId" is a number', () => {
    expect(json.serialId).to.be.a('number')
  })
  it('checks "todos" is an array', () => {
    expect(json.todos).to.be.an('array')
  })
})

describe('Complete a to do', () => {
  const { done } = require('../commands/done')

  xit('checks a thing', () => {
    expect()
  })
})
