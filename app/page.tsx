'use client'
import Image from 'next/image'

const DAPP_URL = 'https://app.AGENTICLY.xyz'

const NAV = ['Features', 'How It Works', 'Tokenomics', 'Roadmap', 'About']

const FEATURES = [
  { icon: '⚡', title: 'Perpetual Futures', desc: 'Trade BTC, ETH, SOL and more with up to 50× leverage on Base Chain. Lightning fast execution with deep liquidity.' },
  { icon: '↔', title: 'Multi-Chain Spot', desc: 'Best-price routing across Base, Ethereum, Solana, BSC and more. One interface, all chains.' },
  { icon: '◈', title: 'AI Trading Agents', desc: 'Deploy autonomous AI agents that trade 24/7 on your behalf. Choose from proven strategies or build your own.' },
  { icon: '✦', title: 'Velocity Rewards', desc: 'Earn cashback on every trade. The more you trade, the higher your tier — Bronze to Diamond.' },
  { icon: '⬡', title: 'Agent Marketplace', desc: 'Buy, sell, and rent proven AI strategies from top traders. Monetize your edge on-chain.' },
  { icon: '🔒', title: 'Non-Custodial', desc: 'Your keys, your funds. AGENTICLY never holds your assets. Full on-chain transparency.' },
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Connect Wallet', desc: 'Connect your Web3 wallet — MetaMask, Coinbase Wallet, or any WalletConnect compatible wallet.' },
  { step: '02', title: 'Fund Your Account', desc: 'Deposit USDC or ETH to your trading account. Funds stay in your control at all times.' },
  { step: '03', title: 'Trade or Deploy Agent', desc: 'Start trading manually or deploy an AI agent to trade automatically based on your chosen strategy.' },
  { step: '04', title: 'Earn Rewards', desc: 'Every trade earns you cashback rewards. Climb the tier system and unlock higher rates.' },
]

const TOKENOMICS = [
  { label: 'Trading Rewards', pct: 4,  color: '#0052FF' },
  { label: 'Team & Advisors',  pct: 4,  color: '#9945FF' },
  { label: 'Ecosystem Fund',   pct: 4,  color: '#00C97A' },
  { label: 'Public Sale',      pct: 4,  color: '#4D9FFF' },
  { label: 'Liquidity',        pct: 80, color: '#00D4FF' },
  { label: 'Reserve',          pct: 4,  color: '#0041CC' },
]

const ROADMAP = [
  { q: 'Q1 2026', title: 'Foundation', items: ['Smart contract audit', 'Testnet launch', 'Core team expansion'], done: true },
  { q: 'Q2 2026', title: 'Launch',     items: ['Mainnet launch on Base', 'Futures & Spot trading', 'AI Agent v1'], done: true },
  { q: 'Q3 2026', title: 'Growth',     items: ['Agent Marketplace', 'Multi-chain expansion', 'Mobile app'], done: false },
  { q: 'Q4 2026', title: 'Scale',      items: ['Token launch', 'DAO governance', 'Institutional features'], done: false },
  { q: 'Q1 2027', title: 'Expand',     items: ['CEX partnerships', 'Options trading', 'Copy trading'], done: false },
  { q: 'Q2 2027', title: 'Dominate',   items: ['100K+ active traders', 'Cross-chain bridge', 'V2 AI Agents'], done: false },
]

const TEAM = [
  { name: 'Alex Chen',     role: 'CEO & Co-Founder', bg: '#0052FF' },
  { name: 'Sarah Kim',     role: 'CTO & Co-Founder', bg: '#0041CC' },
  { name: 'Marcus Rivera', role: 'Head of Product',  bg: '#003399' },
  { name: 'Priya Patel',   role: 'Head of AI',       bg: '#4D9FFF' },
]

const STATS = [
  { value: '$2.4B+', label: 'Total Volume' },
  { value: '48K+',   label: 'Active Traders' },
  { value: '1,200+', label: 'AI Agents Deployed' },
  { value: '99.9%',  label: 'Uptime' },
]

