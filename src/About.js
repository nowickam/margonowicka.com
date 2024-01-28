import React, { Component } from "react";

import styles from './styles/about.module.css'


export default class About extends Component {

    componentDidMount() {
        this.props.changeRoute("a")
    }


    render() {
        let links = {
            "CV": "./media/Nowicka_CV.pdf",
            "programming portoflio": "https://github.com/nowickam",
            "filmfreeway": "https://filmfreeway.com/MalgorzataNowicka",
            "mail": "mailto:mngnowicka@gmail.com",
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
                            My interests reside in the formation of the self at the edges of consciousness and humanity — in meeting other people and machines. That is why I mainly focus on introspecting the turmoils of social anxiety, extrospecting the humanist anxiety in the age of computational-technological determinism, as well as meditating on the dimension of specting and its edges.
                        </div>
                        <div className={styles.description}>
                            I operate with the languages of animation and new media art. The areas of my focus have been shaped by my education, with the BSc in Computer Science from Warsaw University of Technology, and MA in New Media from Aalto University. I come from Wrocław, Poland and am currently based in Helsinki, Finland.
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