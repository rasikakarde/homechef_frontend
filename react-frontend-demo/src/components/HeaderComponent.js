import React, { Component } from 'react'
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
    //     return (
    //         <div>
    //             <header>
    //                 <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    //                 <div><a href="https://javaguides.net" className="navbar-brand">Home Chef</a></div>
    //                 </nav>
    //             </header>
    //         </div>
    //     )
    
        
            return (
                <>
                <Nav>
                    <NavLogo to="/">
                        Logo
                    </NavLogo>
                    <Bars />
        
                    <NavMenu>
                        <NavLink to="/" activeStyle>
                            Home
                        </NavLink>
                        <NavLink to="/about" activeStyle>
                            About
                        </NavLink>
                        <NavLink to="/contact" activeStyle>
                            Contact
                        </NavLink>
                        <NavLink to="/signin" activeStyle>
                            Sign In
                        </NavLink>
                        <NavBtn>
                            <NavBtnLink to="/add-chef/_add">Sign Up</NavBtnLink>                
                        </NavBtn>
                    </NavMenu> 
                </Nav> 
                </>
            );
    
    

    }


}

export default HeaderComponent