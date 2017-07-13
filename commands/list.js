const json = require('../tasks.json')

const listTodos = () => {
  let todoList = []
  for(let val of json.todos){
    let task = {"ID": val.id, "Description": val.description}
    todoList.push(task)
  }
  return todoList
}

module.exports = { listTodos }
