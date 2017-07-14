const fs = require('fs')
require('console.table')
const command = process.argv[2]

const json = JSON.parse(fs.readFileSync('tasks.json'))

const { addTodo } = require('./commands/add')
const { listTodos } = require('./commands/list')
const { doneTodo } = require('./commands/done')

switch (command) {
  case 'add':
    let todo = process.argv[3]
    let addedTodoJson = addTodo(json, todo)
    fs.writeFileSync('tasks.json', JSON.stringify(addedTodoJson, null, 2))
    break

  case 'list':
    listTodos(json)
    console.table('To Do List', json.todos)
    if(json.todos.length == 1 ){
      return console.log(`${json.todos.length} task.\n`)
    }
    return console.log(`${json.todos.length} tasks.\n`)
    break

  case 'done':
    let doneId = process.argv[3]
    let completedTodoJson = doneTodo(json, doneId)
    fs.writeFileSync('tasks.json', JSON.stringify(completedTodoJson, null, 2))
    break

  default:
    console.log('Bad command, try "add (...)", "list" or "done (id)"')
    break
}
