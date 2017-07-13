const fs = require('fs')
require('console.table')
const command = process.argv[2]

const { addTodo } = require('./commands/add')
const { listTodos } = require('./commands/list')
const { doneTodo } = require('./commands/done')

switch (command) {
  case 'add':
    let todo = process.argv[3]
    let addedTodoJson = addTodo(todo)
    fs.writeFileSync('tasks.json', JSON.stringify(addedTodoJson, null, 2))
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
    let doneId = process.argv[3]
    let completedTodoJson = doneTodo(doneId)
    fs.writeFileSync('tasks.json', JSON.stringify(completedTodoJson, null, 2))
    break

  default:
    console.log('Bad command, try "add (...)", "list" or "done (id)"')
    break
}
