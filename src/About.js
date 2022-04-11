import React, { Component } from "react";

import styles from './styles/about.module.css'


export default class About extends Component {

    componentDidMount() {
        this.props.changeRoute("a")
    }


    render() {
        let links = {
            "github": "https://github.com/nowickam",
            "linkedin": "https://linkedin.com/in/malgorzata-nowicka",
            "mail": "mailto:mngnowicka@gmail.com"
        }
        let linksArray = []

        for (let link in links) {
            linksArray.push(<a key={link} href={links[link]} rel="noreferrer" target="_blank">{link}</a>)
        }

        return (
            <div>
                <div className={styles.description}>
                    I'm Margo Nowicka and I create visual narratives and metaphors stemming from the daily experiences, anxieties, and emotional states that desperately need a resolution. My outlets vary from generative visualization, interactive installation, creative coding to storytelling and animation.
                </div>
                <div className={styles.workLinks}>{linksArray}</div>
            </div>
        );
    }
}