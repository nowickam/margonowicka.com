import React, { Component } from "react";

import styles from './styles/about.module.css'


export default class About extends Component {

    componentDidMount() {
        this.props.changeRoute("a")
    }


    render() {
        let links = {
            "CV": "./media/CV_Nowicka_9.2024.pdf",
            "programming portoflio": "https://github.com/nowickam",
            "filmfreeway": "https://filmfreeway.com/MalgorzataNowicka",
            "mngnowicka[at]gmail.com": "mailto:mngnowicka@gmail.com",
        }
        let linksArray = []

        for (let link in links) {
            linksArray.push(<a key={link} href={links[link]} rel="noreferrer" target="_blank" style={{ padding: "0.25rem" }}>{link}</a>)
        }

        return (
            <div className={styles.margin}>

                <div className={styles.overflow}>
                    <div className={styles.aboutContainer}>
                        <div className={styles.description}>
                            I am a new media artist, creative coder and animator.  My current artistic and research interests reside in deconstructing the totalistic discourses of computation. I want to foster a more critical understanding of computer logic by devising softer, more intelligible modes of algorithmic representation.
                        </div>
                        <div className={styles.description}>
                            I have a BSc in Computer Science from Warsaw University of Technology, and MA in New Media from Aalto University. I come from Wrocław, Poland, currently based in Helsinki, Finland.
                        </div>
                        <div className={styles.workLinks}>{linksArray}</div>
                        {/* <img src="/media/about.png" alt="about" className={styles.imgAbout} /> */}
                        {/* <div className={styles.credits}>photo: Mateusz Król</div> */}
                    </div>
                </div>
            </div>
        );
    }
}
