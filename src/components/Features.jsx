import { motion } from 'framer-motion'
import { Shield, Sparkles, Clock, Rocket } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Verified Operators',
    desc: 'Work only with vetted partners and clear compliance. Peace of mind, built-in.',
  },
  {
    icon: Sparkles,
    title: 'Luxury UI, Zero Friction',
    desc: 'A glassmorphic, modern interface with delightful motion for a premium feel.',
  },
  {
    icon: Clock,
    title: 'Real-time Empty Legs',
    desc: 'Live availability and instant holds. See routes emerge as aircraft reposition.',
  },
  {
    icon: Rocket,
    title: 'Express Charter',
    desc: 'End-to-end booking flow optimized for speed with concierge follow-through.',
  },
]

export default function Features() {
  return (
    <section id="explore" className="relative bg-[#0b0f16] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70 backdrop-blur">
            Why AetherJet
          </span>
          <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">Designed for seamless private travel</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            A refined experience where technology enhances comfort, not complexity.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.15),transparent_60%)]" />
              <f.icon className="h-6 w-6 text-emerald-300" />
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
