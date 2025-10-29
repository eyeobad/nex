import React, { useEffect, useMemo, useState } from "react"
import { packagesData } from "./Packages"

const metrics = [
  {
    id: "site",
    label: "Website readiness",
    helper: "Self-updating, mobile-first, conversion tuned",
  },
  {
    id: "automation",
    label: "Automation & follow-up",
    helper: "Workflows that route leads instantly",
  },
  {
    id: "content",
    label: "Content & discoverability",
    helper: "Organic + paid visibility momentum",
  },
  {
    id: "data",
    label: "Data visibility",
    helper: "Dashboards, KPIs, and weekly reviews",
  },
]

const buckets = [
  { max: 45, copy: "Your digital foundation needs reinforcement.", pkg: packagesData[0] },
  { max: 75, copy: "Growth levers are in place, now scale them.", pkg: packagesData[1] },
  { max: 101, copy: "You are primed for market domination.", pkg: packagesData[2] },
]

const PresenceCalculator = ({ onRecommendationChange = () => {} }) => {
  const [answers, setAnswers] = useState(() =>
    metrics.reduce((acc, metric) => {
      acc[metric.id] = 2
      return acc
    }, {}),
  )

  const rawScore = useMemo(() => {
    const values = Object.values(answers)
    if (!values.length) return 0
    const total = values.reduce((sum, value) => sum + Number(value || 0), 0)
    const max = values.length * 4
    return Math.round((total / max) * 100)
  }, [answers])

  const { pkg, copy } = useMemo(() => buckets.find((bucket) => rawScore < bucket.max) ?? buckets.at(-1), [rawScore])

  useEffect(() => {
    const payload = { score: rawScore, recommended: pkg }
    onRecommendationChange(pkg)
    window.dispatchEvent(new CustomEvent("presence-calculator-change", { detail: payload }))
  }, [rawScore, pkg, onRecommendationChange])

  const handleChange = (id) => (event) => setAnswers((prev) => ({ ...prev, [id]: Number(event.target.value) }))

  const gradientStop = Math.min(100, Math.max(0, rawScore))

  return (
    <section className="relative flex flex-col gap-4 rounded-[20px] border border-white/12 bg-[#090B10]/70 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.32)] backdrop-blur-sm sm:gap-5 sm:p-5 lg:rounded-[24px] lg:border-white/10 lg:p-6 lg:shadow-[0_30px_110px_rgba(0,0,0,0.4)]">
      <header className="flex items-center justify-between gap-2 sm:gap-3">
        <div className="space-y-1">
          <p className="text-[9px] uppercase tracking-[0.3em] text-[#D81F26]/80 sm:text-[10px]">Presence pulse</p>
          <h3 className="font-space-grotesk text-[18px] font-semibold text-white sm:text-[20px] lg:text-[22px]">
            Online Presence Score
          </h3>
        </div>
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/12 bg-[#05060A] p-1 sm:h-16 sm:w-16 lg:h-[72px] lg:w-[72px]">
          <div
            className="flex h-full w-full items-center justify-center rounded-full bg-black text-[16px] font-semibold text-white sm:text-[18px] lg:text-[20px]"
            style={{ backgroundImage: `conic-gradient(#D81F26 ${gradientStop}%, rgba(255,255,255,0.08) ${gradientStop}%)` }}
            aria-live="polite"
          >
            {rawScore}
          </div>
        </div>
      </header>

      <p className="text-[11px] leading-relaxed text-white/70 sm:text-xs lg:text-sm">
        Rate how dialed-in each lever is. We instantly map the score to the package that fits your current momentum.
      </p>

      <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        {metrics.map((metric) => (
          <li
            key={metric.id}
            className="space-y-2 rounded-[16px] border border-white/12 bg-white/[0.04] px-3 py-2.5 sm:rounded-[18px] sm:px-4 sm:py-3"
          >
            <div className="flex items-center justify-between gap-1.5">
              <div>
                <p className="text-[13px] font-medium text-white sm:text-sm">{metric.label}</p>
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 sm:text-[10px]">{metric.helper}</p>
              </div>
              <span className="font-space-grotesk text-xs font-semibold text-[#D81F26] sm:text-sm">
                {answers[metric.id]}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="4"
              step="1"
              value={answers[metric.id]}
              onChange={handleChange(metric.id)}
              className="h-1 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-[#D81F26]"
              aria-label={metric.label}
            />
            <div className="flex justify-between text-[8px] uppercase tracking-[0.3em] text-white/30 sm:text-[9px]">
              <span>Low</span>
              <span>Elite</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="space-y-1.5 rounded-[18px] border border-white/15 bg-[#06070D]/90 px-4 py-3 sm:rounded-[20px] sm:px-5 sm:py-4">
        <p className="text-[9px] uppercase tracking-[0.28em] text-white/45 sm:text-[10px]">Recommended move</p>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="font-space-grotesk text-[16px] font-semibold text-white sm:text-[18px]">{pkg.name}</p>
          <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-[9px] uppercase tracking-[0.26em] text-white/70 sm:px-3 sm:text-[10px]">
            Score {rawScore}
          </span>
        </div>
        <p className="text-[11px] text-white/65 sm:text-xs lg:text-sm">{copy}</p>
      </div>
    </section>
  )
}

export default PresenceCalculator
