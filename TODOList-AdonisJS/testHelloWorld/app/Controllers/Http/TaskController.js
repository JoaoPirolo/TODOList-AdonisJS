'use strict'

class TaskController {
  index({ view }){
    const tasks = [
      {title: 'Task One', body: 'This is Task One'},
      {title: 'Task Two', body: 'This is Task Two'},
    ]
    return view.render('task',{
      title: 'Test Task',
      tasks: tasks
    })
  }
}

module.exports = TaskController
