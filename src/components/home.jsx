import React from 'react';
import Concept from '../assets/concept black transparent.png'
import { motion } from 'framer-motion'
import { ConceptDescription, ConceptH1s, ConceptImgs, PageContainer } from '../styles/pages.style';

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, }}
      exit={{ opacity: 0 }}
    >
      <PageContainer>
        <ConceptImgs src={Concept} ></ConceptImgs>
        <ConceptH1s>the concept</ConceptH1s>
        <ConceptDescription>
          this is some test writing to see how it appears on the page <br />
          if i keep writing does it get smaller or break lines automatically. <br />
           here i am writing more just to increase the length of this sample. <br />
           this is to test how scrolling works on the webpage <br />
           the concept is a method of living 
        </ConceptDescription>
      </PageContainer>
    </motion.div>
  )
}
