import {Component, React} from 'react';
import {Transition} from "react-transition-group";
import '../css/Fa.css'
import DotLoader from "react-spinners/DotLoader";
import {defaultColor, defaultStyle, override, transitionColor, transitionStyles} from "../App";

class Ll extends Component {
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
                    <div className="fa-left-container">
                        <video className="ll-video" controls src={"/media/ll.mp4"} type={"video/mp4"}
                               onLoadedData={this.finishLoading}>Sorry
                        </video>

                    </div>
                    <div className="fa-right-container">
                        <div className="fa-text">
                            A Java game emulating the gameplay of Lunar Lander in 3D (inspired by Atari's Lunar Lander
                            and by Daniel Shiffman's Terrain Generation).
                        </div>
                        <a href={"https://github.com/nowickam/lunar-lander-3d"}>github</a>

                        {/*<a className="close" onClick={this.close}>close</a>*/}
                    </div>

                </div>

            </div>

            {this.state.loading && <div className="overlay-content">
                <DotLoader color={"#4758FF"} loading={this.state.loading} css={override} size={`30vmax`}/>
            </div>}

        </div>
    }
}

export default Ll;