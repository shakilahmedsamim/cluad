import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

const posts = [
  {
    slug: 'server-side-tracking-guide',
    title: 'The Complete Guide to Server-Side Tracking in 2024',
    description: 'Everything you need to know about moving your tracking stack to the server — why it matters, how it works, and how to implement it.',
    tag: 'Server-Side',
    date: 'Dec 2024',
    readTime: '12 min',
    accent: '#00e5a0',
  },
  {
    slug: 'meta-capi-setup',
    title: 'Meta Conversion API: Setup, Deduplication & Event Match Quality',
    description: 'Step-by-step guide to implementing Meta CAPI correctly — with deduplication logic and how to score above 8.0 on EMQ.',
    tag: 'Meta CAPI',
    date: 'Nov 2024',
    readTime: '9 min',
    accent: '#f0ff4b',
  },
  {
    slug: 'ga4-custom-events',
    title: 'GA4 Custom Events: The Right Way to Track Your Business Goals',
    description: 'Most GA4 implementations track the wrong things. Here\'s how to design an event taxonomy that actually aligns with revenue.',
    tag: 'GA4',
    date: 'Oct 2024',
    readTime: '7 min',
    accent: '#7fffd4',
  },
]

export default function Blog() {
  const { isDark } = useTheme()

  return (
    <section id="blog" className={`py-28 ${isDark ? 'bg-[#07070f]' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium mb-4 ${
              isDark ? 'bg-[#00e5a0]/10 border border-[#00e5a0]/20 text-[#00e5a0]' : 'bg-[#00e5a0]/12 border border-[#00e5a0]/25 text-[#00874f]'
            }`}>
              INSIGHTS
            </div>
            <h2 className={`font-display text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-ink-800'}`}>
              From the <span className="gradient-text">blog</span>
            </h2>
          </div>
          <Link
            to="/blog"
            className={`hidden md:flex items-center gap-2 text-sm font-medium ${isDark ? 'text-slate-400 hover:text-white' : 'text-ink-500 hover:text-ink-800'} transition-colors`}
          >
            All posts
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`} className="block group h-full">
                <div className={`h-full rounded-2xl border p-6 transition-all duration-300 service-card ${
                  isDark ? 'bg-[#0d0d20] border-[#1e1e42]' : 'bg-white border-ink-100'
                }`}>
                  {/* Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-medium"
                      style={{ background: `${post.accent}12`, color: post.accent }}
                    >
                      {post.tag}
                    </span>
                    <div className={`flex items-center gap-2 text-[10px] font-mono ${isDark ? 'text-slate-600' : 'text-ink-300'}`}>
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime} read</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`font-display font-semibold text-base leading-snug mb-3 group-hover:text-[#00e5a0] transition-colors ${
                    isDark ? 'text-white' : 'text-ink-800'
                  }`}>
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-500' : 'text-ink-400'}`}>
                    {post.description}
                  </p>

                  {/* Read link */}
                  <div className="flex items-center gap-1.5 text-xs font-medium text-[#00e5a0]">
                    Read article
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
