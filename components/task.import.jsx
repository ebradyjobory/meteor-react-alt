import {ListGroupItem, Badge} from 'bootstrap';

export default React.createClass({
    removeTask() {
        // we can do it over here or delegate somewhere
        Meteor.call('removeTask', this.props.task._id);
    },

    markAsChecked() {
        Meteor.call('taskUpdate', this.props.task._id);
    },
    render() {
        return (
            <ListGroupItem>
                {this.props.task.title}

                <Badge onClick={this.removeTask}>Done!</Badge>
                <input type="checkbox" onChange={this.markAsChecked} checked={this.props.task.checked}/>
            </ListGroupItem>
        )
    }
});

