import React from 'react'
import Elephant from '../assets/concept elephant.png'
import { motion } from 'framer-motion'
import { ConceptDescription, ConceptH1s, ConceptImgs, PageContainer } from '../styles/pages.style'

function TheElephant() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ type: 'tween', duration: 1.5 }}
    >
      <PageContainer>
          <ConceptImgs src={Elephant} ></ConceptImgs>
          <ConceptH1s>the elephant</ConceptH1s>
          <ConceptDescription>
            inspired by the elephant in the room <br />
            the elephant symbolizes the motivation to keep moving forward <br />
            it is that feeling inside us that drives us, <br />
            the motivates us for the need of change and reminds us to always keep moving.
          </ConceptDescription>
        </PageContainer>
    </motion.div>
  )
}

export default TheElephant
