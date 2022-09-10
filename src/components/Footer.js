import React from 'react'
import { FooterContainer, Logo } from '../styles/Footer.style'
import Concept from '../assets/concept white transparent.png'

function Footer() {
  return (
    <FooterContainer>
      <Logo src={Concept} >
      </Logo>
    </FooterContainer>
  )
}

export default Footer
