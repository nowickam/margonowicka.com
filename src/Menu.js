import React, { Component } from "react";

import styles from './styles/menu.module.css'

import { Link } from "react-router-dom";


export default class Menu extends Component {
    constructor(props) {
        super();
        this.state = {
            isHome: props.isHome,
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.isHome !== prevProps.isHome) {
            this.setState({
                isHome: this.props.isHome
            })

        }
    }


    render() {
        return (
            this.props.width > 768 ?
                <div id={styles.menu} className={this.state.isHome === "h" ? styles.white : styles.black}>
                    <nav >
                        <Link to="/">
                            <div className={this.state.isHome === "h" ? styles.linkActive : styles.link}>Home</div>
                        </Link>
                    </nav>
                    <nav>
                        <Link to="/work">
                            <div className={this.state.isHome === "w" ? styles.linkActive : styles.link}>Work</div>
                        </Link>
                    </nav>
                    <nav>
                        <Link to="/about">
                            <div className={this.state.isHome === "a" ? styles.linkActive : styles.link}>About</div>
                        </Link>
                    </nav>
                </div>
                :
                <div id={styles.menu} className={this.state.isHome === "h" ? styles.white : styles.black}>
                    <nav >
                        <Link to="/">
                            <div className={this.state.isHome === "h" ? styles.linkActive : styles.link}>Home</div>
                        </Link>
                    </nav>
                    <nav>
                        <Link to="/work">
                            <div onClick={this.props.changeToggleMenu} className={this.state.isHome === "w" && this.props.toggleMenu ? styles.linkActive : styles.link}>Work</div>
                        </Link>
                    </nav>
                    <nav>
                        <Link to="/about">
                            <div className={this.state.isHome === "a" ? styles.linkActive : styles.link}>About</div>
                        </Link>
                    </nav>
                </div>
        );
    }
}
