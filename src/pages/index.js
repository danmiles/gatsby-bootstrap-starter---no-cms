import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

// ======== Home page Components ========
// 1 - Hero Section
import HeroSection from '../components/home/HeroSection';


function HomePage() {
    return (
        <Layout>
            <Seo title="Home page" />

            {/* Hero section - 1 */}
            <HeroSection/>      
        </Layout>
    );
}
export default HomePage;
