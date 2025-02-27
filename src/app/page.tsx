"use client";

import Community from "@/components/Community";
import Utility from "@/components/Utility";
import Header from "@/components/Header";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Tokenomics from "@/components/Tokenomics";
import FAQ from "@/components/FAQ";


const HomePage = () => {
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Header />

        {/* Stats Section */}
        <Stats />

        {/* About Section */}
        <About/>

        {/* Tokenomics Section */}
        <Tokenomics />
        
        {/* Utility Section */}
        
        <Utility />
        
        
        {/* FAQ Section */}
        <FAQ />

        {/* Community Section */}
        <Community />
      </main>

      
    </div>
  );
};

export default HomePage;