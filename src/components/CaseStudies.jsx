import { motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'
import { caseStudies } from '../data/content'

export default function CaseStudies() {
  const { isDark } = useTheme()

  return (
    <section id="results" className={`py-28 ${isDark ? 'bg-[#0a0a18]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium mb-5 ${
            isDark ? 'bg-[#f0ff4b]/10 border border-[#f0ff4b]/20 text-[#f0ff4b]' : 'bg-[#f0ff4b]/20 border border-[#f0ff4b]/30 text-[#6b7000]'
          }`}>
            CASE STUDIES
          </div>
          <h2 className={`font-display text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-ink-800'}`}>
            Real results,{' '}
            <span className="gradient-text">real clients</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-ink-500'}`}>
            Tracking isn't just technical work — it's business impact. Here's what happens when you fix your data.
          </p>
        </motion.div>

        <div className="space-y-6">
          {caseStudies.map((study, i) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`rounded-2xl border overflow-hidden ${
                isDark ? 'bg-[#0d0d20] border-[#1e1e42]' : 'bg-slate-50 border-ink-100'
              }`}
            >
              {/* Accent line */}
              <div className="h-0.5" style={{ background: `linear-gradient(90deg, ${study.accent}, transparent)` }} />

              <div className="p-8 lg:p-10">
                <div className="grid lg:grid-cols-5 gap-8 items-start">
                  {/* Left: Context */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center font-display font-bold text-xs"
                        style={{ background: `${study.accent}18`, color: study.accent }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div>
                        <div className={`font-display font-semibold text-sm ${isDark ? 'text-white' : 'text-ink-800'}`}>
                          {study.client}
                        </div>
                        <div className={`text-xs ${isDark ? 'text-slate-500' : 'text-ink-400'}`}>{study.industry}</div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-[10px] font-mono"
                          style={{ background: `${study.accent}12`, color: study.accent }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mb-3">
                      <div className={`text-[10px] font-mono font-medium mb-1.5 ${isDark ? 'text-slate-600' : 'text-ink-300'}`}>
                        THE CHALLENGE
                      </div>
                      <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-ink-500'}`}>
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <div className={`text-[10px] font-mono font-medium mb-1.5 ${isDark ? 'text-slate-600' : 'text-ink-300'}`}>
                        THE SOLUTION
                      </div>
                      <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-ink-500'}`}>
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Right: Results */}
                  <div className="lg:col-span-3">
                    <div className={`text-[10px] font-mono font-medium mb-4 ${isDark ? 'text-slate-600' : 'text-ink-300'}`}>
                      THE RESULTS
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {study.results.map((result, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + j * 0.1 }}
                          className={`rounded-xl p-5 text-center ${isDark ? 'bg-[#141430]' : 'bg-white'} border ${isDark ? 'border-[#2a2a55]' : 'border-ink-100'}`}
                        >
                          <div className="font-display text-3xl font-bold mb-1" style={{ color: study.accent }}>
                            {result.icon} {result.value}
                          </div>
                          <div className={`text-xs ${isDark ? 'text-slate-500' : 'text-ink-400'}`}>{result.metric}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
