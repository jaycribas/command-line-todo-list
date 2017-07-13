const fs = require('fs')
require('console.table')
const command = process.argv[2]

const { addTodo } = require('./commands/add')
const { listTodos } = require('./commands/list')
const { doneTodo } = require('./commands/done')

switch (command) {
  case 'add':
    const todo = process.argv[3]
    const newJson = addTodo(todo)
    fs.writeFileSync('tasks.json', JSON.stringify(newJson, null, 2))
    break

  case 'list':
    const todoList = listTodos()
    console.table('To Do List', todoList)
    if(todoList.length == 1 ){
      return console.log(`${todoList.length} task.`)
    }
    return console.log(`${todoList.length} tasks.`)
    break

  case 'done':
    doneTodo()
    break

  default:
    console.log('Bad command, try "add (...)", "list" or "done (id)"')
    break
}
