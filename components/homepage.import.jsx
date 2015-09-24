import {Jumbotron, Button} from 'bootstrap';
import Actions from 'actions/AppActions';
import AppStore from 'stores/AppStore';

export default class Home extends React.Component {
        constructor(props) {
            super(props);
            this.state = AppStore.getState();
            this._onChange = this._onChange.bind(this);
        }
        componentDidMount() {
            AppStore.listen(this._onChange);
        }

        componentWillUnmount() {
            AppStore.unlisten(this._onChange);
        }

        _onChange(state) {
          this.setState(state);
        }

        click () {
            Actions.increment();
        }
        render() {
            return (
                <Jumbotron>
                    <h2>Universe Modules TodoList example</h2>

                    <button onClick={this.click}>Test Reflux</button>

                    <h3>{this.state.counter}</h3>

                    <p>Main reason of this welcome screen is to have some routing :)</p>

                    <a href="/todo">
                        <Button bsStyle='primary'>Go to Todo List</Button>
                    </a>
                </Jumbotron>
            )
        }
}