function IPhoneMockup() {
  return (
    <div style={{ position: 'relative', width: 280, flexShrink: 0 }}>
      <div style={{ position: 'absolute', inset: -30, background: 'radial-gradient(ellipse, rgba(0,82,255,0.2) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{
        position: 'relative', zIndex: 1,
        width: 280, height: 580,
        borderRadius: 52,
        background: 'linear-gradient(160deg, #2a2a2a 0%, #1a1a1a 40%, #111 60%, #0d0d0d 100%)',
        boxShadow: `0 0 0 1px rgba(255,255,255,0.15), 0 0 0 2px rgba(0,0,0,0.8), 4px 8px 24px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.12)`,
        padding: '12px',
      }}>
        <div style={{ position: 'absolute', left: -3, top: 120, width: 3, height: 32, background: 'linear-gradient(180deg, #333, #222)', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', left: -3, top: 162, width: 3, height: 32, background: 'linear-gradient(180deg, #333, #222)', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', right: -3, top: 140, width: 3, height: 60, background: 'linear-gradient(180deg, #333, #222)', borderRadius: '0 2px 2px 0' }} />
        <div style={{ width: '100%', height: '100%', borderRadius: 42, background: '#000', overflow: 'hidden', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)', width: 120, height: 34, borderRadius: 20, background: '#000', zIndex: 10, boxShadow: '0 0 0 1px rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#1a1a1a', border: '1px solid #333' }} />
            <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#1a1a1a', border: '1px solid #333' }} />
          </div>
          <div style={{ width: '100%', height: '100%', background: '#060B14', overflowY: 'auto', paddingTop: 58 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px 8px', fontSize: 11, fontWeight: 700, color: '#fff' }}>
              <span>9:41</span>
              <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                <span style={{ fontSize: 10 }}>●●●●</span>
                <span style={{ fontSize: 10 }}>WiFi</span>
                <span style={{ fontSize: 10 }}>100%🔋</span>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px 12px', borderBottom: '1px solid rgba(0,82,255,0.1)' }}>
              <span style={{ fontSize: 14, fontWeight: 800, background: 'linear-gradient(135deg,#fff 40%,#4D9FFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AGENTICLY</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00C97A', display: 'inline-block' }} />
                <span style={{ fontSize: 10, color: '#00C97A', fontWeight: 600 }}>Base</span>
              </div>
            </div>
            <div style={{ margin: '12px 14px 10px', background: 'linear-gradient(135deg, rgba(0,82,255,0.2), rgba(0,65,204,0.1))', border: '1px solid rgba(0,82,255,0.3)', borderRadius: 16, padding: '14px' }}>
              <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', marginBottom: 4 }}>Portfolio Value</p>
              <p style={{ fontSize: 24, fontWeight: 800, color: '#fff', marginBottom: 2 }}>$55,841</p>
              <span style={{ fontSize: 10, color: '#00C97A', fontWeight: 700 }}>↑ +13.7% this month</span>
              <svg viewBox="0 0 200 40" style={{ width: '100%', height: 40, marginTop: 8 }}>
                <defs>
                  <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0052FF" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#0052FF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,40 L0,30 25,25 50,28 75,20 100,15 125,18 150,10 175,6 200,3 L200,40 Z" fill="url(#sg)" />
                <polyline points="0,30 25,25 50,28 75,20 100,15 125,18 150,10 175,6 200,3" fill="none" stroke="#0052FF" strokeWidth="1.5" strokeLinejoin="round" />
                <circle cx="200" cy="3" r="3" fill="#0052FF" />
              </svg>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, margin: '0 14px 10px' }}>
              {[{ label: 'P&L Today', val: '+$312', color: '#00C97A' }, { label: 'Open Pos.', val: '3', color: '#fff' }].map(s => (
                <div key={s.label} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '10px' }}>
                  <p style={{ fontSize: 8, color: 'rgba(255,255,255,0.4)', marginBottom: 3 }}>{s.label}</p>
                  <p style={{ fontSize: 16, fontWeight: 800, color: s.color }}>{s.val}</p>
                </div>
              ))}
            </div>
            <div style={{ margin: '0 14px 10px' }}>
              <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Positions</p>
              {[
                { pair: 'BTC/USDT', dir: 'LONG',  pnl: '+$610', lev: '10×' },
                { pair: 'ETH/USDT', dir: 'SHORT', pnl: '+$78',  lev: '5×' },
                { pair: 'SOL/USDT', dir: 'LONG',  pnl: '-$48',  lev: '3×' },
              ].map(p => (
                <div key={p.pair} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: '8px 10px', marginBottom: 5, border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 700, color: '#fff', marginBottom: 2 }}>{p.pair}</p>
                    <div style={{ display: 'flex', gap: 4 }}>
                      <span style={{ fontSize: 8, color: p.dir === 'LONG' ? '#00C97A' : '#FF3B5C', fontWeight: 700, background: p.dir === 'LONG' ? 'rgba(0,201,122,0.15)' : 'rgba(255,59,92,0.15)', padding: '1px 5px', borderRadius: 3 }}>{p.dir}</span>
                      <span style={{ fontSize: 8, color: '#4D9FFF', background: 'rgba(0,82,255,0.15)', padding: '1px 5px', borderRadius: 3 }}>{p.lev}</span>
                    </div>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 800, color: p.pnl.startsWith('+') ? '#00C97A' : '#FF3B5C' }}>{p.pnl}</span>
                </div>
              ))}
            </div>
            <div style={{ margin: '0 14px 10px', background: 'rgba(0,82,255,0.08)', border: '1px solid rgba(0,82,255,0.2)', borderRadius: 10, padding: '10px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', marginBottom: 3 }}>AI Agent</p>
                <p style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>Alpha Scalper</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'flex-end', marginBottom: 2 }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#00C97A' }} />
                  <span style={{ fontSize: 9, color: '#00C97A', fontWeight: 600 }}>Running</span>
                </div>
                <p style={{ fontSize: 12, fontWeight: 800, color: '#00C97A' }}>+12.4%</p>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '12px 20px 8px', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: 4 }}>
              {[{ icon: '⊞', label: 'Home', active: true }, { icon: '⚡', label: 'Trade', active: false }, { icon: '◈', label: 'Agents', active: false }, { icon: '✦', label: 'Rewards', active: false }].map(n => (
                <div key={n.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                  <span style={{ fontSize: 16, opacity: n.active ? 1 : 0.3 }}>{n.icon}</span>
                  <span style={{ fontSize: 8, color: n.active ? '#0052FF' : 'rgba(255,255,255,0.3)', fontWeight: n.active ? 700 : 400 }}>{n.label}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 8 }}>
              <div style={{ width: 120, height: 4, background: 'rgba(255,255,255,0.3)', borderRadius: 2 }} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', top: 12, left: 12, right: 12, height: '40%', borderRadius: '42px 42px 20px 20px', zIndex: 2, pointerEvents: 'none', background: 'linear-gradient(160deg, rgba(255,255,255,0.06) 0%, transparent 60%)' }} />
    </div>
  )
}

