import React, { Component } from "react";

import styles from '../styles/work.module.css'

import { Outlet } from "react-router-dom";
import { data } from "./data"
import Thumbnail from "./thumbnail"
import WorkDetails from "./workDetails";




export default class Work extends Component {
    constructor() {
        super();
        this.state = {
            workId: 0,
        }

        this.changeWork = this.changeWork.bind(this)
        this.changeMouseHover = this.changeMouseHover.bind(this)
    }

    componentDidMount() {
        this.props.changeRoute("w")
    }

    changeWork(id) {
        this.props.changeToggleMenu()
        this.setState({
            workId: id,
        })
    }

    changeMouseHover(hover) {
        this.setState({
            mouseHover: hover
        })
    }

    render() {
        let workList = data.map(function (e, i) {
            return <Thumbnail id={i} key={i} data={e} change={this.changeWork} currentWork={this.state.workId} width={this.props.width} height={this.props.height} />
        }, this)
        return (
            this.props.width > 768 ?
                <div className={styles.container}>
                    <div className={styles.overflow2}><div className={styles.thumbnailsContainer}>{workList}</div></div>
                    <WorkDetails workId={this.state.workId} mobile={false} toggleMenu={this.props.toggleMenu} />
                </div>
                :
                <div className={styles.container}>
                    <WorkDetails workId={this.state.workId} mobile={true} toggleMenu={this.props.toggleMenu} />
                    <div className={this.props.toggleMenu ? styles.overflow2Show : styles.overflow2Hide}><div className={styles.thumbnailsContainer}>{workList}</div></div>
                </div>
        );
    }
}