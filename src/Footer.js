import React, { Component } from 'react';
import './Styles/footer.css';
import FontAwesome from './font-awesome-4.7.0 3/css/font-awesome.min.css';


export default class Footer extends Component {
  render(){
    return(
      <div>
        <div className='footer'>
  <p className='verticalText'>FOLLOW ME</p>
  <div className='col socialIcons'>
    <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
<i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
<i className="fa fa-github-square fa-2x" aria-hidden="true"></i>
</div>
        </div>
      </div>
    );
  }
}
