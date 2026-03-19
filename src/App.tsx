/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Briefcase, 
  GraduationCap, 
  Wrench, 
  User, 
  Mail, 
  Moon, 
  Sun,
  ChevronRight,
  ExternalLink,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for merging tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-2xl font-bold mb-6 text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-4"
  >
    {children}
  </motion.h2>
);

interface CardProps {
  children: React.ReactNode;
  className?: string;
  key?: React.Key;
}

const Card = ({ children, className }: CardProps) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className={cn(
      "bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border border-slate-100 dark:border-slate-800 transition-all",
      className
    )}
  >
    {children}
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Section tracking
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['home', 'experience', 'education', 'skills', 'about', 'contact'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: 'home', label: 'হোম', icon: Home },
    { id: 'experience', label: 'এক্সপেরিয়েন্স', icon: Briefcase },
    { id: 'education', label: 'শিক্ষা', icon: GraduationCap },
    { id: 'skills', label: 'দক্ষতা', icon: Wrench },
    { id: 'about', label: 'সম্পর্কে', icon: User },
    { id: 'contact', label: 'যোগাযোগ', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-24 transition-colors duration-300">
      
      {/* --- Header --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200 h-16 flex items-center justify-center px-6">
        <h1 className="text-xl font-bold tracking-tight text-slate-900">
          মীর রাব্বি হোসেন
        </h1>
      </header>

      {/* --- Main Content --- */}
      <main className="max-w-2xl mx-auto px-6 pt-24 space-y-20">
        
        {/* Home Section */}
        <section id="home" className="flex flex-col items-center text-center py-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 bg-emerald-500 blur-2xl opacity-20 rounded-full" />
            <img 
              src="https://i.ibb.co/HTdwrmF9/20260320-034028.png" 
              alt="প্রোফাইল ইমেজ" 
              className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-extrabold mb-4 leading-tight"
          >
            স্বাগতম মীর রাব্বি হোসেন এর পোর্টফলিওতে!
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-slate-600 max-w-md leading-relaxed"
          >
            আমি একজন প্যাশনেট ওয়েব ডেভেলপার। আমি নতুন প্রযুক্তি শিখতে এবং তা দিয়ে সুন্দর ও কার্যকরী ডিজিটাল অভিজ্ঞতা তৈরি করতে ভালোবাসি।
          </motion.p>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-24">
          <SectionHeading>এক্সপেরিয়েন্স</SectionHeading>
          <div className="space-y-4">
            <Card>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">সিনিয়র ওয়েব ডেভেলপার</h3>
                <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full">২০২২ - বর্তমান</span>
              </div>
              <p className="text-sm text-slate-500 mb-4">টেক সলিউশনস লিমিটেড</p>
              <ul className="text-sm space-y-2 text-slate-600 list-disc pl-4">
                <li>আধুনিক রিঅ্যাক্ট অ্যাপ্লিকেশন ডেভেলপমেন্ট এবং মেইনটেন্যান্স।</li>
                <li>টিম লিড হিসেবে প্রজেক্ট ম্যানেজমেন্ট এবং কোড রিভিউ।</li>
                <li>ইউজার ইন্টারফেস অপ্টিমাইজেশন এবং পারফরম্যান্স ইমপ্রুভমেন্ট।</li>
              </ul>
            </Card>
            <Card>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">জুনিয়র ডেভেলপার</h3>
                <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full">২০২০ - ২০২২</span>
              </div>
              <p className="text-sm text-slate-500 mb-4">সফটওয়্যার হাব</p>
              <p className="text-sm text-slate-600">
                ফ্রন্টএন্ড ডেভেলপমেন্ট এবং এপিআই ইন্টিগ্রেশনে কাজ করেছি। বিভিন্ন ক্লায়েন্ট প্রজেক্টে এইচটিএমএল, সিএসএস এবং জাভাস্ক্রিপ্ট ব্যবহার করে রেসপন্সিভ ডিজাইন তৈরি করেছি।
              </p>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-24">
          <SectionHeading>শিক্ষাগত যোগ্যতা</SectionHeading>
          <div className="space-y-4">
            <Card className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="font-bold">কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (B.Sc)</h3>
                <p className="text-sm text-slate-500">ঢাকা বিশ্ববিদ্যালয়</p>
                <p className="text-xs text-slate-400 mt-1">২০১৬ - ২০২০</p>
              </div>
            </Card>
            <Card className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="font-bold">উচ্চ মাধ্যমিক (HSC)</h3>
                <p className="text-sm text-slate-500">নটর ডেম কলেজ, ঢাকা</p>
                <p className="text-xs text-slate-400 mt-1">২০১৪ - ২০১৬</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-24">
          <SectionHeading>অন্যান্য দক্ষতা</SectionHeading>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'React.js', level: '৯০%' },
              { name: 'Next.js', level: '৮৫%' },
              { name: 'Tailwind CSS', level: '৯৫%' },
              { name: 'TypeScript', level: '৮০%' },
              { name: 'Node.js', level: '৭৫%' },
              { name: 'Firebase', level: '৭০%' },
            ].map((skill, index) => (
              <Card key={index} className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-sm">{skill.name}</span>
                  <span className="text-xs text-emerald-500 font-bold">{skill.level}</span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level.replace('%', '') + '%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-emerald-500 h-full rounded-full"
                  />
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-24">
          <SectionHeading>আমার সম্পর্কে</SectionHeading>
          <Card>
            <p className="text-slate-600 leading-relaxed">
              আমি মীর রাব্বি হোসেন, একজন প্রযুক্তি প্রেমী মানুষ। ছোটবেলা থেকেই কম্পিউটারের প্রতি আমার অন্যরকম আকর্ষণ ছিল। সেই আকর্ষণ থেকেই আজ আমি একজন ওয়েব ডেভেলপার। আমি বিশ্বাস করি, প্রযুক্তি মানুষের জীবনকে সহজ করতে পারে এবং আমি সেই লক্ষ্যেই কাজ করে যাচ্ছি। কাজের বাইরে আমি বই পড়তে এবং ভ্রমণ করতে পছন্দ করি।
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="p-2 bg-slate-100 rounded-lg hover:text-emerald-500 transition-colors"><Github size={20} /></a>
              <a href="#" className="p-2 bg-slate-100 rounded-lg hover:text-emerald-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="p-2 bg-slate-100 rounded-lg hover:text-emerald-500 transition-colors"><Twitter size={20} /></a>
            </div>
          </Card>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24">
          <SectionHeading>যোগাযোগ</SectionHeading>
          <div className="space-y-4">
            <Card className="flex items-center gap-4">
              <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400">ইমেইল</p>
                <p className="font-medium">Mrhrabby24@gmail.com</p>
              </div>
            </Card>
            <Card className="flex items-center gap-4">
              <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400">ফোন</p>
                <p className="font-medium">+৮৮০ ১২৩৪৫৬৭৮৯০</p>
              </div>
            </Card>
            <Card className="flex items-center gap-4">
              <div className="p-3 bg-red-100 text-red-600 rounded-xl">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400">ঠিকানা</p>
                <p className="font-medium">ঢাকা, বাংলাদেশ</p>
              </div>
            </Card>
          </div>
        </section>

      </main>

      {/* --- Bottom Navigation --- */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-2xl border-t border-slate-200 px-4 py-2 pb-safe">
        <div className="max-w-md mx-auto flex justify-between items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <a 
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-all relative",
                  isActive ? "text-emerald-500" : "text-slate-400 hover:text-slate-600"
                )}
              >
                {isActive && (
                  <motion.div 
                    layoutId="nav-bg"
                    className="absolute inset-0 bg-emerald-50 rounded-xl -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 z-[60] origin-left"
        style={{ scaleX: useScrollProgress() }}
      />
    </div>
  );
}

// --- Hooks ---

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setProgress(currentScroll / totalHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}
