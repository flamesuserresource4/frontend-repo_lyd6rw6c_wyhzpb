import { motion } from 'framer-motion'
import { Plane, CheckCircle2 } from 'lucide-react'

const steps = [
  'Create an operator profile',
  'Publish empty legs in seconds',
  'Get verified leads instantly',
  'Streamline contract & payment',
]

export default function OperatorsCTA() {
  return (
    <section id="operators" className="relative overflow-hidden bg-[#0a0e14] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70 backdrop-blur">
              <Plane className="h-4 w-4 text-emerald-300" />
              For Operators
            </span>
            <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">Fill seats, reduce reposition costs</h3>
            <p className="mt-3 text-white/70">
              List empty legs and charters with zero friction. Our marketplace matches you with verified high-intent travelers and streamlines the close.
            </p>

            <ul className="mt-6 space-y-3">
              {steps.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-400" />
                  <span className="text-white/80">{s}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-xl bg-emerald-500 px-5 py-3 text-black transition hover:bg-emerald-400">
                Become a partner
              </a>
              <a href="#explore" className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-white transition hover:bg-white/10">
                View marketplace
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 flex items-center justify-between">
                <div className="h-3 w-3 rounded-full bg-red-400/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <div className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Empty Leg #{i + 1}</span>
                      <span className="rounded-full bg-emerald-400/20 px-2 py-0.5 text-xs text-emerald-300">Live</span>
                    </div>
                    <div className="mt-2 text-white/60">TEB → MIA · Nov {10 + i}, 7:00</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
