import {Component, React} from 'react';
import '../css/About.css'

class About extends Component {
    constructor(props) {
        super();
        this.id = props.id
    }

    render() {
        return <div id={this.id} className="about-container">
            <div className="text-container">
                <div className="text">
                    Hi! I'm <b>Margo</b>.<br/>
                    I completed a BSc degree in Computer Science at the Warsaw University of Technology.
                    <br/>
                    My interests revolve around <b>bridging my technical education and a passion for digital art</b>.
                    I do that by incorporating 3D modeling, animation, generative coding, data visualization into
                    my software and machine learning projects.<br/>
                </div>

                <div className="icon-container">
                    <b>Contact me:</b>
                    <div className="icon">
                        <img className="svg" src="/github.svg"/>
                        <a href={"https://github.com/nowickam"} target="_blank">github.com/nowickam</a>
                    </div>
                    <div className="icon">
                        <img className="svg" src="/linkedin.svg"/>
                        <a href={"https://linkedin.com/in/malgorzata-nowicka"} target="_blank">linkedin.com/in/malgorzata-nowicka</a>
                    </div>
                    <div className="icon">
                        <img className="svg" src="/gmail.svg"/>
                        <a href={"mailto:mngnowicka@gmail.com"}>mngnowicka@gmail.com</a>
                    </div>
                    <div className="icon">
                        <img className="svg" src="/vimeo.svg"/>
                        <a href={"https://vimeo.com/user134790193"} target="_blank">vimeo.com/user134790193</a>
                    </div>
                    <footer>&copy; Copyright 2020-2021, Małgorzata Nowicka</footer>
                </div>


            </div>

            <video id="video-about" autoPlay loop muted src={"/media/mballs_vertical_crop.mp4"}
                   type={"video/mp4"} onLoadedData={this.props.onChildLoad}>Sorry
            </video>
        </div>
    }
}

export default About;