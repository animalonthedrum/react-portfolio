import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Home from './Home';
import Contact from './Contact';
import Portfolio from './Portfolio';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import Footer from './Footer';
import './theme/globalStyles';


import {
  BrowserRouter as Router,
  Route
  } from 'react-router-dom';



ReactDOM.render(<Router>

<div className='MainFrame'>
    <Header />
<div className='container'>
  <Route exact path="/" component={Home} />
  <Route path="/portfolio" component={Portfolio} />
    <Route path="/contact" component={Contact}/>
    </div>

      <Footer />
</div>





</Router>
, document.getElementById('root'));
registerServiceWorker();
