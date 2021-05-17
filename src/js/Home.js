import {React, Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/Home.css'
import {css} from "@emotion/core";
import DotLoader from "react-spinners/DotLoader";
import {override} from '../App'

class Home extends Component {
    constructor(props) {
        super();
        this.id = props.id
        this.showPage = props.showPage
        this.state = {
            loading: true
        }
    }

    finishLoading = () => {
        this.setState({
            loading: false
        }, () =>{
            this.showPage()
        })

    }


    render() {
        return <div id={this.id} className="home-container">
            {this.state.loading && <div className="overlay-home">
                <DotLoader color={"#4758FF"} loading={this.state.loading} css={override} size={`30vmax`}/>
            </div>}
            <video id="video" autoPlay loop muted src={"/media/mballs_horizontal_crop.mp4"} type={"video/mp4"}
                   onPlay={this.finishLoading}>Sorry
            </video>
            <div className="name">
                MARGO <br/> NOWICKA
            </div>
        </div>
    }
}

export default Home;