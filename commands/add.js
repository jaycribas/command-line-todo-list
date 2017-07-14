module.exports = (json, todo) => {
  json.serialId++

  let newTodo = { ID: json.serialId, Description: todo }

  json.todos.push(newTodo)

  console.log(`Created task ${newTodo.ID}`)

  return json
}
