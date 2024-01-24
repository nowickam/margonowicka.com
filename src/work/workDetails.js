import React, { Component, useEffect, useRef, useState } from "react";

import styles from '../styles/work.module.css'

import { useParams } from "react-router-dom";

import { data } from './data'


export default function WorkDetails(props) {
    let id = parseInt(props.workId);
    const ref = useRef(null);

    useEffect(() => {
        ref.current.scrollTo(0, 0);
    }, [props.workId])

    let texts = data[id].text.map(function (e, i) {
        return <div key={id + i} className={styles.workParagraph}>{e}</div>
    })

    let footers = data[id].footer.map(function (e, i) {
        return <div key={id + i} className={styles.workFooter}>{e}</div>
    })

    let links = []
    for (const [key, value] of Object.entries(data[id].links)) {
        links.push(<a key={id + key} href={value} rel="noreferrer" target="_blank">{key}</a>)
    }

    let media = [];
    let mediaWide = [];
    let mediaWideRow = [];
    let mainMedia = [];

    // MAIN MEDIA
    for (const [key, value] of Object.entries(data[id].mainMedia)) {
        if (key.substring(0, 5) === "video") {
            if (key[5] === 'V')
                mainMedia.push(<video key={id + value} className="mainVideoVertical" autoPlay muted loop controls src={value} type={"video/mp4"} > Sorry</video>)
            else if (key === "videoEmbed")
                mainMedia.push(<div style={{ padding: "62% 0 0 0", position: "relative", width: "100%" }}><iframe src={value} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} title={data[id].title}></iframe></div>)
            else
                mainMedia.push(<video key={id + value} className="mainVideo" autoPlay muted loop controls src={value} type={"video/mp4"} > Sorry</video>)
        }
        else if (key.substring(0, 3) === "img") {
            mainMedia.push(<img key={id + value} src={value} alt={data[id].title} className="mainImg" />)
        }
    }

    // OTHER MEDIA
    for (const [key, value] of Object.entries(data[id].media)) {
        // VIDEOS
        if (key.substring(0, 5) === "video") {
            media.push(<video key={id + value} className="workVideo" controls src={value} type={"video/mp4"} > Sorry</video>)
        } else if (key.substring(0, 5) === "videw") {
            mediaWide.push(<video key={id + value} className="workVideo" controls src={value} type={"video/mp4"} > Sorry</video>)
        } else if (key.substring(0, 5) === "vider") {
            mediaWideRow.push(<video key={id + value} className="workVideo" controls src={value} type={"video/mp4"} > Sorry</video>)
        }
        // IMAGES
        else if (key.substring(0, 3) === "img") {
            media.push(<img key={id + value} src={value} alt={data[id].title} className="workImg" />)
        }
        else if (key.substring(0, 3) === "imw") {
            mediaWide.push(<img key={id + value} src={value} alt={data[id].title} className="workImg" />)
        }
        else if (key.substring(0, 3) === "imr") {
            mediaWideRow.push(<img key={id + value} src={value} alt={data[id].title} className="workImg" />)
        }
        else if (key.substring(0, 6) === "footer") {
            media.push(<div key={id + key} className={styles.workFooter}>{value}</div>)
        }
    }

    return (
        <div ref={ref} className={styles.overflow}>
            <div className={styles.workMainContainer}>
                <div className={styles.workImgMain}>{mainMedia}</div>
                <div className={styles.workTextContainer}>
                    <div className={styles.workText}>{texts}</div>
                    <div className={styles.workLinks}>{links}</div>
                    <div className={styles.workFooters}>{footers}</div>
                </div>
                <div className={styles.workImgContainer}>{media}</div>
                <div className={styles.workImgWideRowContainer}>{mediaWideRow}</div>
                <div className={styles.workImgWideContainer}>{mediaWide}</div>
            </div>
        </div>
    );
}