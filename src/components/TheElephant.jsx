import React from 'react'
import Elephant from '../assets/concept elephant.png'
import { motion } from 'framer-motion'
import { ConceptDescription, ConceptH1s, ConceptImgs, PageContainer } from '../styles/pages.style'

function TheElephant() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
      <PageContainer>
          <ConceptImgs src={Elephant} ></ConceptImgs>
          <ConceptH1s>the elephant</ConceptH1s>
          <ConceptDescription>
            this is some test writing to see how it appears on the page if i keep writing does it get smaller or break lines automatically
          </ConceptDescription>
        </PageContainer>
    </motion.div>
  )
}

export default TheElephant