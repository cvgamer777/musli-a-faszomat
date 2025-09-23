import React from "react";
import '../App.css'

export default class LeftSidebar extends React.Component {
    state = {
     menuExpanded : false
    }

    handleProductionsMenuItemClick = e => this.props.onMenuItemSelected('products')
    handleAboutMenuItemClick = e => this.props.onMenuItemSelected('about')

    hadnleNavMouseEnter = e => this.setState({menuExpanded: true})
    hadnleNavMouseLeave = e => this.setState({menuExpanded: false})
    
    render() {
        return (
            <div>
                <nav id="navbar" title="Seéevt a menu item" className={this.state.menuExpanded ? 'expanded': ''} onMouseEnter={this.hadnleNavMouseEnter} onMouseLeave={this.hadnleNavMouseLeave}>
                        <div className="menu-item" tabIndex="0" data-content="products" onClick={this.handleProductionsMenuItemClick}>
                            <span className="menu-icon">📦</span>
                            <span className="menu-text">Products</span>
                        </div>
                        <div className="menu-item" tabIndex="0" data-content="prices">
                            <span className="menu-icon">💰</span>
                            <span className="menu-text">Prices</span>
                        </div>
                        <div className="menu-item" tabIndex="0" data-content="about" onClick={this.handleAboutMenuItemClick}>
                          <span className="menu-icon">ℹ️</span>
                          <span className="menu-text">About</span>
                        </div>
                </nav>
            </div>
        )
    }
}