import React, { Component } from "react";

import styles from './styles/about.module.css'


export default class About extends Component {

    componentDidMount() {
        this.props.changeRoute("a")
    }


    render() {
        let links = {
            "programming portoflio": "https://github.com/nowickam",
            "mail": "mailto:mngnowicka@gmail.com",
            // "cv": "./media/cv.pdf"
        }
        let linksArray = []

        for (let link in links) {
            linksArray.push(<a key={link} href={links[link]} rel="noreferrer" target="_blank">{link}</a>)
        }

        return (
            <div className={styles.margin}>

                <div className={styles.overflow}>
                    <div className={styles.aboutContainer}>
                        <div className={styles.description}>
                            With my art I seek to have conversations, non-linear and non-verbalizable, with myself and others. I create visual narratives and metaphors stemming from the daily experiences and emotions, and my outlets vary from generative visualization, interactive installation, creative coding to storytelling and animation. Born in Wrocław, Poland, currently based in Helsinki, Finland.
                        </div>
                        <div className={styles.workLinks}>{linksArray}</div>
                        <img src="/media/about.png" alt="about" className={styles.imgAbout} />
                        <div className={styles.credits}>photo: Mateusz Król</div>
                    </div>
                </div>
            </div>
        );
    }
}