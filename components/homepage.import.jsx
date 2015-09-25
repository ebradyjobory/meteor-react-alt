import {Jumbotron, Button} from 'bootstrap';

export default React.createClass({
    render() {
        return (
            <Jumbotron>
                <h2>Universe Modules TodoList example</h2>

                <p>Main reason of this welcome screen is to have some routing :)</p>

                <a href="/todo">
                    <Button bsStyle='primary'>Go to Todo List</Button>
                </a>
            </Jumbotron>
        )
    }
});

