import { useEffect, useState } from 'react'
import './App.css'

const LAUNCH_DATE = new Date('2025-11-24T09:00:00+01:00').getTime()

function getTimeRemaining() {
  const now = Date.now()
  const difference = LAUNCH_DATE - now

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isLive: false,
  }
}

export default function App() {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining())
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  const pad = (num) => String(num).padStart(2, '0')

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <span className="logo-text">🐦</span>
          <h1>DigitaleDuif</h1>
        </div>
        <p className="tagline">Digital experiences engineered in the Netherlands</p>
      </header>

      <main className="main">
        <section className="hero">
          <div className="hero-content">
            <h2>We're preparing something bold.</h2>
            <p>
              DigitaleDuif is a technology studio crafting immersive, innovative digital experiences.
              We combine web, XR, and data platforms designed for forward-thinking organizations.
            </p>
            <p className="subtext">Launching November 24, 2025</p>
          </div>

          <div className="countdown-card">
            <h3>Launch in</h3>
            {timeRemaining.isLive ? (
              <div className="live-badge">🚀 We're live!</div>
            ) : (
              <div className="countdown-grid">
                <div className="countdown-item">
                  <span className="value">{pad(timeRemaining.days)}</span>
                  <span className="label">Days</span>
                </div>
                <div className="countdown-item">
                  <span className="value">{pad(timeRemaining.hours)}</span>
                  <span className="label">Hours</span>
                </div>
                <div className="countdown-item">
                  <span className="value">{pad(timeRemaining.minutes)}</span>
                  <span className="label">Minutes</span>
                </div>
                <div className="countdown-item">
                  <span className="value">{pad(timeRemaining.seconds)}</span>
                  <span className="label">Seconds</span>
                </div>
              </div>
            )}
            <p className="countdown-date">24 Nov 2025 • 09:00 CET</p>
          </div>
        </section>

        <section className="features">
          <h2>What We Build</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>Web Experiences</h3>
              <p>Modern, responsive web platforms that scale from day one.</p>
            </div>
            <div className="feature">
              <h3>XR Innovation</h3>
              <p>Immersive augmented and mixed reality experiences for enterprise.</p>
            </div>
            <div className="feature">
              <h3>Data Systems</h3>
              <p>Secure, performant backends and data pipelines built for enterprise needs.</p>
            </div>
          </div>
        </section>

        <section className="subscribe">
          <h2>Get Notified at Launch</h2>
          <form onSubmit={handleSubmit} className="subscribe-form">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Notify Me</button>
          </form>
          {submitted && <p className="success-message">✓ Thanks! You'll hear from us soon.</p>}
        </section>

        <section className="cta">
          <h2>Ready to launch?</h2>
          <p>Get in touch with our team to discuss your next project.</p>
          <a href="mailto:hello@digitaleduif.nl" className="cta-button">
            Start a Conversation
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 DigitaleDuif. Digital innovation from the Netherlands.</p>
      </footer>
    </div>
  )
}
