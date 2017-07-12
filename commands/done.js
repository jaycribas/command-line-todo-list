// done - marks the task with id equal to <task-id> complete
const fs = require('fs')
const json = require('../tasks.json')

const doneTodo = function(){
  for(let i = 0; i < json.todos.length; i++){
    if( json.todos[i].id == process.argv[3] ){
      let indexOfDone = json.todos.indexOf(json.todos[i])
      let done = json.todos.splice(indexOfDone, 1)
      console.log(`Completed the task "${done[0].description}"`)
    }
  }
  fs.writeFileSync('tasks.json', JSON.stringify(json, null, 2))
}

module.exports = { doneTodo }
