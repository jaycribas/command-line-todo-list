module.exports = (json, id) => {
  for(let val of json.todos){
    if(val.ID == id){
      let indexOfDone = json.todos.indexOf(val)
      let done = json.todos.splice(indexOfDone, 1)
      console.log(`Completed the task "${done[0].Description}"`)
    }
  }
  return json
}
