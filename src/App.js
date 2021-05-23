import React from 'react';
import './shared/shared.css';
import { Navbar } from '../src/components/navbar/Navbar';
import { Hero } from '../src/components/hero-section/Hero';
import { MiddleSection } from '../src/components/middle-section/MiddleSection';
import { CtaSection } from '../src/components/cta-section/CtaSection';
import { FooterSection } from '../src/components/footer-section/FooterSection';
import { Sidebar } from '../src/components/Sidebar/Sidebar';

const App = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <Hero />
            <MiddleSection />
            <CtaSection />
            <FooterSection />
        </div>
    )
}

export default App;