import { Rocket, Shield, Star, Plane } from 'lucide-react'

const benefits = [
  {
    icon: Rocket,
    title: 'Express Booking',
    desc: 'Book empty legs in minutes with instant confirmation and concierge support.'
  },
  {
    icon: Shield,
    title: 'Transparent Pricing',
    desc: 'See real market rates with no hidden fees. What you see is what you pay.'
  },
  {
    icon: Star,
    title: 'Luxury Experience',
    desc: 'Private terminals, curated lounges, and onboard comfort on every flight.'
  }
]

const sampleLegs = [
  { route: 'NYC → Miami', date: 'Fri, 21 Nov', jet: 'Citation XLS', price: '$7,900' },
  { route: 'LA → Vegas', date: 'Sat, 22 Nov', jet: 'Phenom 300', price: '$4,200' },
  { route: 'London → Paris', date: 'Mon, 24 Nov', jet: 'Legacy 450', price: '€5,600' },
]

export default function HomeSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pt-24 md:pt-28 bg-gradient-to-b from-white via-[#faf7f3] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide">
                <Plane className="h-3.5 w-3.5" /> Empty Legs & Full Charters
              </div>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
                Fly Private. Pay Less.
              </h1>
              <p className="mt-4 text-gray-600 text-lg">
                Discover luxury private travel with access to empty leg deals and full aircraft charters—curated for discerning travelers.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white font-medium hover:bg-gray-900 transition">
                  Request Itinerary
                </a>
                <a href="#operators" className="inline-flex items-center justify-center rounded-full border px-6 py-3 font-medium hover:bg-gray-50 transition">
                  For Operators
                </a>
              </div>
              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {benefits.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="rounded-2xl border bg-white p-4">
                    <Icon className="h-5 w-5 text-amber-500" />
                    <h3 className="mt-3 font-semibold">{title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] md:aspect-[5/4] rounded-3xl bg-[url('https://images.unsplash.com/photo-1521185496955-15097b20c5fe?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center shadow-2xl" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
            </div>
          </div>

          <div className="mt-14">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold tracking-tight">Featured Empty Legs</h2>
              <a href="#contact" className="text-sm font-medium underline underline-offset-4 hover:opacity-80">View All</a>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sampleLegs.map((leg) => (
                <div key={leg.route} className="rounded-2xl border bg-white p-5 hover:shadow-lg transition">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{leg.route}</span>
                    <span className="text-sm text-amber-600 font-semibold">{leg.price}</span>
                  </div>
                  <div className="mt-1 text-sm text-gray-600">{leg.date}</div>
                  <div className="mt-6 flex items-center justify-between text-sm">
                    <span className="text-gray-700">{leg.jet}</span>
                    <button className="rounded-full bg-black text-white px-4 py-2 text-xs font-medium hover:bg-gray-900 transition">
                      Request
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
