'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';

export type ComparisonRow = {
  label: string;
  /** Always 3 columns. Use the headers prop to label them. */
  values: [string, string, string];
};

type ComparisonTableProps = {
  /** Header labels: [dimensionLabel, primary (Autom8ion), competitor1, competitor2]. */
  headers: [string, string, string, string];
  rows: ComparisonRow[];
  /** Tailwind class for the primary (Autom8ion) column header — controls accent color. */
  primaryColumnClass?: string;
};

/**
 * ComparisonTable — premium row-by-row reveal table used by each priority
 * solution page (Custom Build vs SaaS vs Enterprise / Custom vs Zapier vs
 * iPaaS / Autom8ion vs Consultant vs MSSP). The primary column gets a
 * subtle gradient highlight to signal the recommendation.
 */
export default function ComparisonTable({
  headers,
  rows,
  primaryColumnClass = 'text-emerald-400',
}: ComparisonTableProps) {
  const reduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.05 },
    },
  };
  const rowVariants: Variants = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <>
      {/* Desktop table */}
      <div className="hidden md:block overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900/60 to-slate-900/30 backdrop-blur-sm">
        <table className="w-full text-left">
          <thead className="bg-slate-900/60 border-b border-slate-800">
            <tr>
              <th className="px-5 py-4 text-sm font-semibold text-cyan-400 uppercase tracking-wider w-1/4">
                {headers[0]}
              </th>
              <th
                className={`px-5 py-4 text-sm font-semibold ${primaryColumnClass} uppercase tracking-wider w-1/4`}
              >
                {headers[1]}
              </th>
              <th className="px-5 py-4 text-sm font-semibold text-slate-400 uppercase tracking-wider w-1/4">
                {headers[2]}
              </th>
              <th className="px-5 py-4 text-sm font-semibold text-slate-400 uppercase tracking-wider w-1/4">
                {headers[3]}
              </th>
            </tr>
          </thead>
          <motion.tbody
            className="divide-y divide-slate-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={containerVariants}
          >
            {rows.map((row) => (
              <motion.tr
                key={row.label}
                variants={rowVariants}
                className="align-top group hover:bg-slate-900/60 transition-colors"
              >
                <td className="relative px-5 py-4 text-white font-semibold text-sm">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
                  />
                  {row.label}
                </td>
                {/* Primary column gets a subtle background highlight */}
                <td className="relative px-5 py-4 text-slate-200 text-sm leading-relaxed bg-gradient-to-r from-emerald-900/15 to-cyan-900/10">
                  {row.values[0]}
                </td>
                <td className="px-5 py-4 text-slate-400 text-sm leading-relaxed">{row.values[1]}</td>
                <td className="px-5 py-4 text-slate-400 text-sm leading-relaxed">{row.values[2]}</td>
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <motion.div
        className="md:hidden grid gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={containerVariants}
      >
        {rows.map((row) => (
          <motion.div
            key={row.label}
            variants={rowVariants}
            className="bg-gradient-to-br from-slate-900/60 to-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-lg p-5"
          >
            <div className="font-semibold text-white mb-3">{row.label}</div>
            <div className={`text-xs uppercase tracking-wider mb-1 ${primaryColumnClass}`}>
              {headers[1]}
            </div>
            <p className="text-slate-200 text-sm mb-3">{row.values[0]}</p>
            <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">{headers[2]}</div>
            <p className="text-slate-400 text-sm mb-3">{row.values[1]}</p>
            <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">{headers[3]}</div>
            <p className="text-slate-400 text-sm">{row.values[2]}</p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
