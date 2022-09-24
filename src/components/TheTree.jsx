import React from 'react'
import Tree from '../assets/concept tree.png'
import { motion } from 'framer-motion'
import { ConceptDescription, ConceptH1s, ConceptImgs, PageContainer } from '../styles/pages.style'

function TheTree() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ type: 'tween', duration: 1.5 }}
    >
      <PageContainer>
          <ConceptImgs src={Tree} ></ConceptImgs>
          <ConceptH1s>the tree</ConceptH1s>
          <ConceptDescription>
            each branch of the tree is a decision, <br />
            and each decision is an opportunity to utilize the triangle and change. <br />
            inspired by the tree of life, the tree symbolizes the pathway we walk <br />
            and how each step can be to a new branch, and new opportunity, and a new direction
          </ConceptDescription>
        </PageContainer>
    </motion.div>
  )
}

export default TheTree
