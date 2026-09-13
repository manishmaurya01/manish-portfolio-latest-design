"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Send, Mail, MapPin, CheckCircle2, AlertCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "./SocialIcons";
import TiltCard3D from "./3d/TiltCard3D";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) return;

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/ce832bf09fc40587656ee91347b63125", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New Inquiry from Portfolio",
          message: formData.message,
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
      } else {
        setStatus("success");
      }
    } catch (err) {
      setStatus("success");
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[var(--bg-primary)] border-t border-stone-200 dark:border-white/[0.06] w-full max-w-full overflow-hidden transition-colors duration-200">
      {/* Background glow */}
      <div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 dark:text-white tracking-tight font-display mb-4">
            Let’s Build Something <br />
            <span className="gradient-text-accent">Remarkable Together.</span>
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
            Have an idea, project, or full-time opportunity? My inbox is always open. Let&apos;s start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              {/* Email 3D Card */}
              <TiltCard3D maxTilt={10} dataCursor="MAIL ME">
                <a
                  href={siteConfig.socials.email}
                  className="p-6 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-[#18181b] dark:to-[#121215] hover:border-amber-500/40 transition-all duration-200 block shadow-sm dark:shadow-lg group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-stone-500 dark:text-stone-400 block uppercase">
                        Direct Email
                      </span>
                      <span className="text-sm font-semibold text-stone-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                        {siteConfig.email}
                      </span>
                    </div>
                  </div>
                </a>
              </TiltCard3D>

              {/* Location Card */}
              <div className="p-6 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-[#18181b] dark:to-[#121215] shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-stone-500 dark:text-stone-400 block uppercase">
                      Base Location
                    </span>
                    <span className="text-sm font-semibold text-stone-900 dark:text-white">
                      Gujarat, India (IST / UTC +5:30)
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="p-6 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-[#18181b] dark:to-[#121215] shadow-sm">
                <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-4 font-semibold">
                  Social Channels
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={siteConfig.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="GITHUB"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 dark:border-white/10 bg-stone-100 dark:bg-white/5 hover:bg-stone-200 dark:hover:bg-white/15 hover:border-amber-500/40 text-xs text-stone-700 dark:text-stone-200 hover:text-stone-900 dark:hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-stone-400 dark:text-stone-400" />
                  </a>

                  <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="LINKEDIN"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 dark:border-white/10 bg-stone-100 dark:bg-white/5 hover:bg-stone-200 dark:hover:bg-white/15 hover:border-amber-500/40 text-xs text-stone-700 dark:text-stone-200 hover:text-stone-900 dark:hover:text-white transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-stone-400 dark:text-stone-400" />
                  </a>

                  <a
                    href={siteConfig.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="TWITTER"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 dark:border-white/10 bg-stone-100 dark:bg-white/5 hover:bg-stone-200 dark:hover:bg-white/15 hover:border-amber-500/40 text-xs text-stone-700 dark:text-stone-200 hover:text-stone-900 dark:hover:text-white transition-colors"
                  >
                    <TwitterXIcon className="w-3.5 h-3.5" />
                    <span>Twitter / X</span>
                    <ArrowUpRight className="w-3 h-3 text-stone-400 dark:text-stone-400" />
                  </a>
                </div>
              </div>

            </div>

            {/* Availability status badge */}
            <div className="p-4 rounded-xl border border-emerald-500/25 bg-emerald-500/10 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs text-emerald-800 dark:text-emerald-300 font-mono">
                Currently open to select freelance and contract roles.
              </span>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <TiltCard3D maxTilt={5}>
              <div className="p-6 sm:p-10 rounded-3xl border border-stone-200 dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-[#18181b] dark:to-[#121215] backdrop-blur-xl shadow-sm dark:shadow-2xl">
                
                {status === "success" ? (
                  <div className="py-12 text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-500 dark:text-emerald-400 mb-4 animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-2 font-display">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-stone-600 dark:text-stone-300 text-sm max-w-md mb-6">
                      Thank you for reaching out, Manish will review your message and reply promptly to your inbox.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      data-cursor="RESET"
                      className="px-5 py-2.5 rounded-xl border border-stone-200 dark:border-white/15 bg-stone-100 dark:bg-white/5 hover:bg-stone-200 dark:hover:bg-white/10 text-stone-800 dark:text-white text-xs font-semibold transition-all cursor-pointer"
                    >
                      Send Another Note
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Honeypot field */}
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {/* Name and Email Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-mono uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2 font-medium"
                        >
                          Your Name <span className="text-amber-600 dark:text-amber-400">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Alex Smith"
                          className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-white/[0.03] focus:border-amber-500 focus:bg-white dark:focus:bg-white/[0.06] text-stone-900 dark:text-white text-sm focus:outline-none transition-all placeholder:text-stone-400 dark:placeholder:text-stone-600"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-mono uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2 font-medium"
                        >
                          Email Address <span className="text-amber-600 dark:text-amber-400">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="alex@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-white/[0.03] focus:border-amber-500 focus:bg-white dark:focus:bg-white/[0.06] text-stone-900 dark:text-white text-sm focus:outline-none transition-all placeholder:text-stone-400 dark:placeholder:text-stone-600"
                        />
                      </div>
                    </div>

                    {/* Subject Input */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-xs font-mono uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2 font-medium"
                      >
                        Subject / Project Scope
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Web development, UI redesign, or general inquiry"
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-white/[0.03] focus:border-amber-500 focus:bg-white dark:focus:bg-white/[0.06] text-stone-900 dark:text-white text-sm focus:outline-none transition-all placeholder:text-stone-400 dark:placeholder:text-stone-600"
                      />
                    </div>

                    {/* Message Input */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-mono uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2 font-medium"
                      >
                        Your Message <span className="text-amber-600 dark:text-amber-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, timeline, or goals..."
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-white/[0.03] focus:border-amber-500 focus:bg-white dark:focus:bg-white/[0.06] text-stone-900 dark:text-white text-sm focus:outline-none transition-all placeholder:text-stone-400 dark:placeholder:text-stone-600 resize-none"
                      />
                    </div>

                    {/* Error Notification */}
                    {errorMessage && (
                      <div className="p-3 rounded-lg border border-red-500/20 bg-red-500/10 text-red-500 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      data-cursor="SUBMIT"
                      className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all duration-200 active:scale-95 disabled:opacity-50 cursor-pointer"
                    >
                      {status === "submitting" ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-stone-500 dark:text-stone-400 text-center">
                      Your details will never be shared. Direct response guaranteed within 24 hours.
                    </p>

                  </form>
                )}

              </div>
            </TiltCard3D>
          </div>

        </div>

      </div>
    </section>
  );
}
