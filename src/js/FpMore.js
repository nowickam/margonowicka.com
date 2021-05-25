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
            <div className="marg-top marg-right-auto">Apocalypse Now</div>
            <div className="fp-text-more">
                <br/>
                Imagine a city of the future. Imagine the nature in it. Untrimmed grass, free to grow on the sidewalk. Ivy climbing up the skyscrapers. Trees growing old, undisturbed, uncut, their trunks twisting and wrapping around the railings.
                <br/>
                <br/>
                A description of such ecosystem fits a post-apocalyptic city more than any metropolitan area I know of. Currently in vogue - concrete roads, paved sidewalks, glass towers, and pitiful patches of evenly trimmed lawn.
                <br/>
                <br/>
                We know, that letting the grass grow helps conserving water and attracts various species of wildflowers and pollinators. The soil underneath traps the rainfall in the ground, preventing floods and replenishing the reserves of the ground waters. We also realise that older trees produce more oxygen, absorb more carbon and develop better root system, forming an underground forest of support. Making the cities greener decrease the air temperatures, preventing the formation of urban heat islands.
                <br/>
                <br/>
                Apocalypse does not have to mean the end of the world. The word comes from the Ancient Greek <i>apo</i> (off) and <i>kaluptein</i> (to cover) - and literally translates to uncover, reveal the disguised truth. Nature will reclaim the areas we seized sooner or later, with or without us. It’s our choice if we want our post-apocalyptic cities to be a result of a climate-driven eradication of humankind that we’re steering ourselves towards, or a revelation of our surrender to nature.
                <br/>
                <br/>

            </div>
            <video className="fp-more-video marg-right" autoPlay muted src={"/media/robak.webm"} type={"video/webm"}
                   onLoadedData={this.finishLoading}>Sorry
            </video>

            <div className="fp-lower-container">
            <video className="fp-more-video2 marg-right" controls src={"/media/fp1.mp4"} type={"video/mp4"}
                   onLoadedData={this.finishLoading}>Sorry
            </video>
            <video className="fp-more-video2 marg-right" controls src={"/media/fp2.mp4"} type={"video/mp4"}
                   onLoadedData={this.finishLoading}>Sorry
            </video>
            </div>

        </div>
    }
}

export default FpMore;