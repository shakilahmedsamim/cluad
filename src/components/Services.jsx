import { motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'
import { services } from '../data/content'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
}

export default function Services() {
  const { isDark } = useTheme()

  return (
    <section id="services" className={`py-28 relative ${isDark ? 'bg-[#07070f]' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium mb-5 ${
            isDark ? 'bg-[#00e5a0]/10 border border-[#00e5a0]/20 text-[#00e5a0]' : 'bg-[#00e5a0]/12 border border-[#00e5a0]/25 text-[#00874f]'
          }`}>
            SERVICES
          </div>
          <h2 className={`font-display text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-ink-800'}`}>
            Everything your tracking{' '}
            <span className="gradient-text">needs</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-ink-500'}`}>
            From GTM setup to server-side infrastructure — complete tracking solutions 
            that give your ad platforms the data they need to perform.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} isDark={isDark} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({ service, isDark }) {
  return (
    <motion.article
      variants={cardVariants}
      className={`service-card relative rounded-2xl p-5 border cursor-default ${
        isDark
          ? 'bg-[#0d0d20] border-[#1e1e42] hover:bg-[#0f0f25]'
          : 'bg-white border-ink-100 hover:bg-slate-50'
      }`}
    >
      {/* Badge */}
      {service.badge && (
        <div
          className="absolute -top-2.5 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold"
          style={{ background: service.color, color: '#07070f' }}
        >
          {service.badge}
        </div>
      )}

      {/* Icon */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4 font-mono"
        style={{ background: `${service.color}14`, color: service.color }}
      >
        {service.icon}
      </div>

      {/* Title */}
      <h3 className={`font-display font-semibold text-base mb-2 ${isDark ? 'text-white' : 'text-ink-800'}`}>
        {service.title}
      </h3>

      {/* Description */}
      <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-500' : 'text-ink-400'}`}>
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-1.5">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7L5.5 10L11.5 4" stroke={service.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-ink-500'}`}>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  )
}