export default function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)', overflowX: 'hidden' }}>

      <style>{`
        /* ── Responsive helpers ── */
        .nav-links { display: flex; gap: 32px; }
        .nav-launch { display: block; }
        .hero-section { 
          display: flex; flex-direction: row; align-items: center;
          padding: 120px 80px 60px; gap: 60px;
        }
        .hero-mockup { display: flex; }
        .hero-title { font-size: 62px; }
        .hero-desc { font-size: 18px; }
        .hero-btns { flex-direction: row; }
        .stats-row { display: flex; gap: 36px; flex-wrap: wrap; }
        .section-pad { padding: 100px 80px; }
        .section-pad-bg { padding: 100px 80px; }
        .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .how-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; }
        .tokenomics-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .roadmap-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; }
        .team-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 20px; }
        .footer-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; padding: 32px 80px; }
        .cta-title { font-size: 52px; }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .nav-launch { font-size: 12px !important; padding: 7px 14px !important; }
          .hero-section { 
            flex-direction: column; 
            padding: 90px 20px 40px; 
            gap: 40px; 
            text-align: center;
          }
          .hero-mockup { justify-content: center; }
          .hero-title { font-size: 36px !important; }
          .hero-desc { font-size: 15px !important; max-width: 100% !important; }
          .hero-btns { flex-direction: column; align-items: stretch; }
          .hero-btns a { text-align: center; }
          .stats-row { gap: 20px; justify-content: center; }
          .stats-row > div { min-width: 80px; text-align: center; }
          .section-pad { padding: 60px 20px; }
          .section-pad-bg { padding: 60px 20px; }
          .features-grid { grid-template-columns: 1fr; }
          .how-grid { grid-template-columns: 1fr; }
          .tokenomics-grid { grid-template-columns: 1fr; gap: 30px; }
          .roadmap-grid { grid-template-columns: 1fr 1fr; }
          .team-grid { grid-template-columns: 1fr 1fr; }
          .footer-inner { flex-direction: column; text-align: center; padding: 24px 20px; }
          .cta-title { font-size: 32px !important; }
          .section-h2 { font-size: 28px !important; }
        }

        @media (max-width: 480px) {
          .roadmap-grid { grid-template-columns: 1fr; }
          .team-grid { grid-template-columns: 1fr 1fr; }
          .hero-title { font-size: 30px !important; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', height: 64, background: 'rgba(6,11,20,0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Image src="/AGENTICLY-logo.png" alt="AGENTICLY" width={32} height={32} style={{ borderRadius: 8 }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
          <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: '-0.01em', background: 'linear-gradient(135deg, #fff 40%, #4D9FFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AGENTICLY</span>
        </div>
        <div className="nav-links">
          {NAV.map(n => (
            <a key={n} href={`#${n.toLowerCase().replace(' ', '-')}`} style={{ fontSize: 14, color: 'var(--text-muted)', fontWeight: 500, transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>{n}</a>
          ))}
        </div>
        <a href={DAPP_URL} target="_blank" rel="noopener noreferrer" className="nav-launch" style={{ padding: '9px 22px', borderRadius: 10, fontSize: 14, fontWeight: 700, background: 'linear-gradient(135deg, #0052FF, #0041CC)', color: '#fff', boxShadow: '0 0 20px rgba(0,82,255,0.35)' }}>
          Launch App →
        </a>
      </nav>

      {/* HERO */}
      <section className="hero-section" style={{ position: 'relative', overflow: 'hidden', maxWidth: 1300, margin: '0 auto' }}>
        <div style={{ position: 'fixed', top: '10%', left: '30%', width: 700, height: 700, background: 'radial-gradient(circle, rgba(0,82,255,0.08) 0%, transparent 65%)', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, background: 'rgba(0,82,255,0.1)', border: '1px solid rgba(0,82,255,0.25)', fontSize: 12, fontWeight: 600, color: '#4D9FFF', marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00C97A', display: 'inline-block' }} />
            Going live on Base Chain Mainnet
          </div>
          <h1 className="hero-title" style={{ fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: 24 }}>
            The Future of{' '}
            <span style={{ background: 'linear-gradient(135deg, #0052FF, #4D9FFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI-Powered</span>
            <br />Trading
          </h1>
          <p className="hero-desc" style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 40, maxWidth: 480 }}>
            Trade futures, spot markets, and deploy autonomous AI agents — all in one platform built natively on Base Chain.
          </p>
          <div className="hero-btns" style={{ display: 'flex', gap: 14, marginBottom: 48 }}>
            <a href={DAPP_URL} target="_blank" rel="noopener noreferrer" style={{ padding: '14px 32px', borderRadius: 12, fontSize: 15, fontWeight: 700, background: 'linear-gradient(135deg, #0052FF, #0041CC)', color: '#fff', boxShadow: '0 0 30px rgba(0,82,255,0.4)', textAlign: 'center' }}>Launch App →</a>
            <a href="#features" style={{ padding: '14px 32px', borderRadius: 12, fontSize: 15, fontWeight: 700, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', textAlign: 'center' }}>Learn More</a>
          </div>
          <div className="stats-row">
            {STATS.map(s => (
              <div key={s.label}>
                <p style={{ fontSize: 26, fontWeight: 800, color: '#fff', marginBottom: 2 }}>{s.value}</p>
                <p style={{ fontSize: 12, color: 'var(--text-dim)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-mockup" style={{ position: 'relative', flexShrink: 0, zIndex: 1 }}>
          <IPhoneMockup />
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="section-pad" style={{ maxWidth: 1300, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', color: 'var(--blue-primary)', textTransform: 'uppercase', marginBottom: 12 }}>Features</p>
          <h2 className="section-h2" style={{ fontSize: 42, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 16 }}>Everything You Need to Trade Smarter</h2>
          <p style={{ fontSize: 16, color: 'var(--text-muted)', maxWidth: 500, margin: '0 auto' }}>One platform for all your crypto trading needs — powered by AI and built on Base.</p>
        </div>
        <div className="features-grid">
          {FEATURES.map(f => (
            <div key={f.title} style={{ padding: '24px', borderRadius: 16, background: 'var(--bg-card)', border: '1px solid var(--border)', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,82,255,0.06)'; e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-card)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(0,82,255,0.15)', border: '1px solid rgba(0,82,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 16 }}>{f.icon}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="section-pad-bg" style={{ background: 'rgba(0,82,255,0.025)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', color: 'var(--blue-primary)', textTransform: 'uppercase', marginBottom: 12 }}>How It Works</p>
            <h2 className="section-h2" style={{ fontSize: 42, fontWeight: 800, letterSpacing: '-0.02em' }}>Get Started in Minutes</h2>
          </div>
          <div className="how-grid">
            {HOW_IT_WORKS.map(h => (
              <div key={h.step} style={{ padding: '24px', borderRadius: 16, background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: 40, fontWeight: 900, color: 'rgba(0,82,255,0.25)', lineHeight: 1, marginBottom: 14, fontFamily: 'monospace' }}>{h.step}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{h.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.65 }}>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOKENOMICS */}
      <section id="tokenomics" className="section-pad" style={{ maxWidth: 1300, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', color: 'var(--blue-primary)', textTransform: 'uppercase', marginBottom: 12 }}>Tokenomics</p>
          <h2 className="section-h2" style={{ fontSize: 42, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 12 }}>$AGT Token Distribution</h2>
          <p style={{ fontSize: 15, color: 'var(--text-muted)' }}>Total Supply: 1,000,000 $AGT</p>
        </div>
        <div className="tokenomics-grid" style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <svg viewBox="0 0 220 220" width={260} height={260}>
              {(() => {
                let offset = 0
                const r = 80, cx = 110, cy = 110, circ = 2 * Math.PI * r
                return TOKENOMICS.map(t => {
                  const dash = (t.pct / 100) * circ
                  const el = <circle key={t.label} cx={cx} cy={cy} r={r} fill="none" stroke={t.color} strokeWidth={30} strokeDasharray={`${dash} ${circ - dash}`} strokeDashoffset={-offset} transform={`rotate(-90 ${cx} ${cy})`} />
                  offset += dash
                  return el
                })
              })()}
              <circle cx={110} cy={110} r={64} fill="#060B14" />
              <text x={110} y={104} textAnchor="middle" fill="#fff" fontSize={15} fontWeight={800}>$AGT</text>
              <text x={110} y={122} textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize={11}>1B Supply</text>
            </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {TOKENOMICS.map(t => (
              <div key={t.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '11px 14px', borderRadius: 10, background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: t.color, flexShrink: 0 }} />
                  <span style={{ fontSize: 14, fontWeight: 500 }}>{t.label}</span>
                </div>
                <span style={{ fontSize: 15, fontWeight: 800, color: t.color }}>{t.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="section-pad-bg" style={{ background: 'rgba(0,82,255,0.025)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', color: 'var(--blue-primary)', textTransform: 'uppercase', marginBottom: 12 }}>Roadmap</p>
            <h2 className="section-h2" style={{ fontSize: 42, fontWeight: 800, letterSpacing: '-0.02em' }}>Building the Future</h2>
          </div>
          <div className="roadmap-grid">
            {ROADMAP.map(r => (
              <div key={r.q} style={{ padding: '24px', borderRadius: 16, background: r.done ? 'rgba(0,82,255,0.06)' : 'var(--bg-card)', border: `1px solid ${r.done ? 'var(--border-hover)' : 'var(--border)'}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: r.done ? '#4D9FFF' : 'var(--text-dim)', letterSpacing: '0.1em' }}>{r.q}</span>
                  {r.done && <span style={{ fontSize: 10, fontWeight: 600, color: '#4D9FFF', background: 'rgba(0,82,255,0.15)', padding: '3px 8px', borderRadius: 100, border: '1px solid rgba(0,82,255,0.3)' }}>✓ Done</span>}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>{r.title}</h3>
                {r.items.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-muted)', marginBottom: 7 }}>
                    <span style={{ color: r.done ? '#4D9FFF' : 'var(--text-dim)', fontSize: 11 }}>{r.done ? '✓' : '○'}</span>
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-pad" style={{ maxWidth: 1300, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', color: 'var(--blue-primary)', textTransform: 'uppercase', marginBottom: 12 }}>About Us</p>
          <h2 className="section-h2" style={{ fontSize: 42, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 20 }}>Built by Traders, for Traders</h2>
          <p style={{ fontSize: 16, color: 'var(--text-muted)', maxWidth: 600, margin: '0 auto', lineHeight: 1.75 }}>AGENTICLY was founded by a team of experienced traders and engineers who believe AI will fundamentally change how people interact with financial markets.</p>
        </div>
        <div className="team-grid">
          {TEAM.map(t => (
            <div key={t.name} style={{ padding: '24px', borderRadius: 16, background: 'var(--bg-card)', border: '1px solid var(--border)', textAlign: 'center', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.background = 'rgba(0,82,255,0.05)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg-card)' }}>
              <div style={{ width: 60, height: 60, borderRadius: '50%', background: `linear-gradient(135deg, ${t.bg}, ${t.bg}88)`, margin: '0 auto 14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 800, color: '#fff' }}>
                {t.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>{t.name}</h3>
              <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad-bg" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(0,82,255,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 600, margin: '0 auto' }}>
          <h2 className="cta-title" style={{ fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 20 }}>Ready to Trade Smarter?</h2>
          <p style={{ fontSize: 17, color: 'var(--text-muted)', marginBottom: 40, lineHeight: 1.7 }}>Join thousands of traders already using AGENTICLY to maximize their returns.</p>
          <a href={DAPP_URL} target="_blank" rel="noopener noreferrer" style={{ padding: '16px 40px', borderRadius: 14, fontSize: 16, fontWeight: 700, background: 'linear-gradient(135deg, #0052FF, #0041CC)', color: '#fff', boxShadow: '0 0 40px rgba(0,82,255,0.4)', display: 'inline-block' }}>
            Launch App →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid var(--border)' }}>
        <div className="footer-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Image src="/AGENTICLY-logo.png" alt="AGENTICLY" width={24} height={24} style={{ borderRadius: 6 }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
            <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-muted)' }}>AGENTICLY</span>
          </div>
          <p style={{ fontSize: 13, color: 'var(--text-dim)' }}>© 2025 AGENTICLY. Built on Base Chain.</p>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Twitter', 'Discord', 'Docs', 'GitHub'].map(l => (
              <a key={l} href="#" style={{ fontSize: 13, color: 'var(--text-dim)', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dim)')}>{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
