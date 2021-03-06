import React, { Component } from 'react';
import {
  HomeImage,
  RevealP

} from './Styles/home.style';
import WhenInView from './WhenInView';
import { Fade } from 'reactstrap';

export default class Home extends Component {

render(){
    return(
      <div>

      <div className='container'>
<HomeImage>
<h1>Brett Miller</h1>
<h2>Front End Developer</h2>
</HomeImage>
<WhenInView>
{({ isInView }) =>
<RevealP hide={!isInView}>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</RevealP>
}
</WhenInView>
<WhenInView>
{({ isInView }) =>
<RevealP hide={!isInView}>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</RevealP>
}
</WhenInView>
<WhenInView>
{({ isInView }) =>
<RevealP hide={!isInView}>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</RevealP>
}
</WhenInView>
</div>
</div>
    );
  }
}
