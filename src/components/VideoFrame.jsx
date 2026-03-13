import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'

// ✏️ UPDATE THIS URL to change the YouTube video
const videoURL = "https://www.youtube.com/embed/dQw4w9WgXcQ"

function getYouTubeId(url) {
  const patterns = [
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtu\.be\/([^?]+)/,
    /youtube\.com\/embed\/([^?]+)/,
  ]
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }
  return null
}

function getEmbedUrl(url) {
  const id = getYouTubeId(url)
  if (id) return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&color=white`
  return url
}

function getThumbnailUrl(url) {
  const id = getYouTubeId(url)
  if (id) return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
  return null
}

export default function VideoFrame() {
  const { isDark } = useTheme()
  const [playing, setPlaying] = useState(false)
  const embedUrl = getEmbedUrl(videoURL)
  const thumbnail = getThumbnailUrl(videoURL)

  return (
    <section className={`py-28 ${isDark ? 'bg-[#0a0a18]' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium mb-5 ${
            isDark ? 'bg-[#00e5a0]/10 border border-[#00e5a0]/20 text-[#00e5a0]' : 'bg-[#00e5a0]/12 border border-[#00e5a0]/25 text-[#00874f]'
          }`}>
            FEATURED VIDEO
          </div>
          <h2 className={`font-display text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-ink-800'}`}>
            See the{' '}
            <span className="gradient-text">tracking process</span>
          </h2>
          <p className={`text-lg max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-ink-500'}`}>
            Watch how I diagnose and fix broken tracking setups — start to finish.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Decorative glow */}
          <div className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
            style={{ background: 'radial-gradient(ellipse, rgba(0,229,160,0.2) 0%, transparent 70%)' }} />

          {/* Video frame */}
          <div className={`relative rounded-2xl overflow-hidden border shadow-2xl ${
            isDark
              ? 'border-[#1e1e42]'
              : 'border-ink-200'
          }`}
            style={{ aspectRatio: '16/9' }}
          >
            {!playing ? (
              /* Thumbnail + play button */
              <div className="absolute inset-0 cursor-pointer group" onClick={() => setPlaying(true)}>
                {thumbnail ? (
                  <img
                    src={thumbnail}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center ${isDark ? 'bg-[#0d0d20]' : 'bg-slate-100'}`} />
                )}

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 rounded-full bg-[#00e5a0] flex items-center justify-center shadow-[0_0_40px_rgba(0,229,160,0.4)]"
                  >
                    <svg className="w-8 h-8 text-[#07070f] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-4 right-4 px-2.5 py-1 bg-black/70 rounded-lg text-white text-xs font-mono">
                  18:42
                </div>
              </div>
            ) : (
              <iframe
                src={embedUrl + '&autoplay=1'}
                className="absolute inset-0 w-full h-full"
                title="Tracking Expert Tutorial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* Caption bar */}
          <div className={`mt-4 flex items-center justify-between px-1 ${isDark ? 'text-slate-500' : 'text-ink-400'}`}>
            <span className="text-sm">Full server-side GTM setup walkthrough — from zero to production</span>
            <a
              href={videoURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#00e5a0] hover:underline flex items-center gap-1"
            >
              YouTube
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
