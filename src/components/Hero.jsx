import CoaConsole from './CoaConsole.jsx'
import { BookCallButton, Container, Eyebrow } from './ui.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-10 sm:pb-28 sm:pt-12">
      {/* soft accent glow behind the console */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[520px] -z-10 mx-auto h-[480px] max-w-5xl rounded-full bg-indigo-400/10 blur-3xl"
      />
      <Container className="text-center">
        <Eyebrow>COA automation for food manufacturers</Eyebrow>
        <h1 className="mx-auto mt-6 font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.045em] text-ink sm:text-6xl lg:text-[4.1rem] xl:text-[4.75rem] lg:whitespace-nowrap">
          Automate <span className="text-gradient">Supplier</span> COA Reviews.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-[1.35rem] sm:leading-[1.6]">
          Extract COA data, check specifications, and flag exceptions—without replacing your
          existing systems.
        </p>
        <div className="mt-10 flex justify-center">
          <BookCallButton />
        </div>
        <p className="mt-5 text-[15px] text-ink-soft sm:text-base">
          See how COA automation could fit into your quality workflow.
        </p>
      </Container>

      {/* console runs slightly wider than the text column, like the original */}
      <div className="mx-auto mt-16 w-full max-w-7xl px-4 sm:mt-24 sm:px-6">
        <CoaConsole />
        <p className="mt-6 text-center text-sm text-ink-soft">
          Illustrative workflow, not a screenshot of an existing product.
        </p>
      </div>
    </section>
  )
}
