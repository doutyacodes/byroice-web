"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { sendApplication } from "@/app/actions/sendApplication";

type Category = "Founder-In-Residence" | "Chief Operating Officer" | "Technical Co-Founder";

interface JobPost {
  id: string;
  title: string;
  company: string;
  description: string;
  category: Category;
}

const POSTS: JobPost[] = [
  {
    id: "coo-2",
    title: "COO / Head of Growth",
    company: "Gigstar",
    description: "Drive commercial expansion and operational efficiency for a rapidly scaling gig marketplace. Must have experience scaling two-sided marketplaces, managing P&L, and driving user acquisition.",
    category: "Chief Operating Officer"
  }
];

export default function LeadPositions() {
  const [activeTab, setActiveTab] = useState<Category>("Founder-In-Residence");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobPost | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const filteredPosts = POSTS.filter(post => post.category === activeTab);

  const handleApplyClick = (job: JobPost) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    setName("");
    setEmail("");
    setLink("");
    setMessage("");
    setSubmitStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob) return;
    
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const result = await sendApplication({
      name,
      email,
      link,
      message,
      jobTitle: selectedJob.title,
      companyName: selectedJob.company,
    });

    setIsSubmitting(false);

    if (result.success) {
      setSubmitStatus("success");
      // Optional: Auto close after a few seconds
      setTimeout(() => {
        handleCloseModal();
      }, 3000);
    } else {
      setSubmitStatus("error");
    }
  };

  const tabs: Category[] = [
    "Founder-In-Residence",
    "Chief Operating Officer",
    "Technical Co-Founder"
  ];

  return (
    <section className="px-6 py-12 sm:px-10 lg:px-24">
      <div className="mx-auto max-w-[1400px]">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative rounded-full px-6 py-4 text-[15px] font-semibold transition-colors ${
                activeTab === tab ? "text-black" : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#FFE100] rounded-full shadow-lg shadow-[#FFE100]/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-lg shadow-black/40 backdrop-blur-sm transition-[border-color,box-shadow,transform] duration-300 hover:border-[#FFE100]/30 hover:shadow-2xl hover:shadow-[#FFE100]/5 hover:-translate-y-1"
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-6">{post.title}</h3>
                  <p className="text-white/70 leading-relaxed text-[15px]">
                    {post.description}
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <button
                    onClick={() => handleApplyClick(post)}
                    className="w-full rounded-full bg-white/5 border border-white/10 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 hover:border-white/20"
                  >
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 text-white/50">
            No open positions found in this category right now.
          </div>
        )}
      </div>

      {/* Application Modal via Portal to escape stacking context */}
      {mounted && createPortal(
        <AnimatePresence>
          {isModalOpen && selectedJob && (
            <div className="fixed inset-0 flex items-center justify-center px-4" style={{ zIndex: 99999 }}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleCloseModal}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                className="relative w-full max-w-lg overflow-hidden rounded-[32px] border border-white/10 bg-black p-8 shadow-2xl"
              >
                <button
                  onClick={handleCloseModal}
                  className="absolute right-6 top-6 text-white/50 hover:text-white"
                >
                  ✕
                </button>
                
                <h2 className="text-2xl font-bold text-white pr-6">Apply for {selectedJob.title}</h2>
                
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[#FFE100]/50 focus:outline-none focus:ring-1 focus:ring-[#FFE100]/50"
                      placeholder="Jane Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
                    <input 
                      required
                      type="email" 
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[#FFE100]/50 focus:outline-none focus:ring-1 focus:ring-[#FFE100]/50"
                      placeholder="jane@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">LinkedIn Profile or Portfolio URL</label>
                    <input 
                      type="url" 
                      value={link}
                      onChange={e => setLink(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[#FFE100]/50 focus:outline-none focus:ring-1 focus:ring-[#FFE100]/50"
                      placeholder="https://linkedin.com/in/..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Brief Intro</label>
                    <textarea 
                      required
                      rows={4}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[#FFE100]/50 focus:outline-none focus:ring-1 focus:ring-[#FFE100]/50 resize-none"
                      placeholder="Tell us why you are a fit for this role..."
                    />
                  </div>
                  
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting || submitStatus === "success"}
                      className="w-full rounded-full bg-[#FFE100] py-4 text-base font-bold text-black shadow-lg shadow-[#FFE100]/10 transition-all hover:shadow-xl hover:shadow-[#FFE100]/20 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : submitStatus === "success" ? "Application Sent!" : "Submit Application"}
                    </button>
                    {submitStatus === "error" && (
                      <p className="mt-4 text-center text-sm font-medium text-red-400">
                        Failed to send application. Please try again.
                      </p>
                    )}
                    {submitStatus === "success" && (
                      <p className="mt-4 text-center text-sm font-medium text-green-400">
                        Thank you! We've received your application.
                      </p>
                    )}
                    {submitStatus === "idle" && (
                      <p className="mt-4 text-center text-xs text-white/40">
                        Your application will be sent directly to our team.
                      </p>
                    )}
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
