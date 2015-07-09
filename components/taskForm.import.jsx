export default React.createClass({
    propTypes: {
        // our component pass event to
        onSubmit: React.PropTypes.func.isRequired
    },
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <div className="input-group">
                    <input type="text" name="task" className="form-control" placeholder="Add new task"/>
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">Submit</button>
                    </span>
                </div>
            </form>
        )
    }
});

