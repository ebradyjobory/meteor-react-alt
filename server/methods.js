Meteor.methods({
  taskUpdate: function (id) {
    const task = Tasks.findOne(id);
    Tasks.update(task._id, {$set: {checked: !task.checked }});
  },
  removeTask: function (id) {
    Tasks.remove(id);
  },
  addTask: function (title) {
    Tasks.insert({
      title: title,
      createdAt: new Date()
    });
  }
});