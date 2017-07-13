const json = require('../tasks.json')

const doneTodo = id => {
  for(let val of json.todos){
    if(val.id == id){
      let indexOfDone = json.todos.indexOf(val)
      let done = json.todos.splice(indexOfDone, 1)
      console.log(`Completed the task "${done[0].description}"`)
    }
  }
  return json
}

module.exports = { doneTodo }
