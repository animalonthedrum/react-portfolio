import React, { Component } from 'react';
import './Styles/contact.css';
import './App.css';
import './font-awesome-4.7.0 3/css/font-awesome.min.css';



export default class Contact extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: "miller.brett.andrew@gmail.com"
    };
  }

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
                              <textarea name="message" rows="8" cols="80" placeholder='Write Me'/>
    </form>
  <button type="button" name="button">Send It
<i className="fa fa-paper-plane" aria-hidden="true"></i>
  </button>
  </div>
  <div className='col-lg-6 col-md-12 col-sm-8'>
    <h2>CONTACT INFORMATION</h2>
    <br />
    <h3>BRETT MILLER  <a  href={`mailto:miller.brett.andrew@gmail.com`}><span className="fa fa-envelope-o" id='mail' aria-hidden="true"></span> </a>
          <i className="fa fa-mobile" aria-hidden="true"></i></h3>
    <br />
      <h4>MINNEAPOLIS MN 55413
            <i className="fa fa-map-marker" aria-hidden="true"></i></h4>
      <div className='myMap'>
        <img className='img-fluid' src={require("./Images/myMap.png")} alt="Map" />
      </div>
      <div>


      </div>

  </div>
</div>
</div>

      </div>
    );
  }
}
