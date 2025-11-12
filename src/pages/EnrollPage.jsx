import React from "react"

const highlightStats = [
  { value: "50K NGN", label: "Graphic Design Tuition" },
  { value: "1 Month", label: "Mentor-Led Sprint" },
  { value: "Live + Async", label: "Flexible Delivery" },
  { value: "Career Support", label: "Portfolio Reviews" },
]

const graphicModules = [
  "Concept of design & layout foundations",
  "Typography + color mastery for campaigns",
  "Logo design workflows from brief to export",
  "Flyer, social, and image retouching drills",
  "Adobe Photoshop & Illustrator power tips",
]

const webModules = [
  "Front-end essentials: HTML, CSS mastery (Flexbox & Grid), and accessibility standards",
  "Modern JavaScript & state: latest syntax, component patterns, and state management",
  "React + Vite architecture: complex apps with optimized routing and data flows",
  "Performance & polish: responsive systems, animation finesse, and speed diagnostics",
  "Deployment playbook: Git workflows, CI/CD handoff, and client enablement",
]

const supportPerks = [
  "Weekly office hours with senior creative directors",
  "Guided briefs sourced from real client scenarios",
  "Peer critique circles & accountability partner pairing",
  "Job-ready assets: resume polish, Behance & GitHub reviews",
]

const EnrollPage = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative isolate overflow-hidden px-6 pb-16 pt-24 sm:px-10 md:px-16">
        <div className="absolute inset-0 -z-10 opacity-60 blur-3xl">
          <div className="mx-auto h-full max-w-4xl bg-gradient-to-br from-rose-500/30 via-purple-500/20 to-slate-900/0" />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-rose-200/80">NEX Academy</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Enroll in our Graphic Design & Web Development Cohorts
          </h1>
          <p className="mt-6 text-lg text-white/70 sm:text-xl">
            Curated, mentor-guided programs engineered for Nigerian creatives who want client-ready skills,
            faster. Choose your craft, lock your seat, and start building portfolio pieces that actually
            convert.
          </p>
        </div>

    
       
      </section>

      <section className="px-6 pb-20 sm:px-10 md:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <article className="mx-auto w-full max-w-xl rounded-3xl border border-rose-500/30 bg-gradient-to-b from-rose-500/20 via-black to-black p-8 lg:mx-0">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-rose-200">Creative Suite</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">Graphic Design Cohort</h2>
              </div>
              <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">Limited 20 seats</div>
            </div>

            <div className="mt-6 flex flex-wrap gap-6 text-white">
              <div>
                <p className="text-sm uppercase tracking-wide text-white/60">Course Fee</p>
                <p className="text-2xl font-semibold text-white">NGN 50,000</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide text-white/60">Duration</p>
                <p className="text-2xl font-semibold text-white">4 weeks</p>
              </div>
            </div>

            <ul className="mt-8 space-y-3 text-white/80">
              {graphicModules.map((module) => (
                <li key={module} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-rose-400" aria-hidden="true" />
                  <span>{module}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://selar.com/3qk22723a7"
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center rounded-2xl bg-white px-6 py-3 text-base font-semibold text-black transition hover:-translate-y-0.5 hover:bg-white/90 sm:flex-none"
              >
                Enroll – Graphics
              </a>
              <a
                href="tel:+2349038357956"
                className="inline-flex flex-1 items-center justify-center rounded-2xl border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:border-white sm:flex-none"
              >
                Call Admissions
              </a>
            </div>

            <p className="mt-6 text-sm text-white/60">
              Tuition covers Adobe license support, cohort community, and lifetime access to replay vault.
            </p>
          </article>

          <article className="mx-auto w-full max-w-xl rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-cyan-500/10 via-black to-black p-8 lg:mx-0">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/80">Full-Stack Track</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">Web Development Cohort</h2>
              </div>
              <div className="rounded-full bg-white/5 px-4 py-2 text-sm text-white/70">Rolling admission</div>
            </div>

            <p className="mt-5 text-white/75">
              Launch your tech career and master the skills required to build modern, high-performance web applications
              with the Nex Academy’s immersive 4-week Web Development Cohort. This program is designed to transform you
              from a beginner into a job-ready developer, pairing portfolio-grade projects with expert guidance every
              step of the way.
            </p>

            <div className="mt-6 flex flex-wrap gap-6 text-white">
              <div>
                <p className="text-sm uppercase tracking-wide text-white/60">Course Fee</p>
                <p className="text-2xl font-semibold text-white">NGN 70,000</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide text-white/60">Duration</p>
                <p className="text-2xl font-semibold text-white">4 weeks</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide text-white/60">Admissions</p>
                <p className="text-2xl font-semibold text-white">Rolling intake</p>
              </div>
            </div>

         
            <ul className="mt-8 space-y-3 text-white/80">
              {webModules.map((module) => (
                <li key={module} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" aria-hidden="true" />
                  <span>{module}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-white/70">
              Perfect for ambitious beginners and working professionals plotting a full transition into a development
              role, the cohort pairs mentor support with production-style briefs so you graduate with confidence and a
              proof-filled portfolio.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://selar.com/79tz626np0"
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center rounded-2xl bg-white px-6 py-3 text-base font-semibold text-black transition hover:-translate-y-0.5 hover:bg-white/90 sm:flex-none"
              >
                Enroll – Web Development
              </a>
           
            </div>

            <p className="mt-6 text-sm text-white/60">
              Enroll now to build your professional portfolio, collect deployable projects, and step confidently into
              your first developer role.
            </p>
          </article>
        </div>
      </section>

      <section className="px-6 pb-28 sm:px-10 md:px-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">Beyond The Classroom</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Support & perks baked in</h3>
            </div>
            <a
              href="https://wa.me/2349038357956?text=Hi%20NEX%20Academy%2C%20I%27d%20like%20to%20enroll."
              className="inline-flex items-center justify-center rounded-2xl bg-rose-500 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-rose-400"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {supportPerks.map((perk) => (
              <div key={perk} className="rounded-2xl border border-white/10 bg-black/40 p-5 text-left">
                <p className="text-base text-white/80">{perk}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default EnrollPage
