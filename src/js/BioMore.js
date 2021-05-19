import {Component, React} from 'react';
import '../css/Content.css'
import DotLoader from "react-spinners/DotLoader";
import {defaultColor, defaultStyle, override, transitionColor, transitionStyles} from '../App'
import {Transition} from "react-transition-group";
import {Link} from "react-router-dom";


class BioMore extends Component {
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
        return <div className="container-more">

                    <Link className="link left" to="/">back</Link>
                    <div className="marg-top">Adam and Eve - biodiversity destruction</div>
                    <div className="bio-text">
                        <br/>As Adam and Eve tasted the forbidden fruit, they got to distinguish what good and evil is. They became like gods and paid the price by being forced to leave the Garden of Eden. The search for this mythical place is an ongoing venture for many, but I will argue that, if it ever existed, it may never be found again, not anymore. The paradise has been destroyed - by exterminating thousands of plant and animal species, destroying their habitats, and introducing drastic climate changes. Humanity carries the burden of vanity and does not cease to judge what is right, or, for that matter, which species deserve to live and which do not. By employing the role of gods on this planet, we did not leave Eden - we destroyed it and abandoned it.
                        <br/><br/>To prove that this metaphor is neither a dramatizing nor an overstatement, it is enough to become familiar with the scientific consensus that humanity is driving itself and all other species on this planet to certain extermination. Elizabeth Kolbert in her book “The Sixth Extinction” [1] calls the Anthropocene the next wave of mass annihilation of life on Earth and is not alone in her conclusions [2]. With this work, I would like to visualize where we came from and where we are heading, given the current trends and socio-economical systems.
                        <br/><br/>In the animation, one starts in the Garden of Eden, surrounded by flora, not found anymore in this type and size, and animal species, currently endangered or extinct, living in peace and serenity. Upon opening the eyes again, one finds him/herself in the uneasy, terrifying environment, dry and overflowing with livestock. This transition represents several dimensions of the issue of diminishing biodiversity. Approximately 96% of the mammals’ biomass on Earth comprises humanity and its livestock [3] and in the last 50 years, the number of populations of wild animals dwindled by 60% [4] - continuing this trend drives the wildlife extinct and fosters the absurd level of meat and dairy consumption, impossible to sustain the future tens of billions of people. This is Adam and Eve choosing who deserves to live - the species which cannot be eaten or tanned do not have a place in the world we create. Climate change and oceans acidification are other factors that diminish the natural habitats of fauna and flora, with the coral reefs being one of the first environments to become extinct in a couple of decades [5], represented in the second landscape as the “burning” backdrop of the whole scene. Immersed in the intense sounds of the jungle, in the beginning, one can hear the signing of many kinds of birds and insects. These animals are facing annihilation, with e.g. 75% decrease in the number of insects in the protected areas in Germany in the course of the last 30 years [6].
                        <br/>
                        <br/>
                    </div>
                    <video className="bio-video" controls src={"/media/bio.mp4"} type={"video/mp4"}
                           onLoadedData={this.finishLoading}>Sorry
                    </video>
            <div className="bio-text small">
                <br/>[1] Kolbert, E., 2014. The Sixth Extinction: An Unnatural History. Bloomsbury.
                <br/>[2] Carrington, D., 2021. What is biodiversity and why does it matter to us?. [online] the Guardian. Available at: https://www.theguardian.com/news/2018/mar/12/what-is-biodiversity-and-why-does-it-matte r-to-us.
                <br/>[3] Carrington, D., 2021. Humans just 0.01% of all life but have destroyed 83% of wild mammals – study. [online] the Guardian. Available at: https://www.theguardian.com/environment/2018/may/21/human-race-just-001-of-all-life-but- has-destroyed-over-80-of-wild-mammals-study.
                <br/>[4] WWF. 2021. Living Planet Report 2018. [online] Available at: https://www.wwf.org.uk/updates/living-planet-report-2018.
                <br/>[5] YouTube. 2021. The Sixth Extinction: Elizabeth Kolbert. [online] Available at: https://www.youtube.com/watch?v=avoq05Z1K6w&ab_channel=OSU-SchoolofHistory%2CPhil osophy%2CandReligion.
                <br/>[6] Hallmann, C., Sorg, M., Jongejans, E., Siepel, H., Hofland, N., Schwan, H., Stenmans, W., Müller, A., Sumser, H., Hörren, T., Goulson, D. and de Kroon, H., 2017. More than 75 percent decline over 27 years in total flying insect biomass in protected areas. PLOS ONE, 12(10), p.e0185809.
            </div>

        </div>
    }
}

export default BioMore;