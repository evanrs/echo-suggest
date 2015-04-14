const React = require('react');


require('app/styles/nav.less');
const Nav = React.createClass({
    getInitialState() {
        return {
            isMenuVisible: false
        }
    },

    toggleMenu() {
        this.setState({
            isMenuVisible: ! this.state.isMenuVisible
        });
    },

    render() {
        const {config} = this.props;
        const isMenuVisible = this.state.isMenuVisible ? 'navigation__visible' : ''
        return (
            <div className="nav-container">
                <nav className={`top-nav ${isMenuVisible}`} rel="main-navigation">
                    <a className="nav-logo" href="/">
                      <img src="/assets/masthead-blue.svg" alt="Thinkful"/>
                    </a>
                    <ul className="nav-list">
                        <li><a className="nav-link selected" href="/">
                            {config.app.name}</a></li>
                    </ul>
                    <a className="nav-link nav-link__mobile"
                       onClick={this.toggleMenu}>
                       <i alt="Menu" className="burger"></i></a>
                </nav>
            </div>
        );
    }

});


module.exports = Nav;
