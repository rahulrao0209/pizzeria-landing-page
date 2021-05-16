import React from 'react';
import { Navbar } from '../src/components/navbar/Navbar';
import { Hero } from '../src/components/hero-section/Hero';
import { MiddleSection } from '../src/components/middle-section/MiddleSection';
import { CtaSection } from '../src/components/cta-section/CtaSection';
import { FooterSection } from '../src/components/footer-section/FooterSection';

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <MiddleSection />
            <CtaSection />
            <FooterSection />
        </div>
    )
}

export default App;