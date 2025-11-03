import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function HeroSpline() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-[#07090e]">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradients that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70" />
      <div className="pointer-events-none absolute -inset-x-10 -top-40 h-80 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.25),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.7)]" />
            <span className="text-sm text-white/80">Live empty legs updating in real-time</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            className="text-4xl font-semibold leading-tight text-white sm:text-6xl"
          >
            Fly private. Effortlessly.
            <span className="block bg-gradient-to-r from-white via-white to-emerald-200 bg-clip-text text-transparent">Empty-legs & full charters</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="mt-5 max-w-2xl text-lg text-white/70"
          >
            AetherJet connects discerning travelers with verified operators. Experience a glassmorphic, futuristic interface and pro-level motion that makes booking feel magical.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#explore"
              className="group rounded-xl bg-white/10 px-5 py-3 text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Explore empty legs
            </a>
            <a
              href="#operators"
              className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-white backdrop-blur-md transition hover:bg-white/10"
            >
              For operators
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
