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
            this is some test writing to see how it appears on the page if i keep writing does it get smaller or break lines automatically
          </ConceptDescription>
        </PageContainer>
    </motion.div>
  )
}

export default TheTriangle
