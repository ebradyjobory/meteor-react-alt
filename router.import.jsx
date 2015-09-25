import Layout from 'components/layout';

// import paths are absolute to app root

import Homepage from 'components/homepage';
import Todo from 'components/todo';

FlowRouter.route('/', {
    // Subscribe to have access to the collection in that route
    subscriptions() {
        this.register('tasks', Meteor.subscribe('tasks'));
    },
    action() {
        ReactLayout.render(Layout, {
            content: <Homepage />
        });
    }
});

FlowRouter.route('/todo', {
    subscriptions() {
        this.register('tasks', Meteor.subscribe('tasks'));
    },
    action() {
        ReactLayout.render(Layout, {
            content: <Todo />
        });
    }
});