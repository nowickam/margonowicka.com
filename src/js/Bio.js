import {Component, React} from 'react';
import {Transition} from "react-transition-group";
import '../css/Fa.css'
import DotLoader from "react-spinners/DotLoader";
import {defaultColor, defaultStyle, override, transitionColor, transitionStyles} from "../App";

class Bio extends Component {
    constructor(props) {
        super();
        this.id = props.id
        this.title = props.title
        this.state = {
            loading: true,
            content: false,
            title: false,
        }
    }

    toggleContent = () => {
        if (this.state.content) {
            this.setState({
                content: false,
            })
        } else {
            this.setState({
                content: this.id,
            })
        }
    }

    showTitle = () => {
        this.setState({
            title: true
        })
    }


    finishLoading = () => {
        this.setState({
            loading: false
        })
    }


    render() {

        return <div id={this.id} className="container">
            <div className="img-container">
                <Transition timeout={300} in={!this.state.content}>
                    {(state) => (
                        <img style={{...defaultStyle, ...transitionStyles[state]}} className="image"
                             src={"/media/" + this.id + ".png"} onLoad={this.showTitle}/>
                    )}
                </Transition>

                <Transition timeout={300} in={!this.state.content}>
                    {(state) => (
                        <div style={{...defaultColor, ...transitionColor[state]}} className="title-black"
                             onClick={this.toggleContent}>{this.title}</div>

                    )}
                </Transition>

                <div className="fa-container">
                    {/*<div className="fa-title" onClick={this.close}>{this.props.title}</div>*/}
                    <div className="fa-container-vert-height-bio">
                        <div className="fa-lower-container">
                            {/*<video className="ll-video" autoPlay loop muted src={"/media/ll.mp4"} type={"video/mp4"}>Sorry</video>*/}
                            <img className="left-image" src={"/media/bio1.png"} onLoad={this.finishLoading}/>
                            <img className="left-image" src={"/media/bio2.png"}/>
                        </div>
                        <div className="fa-upper-container">
                            <div className="fa-text">
                                A trailer to an interactive project on the biodiversity eradication issue. The animation
                                is done in Blender with the use of Biodiversity Heritage Library image collection.
                            </div>
                            <a href={"https://vimeo.com/manage/videos/518251014"}>video</a>

                            {/*<a className="close" onClick={this.close}>close</a>*/}
                        </div>
                    </div>

                </div>

            </div>

            {this.state.loading && <div className="overlay-content">
                <DotLoader color={"#4758FF"} loading={this.state.loading} css={override} size={`30vmax`}/>
            </div>}

        </div>
    }
}

export default Bio;