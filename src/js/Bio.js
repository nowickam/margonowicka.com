import {React, Component} from 'react';
import ReactDOM from 'react-dom';
import { Transition } from "react-transition-group";
import '../css/Fa.css'

class Bio extends Component{
    constructor(props) {
        super();
        this.close = props.close
    }


    render() {
        return <div id={this.id} className="fa-container">
            <div className="fa-left-container">
                {/*<video className="ll-video" autoPlay loop muted src={"/media/ll.mp4"} type={"video/mp4"}>Sorry</video>*/}
                <img className="left-image" src={"/media/bio1.png"}/>
                <img className="left-image" src={"/media/bio2.png"}/>
            </div>
            <div className="fa-right-container">
                <div className="fa-text">
                    A trailer to an interactive project on the biodiversity eradication issue. The animation is done in Blender with the use of Biodiversity Heritage Library image collection.
                </div>
                <a href={"https://vimeo.com/manage/videos/518251014"}>demo</a>

                <a className="close" onClick={this.close}>close</a>
            </div>

        </div>
    }
}

export default Bio;