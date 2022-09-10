import React from 'react'
import Home from '../components/home'
import TheTriangle from '../components/TheTriangle';
import TheTree from '../components/TheTree';
import TheFish from '../components/TheFish';
import TheElephant from '../components/TheElephant';
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/triangle" element={<TheTriangle />} />
                <Route path="/tree" element={<TheTree />} />
                <Route path="/fish" element={<TheFish />} />
                <Route path="/elephant" element={<TheElephant />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes
