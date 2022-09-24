import React from 'react';
import Concept from '../assets/concept black transparent.png'
import { motion } from 'framer-motion'
import { ConceptDescription, ConceptH1s, ConceptImgs, PageContainer } from '../styles/pages.style';

export default function Home() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ type: 'tween', duration: 1.5 }}
    >
      <PageContainer>
        <ConceptImgs src={Concept} ></ConceptImgs>
        <ConceptH1s>the concept</ConceptH1s>
        <ConceptDescription>
          ever since i was young i have always been obsessed with symbolism, <br />
          so it makes sense that i would create my own symbols to live by. <br />
          this website is about those symbols. if you made it here, welcome. and thank you for reading. <br />
          the concept, "the triangle, the tree, the fish, and the elephant" <br />
          is a concept i have lived by for many years, and has helped me through many situations <br />
          i hope that maybe it can help you too. please feel free to explore and read, i hope you enjoy. <br />
          thank you - deming  
        </ConceptDescription>
      </PageContainer>
    </motion.div>
  )
}
