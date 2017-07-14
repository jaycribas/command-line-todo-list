const fs = require('fs')
require('console.table')
const command = process.argv[2]

const json = JSON.parse(fs.readFileSync('tasks.json'))

const add = require('./commands/add')
const list = require('./commands/list')
const done = require('./commands/done')

switch (command) {
  case 'add':
    let todo = process.argv[3]
    let addedNewJson = add(json, todo)
    fs.writeFileSync('tasks.json', JSON.stringify(addedNewJson, null, 2))
    break

  case 'list':
    list(json)
    console.table('To Do List', json.todos)
    if(json.todos.length == 1 ){
      return console.log(`${json.todos.length} task.\n`)
    }
    return console.log(`${json.todos.length} tasks.\n`)
    break

  case 'done':
    let doneId = process.argv[3]
    let doneNewJson = done(json, doneId)
    fs.writeFileSync('tasks.json', JSON.stringify(doneNewJson, null, 2))
    break

  default:
    console.log('Bad command, try "add (...)", "list" or "done (id)"')
    break
}
