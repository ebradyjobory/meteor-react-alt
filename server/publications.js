Meteor.publish('tasks', function () {
    return Tasks.find({}, {
        limit: 10,
        sort: {
            createdAt: -1
        }
    });
});