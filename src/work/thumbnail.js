import React, { Component, useCallback } from "react";

import { Link } from "react-router-dom";

import styles from '../styles/work.module.css'


export default class Thumbnail extends Component {
    constructor(props) {
        super();
        this.state = {
            mouseHover: false,
            active: props.currentWork === props.id
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentWork !== this.props.currentWork) {
            this.setState({
                active: this.props.currentWork === this.props.id
            })
        }
    }

    onClick = () => {
        this.props.change(this.props.id)
    }

    onMouseEnter = () => {
        this.setState({
            mouseHover: true
        })
    }

    onMouseLeave = () => {
        this.setState({
            mouseHover: false
        })
    }

    render() {
        return (
            < div className={this.state.mouseHover ? styles.thumbnailContainerActive : styles.thumbnailContainer} onClick={this.onClick} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <div className={this.state.active ? styles.titleActive : styles.title}>{this.props.data.title}</div>
                <div className={styles.description}>{this.props.data.description}</div>
            </div >

        );
    }
}