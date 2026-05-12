import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Demo } from './components/Demo';
import { Benefits } from './components/Benefits';
import { RiskFree } from './components/RiskFree';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-black font-montserrat">
      <main>
        <Hero />
        <div className="section-divider" />
        <ProblemSolution />
        <div className="section-divider" />
        <Demo />
        <div className="section-divider" />
        <Benefits />
        <div className="section-divider" />
        <RiskFree />
        <div className="section-divider" />
        <FAQ />
        <div className="section-divider" />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
