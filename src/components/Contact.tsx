import React, { useState } from "react";

const contactInfo = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
      </svg>
    ),
    label: "Location",
    value: "New Delhi, India",
    sub: "Open to remote worldwide",
    color: "#22d3ee",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
      </svg>
    ),
    label: "Email",
    value: "ankitnathtiwari@gmail.com",
    href: "mailto:ankitnathtiwari@gmail.com",
    color: "#a855f7",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
      </svg>
    ),
    label: "Phone",
    value: "+91 7791059913",
    href: "tel:+917791059913",
    sub: "Available during business hours",
    color: "#10b981",
  },
];

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10">

      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="section-bar h-8" />
          <p className="text-xs font-mono text-cyan-400 tracking-widest">{"// GET IN TOUCH"}</p>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold">
          <span className="gradient-text">Contact Me</span>
        </h1>
        <p className="text-slate-400 mt-2 max-w-xl">
          I'm always open to new projects, collaborations, and opportunities. Let's build something great together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

        {/* Info panel */}
        <div className="md:col-span-2 space-y-4">
          {/* Contact cards */}
          {contactInfo.map((c, i) => (
            <div key={i} className="glass rounded-xl p-4 card-hover flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${c.color}15`, border: `1px solid ${c.color}30`, color: c.color }}
              >
                {c.icon}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-mono text-slate-500 mb-0.5">{c.label}</p>
                {c.href ? (
                  <a href={c.href} className="text-sm font-medium hover:underline truncate block"
                    style={{ color: c.color }}>
                    {c.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-slate-300">{c.value}</p>
                )}
                {c.sub && <p className="text-xs text-slate-600 mt-0.5">{c.sub}</p>}
              </div>
            </div>
          ))}

          {/* Social */}
          <div className="glass rounded-xl p-5">
            <p className="text-xs font-mono text-slate-500 tracking-wider mb-3">SOCIAL LINKS</p>
            <div className="flex gap-3">
              <a href="https://github.com/ankitnathtiwari6" target="_blank" rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/ankit-nath-tiwari-6b86a510b/" target="_blank" rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Availability */}
          <div className="glass rounded-xl p-5 bg-gradient-to-br from-cyan-500/5 to-purple-500/5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <p className="text-sm font-semibold text-slate-200">Currently Available</p>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-500 font-mono">
              <li>⚡ Response within 24 hours</li>
              <li>🌍 Remote work preferred</li>
              <li>🚀 Available for immediate start</li>
            </ul>
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-3">
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2">
              <span className="gradient-text">Send a Message</span>
            </h2>

            {sent ? (
              <div className="rounded-xl p-5 border border-green-500/30 bg-green-500/5 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-green-400 text-sm">Message Sent!</p>
                  <p className="text-slate-400 text-sm mt-1">Thanks for reaching out. I'll get back to you soon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {(["name", "email"] as const).map((field) => (
                    <div key={field}>
                      <label className="block text-xs font-mono text-slate-500 tracking-wider mb-1.5 uppercase">
                        {field}
                      </label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        value={form[field]}
                        onChange={onChange}
                        onFocus={() => setFocused(field)}
                        onBlur={() => setFocused(null)}
                        required
                        placeholder={field === "name" ? "Your name" : "your@email.com"}
                        className={`input-neon w-full px-4 py-2.5 rounded-lg text-sm ${focused === field ? "border-cyan-500/60" : ""}`}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 tracking-wider mb-1.5 uppercase">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    onFocus={() => setFocused("subject")}
                    onBlur={() => setFocused(null)}
                    required
                    placeholder="What's this about?"
                    className={`input-neon w-full px-4 py-2.5 rounded-lg text-sm ${focused === "subject" ? "border-cyan-500/60" : ""}`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 tracking-wider mb-1.5 uppercase">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={`input-neon w-full px-4 py-2.5 rounded-lg text-sm resize-none ${focused === "message" ? "border-cyan-500/60" : ""}`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                    sending
                      ? "bg-slate-700 text-slate-500 cursor-not-allowed"
                      : "btn-solid-neon text-white"
                  }`}
                >
                  {sending ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message →"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
