import { motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'
import { expertise } from '../data/content'

export default function About() {
  const { isDark } = useTheme()

  return (
    <section id="about" className={`py-28 ${isDark ? 'bg-[#07070f]' : 'bg-slate-50'} relative overflow-hidden`}>
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Profile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium mb-6 ${
              isDark ? 'bg-[#00e5a0]/10 border border-[#00e5a0]/20 text-[#00e5a0]' : 'bg-[#00e5a0]/12 border border-[#00e5a0]/25 text-[#00874f]'
            }`}>
              ABOUT
            </div>

            <h2 className={`font-display text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-ink-800'}`}>
              The tracking expert{' '}
              <span className="gradient-text">behind the data</span>
            </h2>

            <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-ink-500'}`}>
              <p>
                I'm <strong className={isDark ? 'text-white' : 'text-ink-800'}>Alex Mercer</strong>, a conversion tracking specialist with 8+ years helping e-commerce brands and B2B companies make sense of their data — and profit from it.
              </p>
              <p>
                After seeing how broken tracking costs businesses thousands in wasted ad spend, I dedicated my career to mastering the full tracking stack: from GTM architecture to server-side infrastructure, Conversion APIs, and first-party data systems.
              </p>
              <p>
                I've worked with brands from $1M to $50M+ in ad spend, and the pattern is always the same: <em>better data = better decisions = better ROAS.</em>
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                'Google Analytics Certified',
                'GTM Specialist',
                'Meta Blueprint Certified',
                'Google Ads Expert',
              ].map(cert => (
                <div
                  key={cert}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium border ${
                    isDark ? 'bg-[#141430] border-[#1e1e42] text-slate-300' : 'bg-white border-ink-100 text-ink-600'
                  }`}
                >
                  <svg className="w-3.5 h-3.5 text-[#00e5a0]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  {cert}
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#00e5a0] text-[#07070f] rounded-xl font-display font-semibold text-sm hover:bg-[#00cc8f] transition-colors"
            >
              Work with me
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </motion.div>

          {/* Right: Expertise bars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className={`rounded-2xl p-8 border ${isDark ? 'bg-[#0d0d20] border-[#1e1e42]' : 'bg-white border-ink-100'}`}>
              <div className={`text-xs font-mono font-medium mb-6 ${isDark ? 'text-slate-500' : 'text-ink-400'}`}>
                TOOL EXPERTISE
              </div>
              <div className="space-y-5">
                {expertise.map((item, i) => (
                  <div key={item.tool}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <span className={`text-sm font-medium ${isDark ? 'text-slate-200' : 'text-ink-700'}`}>{item.tool}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded font-mono ${isDark ? 'bg-[#1e1e42] text-slate-500' : 'bg-ink-50 text-ink-400'}`}>
                          {item.category}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-[#00e5a0]">{item.level}%</span>
                    </div>
                    <div className={`h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-[#1e1e42]' : 'bg-ink-100'}`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.0, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, #00e5a0, #7fffd4)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
