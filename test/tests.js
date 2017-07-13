const expect = require('chai').expect

describe('List to dos', () => {
  const { listTodos } = require('../commands/list')

  xit('checks for type', () => {
    expect(expect).to.be.ok
  })
})

describe('Add a to do', () => {
  const { addTodo } = require('../commands/add')
  const json = addTodo('Make test pass')

  it('Sends back a JSON object', () => {
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
