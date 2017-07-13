const fs = require('fs')
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
    listTodos()
    break

  case 'done':
    doneTodo()
    break

  default:
    console.log('Bad command, try "add (...)", "list" or "done (id)"')
    break
}
