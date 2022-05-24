import React, { Component, useEffect, useState } from "react";

import styles from '../styles/work.module.css'

import { useParams } from "react-router-dom";

import { data } from './data'


export default function WorkDetails(props) {
    // let params = useParams();
    // let id = params.workId;
    // console.log(id)

    let id = parseInt(props.workId);

    // let [dims, setDims] = useState({
    //     height: window.innerHeight,
    //     width: window.innerWidth
    // });

    // useEffect(() => {
    //     function handleResize() {
    //         setDims({
    //             height: window.innerHeight,
    //             width: window.innerWidth
    //         })
    //     }
    //     window.addEventListener("resize", handleResize)
    //     return () => {
    //         window.removeEventListener("resize", handleResize)
    //     }
    // })

    let texts = data[id].text.map(function (e, i) {
        return <div key={id + i} className={styles.workParagraph}>{e}</div>
    })

    let links = []
    for (const [key, value] of Object.entries(data[id].links)) {
        links.push(<a key={id + key} href={value} rel="noreferrer" target="_blank">{key}</a>)
    }

    let media = [];
    let mainMedia = [];

    for (const [key, value] of Object.entries(data[id].mainMedia)) {
        if (key.substring(0, 5) === "video") {
            if (key[5] === 'V')
                mainMedia.push(<video key={id + value} className="mainVideoVertical" autoPlay muted loop controls src={value} type={"video/mp4"} > Sorry</video>)
            else
                mainMedia.push(<video key={id + value} className="mainVideo" autoPlay muted loop controls src={value} type={"video/mp4"} > Sorry</video>)
        }
        else if (key.substring(0, 3) === "img") {
            mainMedia.push(<img key={id + value} src={value} alt={data[id].title} className="mainImg" />)
        }
    }
    console.log(mainMedia)
    for (const [key, value] of Object.entries(data[id].media)) {
        console.log(key, value)
        if (key.substring(0, 5) === "video")
            media.push(<video key={id + value} className="workVideo" autoPlay muted loop controls src={value} type={"video/mp4"} > Sorry</video>)
        else if (key.substring(0, 3) === "img") {
            media.push(<img key={id + value} src={value} alt={data[id].title} className="workImg" />)
            // media.push(<img key={id + value} src={value} alt={data[id].title} className="workImg"></img>)
        }
    }

    return (
        <div className={styles.overflow}>
            <div className={styles.workMainContainer}>
                <div className={styles.workImgMain}>{mainMedia}</div>
                <div className={styles.workTextContainer}>
                    <div className={styles.workText}>{texts}</div>
                    <div className={styles.workLinks}>{links}</div>
                </div>
                <div className={styles.workImgContainer}>{media}</div>
            </div>
        </div>
    );
}