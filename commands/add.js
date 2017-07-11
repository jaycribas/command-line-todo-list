// add - adds a specific task -- fs.writeFileSync
const fs = require('fs')
const todo = process.argv[3]
const json = require('../tasks.json')

const id = (function(){
  let counter = 1
  return function (){
    return counter++
  }
})()

const addTodo = function(){

  let newTodo = {
    id: id(),
    description: todo,
    complete: false
  }

  try {
    json.push(newTodo)
  } catch(e){
    console.log('nope')
  }

  //
  // // let data = JSON.stringify(todo, null, 2)
  // // console.log("data (╯°□°）╯︵ ┻━┻", data)
  //
  fs.writeFileSync('tasks.json', JSON.stringify(json, null, 2))

  // function finished(err){
  //   console.log("done (╯°□°）╯︵ ┻━┻")
  // }

}

module.exports = { addTodo }
