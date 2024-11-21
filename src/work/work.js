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
        this.changeWorkBio = this.changeWorkBio.bind(this)
        this.changeMouseHover = this.changeMouseHover.bind(this)
    }

    componentDidMount() {
        // this.props.changeRoute("w")
    }

    changeWork(id) {
        this.props.changeToggleMenu()
        this.setState({
            workId: id,
        })
    }

    changeWorkBio(id) {
        this.props.setToggleMenu(false)
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
        // let workList = data.map(function (e, i) {
        //     return <Thumbnail id={i} key={i} data={e} change={this.changeWork} currentWork={this.state.workId} width={this.props.width} height={this.props.height} />
        // }, this)

        // let workList = Object.entries(data).map(([key, value]) => {
        //     return <div>
        //         <div>{key}</div>
        //         <div>{value.map(list => {
        //             return <div id={list.id}>{list.title}</div>
        //         })}</div>
        //     </div>
        // });

        let groupedByTag = data.reduce((acc, item) => {
            const tag = item.tag;
            if (!acc[tag]) {
                acc[tag] = []; // Initialize the array if the tag doesn't exist yet
            }
            item.id = data.indexOf(item);
            acc[tag].push(item); // Add the item to the relevant array
            return acc;
        }, {});

        let workList = Object.entries(groupedByTag).map(([key, value]) => {
            return <div className={styles.thumbnailContainer}>
                <div className={styles.thumbnailTag}>{key}</div>
                <div className={styles.thumbnailList}>{value.map(list => {
                    // intend and date for bio or not
                    return key ? <div className={this.state.workId === list.id ? styles.thumbnailActive : styles.thumbnail} onClick={() => this.changeWork(list.id)} id={list.id}>{list.date}<span className={styles.spacer}></span>{list.title}</div> : <div className={this.state.workId === list.id ? styles.thumbnailActive : styles.thumbnail} onClick={() => this.changeWork(list.id)} id={list.id}>{list.title}</div>
                })}</div>
            </div>
        });


        return (
            this.props.width > 768 ?
                <div className={styles.container}>
                    <div className={styles.thumbnailsHeader}>Margo Nowicka</div>
                    <div className={styles.overflow2}><div className={styles.thumbnailsContainer}>{workList}</div></div>
                    <WorkDetails workId={this.state.workId} mobile={false} toggleMenu={this.props.toggleMenu} changeWork={this.changeWork} changeWorkBio={this.changeWorkBio} />
                </div>
                :
                <div className={styles.container}>
                    <div className={styles.thumbnailsHeaderMobile}><span>Margo Nowicka</span><span className={this.props.toggleMenu ? styles.underline : styles.noUnderline} onClick={this.props.changeToggleMenu}>Menu</span></div>
                    <WorkDetails workId={this.state.workId} mobile={true} toggleMenu={this.props.toggleMenu} changeWork={this.changeWork} changeWorkBio={this.changeWorkBio} />
                    <div className={this.props.toggleMenu ? styles.overflow2Show : styles.overflow2Hide}><div className={styles.thumbnailsContainer}>{workList}</div></div>
                </div >
        );
    }
}