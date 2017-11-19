import React, { Component } from 'react';
import ParallaxImage from 'react-image-parallax2';

export default class Portfolio extends Component {
  render(){
    return(
      <div>
        <div className='container'>

          <br />
          <br />
          <br />
          <br />

            <ParallaxImage
              reduceHeight={0.4}
              src={require("./Images/ffmock35x7.jpg")}>
</ParallaxImage>

      <ParallaxImage
        reduceHeight={0.2}
        src={require("./Images/fflogo5x7.jpg")}/>
    
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
