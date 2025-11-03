import Navbar from './components/Navbar'
import HeroSpline from './components/HeroSpline'
import Features from './components/Features'
import OperatorsCTA from './components/OperatorsCTA'

function App() {
  return (
    <div className="min-h-screen bg-[#05070b] font-inter text-white">
      <Navbar />
      <main>
        <HeroSpline />
        <Features />
        <OperatorsCTA />
        <section id="contact" className="bg-[#070b10] py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="text-2xl font-semibold">Concierge contact</h4>
                <p className="mt-2 text-white/70">Speak with our team to arrange a bespoke itinerary or onboard as an operator.</p>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <p className="text-sm text-white/70">Email</p>
                  <a href="mailto:concierge@aetherjet.com" className="text-lg">concierge@aetherjet.com</a>
                  <p className="mt-4 text-sm text-white/70">Phone</p>
                  <p className="text-lg">+1 (555) 012-3456</p>
                </div>
              </div>
              <form className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm text-white/70">Name</label>
                    <input className="mt-1 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 outline-none placeholder:text-white/40 focus:border-emerald-400/40" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="text-sm text-white/70">Email</label>
                    <input type="email" className="mt-1 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 outline-none placeholder:text-white/40 focus:border-emerald-400/40" placeholder="jane@domain.com" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm text-white/70">Message</label>
                    <textarea rows="4" className="mt-1 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 outline-none placeholder:text-white/40 focus:border-emerald-400/40" placeholder="Tell us about your trip or fleet"></textarea>
                  </div>
                </div>
                <button type="button" className="mt-4 w-full rounded-xl bg-emerald-500 px-4 py-3 text-black transition hover:bg-emerald-400">Send</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 bg-[#05070b] py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} AetherJet. All rights reserved.</p>
          <div className="text-sm text-white/60">Privacy • Terms</div>
        </div>
      </footer>
    </div>
  )
}

export default App
