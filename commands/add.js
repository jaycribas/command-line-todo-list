// add - adds a specific task -- fs.writeFileSync
const fs = require('fs')
const todo = process.argv[3]
const json = require('../tasks.json')

const addTodo = function(){

  let id = (function(){
    let counter = json.serialId
    return function (){
      return counter++
    }
  })()

  id()

  let newTodo = {
    id: id(),
    description: todo,
    complete: false
  }

  json.serialId = newTodo.id

  json["todos"].push(newTodo)

  fs.writeFileSync('tasks.json', JSON.stringify(json, null, 2))
  console.log(`Created task ${newTodo.id}`)
}

module.exports = { addTodo }
