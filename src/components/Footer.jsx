import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

export default function Footer() {
  const { isDark } = useTheme()

  return (
    <footer className={`border-t ${isDark ? 'bg-[#07070f] border-[#1e1e42]' : 'bg-slate-50 border-ink-100'}`}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-[#00e5a0] rounded-lg opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[#00e5a0] font-mono font-bold text-sm">TX</span>
                </div>
              </div>
              <span className={`font-display font-bold text-base ${isDark ? 'text-white' : 'text-ink-800'}`}>
                tracking<span className="text-[#00e5a0]">expert</span>
              </span>
            </Link>
            <p className={`text-sm leading-relaxed max-w-xs ${isDark ? 'text-slate-500' : 'text-ink-400'}`}>
              Conversion tracking & web analytics expert. GTM, GA4, Server-Side Tracking, Meta CAPI, and Google Ads specialist.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {['twitter', 'linkedin', 'youtube'].map(social => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    isDark ? 'bg-[#141430] text-slate-500 hover:text-white hover:bg-[#1e1e42]' : 'bg-ink-100 text-ink-400 hover:text-ink-700'
                  }`}
                >
                  <span className="text-xs font-mono">{social[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div className={`text-[10px] font-mono font-medium mb-4 ${isDark ? 'text-slate-600' : 'text-ink-300'}`}>SERVICES</div>
            <ul className="space-y-2">
              {['GTM Setup', 'GA4 Tracking', 'Server-Side Tracking', 'Meta CAPI', 'Tracking Audit', 'Enhanced Conversions'].map(item => (
                <li key={item}>
                  <a href="#services" className={`text-sm transition-colors ${isDark ? 'text-slate-500 hover:text-white' : 'text-ink-400 hover:text-ink-800'}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <div className={`text-[10px] font-mono font-medium mb-4 ${isDark ? 'text-slate-600' : 'text-ink-300'}`}>LINKS</div>
            <ul className="space-y-2">
              {[
                { label: 'Blog / Insights', href: '/blog' },
                { label: 'Case Studies', href: '#results' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contact', href: '#contact' },
              ].map(item => (
                <li key={item.label}>
                  <Link to={item.href} className={`text-sm transition-colors ${isDark ? 'text-slate-500 hover:text-white' : 'text-ink-400 hover:text-ink-800'}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-3 ${isDark ? 'border-[#1e1e42]' : 'border-ink-100'}`}>
          <p className={`text-xs ${isDark ? 'text-slate-600' : 'text-ink-300'}`}>
            © {new Date().getFullYear()} TrackingExpert.pro · Alex Mercer · All rights reserved
          </p>
          <div className={`flex items-center gap-1.5 text-xs ${isDark ? 'text-slate-600' : 'text-ink-300'}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5a0]" />
            GTM Expert · GA4 Specialist · Server-Side Tracking
          </div>
        </div>
      </div>
    </footer>
  )
}
