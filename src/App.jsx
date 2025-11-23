import { useEffect, useState } from 'react'
import './App.css'

const LAUNCH_DATE = new Date('2026-01-12T12:00:00+01:00').getTime()
const EMAIL_ADDRESS = 'digitaleduif@outlook.com'

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
  const [isFlipped, setIsFlipped] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const pad = (num) => String(num).padStart(2, '0')

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleKeyFlip = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleFlip()
    }
  }

  return (
    <div className="container">
      <main className="main-simple">
        <div className="logo-simple">
          <h1>DigitaleDuif</h1>
        </div>

        <section className="countdown-section">
          {timeRemaining.isLive ? (
            <div className="live-badge-large">🚀 We're live!</div>
          ) : (
            // eslint-disable-next-line jsx-a11y/prefer-tag-over-role
            <div
              className="flip-container"
              role="button"
              tabIndex={0}
              aria-pressed={isFlipped}
              onClick={handleFlip}
              onKeyDown={handleKeyFlip}
            >
              <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
                <div className="flip-front">
                  <div className="countdown-display">
                    <div className="time-block">
                      <div className="time-number">{pad(timeRemaining.days)}</div>
                      <div className="time-label">Days</div>
                    </div>
                    <div className="separator">:</div>
                    <div className="time-block">
                      <div className="time-number">{pad(timeRemaining.hours)}</div>
                      <div className="time-label">Hours</div>
                    </div>
                    <div className="separator">:</div>
                    <div className="time-block">
                      <div className="time-number">{pad(timeRemaining.minutes)}</div>
                      <div className="time-label">Minutes</div>
                    </div>
                    <div className="separator">:</div>
                    <div className="time-block">
                      <div className="time-number">{pad(timeRemaining.seconds)}</div>
                      <div className="time-label">Seconds</div>
                    </div>
                  </div>
                </div>
                <div className="flip-back">
                  <div className="countdown-display contact-display">
                    <a
                      className="contact-email-link"
                      href={`mailto:${EMAIL_ADDRESS}`}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <span className="contact-email">{EMAIL_ADDRESS}</span>
                      <span className="contact-label">Contact</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          <p className="tagline-main">We geven jouw idee vleugels</p>
        </section>
      </main>
    </div>
  )
}
