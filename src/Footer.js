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
    <a target='_blank' href="https://www.instagram.com/brettmiller88/" alt='Instagram Link' rel="noopener noreferrer"><i className="fa fa-instagram fa-2x flashit" aria-hidden="true"></i></a>
<a target='_blank' href="https://www.linkedin.com/in/brett-andrew-miller/" alt='Linkedin Links' rel="noopener noreferrer"><i className="fa fa-linkedin-square fa-2x grow" aria-hidden="true"></i></a>
<a target='_blank' href="https://github.com/animalonthedrum" alt='Github Link' rel="noopener noreferrer" ><span><i className="fa fa-github-square fa-2x bounce" aria-hidden="true"></i></span></a>
</div>


        </div>

      </div>

    );
  }
}
