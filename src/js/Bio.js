import {React, Component} from 'react';
import ReactDOM from 'react-dom';
import { Transition } from "react-transition-group";
import '../css/Fa.css'
import DotLoader from "react-spinners/DotLoader";
import {override} from "../App";

class Bio extends Component{
    constructor(props) {
        super();
        this.close = props.close
        this.state={
            loading: true
        }
    }

    finishLoading = () => {
        this.setState({
            loading: false
        })
    }


    render() {
        return <div id={this.id} className="fa-container">
            {this.state.loading && <div className="overlay-content">
                <DotLoader color={"#4758FF"} loading={this.state.loading} css={override} size={`30vmax`}/>
            </div>}
            <div className="fa-left-container">
                {/*<video className="ll-video" autoPlay loop muted src={"/media/ll.mp4"} type={"video/mp4"}>Sorry</video>*/}
                <img className="left-image" src={"/media/bio1.png"} onLoad={this.finishLoading}/>
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