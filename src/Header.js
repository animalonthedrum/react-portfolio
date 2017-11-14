import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';


import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props){
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggleNavbar(){
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
render(){
  return (
    <header className='wrapper'>


      <Navbar color='faded'  fixed-top light toggleable>

        <div className='circle'><div className='cover'>
</div></div>






<NavbarBrand className='brand' tag={Link} to='/'>B.Miller
  </NavbarBrand>


          <NavbarToggler right onClick={this.toggleNavbar} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem className='mx-auto'>
                  <NavLink className='.menu' tag={Link} to='/'>Home</NavLink>
                  </NavItem>
                <NavItem className='mx-auto'>
                  <NavLink tag={Link} to='/portfolio'>Portfolio</NavLink>
                  </NavItem>
                <NavItem className='mx-auto'>
                  <NavLink tag={Link} to='/contact'>Contact</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>

          </header>
  );
}
}
