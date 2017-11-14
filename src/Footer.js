import React, { Component } from 'react';
import './Styles/footer.css';
import './font-awesome-4.7.0 3/css/font-awesome.min.css';
import './App.css';


export default class Footer extends Component {
  render(){
    return(
      <div>
        <div className='footer slider' id='slide'>
  <p className='verticalText'>FOLLOW</p>
  <div className='col socialIcons'>
    <a href="https://www.instagram.com/brettmiller88/"><i className="fa fa-instagram fa-2x flashit" aria-hidden="true"></i></a>
<a href="https://www.linkedin.com/in/brett-andrew-miller/"><i className="fa fa-linkedin-square fa-2x grow" aria-hidden="true"></i></a>
<a href="https://github.com/animalonthedrum"><span><i className="fa fa-github-square fa-2x bounce" aria-hidden="true"></i></span></a>
</div>


        </div>

      </div>

    );
  }
}
