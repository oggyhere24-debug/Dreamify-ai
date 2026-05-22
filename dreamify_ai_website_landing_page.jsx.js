export default function DreamifyAI() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent blur-3xl"></div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-5xl z-10">
          Create Viral <span className="text-yellow-400">AI Reels</span> In Seconds
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl z-10">
          Generate cinematic motivation reels, luxury edits, AI influencer videos and viral shorts instantly.
        </p>

        <div className="mt-10 flex gap-4 z-10">
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition">
            Generate Reel
          </button>

          <button className="border border-gray-600 px-8 py-4 rounded-2xl text-lg hover:bg-white hover:text-black transition">
            Watch Demo
          </button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full z-10">
          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold text-yellow-400">AI Video</h3>
            <p className="mt-3 text-gray-400">Turn text prompts into cinematic AI videos.</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold text-yellow-400">Auto Captions</h3>
            <p className="mt-3 text-gray-400">Generate viral subtitles automatically.</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold text-yellow-400">Luxury Templates</h3>
            <p className="mt-3 text-gray-400">Use trending motivation and luxury styles.</p>
          </div>
        </div>
      </section>

      {/* AI Generator */}
      <section className="px-6 py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
          <h2 className="text-4xl font-bold text-center mb-8">
            AI Reel Generator
          </h2>

          <textarea
            placeholder="Describe your dream reel... Example: A broke boy becomes a billionaire in Dubai"
            className="w-full h-40 bg-black border border-gray-700 rounded-2xl p-5 text-lg focus:outline-none"
          ></textarea>

          <button className="w-full mt-6 bg-yellow-400 text-black py-4 rounded-2xl text-xl font-bold hover:scale-[1.02] transition">
            Generate AI Reel
          </button>
        </div>
      </section>

      {/* Demo Section */}
      <section className="px-6 py-24">
        <h2 className="text-5xl font-bold text-center mb-16">
          Viral Reel Examples
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-b from-yellow-500/20 to-black border border-white/10 rounded-3xl p-6 h-96 flex flex-col justify-end">
            <h3 className="text-2xl font-bold">Luxury Mindset</h3>
            <p className="text-gray-400 mt-2">Dubai cars, rich lifestyle and cinematic motivation.</p>
          </div>

          <div className="bg-gradient-to-b from-pink-500/20 to-black border border-white/10 rounded-3xl p-6 h-96 flex flex-col justify-end">
            <h3 className="text-2xl font-bold">Broken To Success</h3>
            <p className="text-gray-400 mt-2">Emotional transformation reels with viral edits.</p>
          </div>

          <div className="bg-gradient-to-b from-blue-500/20 to-black border border-white/10 rounded-3xl p-6 h-96 flex flex-col justify-end">
            <h3 className="text-2xl font-bold">AI Influencer</h3>
            <p className="text-gray-400 mt-2">Create AI girls and cinematic social media reels.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-24 bg-gray-950">
        <h2 className="text-5xl font-bold text-center mb-16">
          Simple Pricing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="border border-white/10 rounded-3xl p-10 bg-white/5">
            <h3 className="text-3xl font-bold">Free</h3>
            <p className="text-5xl font-extrabold mt-6">₹0</p>
            <ul className="mt-8 space-y-4 text-gray-300">
              <li>✔ 3 AI Reels Per Day</li>
              <li>✔ Watermark Included</li>
              <li>✔ Viral Templates</li>
            </ul>

            <button className="mt-10 w-full border border-white/20 py-4 rounded-2xl hover:bg-white hover:text-black transition">
              Start Free
            </button>
          </div>

          <div className="border border-yellow-400 rounded-3xl p-10 bg-yellow-400 text-black shadow-2xl">
            <h3 className="text-3xl font-bold">Pro</h3>
            <p className="text-5xl font-extrabold mt-6">₹299</p>
            <ul className="mt-8 space-y-4">
              <li>✔ Unlimited Reels</li>
              <li>✔ No Watermark</li>
              <li>✔ Premium AI Styles</li>
              <li>✔ Fast Rendering</li>
            </ul>

            <button className="mt-10 w-full bg-black text-white py-4 rounded-2xl hover:scale-105 transition">
              Upgrade Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10 text-center text-gray-500">
        <p>© 2026 Dreamify AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
