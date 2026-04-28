// LOCKED v3 §"Final Homepage Copy" §7 — Engagement models.
// CRITICAL: no pricing tier table. No specific dollar amounts.

export default function EngagementModels() {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Engagement models for any procurement vehicle.
        </h2>

        <p className="text-lg text-slate-300 leading-relaxed mb-6">
          We scope work to your contract structure — single-system task orders, multi-year IDIQ and BPA
          arrangements, fixed-price commercial engagements, time-and-materials advisory work, or
          commercial MSAs.
        </p>

        <p className="text-lg text-slate-300 leading-relaxed">
          Registered with SAM.gov (UEI: <span className="font-mono text-white">YY2DR3KSENH7</span>, CAGE:{' '}
          <span className="font-mono text-white">9YCS7</span>) for federal, state, and local government
          procurement. Commercial engagements run on standard MSA + SOW. Quotes are scope-driven and
          provided after a discovery call.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
          {[
            'Task orders',
            'IDIQ / BPA',
            'Commercial fixed-price',
            'Time & materials',
            'Commercial MSA + SOW',
            'Subcontractor agreements',
          ].map((item) => (
            <div
              key={item}
              className="bg-slate-900/40 border border-slate-800 rounded-lg px-4 py-3 text-slate-300 text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
