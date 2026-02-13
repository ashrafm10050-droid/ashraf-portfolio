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
  FileText
} from 'lucide-react';
 // Personal Information
const PERSONAL_EMAIL = "ashrafm10050@gmail.com";
const PERSONAL_PHONE = "01099078502";
const LINKEDIN_URL = "#"; 
const GITHUB_URL = "https://github.com/ashrafm10050-droid";
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
        {/* Introduction */}
        <div className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 mb-2">Introduction</h3>
          <p>
            This chapter provides an overview of electrical power systems, focusing on the structure of power stations, 
            key load concepts, and important factors used in power engineering. It covers generation, transmission, 
            and distribution, along with metrics like load factors and capacity factors.
          </p>
        </div>

        {/* 1. Structure */}
        <section>
          <h3 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2 flex items-center gap-2">
            <span className="bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
            Power System Structure
          </h3>
          <p className="mb-4">Electrical power systems consist of three main operational stages:</p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: 'Generation', desc: 'Converting mechanical energy (turbines) into electrical energy via thermal, hydro, or nuclear plants.' },
              { title: 'Transmission', desc: 'Moving power over long distances at high voltages (110 kV - 765 kV) to minimize I²R losses.' },
              { title: 'Distribution', desc: 'Stepping down voltage (e.g., 11 kV to 220 V) via transformers for safe delivery to consumers.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                <strong className="block text-blue-700 mb-2">{item.title}</strong>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Load Concepts */}
        <section>
          <h3 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2 flex items-center gap-2">
            <span className="bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
            Load Concepts
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <strong className="text-slate-900 block mb-1">Maximum Load</strong> 
              The highest power demand during a given period. Determines peak capacity needed.
            </li>
            <li className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <strong className="text-slate-900 block mb-1">Average Load</strong> 
              Total energy consumed divided by time. <br/>
              <code className="text-xs bg-slate-200 px-1 py-0.5 rounded text-slate-600">Avg Load = Energy / Time</code>
            </li>
            <li className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <strong className="text-slate-900 block mb-1">Load Curve</strong> 
              Graph plotting power against time. Area under curve = Total Energy.
            </li>
            <li className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <strong className="text-slate-900 block mb-1">Load Duration Curve</strong> 
              Loads arranged in descending order to show duration of operation at specific levels.
            </li>
          </ul>
        </section>

        {/* 3. Factors */}
        <section>
          <h3 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2 flex items-center gap-2">
             <span className="bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
            Important Factors & Formulas
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-slate-600 border rounded-lg bg-white shadow-sm">
              <thead className="bg-slate-100 text-slate-900 uppercase">
                <tr>
                  <th className="px-4 py-3">Factor</th>
                  <th className="px-4 py-3">Formula / Definition</th>
                  <th className="px-4 py-3 hidden md:table-cell">Insight</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 font-bold text-blue-800">Demand Factor</td>
                  <td className="px-4 py-3 font-mono">Max Demand / Connected Load</td>
                  <td className="px-4 py-3 hidden md:table-cell">Always &lt; 1. Fraction of connected load used at peak.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-blue-800">Load Factor</td>
                  <td className="px-4 py-3 font-mono">Average Load / Max Load</td>
                  <td className="px-4 py-3 hidden md:table-cell">Higher factor (closer to 1) = better efficiency.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-blue-800">Diversity Factor</td>
                  <td className="px-4 py-3 font-mono">Σ Indiv. Max / System Max</td>
                  <td className="px-4 py-3 hidden md:table-cell">Always &gt; 1. Accounts for non-simultaneous peaks.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-blue-800">Plant Capacity Factor</td>
                  <td className="px-4 py-3 font-mono">Actual Energy / (Capacity × Time)</td>
                  <td className="px-4 py-3 hidden md:table-cell">Efficiency of capacity usage over a period.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-blue-800">Plant Use Factor</td>
                  <td className="px-4 py-3 font-mono">Actual Energy / (Capacity × Ops Hours)</td>
                  <td className="px-4 py-3 hidden md:table-cell">Focuses on actual operational hours.</td>
                </tr>
                 <tr>
                  <td className="px-4 py-3 font-bold text-blue-800">Reserve Capacity</td>
                  <td className="px-4 py-3 font-mono">Installed Capacity - Max Demand</td>
                  <td className="px-4 py-3 hidden md:table-cell">Extra capacity for emergencies.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Solved Examples */}
        <section>
          <h3 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2 flex items-center gap-2">
             <span className="bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
            Solved Examples
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { title: 'Ex 1: Demand Factor', content: 'Max Demand: 500 MW, Connected: 800 MW.\nDemand Factor = 500 / 800 = 0.625 (62.5%)' },
              { title: 'Ex 2: Load Factor', content: 'Energy: 7200 MWh (24h), Max Load: 500 MW.\nAvg Load = 7200/24 = 300 MW.\nLoad Factor = 300/500 = 0.6' },
              { title: 'Ex 3: Reserve Capacity', content: 'Installed: 600 MW, Max Demand: 500 MW.\nReserve = 600 - 500 = 100 MW' },
              { title: 'Ex 4: Capacity Factor', content: 'Energy: 7200 MWh, Cap: 600 MW, Time: 24h.\nFactor = 7200 / (600 × 24) = 0.5' }
            ].map((ex, i) => (
              <div key={i} className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                <h4 className="font-bold text-amber-800 mb-2">{ex.title}</h4>
                <pre className="text-sm font-sans whitespace-pre-wrap text-slate-700 leading-relaxed">{ex.content}</pre>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Practice Problems */}
        <section>
          <h3 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2 flex items-center gap-2">
             <span className="bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">5</span>
            Exam Practice Problems
          </h3>
          <div className="space-y-3">
            {[
              { q: 'System connected load 1000 kW, max demand 700 kW. Calculate Demand Factor.', a: '0.7 (70% of connected load demanded at peak)' },
              { q: 'Energy generated in 10h = 4000 kWh, max load 600 kW. Calculate Avg Load and Load Factor.', a: 'Avg Load = 400 kW. Load Factor = 0.667' },
              { q: 'Installed capacity 900 MW, actual output 600 MW. Calculate Reserve Capacity.', a: '300 MW (Assuming output = max demand)' },
              { q: 'Individual max demands: 200, 300, 400 kW. System max: 700 kW. Calculate Diversity Factor.', a: 'Sum = 900 kW. Diversity Factor = 900/700 ≈ 1.286' }
            ].map((prob, i) => (
              <div key={i} className="flex gap-4 p-4 bg-white border border-slate-200 rounded-lg group hover:shadow-md transition-all">
                <div className="bg-slate-100 text-slate-500 font-bold w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-slate-200">Q{i+1}</div>
                <div className="flex-1">
                  <p className="font-medium text-slate-900 mb-2">{prob.q}</p>
                  <div className="text-emerald-700 bg-emerald-50 p-2 rounded text-sm font-medium inline-block">
                     Answer: <span className="font-normal text-emerald-900">{prob.a}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mind Map */}
        <section>
          <h3 className="text-lg font-bold text-slate-900 mb-2 border-t pt-4">Chapter Mind Map</h3>
          <div className="bg-slate-900 text-green-400 p-6 rounded-xl font-mono text-xs md:text-sm overflow-x-auto shadow-inner">
<pre>{`Power Station
├── Generation (Mechanical -> Electrical)
├── Transmission (High Voltage)
├── Distribution (Low Voltage)
├── Load Concepts (Max, Avg, Curves)
└── Factors
    ├── Demand Factor (< 1)
    ├── Load Factor (Avg / Max)
    ├── Diversity Factor (> 1)
    ├── Capacity Factor
    └── Reserve Capacity`}</pre>
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
    summary: 'Analysis of analog circuit behaviors and amplifier design principles (Placeholder for future content).',
    content: <p>Content coming soon...</p>
  },
  {
    id: 'placeholder-2',
    title: 'Signal Processing Algorithms',
    category: 'Communications',
    date: 'Upcoming',
    summary: 'Study of digital signal processing techniques and filter implementation (Placeholder for future content).',
    content: <p>Content coming soon...</p>
  }
];

// --- Components ---

const Hero = ({ onNavigate }: { onNavigate: (s: SectionType) => void }) => (
  <div className="relative bg-slate-900 text-white overflow-hidden min-h-[500px] flex items-center">
    {/* Abstract Background Shapes */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 text-amber-400 font-semibold tracking-wider uppercase text-sm mb-4">
          <Zap size={16} />
          <span>Electrical Engineering & Communications</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Ashraf Mohamed Rizk
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
          Third-year student at the Higher Institute of Electronic Engineering in Belbeis. 
          Dedication to academic excellence and professional development.
        </p>
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => onNavigate('portfolio')}
            className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 flex items-center gap-2"
          >
            View Academic Portfolio <ChevronRight size={20} />
          </button>
          <button 
            onClick={() => onNavigate('contact')}
            className="border-2 border-slate-600 hover:border-white text-white font-medium py-3 px-8 rounded-full transition-all"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="container mx-auto px-6 py-16">
    <div className="flex flex-col md:flex-row gap-12 items-start">
      <div className="md:w-1/3">
        <div className="bg-slate-100 p-8 rounded-2xl border-l-8 border-amber-500 shadow-sm">
          <GraduationCap size={48} className="text-slate-700 mb-4" />
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Education</h3>
          <p className="text-slate-600 font-medium">Higher Institute of Electronic Engineering</p>
          <p className="text-slate-500 text-sm">Belbeis</p>
          <div className="mt-6 border-t pt-4">
            <p className="text-slate-900 font-semibold">Department</p>
            <p className="text-slate-600">Electrical Engineering</p>
            <p className="text-slate-500 text-sm">Electronic Communications Division</p>
          </div>
        </div>
      </div>
      <div className="md:w-2/3">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Professional Statement</h2>
        <div className="prose prose-lg text-slate-600 leading-relaxed">
          <p className="mb-4">
            I am driven by a deep sense of satisfaction and appreciation for the academic journey I am undertaking. 
            As a student in the Electronic Communications Division, I am committed to leveraging every opportunity 
            to develop myself both academically and professionally.
          </p>
          <p className="mb-4">
            My goal is to cultivate a well-organized academic portfolio that professionally reflects my educational journey. 
            I believe in the power of dedication, logical thinking, and systematic organization—principles I apply 
            strictly to my studies in power systems, circuit theory, and telecommunications.
          </p>
          <p>
            This portfolio serves as a pivotal step in supporting my ambitions, showcasing work that aligns with 
            rigorous academic standards and demonstrates my readiness for the professional engineering landscape.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const PortfolioList = ({ onItemClick }: { onItemClick: (item: PortfolioItem) => void }) => (
  <div className="container mx-auto px-6 py-16 bg-slate-50">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Academic Projects & Notes</h2>
      <p className="text-slate-600 max-w-2xl mx-auto">
        A curated collection of my study notes, technical analyses, and solved engineering problems.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolioData.map((item) => (
        <div 
          key={item.id}
          onClick={() => onItemClick(item)}
          className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group border border-slate-100 overflow-hidden"
        >
          <div className="h-2 bg-gradient-to-r from-blue-600 to-amber-500 group-hover:h-3 transition-all" />
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                {item.category}
              </span>
              <BookOpen size={20} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
              {item.title}
            </h3>
            <p className="text-slate-500 text-sm mb-4">{item.date}</p>
            <p className="text-slate-600 line-clamp-3">
              {item.summary}
            </p>
            <div className="mt-6 flex items-center text-amber-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
              Read Document <ChevronRight size={16} className="ml-1" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const DocumentViewer = ({ item, onBack }: { item: PortfolioItem, onBack: () => void }) => (
  <div className="container mx-auto px-6 py-12 min-h-screen">
    <button 
      onClick={onBack}
      className="flex items-center text-slate-500 hover:text-blue-600 transition-colors mb-8 group"
    >
      <ChevronRight className="rotate-180 mr-1 group-hover:-translate-x-1 transition-transform" size={20} />
      Back to Portfolio
    </button>
    
    <article className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
      <div className="bg-slate-900 p-8 md:p-12 text-white relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-3 text-amber-400 font-medium mb-4">
            <Activity size={18} />
            {item.category}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{item.title}</h1>
          <p className="text-slate-300">{item.date} • Prepared by Ashraf Rizk</p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10">
           <Cpu size={250} />
        </div>
      </div>
      
      <div className="p-8 md:p-12">
        {item.content}
      </div>
    </article>
  </div>
);

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h4 className="text-white text-xl font-bold mb-2">Ashraf Mohamed Rizk</h4>
          <p className="text-sm">Electronic Engineering Student</p>
          <p className="text-sm text-slate-400 mt-2">📞 01099078502</p>
        </div>
        <div className="flex gap-6">
          {/* البريد */}
          <a href="mailto:ashrafm10050@gmail.com" className="hover:text-amber-400 transition-colors" title="Email">
            <Mail size={24} />
          </a>
          <a href="#" className="hover:text-amber-400 transition-colors" title="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href="#" className="hover:text-amber-400 transition-colors" title="GitHub">
            <Github size={24} />
          </a>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Academic Portfolio. All rights reserved.
      </div>
    </div>
  </footer>
);

// --- Main App Component ---

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionType>('home');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (section: SectionType) => {
    setActiveSection(section);
    setSelectedItem(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div 
              className="font-bold text-xl text-slate-900 flex items-center gap-2 cursor-pointer"
              onClick={() => handleNav('home')}
            >
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-amber-400">
                <span className="font-bold text-lg">A</span>
              </div>
              Ashraf Rizk
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-8 font-medium text-slate-600">
              <button onClick={() => handleNav('home')} className={`hover:text-blue-600 transition-colors ${activeSection === 'home' ? 'text-blue-600' : ''}`}>Home</button>
              <button onClick={() => handleNav('about')} className={`hover:text-blue-600 transition-colors ${activeSection === 'about' ? 'text-blue-600' : ''}`}>About</button>
              <button onClick={() => handleNav('portfolio')} className={`hover:text-blue-600 transition-colors ${activeSection === 'portfolio' ? 'text-blue-600' : ''}`}>Portfolio</button>
              <button onClick={() => handleNav('contact')} className={`hover:text-blue-600 transition-colors ${activeSection === 'contact' ? 'text-blue-600' : ''}`}>Contact</button>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 p-4 shadow-lg absolute w-full">
            <div className="flex flex-col gap-4">
              <button onClick={() => handleNav('home')} className="text-left px-4 py-2 hover:bg-slate-50 rounded">Home</button>
              <button onClick={() => handleNav('about')} className="text-left px-4 py-2 hover:bg-slate-50 rounded">About</button>
              <button onClick={() => handleNav('portfolio')} className="text-left px-4 py-2 hover:bg-slate-50 rounded">Portfolio</button>
              <button onClick={() => handleNav('contact')} className="text-left px-4 py-2 hover:bg-slate-50 rounded">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main>
        {selectedItem ? (
          <DocumentViewer item={selectedItem} onBack={() => setSelectedItem(null)} />
        ) : (
          <>
            {activeSection === 'home' && (
              <>
                <Hero onNavigate={handleNav} />
                <div className="py-12 bg-white">
                  <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between mb-8 border-b pb-4">
                      <h2 className="text-2xl font-bold">Featured Work</h2>
                      <button onClick={() => handleNav('portfolio')} className="text-blue-600 font-semibold hover:underline">View All</button>
                    </div>
                    {/* Featured Item Preview */}
                    <div 
                      onClick={() => handleItemClick(portfolioData[0])}
                      className="group cursor-pointer bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-all items-center"
                    >
                      <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                        <Zap size={32} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">Power Stations & Electrical Systems</h3>
                        <p className="text-slate-600">An in-depth analysis of generation, transmission, and load factors in power engineering.</p>
                      </div>
                      <ChevronRight className="text-slate-300 group-hover:text-amber-500 transition-colors" size={24} />
                    </div>
                  </div>
                </div>
                <About /> 
              </>
            )}

            {activeSection === 'about' && <About />}
            
            {activeSection === 'portfolio' && <PortfolioList onItemClick={handleItemClick} />}
            
           {activeSection === 'contact' && (
  <div className="container mx-auto px-6 py-20 min-h-[60vh] flex flex-col items-center justify-center text-center">
    <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-6">
      <Mail size={40} />
    </div>
    <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
    <p className="text-slate-600 max-w-lg mb-8">
      I am currently open to academic collaborations and professional opportunities. 
      Feel free to reach out via email or phone for any inquiries.
    </p>
    {/* كدة البريد */}
    <a href="mailto:ashrafm10050@gmail.com" className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors mb-4 inline-block">
      Send Email
    </a>
    {/* وكدة رقم التليفون */}
    <p className="text-slate-600">
      <span className="font-semibold">Phone:</span> 01099078502
    </p>
  </div>
)}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
