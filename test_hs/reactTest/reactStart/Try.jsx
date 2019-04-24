const React = require("react");
const { Component } = React;

class Try extends Component {
    render() {
        return (
            <li >
                <div>{this.props.value.fruit}</div>
                <div>컨텐츠</div>
            </li>
        );
    }
}

module.exports = Try;
