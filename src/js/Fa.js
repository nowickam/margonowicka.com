import {React, Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/Fa.css'


class Fa extends Component{
    constructor(props) {
        super();
        this.close = props.close
    }


    render() {
        return <div id={this.id} className="fa-container">
            <div className="fa-left-container">
                <video className="fa-video" autoPlay loop muted src={"/media/fa.mp4"} type={"video/mp4"}>Sorry</video>
                <img className="left-image" src={"/media/fa1.png"}/>
            </div>
            <div className="fa-right-container">
                <div className="fa-text">
                    Interactive web application for uploading an audio file with human speech and displaying the corresponding lip movements on the provided avatar.
                    <br/>
                    A neural network model is used to predict the sequence of phonemes which is then translated to visemes and mapped onto the avatar. The avatar was created in Blender and each viseme is treated as combinations of shape keyed facial configurations. The avatar was imported and displayed using THREE.js. My part was building the avatar, implementing the shape keys and creating the web interface.
                </div>
                <a href={"https://facialanimation.page"}>webpage</a>
                <a href={"https://vimeo.com/518277009"}>demo</a>
                <a href={"https://github.com/nowickam/facial- animation/tree/production"}>github</a>
                <a className="close" onClick={this.close}>close</a>
            </div>

        </div>
    }
}

export default Fa;