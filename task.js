const command = process.argv[2]
const { addTodo } = require('./commands/add')
const { listTodos } = require('./commands/list')
const { doneTodo } = require('./commands/done')

switch (command) {
  case 'add':
    addTodo()
    break
  case 'list':
    listTodos()
    break
  case 'done':
    doneTodo()
    break
}

// add - adds a specific task -- fs.writeFileSync

// list - lists the incomplete tasks -- fs.readFileSync

// done - marks the task with id equal to <task-id> complete
