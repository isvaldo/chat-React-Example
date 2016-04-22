
var Component = React.createClass({
    render: function() {
        return React.DOM.span(null, "I 'm so custom")
    }
});

ReactDOM.render(
    React.createElement(Component),
    document.getElementById("app")
    );
