import {Component, React} from 'react';
import {Transition} from "react-transition-group";
import '../css/Content.css'
import DotLoader from "react-spinners/DotLoader";
import {defaultColor, defaultStyle, override, transitionColor, transitionStyles} from "../App";
import {Link} from "react-router-dom";

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
                    <div className="fa-container-vert-height-bio">
                        <div className="fa-lower-container">
                            <img className="left-image" src={"/media/bio1.png"} onLoad={this.finishLoading}/>
                            <img className="left-image" src={"/media/bio2.png"}/>
                        </div>
                            <div className="fa-text">
                                An animation touching on the biodiversity eradication issue.
                            </div>
                        <Link to="/adam-and-eve">learn more</Link>
                    </div>

                </div>

            </div>

            {/*{this.state.loading && <div className="overlay-content">*/}
            {/*    <DotLoader color={"#4758FF"} loading={this.state.loading} css={override} size={`30vmax`}/>*/}
            {/*</div>}*/}

        </div>
    }
}

export default Bio;