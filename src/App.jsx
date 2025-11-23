import { useEffect, useState } from 'react'
import './App.css'

const LAUNCH_DATE = new Date('2026-01-12T12:00:00+01:00').getTime()

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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const pad = (num) => String(num).padStart(2, '0')

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
          )}

          <p className="tagline-main">We geven jouw idee vleugels</p>
        </section>
      </main>
    </div>
  )
}
