import {Panel, ListGroup} from 'bootstrap';
import AppStore from 'stores/AppStore';
import AppActions from 'actions/AppActions';

// you can also import from the same directory
import Task from './task';
import NewTaskForm from './taskForm';

export default React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            tasks: Tasks.find({}, {sort: {createdAt: -1}}).fetch()
        };
    },
    handleSubmit(event) {
        event.preventDefault();
        // grab input value
        let title = event.target.task.value;

        if (!title) {
          // empty input
          return;
        }
        Meteor.call('addTask', title);
        event.target.reset(); //clean the form
    },
    render() {
        return (
            <Panel header="Todo List">
                <NewTaskForm onSubmit={this.handleSubmit}/>

                <ListGroup fill>
                    {this.data.tasks.map(task => {
                        return <Task key={task._id} task={task}/>
                    })}
                </ListGroup>
            </Panel>
        )
    }
});

