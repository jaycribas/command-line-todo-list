const json = require('../tasks.json')

const addTodo = function(todo){
  json.serialId++

  let newTodo = {
    id: json.serialId,
    description: todo
  }

  json.todos.push(newTodo)

  console.log(`Created task ${newTodo.id}`)

  return json
}

module.exports = { addTodo }
