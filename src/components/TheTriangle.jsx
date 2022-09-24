import React from 'react'
import Triangle from '../assets/concept triangle.png'
import { motion } from 'framer-motion'
import { ConceptDescription, ConceptH1s, ConceptImgs, PageContainer } from '../styles/pages.style'

function TheTriangle() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ type: 'tween', duration: 1.5 }}
    >
        <PageContainer>
          <ConceptImgs src={Triangle} ></ConceptImgs>
          <ConceptH1s>the triangle</ConceptH1s>
          <ConceptDescription>
            a symbol for change, an open door <br />
            the triangle tells us that no matter what if we are dedicated <br />
            the opportunity for change is always there. 
          </ConceptDescription>
        </PageContainer>
    </motion.div>
  )
}

export default TheTriangle
