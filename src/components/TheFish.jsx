import React from 'react'
import Fish from '../assets/concept fish.png'
import { motion } from 'framer-motion'
import { ConceptDescription, ConceptH1s, ConceptImgs, PageContainer } from '../styles/pages.style'

function TheFish() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ type: 'tween', duration: 1.5 }}
    >
      <PageContainer>
          <ConceptImgs src={Fish} ></ConceptImgs>
          <ConceptH1s>the fish</ConceptH1s>
          <ConceptDescription>
            fuck it shit happens <br />
            the fish represents the past and always moving forward. <br />
            fish can only swim in one direction, but can constantly see behind them <br />
            much like the sun we need the past to illuminate the future, but staring at it we will go blind.
          </ConceptDescription>
        </PageContainer>
    </motion.div>
  )
}

export default TheFish
