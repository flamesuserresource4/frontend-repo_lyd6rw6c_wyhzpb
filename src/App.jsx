import Navbar from './components/Navbar'
import HomeSection from './components/HomeSection'
import OperatorsSection from './components/OperatorsSection'
import AboutContact from './components/AboutContact'

function App() {
  return (
    <div className="min-h-screen font-inter text-gray-900 bg-white">
      <Navbar />
      <main>
        <HomeSection />
        <OperatorsSection />
        <AboutContact />
        <footer className="border-t bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} AetherJet. All rights reserved.</p>
            <div className="text-sm text-gray-600">Privacy • Terms</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
