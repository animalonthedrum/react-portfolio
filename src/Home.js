import React, { Component } from 'react';
import ParallaxImage from 'react-image-parallax2';



export default class Home extends Component {
  render(){
    return(
      <div>
        <div className='container'>

          <br />
          <br />
          <br />
          <br />
                <div>
          <ParallaxImage
            reduceHeight={0.3}
            src={require("./Images/ffmock15x7.jpg")}/>
        </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
            <ParallaxImage
              reduceHeight={0.6}
              src={require("./Images/ffmock15x7.jpg")}>

            </ParallaxImage>
            <h1>ok how jdjdjsk sdosdjsdoa sknsdflknsdfs spsdflknsdf s ssfglkn</h1>
            <h1>ok how jdjdjsk sdosdjsdoa sknsdflknsdfs spsdflknsdf s ssfglkn</h1>
            <h1>ok how jdjdjsk sdosdjsdoa sknsdflknsdfs spsdflknsdf s ssfglkn</h1>

              <ParallaxImage
                reduceHeight={0.5}
                src={require("./Images/ffmock15x7.jpg")}/>

        </div>

    </div>
    );
  }
}
