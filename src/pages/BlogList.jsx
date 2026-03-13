import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

const allPosts = [
  {
    slug: 'server-side-tracking-guide',
    title: 'The Complete Guide to Server-Side Tracking in 2024',
    description: 'Everything you need to know about moving your tracking stack to the server — why it matters, how it works, and how to implement it correctly without losing data.',
    tag: 'Server-Side',
    date: 'Dec 15, 2024',
    readTime: '12 min',
    accent: '#00e5a0',
    featured: true,
  },
  {
    slug: 'meta-capi-setup',
    title: 'Meta Conversion API: Setup, Deduplication & Event Match Quality',
    description: 'Step-by-step guide to implementing Meta CAPI correctly — with deduplication logic and how to score above 8.0 on EMQ for optimal ad delivery.',
    tag: 'Meta CAPI',
    date: 'Nov 28, 2024',
    readTime: '9 min',
    accent: '#f0ff4b',
  },
  {
    slug: 'ga4-custom-events',
    title: 'GA4 Custom Events: The Right Way to Track Your Business Goals',
    description: 'Most GA4 implementations track the wrong things. Here\'s how to design an event taxonomy that actually aligns with revenue and business outcomes.',
    tag: 'GA4',
    date: 'Oct 12, 2024',
    readTime: '7 min',
    accent: '#7fffd4',
  },
  {
    slug: 'gtm-data-layer',
    title: 'GTM Data Layer Architecture: Build It Right the First Time',
    description: 'A poorly designed data layer is the root cause of most tracking failures. Learn the patterns and naming conventions that make GTM implementations bulletproof.',
    tag: 'GTM',
    date: 'Sep 5, 2024',
    readTime: '10 min',
    accent: '#00e5a0',
  },
  {
    slug: 'enhanced-conversions-google-ads',
    title: 'Google Ads Enhanced Conversions: Complete Implementation Guide',
    description: 'Enhanced conversions use hashed first-party data to improve conversion measurement. Here\'s exactly how to implement them and what results to expect.',
    tag: 'Google Ads',
    date: 'Aug 20, 2024',
    readTime: '8 min',
    accent: '#f0ff4b',
  },
  {
    slug: 'ios14-tracking-survival-guide',
    title: 'The iOS 14+ Tracking Survival Guide for Advertisers',
    description: 'iOS 14 changed everything for digital advertisers. This guide explains what broke, what still works, and how to rebuild your tracking for the privacy-first era.',
    tag: 'Privacy',
    date: 'Jul 8, 2024',
    readTime: '11 min',
    accent: '#7fffd4',
  },
]

export default function BlogList() {
  const { isDark } = useTheme()
  const featured = allPosts.find(p => p.featured)
  const rest = allPosts.filter(p => !p.featured)

  return (
    <main className={`min-h-screen pt-20 pb-28 ${isDark ? 'bg-[#07070f]' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-16 text-center"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium mb-5 ${
            isDark ? 'bg-[#00e5a0]/10 border border-[#00e5a0]/20 text-[#00e5a0]' : 'bg-[#00e5a0]/12 border border-[#00e5a0]/25 text-[#00874f]'
          }`}>
            BLOG & INSIGHTS
          </div>
          <h1 className={`font-display text-5xl md:text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-ink-800'}`}>
            Tracking <span className="gradient-text">insights</span>
          </h1>
          <p className={`text-lg max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-ink-500'}`}>
            Deep-dives on GTM, GA4, server-side tracking, and conversion optimization. No fluff — just actionable technical content.
          </p>
        </motion.div>

        {/* Featured post */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <Link to={`/blog/${featured.slug}`} className="block group">
              <div className={`rounded-2xl border p-8 lg:p-10 transition-all duration-300 service-card ${
                isDark ? 'bg-[#0d0d20] border-[#1e1e42]' : 'bg-white border-ink-100'
              }`}>
                <div className="grid lg:grid-cols-3 gap-6 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-medium"
                        style={{ background: `${featured.accent}15`, color: featured.accent }}
                      >
                        {featured.tag}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-1 rounded ${isDark ? 'bg-white/5 text-slate-500' : 'bg-ink-100 text-ink-400'}`}>
                        FEATURED
                      </span>
                    </div>
                    <h2 className={`font-display text-2xl md:text-3xl font-bold mb-3 group-hover:text-[#00e5a0] transition-colors ${
                      isDark ? 'text-white' : 'text-ink-800'
                    }`}>
                      {featured.title}
                    </h2>
                    <p className={`text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-ink-500'}`}>{featured.description}</p>
                  </div>
                  <div className={`flex flex-col items-start lg:items-end gap-3`}>
                    <div className={`text-sm ${isDark ? 'text-slate-500' : 'text-ink-400'}`}>{featured.date}</div>
                    <div className={`text-sm ${isDark ? 'text-slate-500' : 'text-ink-400'}`}>{featured.readTime} read</div>
                    <div className="flex items-center gap-1.5 text-sm font-medium text-[#00e5a0]">
                      Read article
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Post grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.07 }}
            >
              <Link to={`/blog/${post.slug}`} className="block group h-full">
                <div className={`h-full rounded-2xl border p-6 transition-all duration-300 service-card ${
                  isDark ? 'bg-[#0d0d20] border-[#1e1e42]' : 'bg-white border-ink-100'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-medium"
                      style={{ background: `${post.accent}12`, color: post.accent }}
                    >
                      {post.tag}
                    </span>
                    <span className={`text-[10px] font-mono ${isDark ? 'text-slate-600' : 'text-ink-300'}`}>{post.readTime}</span>
                  </div>
                  <h3 className={`font-display font-semibold text-base leading-snug mb-3 group-hover:text-[#00e5a0] transition-colors ${
                    isDark ? 'text-white' : 'text-ink-800'
                  }`}>
                    {post.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-500' : 'text-ink-400'}`}>{post.description}</p>
                  <div className={`text-xs ${isDark ? 'text-slate-600' : 'text-ink-300'}`}>{post.date}</div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  )
}
