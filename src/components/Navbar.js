import React, { useState } from 'react';
import { NavbarContainer, LeftContainer, RightContainer, NavbarExtendedContainer, NavbarInnerContainer, NavbarLinkContainer, NavbarLink, Logo, OpenLinksButton, NavbarLinkExtended } from '../styles/Navbar.style';
import LogoImg from '../assets/logo white transparent copy.png'
 
function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState(false)
    //useNavigate

    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <a href='https://www.stonetreerecording.com' target='_blank' rel='noreferrer' ><Logo src={LogoImg} ></Logo></a>
                       
                    
                </LeftContainer>
                <RightContainer>
                <NavbarLinkContainer >
                        <NavbarLink to="/">the concept</NavbarLink>
                        <NavbarLink to="/triangle">the triangle</NavbarLink>
                        <NavbarLink to="/tree">the tree</NavbarLink>
                        <NavbarLink to="/fish">the fish</NavbarLink>
                        <NavbarLink to="/elephant">the elephant</NavbarLink>
                        <OpenLinksButton
                            onClick={() => {
                                setExtendNavbar((curr) => !curr);
                            }}
                        >
                            {extendNavbar ? <> &#10005;</> : <> &#8801;</>}
                        </OpenLinksButton>
                    </NavbarLinkContainer>
                </RightContainer>
            </NavbarInnerContainer>
            {extendNavbar && (
                <NavbarExtendedContainer>
                        <NavbarLinkExtended onClick={() => {
                                setExtendNavbar((curr) => !curr);
                            }} to="/">the concept</NavbarLinkExtended>
                        <NavbarLinkExtended onClick={() => {
                                setExtendNavbar((curr) => !curr);
                            }} to="/triangle">the triangle</NavbarLinkExtended>
                        <NavbarLinkExtended onClick={() => {
                                setExtendNavbar((curr) => !curr);
                            }} to="/tree">the tree</NavbarLinkExtended>
                        <NavbarLinkExtended onClick={() => {
                                setExtendNavbar((curr) => !curr);
                            }} to="/fish">the fish</NavbarLinkExtended>
                        <NavbarLinkExtended onClick={() => {
                                setExtendNavbar((curr) => !curr);
                            }} to="/elephant">the elephant</NavbarLinkExtended>
                </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    );
}
export default Navbar
