import { Building2, ShieldCheck, Wallet, Upload } from 'lucide-react'

export default function OperatorsSection() {
  return (
    <section id="operators" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide">
              <Building2 className="h-3.5 w-3.5" /> For Operators
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
              Grow revenue with intelligent empty-leg distribution.
            </h2>
            <p className="mt-4 text-gray-600">
              List your aircraft, publish empty legs, and receive high-intent requests from verified travelers. Our team handles concierge, payments, and passenger management.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <Feature icon={Upload} title="Effortless Listings" desc="Create legs in seconds via dashboard or API." />
              <Feature icon={ShieldCheck} title="Verified Clients" desc="KYC, trip briefs, and secure contracts handled." />
              <Feature icon={Wallet} title="Faster Cashflow" desc="Streamlined payments and automated invoicing." />
              <Feature icon={Building2} title="Fleet Tools" desc="Team roles, aircraft profiles, and performance analytics." />
            </div>
          </div>

          <div className="rounded-3xl border p-6">
            <h3 className="text-lg font-semibold">List Empty Legs</h3>
            <p className="mt-1 text-sm text-gray-600">Share upcoming repositioning flights to fill your seats.</p>
            <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm text-gray-700">From</label>
                <input required className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" placeholder="KTEB / Teterboro" />
              </div>
              <div>
                <label className="text-sm text-gray-700">To</label>
                <input required className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" placeholder="KMIA / Miami" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Date</label>
                <input type="date" required className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Aircraft</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" placeholder="Citation XLS" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-gray-700">Notes</label>
                <textarea className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" rows={3} placeholder="Ferry leg available between 10:00-16:00 local." />
              </div>
              <div className="sm:col-span-2 flex items-center justify-between">
                <p className="text-xs text-gray-500">We will contact you to verify operator details.</p>
                <button className="rounded-full bg-black text-white px-5 py-2 text-sm font-medium hover:bg-gray-900 transition">
                  Publish Leg
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border p-4">
      <Icon className="h-5 w-5 text-amber-500" />
      <h4 className="mt-2 font-semibold">{title}</h4>
      <p className="mt-1 text-sm text-gray-600">{desc}</p>
    </div>
  )
}
