// list - lists the incomplete tasks -- fs.readFileSync
const fs = require('fs')
const json = require('../tasks.json')
require('console.table')

const listTodos = function(){
  let todoList = []

  for(let i = 0; i < json.todos.length; i++){
    let task = {
      "ID": json.todos[i].id,
      "Description": json.todos[i].description
    }
    todoList.push(task)
  }

  console.table('To Do List', todoList)
  if(todoList.length == 1 ){
    return console.log(`${todoList.length} task.`)
  }
  console.log(`${todoList.length} tasks.`)
}

module.exports = { listTodos }
