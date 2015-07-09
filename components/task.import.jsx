import {ListGroupItem, Badge} from 'bootstrap';

export default React.createClass({
    removeTask() {
        // we can do it over here or delegate somewhere
        Tasks.remove(this.props.task._id);
    },
    render() {
        return (
            <ListGroupItem>
                {this.props.task.title}

                <Badge onClick={this.removeTask}>Done!</Badge>
            </ListGroupItem>
        )
    }
});

