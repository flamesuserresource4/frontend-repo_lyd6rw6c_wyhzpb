import { Users, Target, Phone, Mail, Send } from 'lucide-react'

export default function AboutContact() {
  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    // For this demo we simply log the submission.
    console.log('Contact submission', data)
    form.reset()
    alert('Thanks! Our concierge team will reach out shortly.')
  }

  return (
    <section id="about" className="bg-[#faf7f3] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide">
              <Users className="h-3.5 w-3.5" /> About Us
            </div>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight">Our mission</h3>
            <p className="mt-3 text-gray-600">
              We connect private jet operators with travelers through a transparent and elegant marketplace. By optimizing empty legs and simplifying charter booking, we make premium travel more accessible while increasing operator utilization.
            </p>

            <div className="mt-6 rounded-2xl border bg-white p-5">
              <div className="flex items-center gap-3">
                <Target className="h-5 w-5 text-amber-600" />
                <div>
                  <div className="font-semibold">Vision</div>
                  <p className="text-sm text-gray-600">A world where private aviation is efficient, sustainable, and delightful.</p>
                </div>
              </div>
              <div className="mt-4 grid sm:grid-cols-3 gap-4 text-center">
                <Stat label="Operators" value="120+" />
                <Stat label="Aircraft" value="450+" />
                <Stat label="Trips Facilitated" value="10k+" />
              </div>
            </div>
          </div>

          <div id="contact" className="lg:pl-8">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide">
              <Phone className="h-3.5 w-3.5" /> Contact Us
            </div>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight">Speak with our concierge</h3>
            <p className="mt-3 text-gray-600">Whether you are booking a trip or listing an aircraft, our team is here to help 24/7.</p>

            <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-700">Full name</label>
                  <input name="name" required className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="text-sm text-gray-700">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input name="email" type="email" required className="mt-1 w-full rounded-xl border pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" placeholder="jane@aetherjet.com" />
                  </div>
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-700">Trip type</label>
                <select name="type" className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black">
                  <option>Empty Leg</option>
                  <option>Full Charter</option>
                  <option>Operator Inquiry</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-700">Phone</label>
                <input name="phone" className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" placeholder="+1 212 555 0182" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-gray-700">Message</label>
                <textarea name="message" rows={4} className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" placeholder="Share your preferred route, dates, passengers, and any special requests." />
              </div>
              <div className="sm:col-span-2 flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Or email us directly: <a href="mailto:concierge@aetherjet.com" className="underline">concierge@aetherjet.com</a>
                </div>
                <button className="inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-2 text-sm font-medium hover:bg-gray-900 transition">
                  <Send className="h-4 w-4" /> Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-gray-50 p-4">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-xs text-gray-600">{label}</div>
    </div>
  )
}
