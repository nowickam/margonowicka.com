import {Component, React} from 'react';
import '../css/Home.css'
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
        }, () => {
            this.showPage()
        })

    }


    render() {
        return <div id={this.id} className="home-container">
            <video id="video" autoPlay loop muted src={"/media/mballs_horizontal_crop.mp4"} type={"video/mp4"}
                   onLoadedData={this.props.onChildLoad}>Sorry
            </video>
            <div className="name">
                MARGO <br/> NOWICKA
            </div>
        </div>
    }
}

export default Home;