import React, { useState } from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  Award, 
  Mail, 
  ChevronRight, 
  Zap, 
  Cpu, 
  Activity, 
  Menu, 
  X,
  Linkedin,
  Github,
  FileText,
  Phone
} from 'lucide-react';

// --- Types & Data ---

type SectionType = 'home' | 'portfolio' | 'about' | 'contact';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  content?: React.ReactNode;
}

const portfolioData: PortfolioItem[] = [
  {
    id: 'power-systems-ch1',
    title: 'Chapter 1: Power Stations – Electrical Power Systems',
    category: 'Electrical Engineering',
    date: '2023 - Academic Note',
    summary: 'Overview of electrical power systems, generation, transmission, distribution, load concepts, and key performance factors with solved problems.',
    content: (
      <div className="space-y-8 text-slate-700 leading-relaxed">
        <div className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 mb-2">Introduction</h3>
          <p>
            This chapter provides an overview of electrical power systems, focusing on the structure of power stations, 
            key load concepts, and important factors used in power engineering.
          </p>
        </div>

        <section>
          <h3 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2 flex items-center gap-2">
            <span className="bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
            Power System Structure
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: 'Generation', desc: 'Converting mechanical energy into electrical energy.' },
              { title: 'Transmission', desc: 'Moving power over long distances at high voltages.' },
              { title: 'Distribution', desc: 'Stepping down voltage for safe delivery to consumers.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                <strong className="block text-blue-700 mb-2">{item.title}</strong>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    )
  },
  {
    id: 'placeholder-1',
    title: 'Electronic Circuits & Design',
    category: 'Electronics',
    date: 'Upcoming',
    summary: 'Analysis of analog circuit behaviors and amplifier design principles.',
    content: <p>Content coming soon...</p>
  }
];

// --- Main App Component ---

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionType>('home');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderSection = () => {
    if (selectedItem) {
      return (
        <div className="container mx-auto px-6 py-12">
          <button 
            onClick={() => setSelectedItem(null)}
            className="mb-8 flex items-center text-blue-600 font-medium"
          >
            <ChevronRight className="rotate-180 mr-2" size={20} /> Back to Portfolio
          </button>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h1 className="text-3xl font-bold mb-4">{selectedItem.title}</h1>
            {selectedItem.content}
          </div>
        </div>
      );
    }

    switch (activeSection) {
      case 'home':
        return (
          <div className="bg-slate-900 text-white py-20 px-6 text-center">
            <h1 className="text-5xl font-bold mb-6">Ashraf Mohamed Rizk</h1>
            <p className="text-xl text-slate-300 mb-8">Electrical Engineering Student @ Belbeis Institute</p>
            <button 
              onClick={() => setActiveSection('portfolio')}
              className="bg-amber-500 text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-amber-400 transition-all"
            >
              View My Work
            </button>
          </div>
        );
      case 'portfolio':
        return (
          <div className="container mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold mb-12 text-center">Academic Portfolio</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData.map((item) => (
                <div 
                  key={item.id} 
                  onClick={() => setSelectedItem(item)}
                  className="bg-white p-6 rounded-xl shadow-md cursor-pointer border hover:border-blue-500 transition-all"
                >
                  <span className="text-xs font-bold text-blue-600 uppercase">{item.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-4">{item.title}</h3>
                  <p className="text-slate-600 text-sm line-clamp-3">{item.summary}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="container mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <div className="flex justify-center gap-6">
              <a href="#" className="p-4 bg-slate-100 rounded-full hover:bg-blue-100 transition-all"><Linkedin /></a>
              <a href="#" className="p-4 bg-slate-100 rounded-full hover:bg-blue-100 transition-all"><Mail /></a>
              <a href="#" className="p-4 bg-slate-100 rounded-full hover:bg-blue-100 transition-all"><Phone /></a>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight">ASHRAF<span className="text-blue-600">.ENG</span></div>
          <div className="hidden md:flex gap-8 font-medium">
            <button onClick={() => {setActiveSection('home'); setSelectedItem(null)}} className="hover:text-blue-600">Home</button>
            <button onClick={() => {setActiveSection('portfolio'); setSelectedItem(null)}} className="hover:text-blue-600">Portfolio</button>
            <button onClick={() => {setActiveSection('contact'); setSelectedItem(null)}} className="hover:text-blue-600">Contact</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{renderSection()}</main>

      {/* Footer */}
      <footer className="bg-white border-t py-8 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Ashraf Mohamed Rizk. All rights reserved.</p>
      </footer>
    </div>
  );
}
