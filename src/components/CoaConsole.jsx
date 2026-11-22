// The dark "COA Review Console" visual in the hero.
// All supplier, product, lot, and test data here is fictional sample data.

const coa = {
  supplier: 'GrainPro Ingredients',
  address: '1180 Mill Road · Salina, KS 67401',
  product: 'Wheat Flour',
  sku: 'WF-120',
  lot: '8829-X',
  mfg: '2026-10-28',
  exp: '2027-10-28',
  tests: [
    { test: 'Moisture', method: 'AOAC 925.10', result: '14.1 %' },
    { test: 'Protein (N×5.7)', method: 'AOAC 979.09', result: '11.2 %' },
    { test: 'Ash', method: 'AOAC 923.03', result: '0.72 %' },
    { test: 'Lead (Pb)', method: 'ICP-MS', result: '< 0.10 ppm' },
    { test: 'E. coli', method: 'AOAC 991.14', result: '< 10 CFU/g' },
    { test: 'Salmonella', method: 'AOAC 2011.03', result: 'Neg / 375 g' },
  ],
}

const extracted = [
  { label: 'Supplier', value: coa.supplier },
  { label: 'Product', value: coa.product },
  { label: 'Lot number', value: coa.lot },
  { label: 'Tests parsed', value: '12 of 12' },
]

const specs = [
  { test: 'Moisture', result: '14.1%', spec: '≤ 14.5%', ok: true },
  { test: 'Protein', result: '11.2%', spec: '≥ 12.0%', ok: false },
  { test: 'Ash', result: '0.72%', spec: '≤ 1.00%', ok: true },
  { test: 'Lead (Pb)', result: '< 0.10 ppm', spec: '≤ 0.20 ppm', ok: true },
]

/* ---------- small building blocks ---------- */

function PanelTitle({ n, children, status }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-slate-400 sm:text-xs">
        <span className="mr-3 text-indigo-400">{n}</span>
        {children}
      </p>
      {status}
    </div>
  )
}

