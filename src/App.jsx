import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Problem from './components/Problem.jsx'
import WhyCompliAI from './components/WhyCompliAI.jsx'
import WorkingTogether from './components/WorkingTogether.jsx'
import FinalCta from './components/FinalCta.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <WhyCompliAI />
        <WorkingTogether />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
