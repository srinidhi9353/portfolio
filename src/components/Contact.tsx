import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Github, MessageCircle, Instagram } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const validate = () => {
    const tempErrors = { name: '', email: '', subject: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = 'Please enter a valid email address';
        isValid = false;
      }
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      const subjectText = formData.subject;
      const bodyText = formData.message;
      
      const subject = encodeURIComponent(subjectText);
      const body = encodeURIComponent(bodyText);
      
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ssrinidhi622@gmail.com&su=${subject}&body=${body}`;
      const mailtoLink = `mailto:ssrinidhi622@gmail.com?subject=${subject}&body=${body}`;

      setToastMessage('Opening Gmail...');

      // Try opening Gmail compose tab
      const newTab = window.open(gmailUrl, '_blank');
      
      // Fallback if popup is blocked or fails
      if (!newTab || newTab.closed || typeof newTab.closed === 'undefined') {
        const link = document.createElement('a');
        link.href = mailtoLink;
        link.click();
      }

      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setToastMessage(''), 4000);
    } catch (err) {
      console.error('Failed to redirect', err);
      setToastMessage('Error opening email client');
      setTimeout(() => setToastMessage(''), 4000);
    } finally {
      setLoading(false);
    }
  };

  const channels = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/srinidhi-n-a185652a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      label: 'Connect',
      icon: <Linkedin size={18} />,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/srinidhi9353',
      label: 'Follow',
      icon: <Github size={18} />,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/srini__.21?igsh=MTlxc3BkYzc1YTUxZw==',
      label: 'Follow',
      icon: <Instagram size={18} />,
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/919353170957',
      label: 'Chat',
      icon: <MessageCircle size={18} />,
    },
    {
      name: 'LeetCode',
      href: 'https://leetcode.com/xua0qxGkrF/',
      label: 'Profile',
      icon: (
        <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.98 10.02a1.37 1.37 0 0 0 0 1.94l4 4a1.37 1.37 0 0 0 1.94 0l10.019-10.02a1.374 1.374 0 0 0 0-1.94L14.442.414A1.37 1.37 0 0 0 13.483 0zm5.176 10.15a.5.5 0 0 1-.354-.146l-.854-.853a.5.5 0 0 1 .708-.708l.854.854a.5.5 0 0 1-.354.853zm-3 3a.5.5 0 0 1-.354-.146l-.854-.853a.5.5 0 0 1 .708-.708l.854.854a.5.5 0 0 1-.354.853zM5.854 18.854a.5.5 0 1 1-.708-.708l3.146-3.147a.5.5 0 0 1 .708.708l-3.146 3.147z" />
          <path d="M16.183 2.943a.5.5 0 0 0-.07.704C16.809 4.547 17 5.518 17 6.5c0 4.136-3.364 7.5-7.5 7.5a7.487 7.487 0 0 1-5.138-2.013.5.5 0 1 0-.68.735A8.487 8.487 0 0 0 9.5 15c4.687 0 8.5-3.813 8.5-8.5 0-1.115-.215-2.221-.62-3.235a.5.5 0 0 0-.697-.222z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-32 border-t border-white/5 bg-[#05070B] relative">
      
      {/* Toast Notification */}
      <div 
        className={`fixed top-8 right-8 z-50 px-6 py-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 text-white font-sans text-xs tracking-tight transition-all duration-500 shadow-2xl flex items-center gap-3 ${
          toastMessage ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#5D63FF] animate-pulse"></span>
        {toastMessage}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Direct info & channels */}
          <div className="lg:col-span-5 text-left">
            <span className="font-mono text-xs text-[#5D63FF] uppercase tracking-widest block mb-4">Contact</span>
            <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
              Let's Connect
            </h2>
            <p className="font-sans text-[#B4B4C7] font-light leading-relaxed mb-12 max-w-sm">
              I am always open to exploring full-time opportunities, creative collaborations, or engineering discussions. Feel free to reach out.
            </p>

            {/* Direct details */}
            <div className="flex flex-col gap-6 mb-12">
              <div className="flex items-center gap-4 text-[#B4B4C7] hover:text-white transition-colors duration-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Mail size={16} className="text-[#5D63FF]" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-white/40 block uppercase">Email</span>
                  <a href="mailto:ssrinidhi622@gmail.com" className="font-sans text-sm font-medium">
                    ssrinidhi622@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[#B4B4C7]">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Phone size={16} className="text-[#7B61FF]" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-white/40 block uppercase">Phone</span>
                  <span className="font-sans text-sm font-medium">+91 9353170957</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[#B4B4C7]">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin size={16} className="text-[#5D63FF]" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-white/40 block uppercase">Location</span>
                  <span className="font-sans text-sm font-medium">Bengaluru, India (Open to Remote)</span>
                </div>
              </div>
            </div>

            {/* Channels Grid */}
            <div className="flex flex-wrap gap-3">
              {channels.map((chan, idx) => (
                <a
                  key={idx}
                  href={chan.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] transition-all duration-300 text-white font-sans text-xs"
                >
                  {chan.icon}
                  <span>{chan.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6 p-8 md:p-10 rounded-3xl bg-white/[0.01] border border-white/5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col text-left">
                  <label htmlFor="name" className="font-mono text-[10px] uppercase text-white/40 mb-2.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`px-5 py-4 rounded-xl bg-white/[0.02] border text-white font-sans text-sm focus:outline-none focus:bg-white/[0.04] transition-all duration-300 ${
                      errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-[#5D63FF]'
                    }`}
                    placeholder="Enter name"
                  />
                  {errors.name && (
                    <span className="text-red-400 text-[10px] font-mono mt-1.5">{errors.name}</span>
                  )}
                </div>
                
                <div className="flex flex-col text-left">
                  <label htmlFor="email" className="font-mono text-[10px] uppercase text-white/40 mb-2.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`px-5 py-4 rounded-xl bg-white/[0.02] border text-white font-sans text-sm focus:outline-none focus:bg-white/[0.04] transition-all duration-300 ${
                      errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-[#5D63FF]'
                    }`}
                    placeholder="Enter email"
                  />
                  {errors.email && (
                    <span className="text-red-400 text-[10px] font-mono mt-1.5">{errors.email}</span>
                  )}
                </div>
              </div>

              {/* Subject Input */}
              <div className="flex flex-col text-left">
                <label htmlFor="subject" className="font-mono text-[10px] uppercase text-white/40 mb-2.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={`px-5 py-4 rounded-xl bg-white/[0.02] border text-white font-sans text-sm focus:outline-none focus:bg-white/[0.04] transition-all duration-300 ${
                    errors.subject ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-[#5D63FF]'
                  }`}
                  placeholder="What is this about?"
                />
                {errors.subject && (
                  <span className="text-red-400 text-[10px] font-mono mt-1.5">{errors.subject}</span>
                )}
              </div>

              <div className="flex flex-col text-left">
                <label htmlFor="message" className="font-mono text-[10px] uppercase text-white/40 mb-2.5">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`px-5 py-4 rounded-xl bg-white/[0.02] border text-white font-sans text-sm focus:outline-none focus:bg-white/[0.04] transition-all duration-300 resize-none ${
                    errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-[#5D63FF]'
                  }`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <span className="text-red-400 text-[10px] font-mono mt-1.5">{errors.message}</span>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 py-4 rounded-xl bg-[#5D63FF] hover:bg-[#4E54E5] text-white font-sans text-sm font-semibold tracking-tight transition-all duration-300 disabled:opacity-50 cursor-pointer"
              >
                {loading ? 'Opening...' : 'Send Message'}
                <Send size={14} />
              </button>

              <span className="font-sans text-[10px] text-white/30 text-center leading-normal">
                Submitting this form redirects you to Gmail with your pre-composed message details.
              </span>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
