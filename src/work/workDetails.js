import React, { Component, useEffect, useRef, useState } from "react";

import styles from '../styles/work.module.css'

import { useParams } from "react-router-dom";

import { data } from './data'

import Canvas from "./canvas";


export default function WorkDetails(props) {
    let id = parseInt(props.workId);
    const ref = useRef(null);

    useEffect(() => {
        ref.current.scrollTo(0, 0);
    }, [props.workId])


    const processAbout = (text) => {
        // Regular expression to match text between '&' and replace with link
        const regexLink = /&([^&]*)&/g;
        const links = data[id].works

        return text.split(regexLink).map((part, index) => {
            // If the part matches the *word* pattern, wrap it with a link
            if (index % 2 !== 0) {
                linkIndex += 1
                let workIndex = data.map(e => e.title).indexOf(links[linkIndex])
                return <span className={styles.bioLinks} onClick={() => { props.changeWorkBio(workIndex) }} key={index} target="_blank" rel="noopener noreferrer">{part}</span>;
            } else {
                return part;
            }
        });

    };

    const processText = (text) => {
        // Regular expression to match text between '&' and replace with link
        const regexBold = /\*([^*]*)\*/g;
        const regexSup = /\^([^^]*)\^/g;

        // TODO make recursive
        return text.split(regexBold).map((boldPart, boldIndex) => {
            // If the part matches the *word* pattern, wrap it with a link
            if (boldIndex % 2 !== 0) {
                return <span className={styles.textBold} key={boldIndex}>{boldPart}</span>;
            } else {
                return boldPart.split(regexSup).map((supPart, supIndex) => {
                    // If the part matches the *word* pattern, wrap it with a link
                    if (supIndex % 2 !== 0) {
                        return <span className={styles.textSup} key={supIndex}>{supPart}</span>;
                    } else {
                        return supPart;
                    }
                });
            }
        });

    };

    let texts;
    let linkIndex = -1
    // If it's the first element, process the about text
    if (id === 0) {
        texts = data[id].text.map(function (e, i) {
            return <div key={id + i} className={styles.workParagraph}>{processAbout(e)}</div>
        })

    }
    else {
        texts = data[id].text.map(function (e, i) {
            return <div key={id + i} className={styles.workParagraph}>{processText(e)}</div>
        })
    }


    let footers = data[id].footer.map(function (e, i) {
        return <div key={id + i} className={styles.workFooter}>{e}</div>
    })

    let links = []
    for (const [key, value] of Object.entries(data[id].links)) {
        links.push(<a key={id + key} href={value} rel="noreferrer" target="_blank">{key} &#8599;</a>)
    }

    let media = [];
    let mediaWide = [];
    let mediaWideRow = [];
    let mainMedia = [];

    // MAIN MEDIA
    for (const [key, value] of Object.entries(data[id].mainMedia)) {
        if (key.substring(0, 5) === "video") {
            if (key[5] === 'V')
                mainMedia.push(<video key={id + value} className="mainVideoVertical" poster={data[id].mainMediaPoster[key]} autoPlay muted loop src={value} type={"video/mp4"} > Sorry</video>)
            else if (key === "videoEmbed")
                mainMedia.push(<div style={{ padding: "62% 0 0 0", position: "relative", width: "100%" }}><iframe src={value} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} title={data[id].title}></iframe></div>)
            else if (key === "videoAbout")
                mainMedia.push(<video key={id + value} className={styles.videoAbout} autoPlay muted poster={data[id].mainMediaPoster[key]} preload="metadata" src={value} type={"video/mov"} > Sorry</video>)
            else
                mainMedia.push(<video key={id + value} className="mainVideo" autoPlay muted poster={data[id].mainMediaPoster[key]} preload="metadata" loop src={value} type={"video/mp4"} > Sorry</video>)
        }
        else if (key.substring(0, 3) === "img") {
            if (key[3] === 'V')
                mainMedia.push(<img key={id + value} src={value} alt={data[id].title} className="mainImgVertical" />)
            else if (key[3] === 'L')
                mainMedia.push(<img key={id + value} src={value} alt={data[id].title} className={styles.mainImgLong} />)
            else
                mainMedia.push(<img key={id + value} src={value} alt={data[id].title} className="mainImg" />)
        }
        else if (key === "script") {
            mainMedia.push(<Canvas key={id + value} />)
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
        // TEXTS
        else if (key.substring(0, 4) === "text") {
            media.push(<div key={id + value} className={styles.workDesc}>{value}</div>)
        }
        else if (key.substring(0, 4) === "texl") {
            media.push(<div key={id + value} className={styles.workDescLeft}>{value}</div>)
        }
        else if (key.substring(0, 4) === "texw") {
            mediaWide.push(<div key={id + value} className={styles.workDesc}>{value}</div>)
        }
        else if (key.substring(0, 6) === "footer") {
            media.push(<div key={id + key} className={styles.workFooter}>{value}</div>)
        }

    }

    return (
        <div ref={ref} className={props.mobile ? (props.toggleMenu ? styles.overflowHide : styles.overflowShow) : styles.overflow}>
            <div id="workMainImgRef" className={data[id].tag === "Writing" ? styles.writingMainContainer : styles.workMainContainer}>
                <div className={styles.workImgMain}>{mainMedia}</div>
                <div className={data[id].tag === "Writing" ? styles.writingTextContainer : styles.workTextContainer}>
                    <div className={styles.workText}>{texts}</div>
                    <div className={styles.workLinks}>{links}</div>
                    <div className={styles.workFooters}>{footers}</div>
                </div>
                <div className={styles.workImgContainer}>{media}</div>
                <div className={styles.workImgWideContainer}>
                    <div className={styles.workImgWideRow}>{mediaWideRow}</div>
                    <div className={styles.workImgWide}>{mediaWide}</div>
                </div>

            </div>
        </div>
    );
}