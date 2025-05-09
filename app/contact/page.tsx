export default function Contact() {
  return (
    <main className="min-h-screen p-8 bg-[#5f6041]/10 text-[#231f20]">
      <h1 className="text-4xl md:text-5xl font-[var(--font-scandilover)] text-center mb-8">
        Book a Session
      </h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-xl text-center mb-12 font-[var(--font-pt-sans)]">
          Let's create beautiful memories together. Fill out the form below to get started.
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-[var(--font-pt-sans)] uppercase tracking-wide mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-[#5f6041]/30 rounded-lg focus:ring-2 focus:ring-[#5f6041]/20 focus:border-[#5f6041] font-[var(--font-pt-sans)]"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-[var(--font-pt-sans)] uppercase tracking-wide mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-[#5f6041]/30 rounded-lg focus:ring-2 focus:ring-[#5f6041]/20 focus:border-[#5f6041] font-[var(--font-pt-sans)]"
              required
            />
          </div>
          <div>
            <label htmlFor="session-type" className="block text-sm font-[var(--font-pt-sans)] uppercase tracking-wide mb-2">
              Session Type
            </label>
            <select
              id="session-type"
              name="session-type"
              className="w-full px-4 py-2 border border-[#5f6041]/30 rounded-lg focus:ring-2 focus:ring-[#5f6041]/20 focus:border-[#5f6041] font-[var(--font-pt-sans)]"
              required
            >
              <option value="">Select a session type</option>
              <option value="wedding">Weddings</option>
              <option value="elopement">Elopements</option>
              <option value="engagement">Engagements</option>
              <option value="vow-renewal">Vow Renewals</option>
              <option value="family">Family</option>
              <option value="couple">Couples</option>
              <option value="maternity">Maternity</option>
              <option value="newborn">Newborn</option>
              <option value="senior">Senior/Graduation</option>
              <option value="portrait">Portrait</option>
              <option value="branding">Branding</option>
              <option value="pet">Pets</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-[var(--font-pt-sans)] uppercase tracking-wide mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 border border-[#5f6041]/30 rounded-lg focus:ring-2 focus:ring-[#5f6041]/20 focus:border-[#5f6041] font-[var(--font-pt-sans)]"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#5f6041] text-white rounded-full hover:bg-[#746434] transition font-[var(--font-pt-sans)] uppercase tracking-wide"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
} 