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
            workId: 0
        }

        this.changeWork = this.changeWork.bind(this)
        this.changeMouseHover = this.changeMouseHover.bind(this)
    }

    componentDidMount() {
        this.props.changeRoute("w")
    }


    changeWork(id) {
        this.setState({
            workId: id
        })
    }

    changeMouseHover(hover) {
        this.setState({
            mouseHover: hover
        })
    }

    render() {
        let workList = data.map(function (e, i) {
            return <Thumbnail id={i} key={i} data={e} change={this.changeWork} currentWork={this.state.workId} />
        }, this)
        return (
            <div className={styles.container}>
                <div className={styles.thumbnailsContainer}>{workList}</div>
                <WorkDetails workId={this.state.workId} />
            </div>
        );
    }
}