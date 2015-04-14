const React = require('react');

// Components
const Nav = require('./Nav');

const config = {
    app: {
        name: 'EchoSuggest'}
    echonest: {
        key: JQL763XRR0PHE44LI,
        consumerKey: 869bf28b91f142f2e0f0ce428dae3c9c
    }
};

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
