const React = require('react');

// Components
const Nav = require('./Nav');

const config = {app: {name: 'EchoSuggest'}};

// Component style
require('app/styles/app.less');

// React component class
const EchoSuggest = React.createClass({
    render() {
        // Must return a wrapping element
        return (
            <div className="app-instance">
                <Nav config={config}/>
                <div className="page-container">
                    <h1 className="fixed-centered">Hello, world.</h1>
                </div>
            </div>
        );
    }
});


module.exports = EchoSuggest;
