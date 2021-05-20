import {Component, React} from 'react';
import '../css/Content.css'
import DotLoader from "react-spinners/DotLoader";
import {defaultColor, defaultStyle, override, transitionColor, transitionStyles} from '../App'
import {Transition} from "react-transition-group";
import {Link} from "react-router-dom";


class FpMore extends Component {
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

    showPage = () => {
        this.setState({
            loading: false
        })
    }


    finishLoading = () => {
        this.setState({
            loading: false
        })
    }


    render() {
        return <div id={this.id} className="container-more">
                    <Link className="link left" to="/">back</Link>
            <div className="marg-top">Reclaimed</div>
            <div className="bio-text">
                Soon!
                <br/>
                <br/>
            </div>
                        {/*<video className="fp-video marg-right" controls src={"/media/fp1.mp4"} type={"video/mp4"}*/}
                        {/*       onLoadedData={this.finishLoading}>Sorry*/}
                        {/*</video>*/}
                        {/*<video className="fp-video marg-right" controls src={"/media/fp2.mp4"} type={"video/mp4"}*/}
                        {/*       onLoadedData={this.finishLoading}>Sorry*/}
                        {/*</video>*/}

        </div>
    }
}

export default FpMore;