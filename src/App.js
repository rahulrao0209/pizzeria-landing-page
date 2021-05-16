import React from 'react';
import { Navbar } from '../src/components/navbar/Navbar';
import { Hero } from '../src/components/hero-section/Hero';
import { MiddleSection } from '../src/components/middle-section/MiddleSection';

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <MiddleSection />
        </div>
    )
}

export default App;