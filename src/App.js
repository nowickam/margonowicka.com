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
            isHome: "h"
        }

        this.changeRoute = this.changeRoute.bind(this)
    }

    changeRoute(route) {
        this.setState({
            isHome: route
        })
    }

    render() {
        return (
            <div id='rootContainer'>
                <Menu key={this.state.isHome} isHome={this.state.isHome} />
                <Routes>
                    <Route path="/" element={<Home changeRoute={this.changeRoute} />} />
                    <Route path="/work" element={<Work changeRoute={this.changeRoute} />} />
                    <Route path="/about" element={<About changeRoute={this.changeRoute} />} />
                </Routes>
                <div id='footer'>© 2020-2022 Margo Nowicka</div>
            </div>
        );
    }
}