function StageStatus({ tone = 'indigo', pulse = false, children }) {
  const dot = {
    indigo: 'bg-indigo-400',
    emerald: 'bg-emerald-400',
    rose: 'bg-rose-400',
  }[tone]
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
      <span className="relative flex h-1.5 w-1.5">
        {pulse && (
          <span
            className={`absolute inline-flex h-full w-full rounded-full opacity-60 motion-safe:animate-ping ${dot}`}
          />
        )}
        <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${dot}`} />
      </span>
      {children}
    </span>
  )
}

/** Chevron badge sitting on the column divider, showing flow between stages (lg+). */
function StageArrow() {
  return (
    <span
      aria-hidden="true"
      className="absolute -left-3 top-7 z-10 hidden h-6 w-6 items-center justify-center rounded-full border border-console-line bg-console text-indigo-400 lg:flex xl:top-9"
    >
      <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none">
        <path d="m8 5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

function StatusPill({ ok }) {
  return ok ? (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-400 ring-1 ring-emerald-500/20 sm:px-2.5 sm:text-xs">
      <span className="h-1 w-1 rounded-full bg-emerald-400" />
      Pass
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-2 py-0.5 text-[11px] font-medium text-rose-300 shadow-[0_0_12px_-2px_rgba(244,63,94,0.35)] ring-1 ring-rose-500/50 sm:px-2.5 sm:text-xs">
      <span className="h-1 w-1 rounded-full bg-rose-400" />
      Exception
    </span>
  )
}

/* ---------- stage 01: mock supplier COA with scan line ---------- */

function DocumentPreview() {
  return (
    <div className="mt-6 overflow-hidden rounded-lg border border-console-line bg-console-raised">
      <div className="flex items-center justify-between border-b border-console-line px-4 py-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
          Supplier PDF
        </span>
        <span className="font-mono text-[11px] text-slate-500">2 pages</span>
      </div>

      {/* document body: scan line is positioned against this, clipped by the container above */}
      <div className="relative px-4 pb-4 pt-4 sm:px-5" aria-hidden="true">
        <div className="select-none text-slate-500">
          {/* letterhead */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-slate-700 text-[8px] font-bold text-slate-300">
                GP
              </span>
              <div className="leading-tight">
                <p className="text-[9px] font-semibold text-slate-300">{coa.supplier}</p>
                <p className="text-[7px] text-slate-500">{coa.address}</p>
              </div>
            </div>
            <span className="rounded-sm border border-slate-700 px-1 py-px font-mono text-[6.5px] text-slate-500">
              QF-104 rev.3
            </span>
          </div>

          <p className="mt-3 border-b border-slate-700/80 pb-1.5 text-center text-[8.5px] font-bold uppercase tracking-[0.22em] text-slate-300">
            Certificate of Analysis
          </p>

          {/* product meta */}
          <dl className="mt-2 grid grid-cols-2 gap-x-3 gap-y-0.5 font-mono text-[7px] leading-[1.5]">
            {[
              ['Product', coa.product],
              ['Item', coa.sku],
              ['Lot', coa.lot],
              ['Mfg', coa.mfg],
              ['Qty', '40 × 25 kg'],
              ['Exp', coa.exp],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-1.5 overflow-hidden whitespace-nowrap">
                <dt className="text-slate-600">{k}:</dt>
                <dd className="truncate text-slate-400">{v}</dd>
              </div>
            ))}
          </dl>

          {/* results table */}
          <table className="mt-2.5 w-full border border-slate-700/80 font-mono text-[6.5px] leading-[1.35] sm:text-[7px]">
            <thead>
              <tr className="bg-slate-800/60 text-left text-slate-400">
                <th className="px-1.5 py-1 font-medium">Parameter</th>
                <th className="px-1.5 py-1 font-medium">Method</th>
                <th className="px-1.5 py-1 text-right font-medium">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/60">
              {coa.tests.map((t) => (
                <tr key={t.test}>
                  <td className="whitespace-nowrap px-1.5 py-[3px] text-slate-400">{t.test}</td>
                  <td className="whitespace-nowrap px-1.5 py-[3px] text-slate-600">{t.method}</td>
                  <td className="whitespace-nowrap px-1.5 py-[3px] text-right text-slate-400">{t.result}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* sign-off */}
          <div className="mt-3 flex items-end justify-between gap-3 text-[6.5px]">
            <div>
              <svg viewBox="0 0 60 14" className="h-3 w-12 text-slate-500" fill="none">
                <path
                  d="M2 10c4-6 7-7 8-3s-1 5 2 2 5-7 7-4 0 6 4 3 6-6 9-4 3 4 7 2 8-3 12-2"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
              <p className="mt-0.5 border-t border-slate-700 pt-0.5 text-slate-600">QC Manager · 10/30/2026</p>
            </div>
            <p className="text-slate-600">Page 1 of 2</p>
          </div>
        </div>

        <div className="coa-scan" />
      </div>
    </div>
  )
}

/* ---------- console ---------- */

export default function CoaConsole() {
  return (
    <figure
      className="overflow-hidden rounded-2xl bg-console text-left text-slate-200 shadow-[0_40px_80px_-24px_rgba(15,23,42,0.45)] ring-1 ring-slate-900/10"
      aria-label="Illustrative COA review console: a supplier COA is received, its data is extracted, results are checked against specification, and an out-of-spec protein result is flagged for human review"
    >
      {/* window chrome */}
      <div className="flex items-center justify-between gap-4 border-b border-console-line px-5 py-4 sm:px-8 sm:py-5">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-slate-300 sm:text-xs">
            COA Review Console
          </span>
        </div>
        <span className="hidden rounded-full border border-indigo-500/40 bg-indigo-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-indigo-200 shadow-[0_0_16px_-4px_rgba(99,102,241,0.5)] sm:inline-block sm:text-[11px]">
          Illustrative workflow
        </span>
      </div>

      <div className="grid divide-y divide-console-line lg:grid-cols-[0.9fr_1fr_1.3fr] lg:divide-x lg:divide-y-0 xl:grid-cols-3">
        {/* 01 incoming */}
        <div className="relative p-5 sm:p-8 lg:p-6 xl:p-8">
          <PanelTitle n="01" status={<StageStatus pulse>Scanning</StageStatus>}>
            Incoming COA
          </PanelTitle>
          <DocumentPreview />
          <p className="mt-4 font-mono text-xs text-slate-400">COA_GrainPro_8829-X.pdf</p>
          <p className="mt-1 text-sm text-slate-500">Received 14 min ago</p>
        </div>

        {/* 02 extracted */}
        <div className="relative p-5 sm:p-8 lg:p-6 xl:p-8">
          <StageArrow />
          <PanelTitle n="02" status={<StageStatus tone="emerald">Done</StageStatus>}>
            Extracted fields
          </PanelTitle>
          <dl className="mt-6 divide-y divide-console-line">
            {extracted.map((f) => (
              <div key={f.label} className="flex items-center justify-between gap-4 py-3.5">
                <dt className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                  {f.label}
                </dt>
                <dd className="text-right text-[15px] font-medium text-white">{f.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex items-center gap-2.5 rounded-lg border border-emerald-500/25 bg-emerald-500/5 px-4 py-3 text-sm text-emerald-300">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
            12 of 12 fields extracted · Ready for validation
          </div>
        </div>

        {/* 03 spec comparison */}
        <div className="relative p-5 sm:p-8 lg:p-6 xl:p-8">
          <StageArrow />
          <PanelTitle n="03" status={<StageStatus tone="rose">1 exception</StageStatus>}>
            Spec comparison
          </PanelTitle>
          <table className="mt-6 w-full text-sm">
            <thead>
              <tr className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 sm:text-[11px]">
                <th className="pb-3 text-left font-normal">Test</th>
                <th className="pb-3 text-right font-normal">Result</th>
                <th className="pb-3 text-right font-normal">Spec</th>
                <th className="pb-3 text-right font-normal">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-console-line border-t border-console-line">
              {specs.map((s) => (
                <tr key={s.test} className={s.ok ? '' : 'bg-rose-500/[0.07]'}>
                  <td className="whitespace-nowrap py-3.5 pr-2 text-slate-100">{s.test}</td>
                  <td
                    className={`whitespace-nowrap py-3.5 text-right font-mono text-[12px] sm:text-[13px] ${
                      s.ok ? 'text-white' : 'text-rose-200'
                    }`}
                  >
                    {s.result}
                  </td>
                  <td className="whitespace-nowrap py-3.5 pl-2 text-right font-mono text-[12px] text-slate-400 sm:text-[13px]">
                    {s.spec}
                  </td>
                  <td className="py-3.5 pl-2 text-right">
                    <StatusPill ok={s.ok} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-right font-mono text-[11px] tracking-[0.04em] text-slate-500">
            Showing 4 of 12 test results
          </p>
          <p className="mt-4 text-[13px] leading-relaxed text-slate-500">
            Compared against the active ingredient specification for this supplier.
          </p>
        </div>
      </div>

      {/* 04 exception routed to a person */}
      <div className="flex flex-col gap-5 border-t border-rose-500/20 bg-[#1c1a2e] px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-500/15 text-rose-400 ring-1 ring-rose-500/25">
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
              <path
                d="M10 3.5 17.5 16.5h-15L10 3.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path d="M10 8.5v3.5M10 14.2v.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
          <div>
            <p className="font-semibold text-white">Requires human review</p>
            <p className="mt-1 max-w-xl text-[15px] leading-relaxed text-slate-300">
              Protein is 0.8 percentage points below the 12.0% minimum for Wheat Flour. Lot 8829-X
              requires QA review.
            </p>
          </div>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3 pl-12 sm:pl-0" aria-hidden="true">
          <span className="whitespace-nowrap rounded-md border border-slate-600 px-4 py-2 text-sm font-medium text-slate-200">
            Hold for Review
          </span>
          <span className="whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-medium text-ink">
            View Exception Details
          </span>
        </div>
      </div>
    </figure>
  )
}
