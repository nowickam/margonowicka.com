import React, { Component } from "react";
import { Shaders, Node, GLSL, Uniform, NearestCopy } from "gl-react";
import { Surface } from "gl-react-dom";

import styles from './styles/home.module.css'

const shaders = Shaders.create({
  chroma: {
    frag: GLSL`
    precision mediump float; 
    varying vec2 uv; 
    uniform vec2 mouse;
    uniform vec2 resolution;
    uniform float time;

    // random numbers generator (0-1)
    float random (vec2 uv) {
      return fract(sin(dot(uv.xy,
                           vec2(12.9898,78.233)))*
          43758.5453123);
      }
    
    // processing map function
    float map(float value, float start1, float stop1, float start2, float stop2){
      return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
    }

    float noise(vec2 st){
      vec2 i=floor(st);
      vec2 f=fract(st);
      vec2 u=f*f*(3.-2.*f);
      return mix(mix(random(i+vec2(0.,0.)),random(i+vec2(1.,0.)),u.x),
      mix(random(i+vec2(0.,1.)),random(i+vec2(1.,1.)),u.x),u.y);
    }
    
    mat2 rotate2d(float angle){
      return mat2(cos(angle),-sin(angle),sin(angle),cos(angle));
    }

    void main() {
      // move to the middle
      vec2 uvv = uv-0.5+vec2((sin(time)+sin(0.4*time))/20., (cos(time+0.1)+cos(0.4*time+0.1))/20.);

      // adjust the resolution
      uvv.x *= resolution.x/resolution.y;

      // Add noise
      uvv *= 1.;
	    //uvv=rotate2d(noise(uvv))*uvv;

      // get the colors based on the mouse position
      mat3 colors;
      float div1 = random(mouse);
      colors[0] = vec3((1.0-mouse.x)/2.0, (mouse.y)/1.0, ((mouse.x+mouse.y)/2.0));
      colors[1] = vec3((1.0-mouse.x+0.3)/2.0, (mouse.y+0.3)/1.0, (mouse.x-mouse.y+0.3)/3.0);
      colors[2] = vec3((mouse.x+0.6)/1.0, (mouse.y+0.6)/2.0, (mouse.x-mouse.y+0.6)/3.0);

      // starting values of the pixel
      float r = 1.0;
      float g = 1.0;
      float b = 1.0;

      // set the chroma constants
      float CHROM_DIV = 1.;
      float CHROM_ANGLE_X = map(mouse.x, 0., 1., -0.5, 0.5);
      float CHROM_ANGLE_Y = map(mouse.y, 0., 1., -0.5, 0.5);
      const float NUM_SUBSAMPLES = 2.;

      // subsamples and chrom_div define the offset of each sample
      for(float j=0.; j<NUM_SUBSAMPLES; j++)
      {
        // set the color based on the distance and the current color (i)
        for(int i=0; i<=2; i++){
          float dx = (j/CHROM_DIV - (float(i)-1.))*CHROM_ANGLE_X-noise(uvv+sin(time*0.5))+.5;
          float dy = (j/CHROM_DIV - (float(i)-1.))*CHROM_ANGLE_Y+noise(uvv-cos(time*0.3))-0.5;

          float dist = length(uvv - vec2(dx,dy)) + random(uvv)*0.07;
          r -= map(dist, 0.0, 1.0, colors[i].x, 0.1)/NUM_SUBSAMPLES;
          g -= map(dist, 0.0, 1.0, colors[i].y, 0.1)/NUM_SUBSAMPLES;
          b -= map(dist, 0.0, 1.0, colors[i].z, 0.1)/NUM_SUBSAMPLES;
        }
      }
      
      //gl_FragColor = vec4(uvv, 1.0, 1.0);
      gl_FragColor = vec4(vec3(r, g, b), 1.0);     
}
`,
  },
});
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      time: 0
    };
  }

  onMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    this.setState({
      x: (e.clientX) / this.props.width,
      y: 1 - (e.clientY) / this.props.height,
    });
    // console.log(this.state.x, this.state.y)
  };

  componentDidMount() {
    this.props.changeRoute("h")

    const loop = _time => {
      this.raf = requestAnimationFrame(loop);
      this.setState({
        time: _time / 1000
      });
    };
    this.raf = requestAnimationFrame(loop);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.raf);
  }


  render() {
    return (
      <div className={styles.container} onMouseMove={this.onMouseMove}>
        <div id={styles.name}>Margo Nowicka</div>

        <Surface width={this.props.width} height={this.props.height}>
          <NearestCopy>
            <Node
              shader={shaders.chroma}
              sync
              uniforms={{
                mouse: [this.state.x, this.state.y],
                resolution: [this.props.width, this.props.height],
                time: this.state.time
              }}
            />
          </NearestCopy>
        </Surface>
      </div>
    );
  }
}
