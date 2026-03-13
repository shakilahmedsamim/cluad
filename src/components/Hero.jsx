import { motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'
import { stats } from '../data/content'

const techBadges = ['GTM Expert', 'GA4', 'Server-Side', 'Meta CAPI', 'Enhanced Conv.', 'First-Party Data']

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }
  })
}

export default function Hero() {
  const { isDark } = useTheme()

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={`relative min-h-screen flex items-center overflow-hidden pt-16 ${isDark ? 'bg-[#07070f]' : 'bg-slate-50'}`}>
      {/* Grid background */}
      <div className={`absolute inset-0 bg-grid opacity-100`} />

      {/* Radial gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-20 blur-3xl ${
          isDark ? 'bg-[#00e5a0]' : 'bg-[#00b87d]'
        }`} style={{ opacity: isDark ? 0.08 : 0.06 }} />
        <div className={`absolute top-1/3 right-0 w-96 h-96 rounded-full blur-3xl`}
          style={{ background: 'radial-gradient(circle, rgba(240,255,75,0.08) 0%, transparent 70%)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={0}
              className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-mono font-medium mb-8 ${
                isDark
                  ? 'bg-[#00e5a0]/10 border border-[#00e5a0]/20 text-[#00e5a0]'
                  : 'bg-[#00e5a0]/15 border border-[#00e5a0]/30 text-[#00874f]'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-[#00e5a0] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00e5a0]" />
              </span>
              Available for new projects · 2 spots open
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp} initial="hidden" animate="show" custom={1}
              className={`font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6 ${
                isDark ? 'text-white' : 'text-ink-800'
              }`}
            >
              Track every{' '}
              <span className="relative">
                <span className="gradient-text">conversion.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00e5a0] origin-left"
                />
              </span>
              <br />
              Win every bid.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp} initial="hidden" animate="show" custom={2}
              className={`text-lg md:text-xl leading-relaxed mb-8 max-w-xl ${
                isDark ? 'text-slate-400' : 'text-ink-500'
              }`}
            >
              Expert Google Tag Manager & server-side tracking implementation. 
              Recover lost conversions, fix attribution, and give your ad algorithms 
              the clean data they need to maximize ROAS.
            </motion.p>

            {/* Tech badges */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={3}
              className="flex flex-wrap gap-2 mb-10"
            >
              {techBadges.map((badge) => (
                <span
                  key={badge}
                  className={`px-3 py-1 rounded-md text-xs font-mono font-medium border ${
                    isDark
                      ? 'bg-[#141430] border-[#2a2a55] text-slate-400'
                      : 'bg-white border-ink-200 text-ink-500'
                  }`}
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={4}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => handleScroll('contact')}
                className="flex items-center justify-center gap-2 px-7 py-3.5 bg-[#00e5a0] text-[#07070f] rounded-xl font-display font-semibold text-sm hover:bg-[#00cc8f] transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,229,160,0.35)] active:scale-95"
              >
                Book Free Tracking Audit
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
              <button
                onClick={() => handleScroll('services')}
                className={`flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-display font-semibold text-sm border transition-all duration-200 ${
                  isDark
                    ? 'border-[#2a2a55] text-white hover:border-[#00e5a0]/40 hover:bg-white/4'
                    : 'border-ink-200 text-ink-700 hover:border-[#00e5a0] hover:bg-[#00e5a0]/5'
                }`}
              >
                View Services
              </button>
            </motion.div>
          </div>

          {/* Right — Tracking dashboard visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <TrackingVisual isDark={isDark} />
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className={`mt-20 pt-10 border-t ${isDark ? 'border-white/6' : 'border-ink-200/50'}`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.08 }}
                className="text-center"
              >
                <div className={`font-display text-4xl font-bold mb-1 ${isDark ? 'text-white' : 'text-ink-800'}`}>
                  <span className="gradient-text">{stat.value}</span>
                  <span className="gradient-text">{stat.suffix}</span>
                </div>
                <div className={`text-sm ${isDark ? 'text-slate-500' : 'text-ink-400'}`}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TrackingVisual({ isDark }) {
  return (
    <div className="relative">
      {/* Floating card */}
      <div className="animate-float">
        <div className={`rounded-2xl p-6 shadow-2xl ${isDark ? 'glass-dark' : 'glass-light'}`}
          style={{ boxShadow: isDark ? '0 40px 80px rgba(0,0,0,0.6), 0 0 40px rgba(0,229,160,0.08)' : '0 40px 80px rgba(0,0,0,0.12)' }}>
          
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div className={`text-xs font-mono ${isDark ? 'text-slate-500' : 'text-ink-400'}`}>TRACKING HEALTH</div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00e5a0]" />
              <span className={`text-xs font-mono ${isDark ? 'text-[#00e5a0]' : 'text-[#00874f]'}`}>LIVE</span>
            </div>
          </div>

          {/* Main metric */}
          <div className="mb-5">
            <div className={`font-display text-5xl font-bold text-white mb-1`} style={{ color: isDark ? 'white' : '#141430' }}>
              94.2<span className="text-2xl text-[#00e5a0]">%</span>
            </div>
            <div className={`text-xs ${isDark ? 'text-slate-500' : 'text-ink-400'}`}>Conversion match rate</div>
          </div>

          {/* Mini bars */}
          <div className="space-y-3 mb-5">
            {[
              { label: 'Browser events', value: 72, color: '#00e5a0' },
              { label: 'Server-side events', value: 94, color: '#7fffd4' },
              { label: 'CAPI match quality', value: 88, color: '#f0ff4b' },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-ink-500'}`}>{item.label}</span>
                  <span className="text-xs font-mono" style={{ color: item.color }}>{item.value}%</span>
                </div>
                <div className={`h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-white/8' : 'bg-ink-100'}`}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.value}%` }}
                    transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full"
                    style={{ background: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Event list */}
          <div className={`rounded-xl p-3 ${isDark ? 'bg-black/30' : 'bg-ink-50'}`}>
            <div className={`text-[10px] font-mono mb-2 ${isDark ? 'text-slate-600' : 'text-ink-300'}`}>RECENT EVENTS</div>
            {[
              { event: 'purchase', source: 'server', val: '$249', time: '2s ago', ok: true },
              { event: 'add_to_cart', source: 'browser', val: '$89', time: '8s ago', ok: true },
              { event: 'lead', source: 'server', val: 'cpa: $12', time: '15s ago', ok: true },
            ].map((ev, i) => (
              <div key={i} className="flex items-center justify-between py-1">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00e5a0]" />
                  <span className={`text-[10px] font-mono ${isDark ? 'text-slate-400' : 'text-ink-500'}`}>{ev.event}</span>
                  <span className={`text-[9px] px-1.5 rounded ${isDark ? 'bg-white/5 text-slate-600' : 'bg-ink-100 text-ink-300'}`}>{ev.source}</span>
                </div>
                <span className={`text-[10px] font-mono ${isDark ? 'text-slate-500' : 'text-ink-400'}`}>{ev.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0 }}
        className={`absolute -left-8 top-1/4 px-3 py-2 rounded-xl text-xs font-mono shadow-lg ${
          isDark ? 'glass-dark text-[#00e5a0]' : 'glass-light text-[#00874f]'
        }`}
      >
        +41% data recovered
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        className={`absolute -right-6 bottom-1/4 px-3 py-2 rounded-xl text-xs font-mono shadow-lg ${
          isDark ? 'glass-dark text-[#f0ff4b]' : 'glass-light text-[#7a8000]'
        }`}
      >
        ROAS: 3.8x ↑
      </motion.div>
    </div>
  )
}
