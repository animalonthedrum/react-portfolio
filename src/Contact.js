import React, { Component } from 'react';
import './Styles/contact.css';
import FontAwesome from './font-awesome-4.7.0 3/css/font-awesome.min.css';



export default class Contact extends Component {
  render(){
    return(
      <div>
        <div className='container'>
          <div className='row'>
          <div className='col-lg-6 col-md-12 col-sm-8'>
    <form className='contactForm'>
<label htmlFor="name">Name*</label>
      <input type="text" name="name" placeholder='Who are you?' />
        <label htmlFor="email">E-Mail*</label>
              <input type="text" name="email" placeholder='Where can I reach you?' />
                <label htmlFor="subject">Subject*</label>
                      <input type="text" name="subject" placeholder='What&#39;s up?' />
                              <label htmlFor="message">Message*</label>
                              <textarea name="message" rows="8" cols="80" placeholder='I will read this'/>
    </form>
  <button type="button" name="button">Send It
<i className="fa fa-paper-plane" aria-hidden="true"></i>
  </button>
  </div>
  <div className='col-lg-6 col-md-12 col-sm-8'>
    <h2>CONTACT INFORMATION</h2>
    <br />
    <h3>BRETT MILLER</h3>
    <br />
      <h4>MINNEAPOLIS MN 55413</h4>
      <div className='myMap'>
        <img className='img-fluid' src={require("./Images/myMap.png")} alt="Map" />
      </div>
      <div>
        <i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
      </div>

  </div>
</div>
</div>

      </div>
    );
  }
}
