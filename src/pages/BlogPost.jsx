import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'

const posts = {
  'server-side-tracking-guide': {
    title: 'The Complete Guide to Server-Side Tracking in 2024',
    tag: 'Server-Side',
    date: 'December 15, 2024',
    readTime: '12 min',
    accent: '#00e5a0',
    content: `
## What is Server-Side Tracking?

Server-side tracking (SST) moves your tag execution from the visitor's browser to your own server infrastructure. Instead of JavaScript running in the browser to collect and send data, your server does the work.

This matters enormously in 2024 because:

- **Ad blockers** block client-side tracking scripts for 25-40% of users
- **iOS App Tracking Transparency** restricts browser-based data collection
- **Safari ITP** limits first-party cookie lifetimes to 7 days
- **GDPR/CCPA** requires better data control and consent management

## How Server-Side Tracking Works

In a traditional client-side setup, the browser sends data directly to Google Analytics, Meta, and other platforms. In a server-side setup:

1. Browser sends a single event to **your** server
2. Your server receives and processes the event
3. Your server forwards the data to GA4, Meta, Google Ads, etc.
4. You control what data leaves your environment

This gives you **complete control** over your data pipeline.

## Setting Up GTM Server-Side Container

Google Tag Manager's server-side container is the most common implementation approach. Here's the high-level process:

### Step 1: Create a Server Container in GTM
Navigate to GTM and create a new "Server" container type. This is separate from your web container.

### Step 2: Deploy Your Tagging Server
You need a server to run the GTM server container. Options include:
- **Google App Engine** (managed by Google, easiest)
- **Cloud Run** (more control, pay per request)
- **Any server** that can run Node.js

### Step 3: Configure Your Custom Domain
Map your tagging server to a subdomain of your own domain (e.g., \`metrics.yourdomain.com\`). This is crucial — it's what makes cookies first-party.

### Step 4: Set Up the GA4 Client
In your server container, configure the GA4 client to receive events from your web container.

### Step 5: Update Your Web Container
Modify your web GTM container to send events to your server URL instead of directly to Google.

## First-Party Cookie Configuration

One of the biggest benefits of SST is the ability to set cookies with your server. Browser-set cookies (JavaScript) are limited by ITP and other restrictions. Server-set cookies can have much longer lifespans and are treated as true first-party cookies.

Configure your server to set a \`_ga\` cookie (or custom cookie) with:
- \`SameSite=Lax\`
- \`Secure\` flag
- \`HttpOnly\` where appropriate
- Expiry of 2 years (vs 7 days for JavaScript cookies in Safari)

## Measuring the Impact

After implementing server-side tracking, you should see:

- **20-40% increase** in measured conversions
- Higher event match quality scores in Meta
- More accurate attribution in Google Ads
- Better bidding algorithm performance within 4-8 weeks

The impact is measurable and directly tied to ad performance. When Google and Meta's algorithms see more complete conversion data, they can optimize more effectively.

## Conclusion

Server-side tracking is no longer optional for serious advertisers. If you're running significant ad spend, the ROI of implementation is measured in weeks, not months.

Ready to implement? [Book a free audit call](#contact) and I'll assess your current setup and create a migration plan.
    `,
  },
}

export default function BlogPost() {
  const { slug } = useParams()
  const { isDark } = useTheme()
  const post = posts[slug]

  if (!post) {
    return (
      <main className={`min-h-screen pt-24 flex items-center justify-center ${isDark ? 'bg-[#07070f]' : 'bg-slate-50'}`}>
        <div className="text-center">
          <div className={`font-display text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-ink-800'}`}>404</div>
          <p className={`mb-6 ${isDark ? 'text-slate-400' : 'text-ink-500'}`}>Post not found</p>
          <Link to="/blog" className="px-6 py-3 bg-[#00e5a0] text-[#07070f] rounded-xl font-semibold text-sm hover:bg-[#00cc8f]">
            Back to Blog
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className={`min-h-screen pt-20 pb-28 ${isDark ? 'bg-[#07070f]' : 'bg-slate-50'}`}>
      <div className="max-w-3xl mx-auto px-6">
        {/* Back */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-8 mb-10">
          <Link
            to="/blog"
            className={`inline-flex items-center gap-2 text-sm transition-colors ${isDark ? 'text-slate-500 hover:text-white' : 'text-ink-400 hover:text-ink-800'}`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            All posts
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-5">
            <span
              className="px-3 py-1 rounded-lg text-xs font-mono font-medium"
              style={{ background: `${post.accent}15`, color: post.accent }}
            >
              {post.tag}
            </span>
            <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-ink-400'}`}>{post.date}</span>
            <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-ink-400'}`}>· {post.readTime} read</span>
          </div>

          <h1 className={`font-display text-4xl md:text-5xl font-bold leading-tight mb-4 ${isDark ? 'text-white' : 'text-ink-800'}`}>
            {post.title}
          </h1>

          <div className={`h-0.5 w-16 mt-6`} style={{ background: post.accent }} />
        </motion.header>

        {/* Content */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`prose prose-base max-w-none ${
            isDark
              ? 'prose-invert prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-white prose-code:text-[#00e5a0] prose-pre:bg-[#0d0d20]'
              : 'prose-headings:text-ink-800 prose-p:text-ink-500 prose-strong:text-ink-800'
          }`}
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
        />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-16 p-8 rounded-2xl border text-center ${isDark ? 'bg-[#0d0d20] border-[#1e1e42]' : 'bg-white border-ink-100'}`}
        >
          <h3 className={`font-display text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-ink-800'}`}>
            Ready to fix your tracking?
          </h3>
          <p className={`text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-ink-500'}`}>
            Book a free 30-minute audit call — I'll review your setup and give you a clear action plan.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00e5a0] text-[#07070f] rounded-xl font-display font-semibold text-sm hover:bg-[#00cc8f] transition-colors"
          >
            Book Free Audit
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}

// Simple markdown to HTML renderer (no external deps needed)
function renderMarkdown(md) {
  return md
    .trim()
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[hul])(.+)$/gm, '$1')
    .replace(/<\/p><p>/g, '</p>\n<p>')
    .split('\n\n')
    .map(block => {
      if (block.startsWith('<h') || block.startsWith('<ul')) return block
      if (block.trim()) return `<p>${block.trim()}</p>`
      return ''
    })
    .join('\n')
}
