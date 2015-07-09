import {Grid, Col, Row, Navbar} from 'bootstrap';

export default React.createClass({
    render() {
        return (
            <div>
                <Navbar brand="Universe Modules" staticTop={true}>
                    <ul className="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/todo">Todo List</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="http://unicms.io" target="_blank">Visit Universe Website</a></li>
                    </ul>
                </Navbar>
                <Grid>
                    <Row>
                        <Col sm={12}>
                            {this.props.content}
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
});

