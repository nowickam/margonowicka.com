import {React, Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/Home.css'

class Home extends Component{
    constructor(props) {
        super();
        this.id = props.id
    }

    scroll = (id) => {
        const anchor = document.querySelector(id)
        if(anchor !== null)
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    render() {
        return <div id={this.id} className="home-container">
            <video id="video" autoPlay loop src={"/media/mballs_horizontal.mp4"} type={"video/mp4"}>Sorry</video>
            <div className="name">
                MARGO <br/> NOWICKA
            </div>
        </div>
    }
}

export default Home;