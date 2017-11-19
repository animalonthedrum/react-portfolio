import React from 'react';
import { Link } from 'react-router-dom';



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
    <div>
    <div className='wrapper'>


      <Navbar color="dark" className="navbar-dark fixed-top navbar-expand-md" toggleable>

        <div className='circle'><div className='cover'>
</div></div>






<NavbarBrand className='brand' tag={Link} to='/'>B.Miller
  </NavbarBrand>


          <NavbarToggler true onClick={this.toggleNavbar} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem className='mx-auto'>
                  <NavLink className='.menu' tag={Link} to='/' onClick={this.toggleNavbar}>Home</NavLink>
                  </NavItem>
                <NavItem className='mx-auto'>
                  <NavLink tag={Link} to='/portfolio' onClick={this.toggleNavbar}>Portfolio</NavLink>
                  </NavItem>
                <NavItem className='mx-auto'>
                  <NavLink tag={Link} to='/contact' onClick={this.toggleNavbar}>Contact</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>

          </div>
        </div>
  );
}
}
