import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'

export default function Contact() {
  const { isDark } = useTheme()
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate submission - replace with EmailJS or API route
    await new Promise(r => setTimeout(r, 1200))
    setStatus('sent')
  }

  return (
    <section id="contact" className={`py-28 relative overflow-hidden ${isDark ? 'bg-[#0a0a18]' : 'bg-white'}`}>
      {/* Glow blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,229,160,0.07) 0%, transparent 70%)' }} />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: CTA copy */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium mb-6 ${
                isDark ? 'bg-[#00e5a0]/10 border border-[#00e5a0]/20 text-[#00e5a0]' : 'bg-[#00e5a0]/12 border border-[#00e5a0]/25 text-[#00874f]'
              }`}>
                GET IN TOUCH
              </div>

              <h2 className={`font-display text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-ink-800'}`}>
                Let's fix your{' '}
                <span className="gradient-text">tracking</span>
              </h2>

              <p className={`text-base leading-relaxed mb-8 ${isDark ? 'text-slate-400' : 'text-ink-500'}`}>
                Book a free 30-minute audit call. I'll review your current setup, 
                find the gaps, and give you a clear action plan — no strings attached.
              </p>

              <div className="space-y-4">
                {[
                  { icon: '⚡', label: 'Fast turnaround', sub: 'Projects start within 1 week' },
                  { icon: '🎯', label: 'Results guaranteed', sub: 'Measurable data improvement' },
                  { icon: '🔒', label: 'NDA available', sub: 'Full confidentiality' },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0 ${
                      isDark ? 'bg-[#141430]' : 'bg-slate-100'
                    }`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className={`text-sm font-medium ${isDark ? 'text-white' : 'text-ink-800'}`}>{item.label}</div>
                      <div className={`text-xs ${isDark ? 'text-slate-500' : 'text-ink-400'}`}>{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className={`rounded-2xl border p-8 ${isDark ? 'bg-[#0d0d20] border-[#1e1e42]' : 'bg-slate-50 border-ink-100'}`}>
              {status === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#00e5a0]/15 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-[#00e5a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className={`font-display text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-ink-800'}`}>
                    Message received!
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-ink-500'}`}>
                    I'll get back to you within 24 hours with next steps.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Your name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Jane Smith" isDark={isDark} required />
                    <Field label="Email address" name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@company.com" isDark={isDark} required />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-1.5 ${isDark ? 'text-slate-300' : 'text-ink-700'}`}>
                      Service needed
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors ${
                        isDark
                          ? 'bg-[#141430] border-[#2a2a55] text-slate-300 focus:border-[#00e5a0]/50'
                          : 'bg-white border-ink-200 text-ink-700 focus:border-[#00e5a0]'
                      }`}
                    >
                      <option value="">Select a service...</option>
                      <option>GTM Setup</option>
                      <option>GA4 Implementation</option>
                      <option>Server-Side Tracking</option>
                      <option>Meta Conversion API</option>
                      <option>Tracking Audit</option>
                      <option>Google Ads Conversions</option>
                      <option>Other / Not sure</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-1.5 ${isDark ? 'text-slate-300' : 'text-ink-700'}`}>
                      Tell me about your situation
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="What's your current tracking setup? What problems are you facing?"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors resize-none ${
                        isDark
                          ? 'bg-[#141430] border-[#2a2a55] text-slate-300 placeholder:text-slate-600 focus:border-[#00e5a0]/50'
                          : 'bg-white border-ink-200 text-ink-700 placeholder:text-ink-300 focus:border-[#00e5a0]'
                      }`}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3.5 bg-[#00e5a0] text-[#07070f] rounded-xl font-display font-semibold text-sm hover:bg-[#00cc8f] transition-all duration-200 disabled:opacity-70 hover:shadow-[0_0_25px_rgba(0,229,160,0.35)] active:scale-99"
                  >
                    {status === 'sending' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : 'Send message & book audit call'}
                  </button>

                  <p className={`text-center text-xs ${isDark ? 'text-slate-600' : 'text-ink-300'}`}>
                    Free 30-min call · No commitment · Response within 24h
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type, value, onChange, placeholder, isDark, required }) {
  return (
    <div>
      <label className={`block text-sm font-medium mb-1.5 ${isDark ? 'text-slate-300' : 'text-ink-700'}`}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors ${
          isDark
            ? 'bg-[#141430] border-[#2a2a55] text-slate-300 placeholder:text-slate-600 focus:border-[#00e5a0]/50'
            : 'bg-white border-ink-200 text-ink-700 placeholder:text-ink-300 focus:border-[#00e5a0]'
        }`}
      />
    </div>
  )
}
