import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'
import { faqs } from '../data/content'

export default function FAQ() {
  const { isDark } = useTheme()
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className={`py-28 ${isDark ? 'bg-[#07070f]' : 'bg-slate-50'}`}>
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium mb-5 ${
            isDark ? 'bg-[#00e5a0]/10 border border-[#00e5a0]/20 text-[#00e5a0]' : 'bg-[#00e5a0]/12 border border-[#00e5a0]/25 text-[#00874f]'
          }`}>
            FAQ
          </div>
          <h2 className={`font-display text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-ink-800'}`}>
            Common <span className="gradient-text">questions</span>
          </h2>
          <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-ink-500'}`}>
            Everything you need to know before we work together.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <div
                className={`rounded-xl border overflow-hidden transition-colors ${
                  isDark
                    ? `bg-[#0d0d20] border-[#1e1e42] ${open === i ? 'border-[#00e5a0]/25' : ''}`
                    : `bg-white border-ink-100 ${open === i ? 'border-[#00e5a0]/35' : ''}`
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full flex items-start justify-between gap-4 p-5 text-left"
                  aria-expanded={open === i}
                >
                  <span className={`font-display font-medium text-base leading-snug ${isDark ? 'text-white' : 'text-ink-800'}`}>
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex-shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center rounded-full text-lg leading-none ${
                      open === i ? 'text-[#00e5a0]' : isDark ? 'text-slate-500' : 'text-ink-400'
                    }`}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className={`px-5 pb-5 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-ink-500'}`}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
