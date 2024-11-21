import React, { Component } from "react";
import './index.css';
import Menu from './Menu'
import Home from './Home'
import About from './About'
import Work from './work/work'
import { Routes, Route } from "react-router-dom";
import './styles/globals.css'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHome: "h",
            width: window.innerWidth,
            height: window.innerHeight,
            toggleMenu: false
        }

        this.changeRoute = this.changeRoute.bind(this)
        this.changeToggleMenu = this.changeToggleMenu.bind(this)
        this.setToggleMenu = this.setToggleMenu.bind(this)
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    }

    changeRoute(route) {
        this.setState({
            isHome: route,
            toggleMenu: true
        })
    }

    changeToggleMenu() {
        this.setState({
            toggleMenu: !this.state.toggleMenu
        })
    }

    setToggleMenu(value) {
        this.setState({
            toggleMenu: value
        })
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {

        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        return (
            <div id='rootContainer'>
                {/* <Menu key={this.state.isHome} isHome={this.state.isHome} width={this.state.width} height={this.state.height} toggleMenu={this.state.toggleMenu} changeToggleMenu={this.changeToggleMenu} /> */}
                <Routes>
                    {/* <Route path="/" element={<Home changeRoute={this.changeRoute} width={this.state.width} height={this.state.height} />} /> */}
                    <Route path="/" element={<Work toggleMenu={this.state.toggleMenu} changeRoute={this.changeRoute} width={this.state.width} height={this.state.height} setToggleMenu={this.setToggleMenu} changeToggleMenu={this.changeToggleMenu} />} />
                    <Route path="/about" element={<About changeRoute={this.changeRoute} />} />
                </Routes>
                <div id='footer'>© 2020-2024 Margo Nowicka</div>
            </div>
        );
    }
}
