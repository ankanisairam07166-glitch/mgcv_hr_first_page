// // /**
// //  * @license
// //  * SPDX-License-Identifier: Apache-2.0
// //  */

// // import React, { useState, useEffect } from 'react';
// // import { GoogleGenAI, Type } from "@google/genai";
// // import { 
// //   LayoutDashboard, 
// //   Users, 
// //   Calendar, 
// //   FileText, 
// //   BarChart3, 
// //   LogOut, 
// //   Plus, 
// //   Search, 
// //   Bell, 
// //   RefreshCcw,
// //   ChevronDown,
// //   CheckCircle2,
// //   Brain,
// //   Zap,
// //   ShieldCheck,
// //   ArrowRight,
// //   Menu,
// //   X,
// //   Briefcase,
// //   UserPlus,
// //   Target,
// //   Layers,
// //   Sparkles,
// //   Download,
// //   Loader2
// // } from 'lucide-react';
// // import { motion, AnimatePresence } from 'motion/react';
// // import { 
// //   BarChart, 
// //   Bar, 
// //   XAxis, 
// //   YAxis, 
// //   CartesianGrid, 
// //   Tooltip, 
// //   ResponsiveContainer,
// //   LineChart,
// //   Line
// // } from 'recharts';
// // import { cn } from './lib/utils';

// // // --- Mock Data ---
// // const pipelineData = [
// //   { name: 'Applied', value: 14, fill: '#3b82f6' },
// //   { name: 'Interview', value: 13, fill: '#10b981' },
// //   { name: 'Offer', value: 6, fill: '#f59e0b' },
// // ];

// // const activityData = [
// //   { day: 'Mon', count: 4 },
// //   { day: 'Tue', count: 7 },
// //   { day: 'Wed', count: 5 },
// //   { day: 'Thu', count: 9 },
// //   { day: 'Fri', count: 12 },
// //   { day: 'Sat', count: 3 },
// //   { day: 'Sun', count: 2 },
// // ];

// // // --- Components ---

// // const Navbar = ({ onNavigate, currentView }: { onNavigate: (view: string) => void, currentView: string }) => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   return (
// //     <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between h-16 items-center">
// //           <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('landing')}>
// //             <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
// //               <Brain className="text-white w-5 h-5" />
// //             </div>
// //             <div className="flex flex-col">
// //               <span className="text-xl font-display font-bold text-slate-900 leading-none">TalentFlow AI</span>
// //               <span className="text-[10px] font-bold text-indigo-600 tracking-widest uppercase mt-1">By MG³ Verse</span>
// //             </div>
// //           </div>

// //           {/* Desktop Nav - Removed as requested */}
// //           <div className="hidden md:flex items-center gap-8">
// //           </div>

// //           <div className="hidden md:flex items-center gap-4">
// //             {currentView === 'dashboard' && (
// //               <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors ml-4">
// //                 <LogOut className="w-4 h-4" />
// //                 Logout
// //               </button>
// //             )}
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <div className="md:hidden">
// //             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">
// //               {isMenuOpen ? <X /> : <Menu />}
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Nav */}
// //       <AnimatePresence>
// //         {isMenuOpen && (
// //           <motion.div 
// //             initial={{ opacity: 0, height: 0 }}
// //             animate={{ opacity: 1, height: 'auto' }}
// //             exit={{ opacity: 0, height: 0 }}
// //             className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
// //           >
// //             <div className="px-4 pt-2 pb-6 space-y-2">
// //               {currentView === 'dashboard' ? (
// //                 <button 
// //                   onClick={() => { onNavigate('landing'); setIsMenuOpen(false); }} 
// //                   className="flex items-center gap-2 w-full px-3 py-2 text-base font-medium text-red-600 hover:bg-red-50 rounded-md"
// //                 >
// //                   <LogOut className="w-4 h-4" />
// //                   Logout
// //                 </button>
// //               ) : (
// //                 <button 
// //                   onClick={() => { onNavigate('dashboard'); setIsMenuOpen(false); }} 
// //                   className="block w-full text-left px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
// //                 >
// //                   Go to Dashboard
// //                 </button>
// //               )}
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </nav>
// //   );
// // };

// // const DemoModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
// //   const [currentStep, setCurrentStep] = useState(0);
// //   const steps = [
// //     {
// //       title: "01. Intelligent Sourcing",
// //       description: "Our system autonomously scrapes and parses resumes from MGCV_Clone and global talent pools, extracting deep technical stacks and experience data instantly.",
// //       icon: <RefreshCcw className="w-12 h-12 text-indigo-600" />,
// //       image: "https://picsum.photos/seed/sourcing/800/450"
// //     },
// //     {
// //       title: "02. 5D AI Analysis",
// //       description: "Proprietary LLM-driven analysis utilizing advanced agent frameworks and LangGraph orchestration. This multi-agent system scores candidates against complex JD requirements with 98% precision, ensuring deep technical and behavioral alignment.",
// //       icon: <Brain className="w-12 h-12 text-purple-600" />,
// //       image: "https://picsum.photos/seed/analysis/800/450"
// //     },
// //     {
// //       title: "03. Automated Assessments",
// //       description: "AI-generated technical exams are distributed via Testlify, with real-time monitoring and automated results processing to qualify top-tier talent.",
// //       icon: <FileText className="w-12 h-12 text-emerald-600" />,
// //       image: "https://picsum.photos/seed/assessment/800/450"
// //     },
// //     {
// //       title: "04. AI Avatar Screening",
// //       description: "Scalable first-round interviews conducted by HeyGen AI Avatars, providing consistent screening with live transcription and sentiment analysis.",
// //       icon: <Users className="w-12 h-12 text-blue-600" />,
// //       image: "https://picsum.photos/seed/avatar/800/450"
// //     },
// //     {
// //       title: "05. Data-Driven Selection",
// //       description: "A unified dashboard provides multi-dimensional reports and transparency for the entire hiring team, ensuring the final selection is backed by data.",
// //       icon: <LayoutDashboard className="w-12 h-12 text-slate-900" />,
// //       image: "https://picsum.photos/seed/selection/800/450"
// //     }
// //   ];

// //   if (!isOpen) return null;

// //   return (
// //     <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
// //       <motion.div 
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         exit={{ opacity: 0 }}
// //         onClick={onClose}
// //         className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
// //       />
// //       <motion.div 
// //         initial={{ opacity: 0, scale: 0.9, y: 20 }}
// //         animate={{ opacity: 1, scale: 1, y: 0 }}
// //         exit={{ opacity: 0, scale: 0.9, y: 20 }}
// //         className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row h-[80vh] md:h-auto max-h-[90vh]"
// //       >
// //         <button 
// //           onClick={onClose}
// //           className="absolute top-6 right-6 z-10 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
// //         >
// //           <X className="w-5 h-5 text-slate-600" />
// //         </button>

// //         <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
// //           <div className="mb-8">
// //             {steps[currentStep].icon}
// //           </div>
// //           <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">
// //             {steps[currentStep].title}
// //           </h3>
// //           <p className="text-slate-600 text-lg leading-relaxed mb-8">
// //             {steps[currentStep].description}
// //           </p>
          
// //           <div className="flex items-center gap-4 mt-auto">
// //             <button 
// //               disabled={currentStep === 0}
// //               onClick={() => setCurrentStep(prev => prev - 1)}
// //               className="p-3 rounded-xl border border-slate-200 disabled:opacity-30 hover:bg-slate-50 transition-colors"
// //             >
// //               <ArrowRight className="w-5 h-5 rotate-180" />
// //             </button>
// //             <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
// //               <div 
// //                 className="h-full bg-indigo-600 transition-all duration-500" 
// //                 style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
// //               />
// //             </div>
// //             <button 
// //               onClick={() => {
// //                 if (currentStep === steps.length - 1) {
// //                   onClose();
// //                 } else {
// //                   setCurrentStep(prev => prev + 1);
// //                 }
// //               }}
// //               className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors flex items-center gap-2"
// //             >
// //               {currentStep === steps.length - 1 ? "Finish" : "Next"}
// //               <ArrowRight className="w-4 h-4" />
// //             </button>
// //           </div>
// //         </div>

// //         <div className="md:w-1/2 bg-slate-50 relative overflow-hidden hidden md:block">
// //           <AnimatePresence mode="wait">
// //             <motion.img
// //               key={currentStep}
// //               initial={{ opacity: 0, x: 20 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               exit={{ opacity: 0, x: -20 }}
// //               src={steps[currentStep].image}
// //               alt={steps[currentStep].title}
// //               className="absolute inset-0 w-full h-full object-cover"
// //               referrerPolicy="no-referrer"
// //             />
// //           </AnimatePresence>
// //           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
// //         </div>
// //       </motion.div>
// //     </div>
// //   );
// // };

// // // --- AI Job Posting Generator Component ---
// // const JobPostingGenerator = () => {
// //   const [input, setInput] = useState('');
// //   const [isGenerating, setIsGenerating] = useState(false);
// //   const [generatedJD, setGeneratedJD] = useState<any>(null);

// //   const generateJD = async () => {
// //     if (!input.trim()) return;
    
// //     setIsGenerating(true);
// //     try {
// //       const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
// //       const response = await ai.models.generateContent({
// //         model: "gemini-3-flash-preview",
// //         contents: `Generate a professional job description for the following position: ${input}. 
// //         Include a brief description, a list of responsibilities, and a list of required skills and requirements. 
// //         Also provide 3-4 short skill tags.`,
// //         config: {
// //           responseMimeType: "application/json",
// //           responseSchema: {
// //             type: Type.OBJECT,
// //             properties: {
// //               title: { type: Type.STRING },
// //               description: { type: Type.STRING },
// //               responsibilities: { 
// //                 type: Type.ARRAY,
// //                 items: { type: Type.STRING }
// //               },
// //               requirements: { 
// //                 type: Type.ARRAY,
// //                 items: { type: Type.STRING }
// //               },
// //               tags: { 
// //                 type: Type.ARRAY,
// //                 items: { type: Type.STRING }
// //               }
// //             },
// //             required: ["title", "description", "responsibilities", "requirements", "tags"]
// //           }
// //         }
// //       });

// //       if (response.text) {
// //         setGeneratedJD(JSON.parse(response.text));
// //       }
// //     } catch (error) {
// //       console.error("Error generating JD:", error);
// //     } finally {
// //       setIsGenerating(false);
// //     }
// //   };

// //   const handleDownload = () => {
// //     window.print();
// //   };

// //   return (
// //     <div className="grid md:grid-cols-2 gap-16 items-center">
// //       <div className="order-2 md:order-1 bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 flex flex-col items-center justify-center min-h-[500px]">
// //         {!generatedJD && !isGenerating ? (
// //           <div className="text-center space-y-6 max-w-sm">
// //             <div className="w-20 h-20 bg-indigo-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
// //               <Sparkles className="w-10 h-10 text-indigo-600" />
// //             </div>
// //             <h4 className="text-2xl font-bold text-slate-900">Ready to Generate</h4>
// //             <p className="text-slate-500">Enter a job title or key phrases on the right to see the AI in action.</p>
// //           </div>
// //         ) : isGenerating ? (
// //           <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-100 w-full max-w-md animate-pulse">
// //             <div className="space-y-6">
// //               <div className="h-6 w-3/4 bg-slate-100 rounded" />
// //               <div className="space-y-2">
// //                 <div className="h-3 w-full bg-slate-50 rounded" />
// //                 <div className="h-3 w-full bg-slate-50 rounded" />
// //                 <div className="h-3 w-2/3 bg-slate-50 rounded" />
// //               </div>
// //               <div className="space-y-3 pt-4">
// //                 <div className="h-4 w-1/2 bg-slate-100 rounded" />
// //                 <div className="h-2 w-full bg-slate-50 rounded" />
// //                 <div className="h-2 w-full bg-slate-50 rounded" />
// //               </div>
// //               <div className="flex gap-2 pt-6">
// //                 <div className="h-6 w-16 bg-slate-100 rounded-full" />
// //                 <div className="h-6 w-16 bg-slate-100 rounded-full" />
// //                 <div className="h-6 w-16 bg-slate-100 rounded-full" />
// //               </div>
// //             </div>
// //             <div className="mt-8 flex justify-center">
// //               <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
// //             </div>
// //           </div>
// //         ) : (
// //           <motion.div 
// //             initial={{ opacity: 0, scale: 0.95 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             className="bg-white rounded-2xl shadow-2xl border border-slate-100 w-full max-w-md overflow-hidden flex flex-col"
// //           >
// //             <div className="p-8 space-y-6 flex-1 overflow-y-auto max-h-[500px] scrollbar-hide">
// //               <div className="space-y-1">
// //                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Job Title / Key Phrases</p>
// //                 <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-slate-900 font-medium">
// //                   {generatedJD.title}
// //                 </div>
// //               </div>

// //               <div className="space-y-4">
// //                 <div>
// //                   <h5 className="font-bold text-slate-900 mb-2">Description:</h5>
// //                   <p className="text-sm text-slate-600 leading-relaxed">{generatedJD.description}</p>
// //                 </div>

// //                 <div>
// //                   <h5 className="font-bold text-slate-900 mb-2">Responsibilities:</h5>
// //                   <ul className="space-y-1.5">
// //                     {generatedJD.responsibilities.map((item: string, i: number) => (
// //                       <li key={i} className="text-sm text-slate-600 flex gap-2">
// //                         <span className="text-indigo-400 font-bold">•</span>
// //                         {item}
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>

// //                 <div>
// //                   <h5 className="font-bold text-slate-900 mb-2">Required Skills & Requirements:</h5>
// //                   <ul className="space-y-1.5">
// //                     {generatedJD.requirements.map((item: string, i: number) => (
// //                       <li key={i} className="text-sm text-slate-600 flex gap-2">
// //                         <span className="text-indigo-400 font-bold">•</span>
// //                         {item}
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>

// //                 <div className="flex flex-wrap gap-2 pt-4">
// //                   {generatedJD.tags.map((tag: string, i: number) => (
// //                     <div key={i} className={cn(
// //                       "px-3 py-1 text-[10px] font-bold rounded-full",
// //                       i % 3 === 0 ? "bg-blue-50 text-blue-600" :
// //                       i % 3 === 1 ? "bg-emerald-50 text-emerald-600" :
// //                       "bg-purple-50 text-purple-600"
// //                     )}>
// //                       {tag}
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //             <button 
// //               onClick={handleDownload}
// //               className="w-full py-4 bg-slate-50 border-t border-slate-100 text-slate-600 font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors"
// //             >
// //               <Download className="w-4 h-4" />
// //               Download as PDF
// //             </button>
// //           </motion.div>
// //         )}
// //       </div>

// //       <motion.div
// //         initial={{ opacity: 0, x: 20 }}
// //         whileInView={{ opacity: 1, x: 0 }}
// //         viewport={{ once: true }}
// //         className="order-1 md:order-2"
// //       >
// //         <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">AI-Powered Generation</span>
// //         <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">AI Job Posting Generator</h3>
// //         <p className="text-slate-600 mb-8 text-lg leading-relaxed">
// //           Type a few words, get a complete job description. AI generates compelling JDs, automatically attaches required skills, requirements, and benefits.
// //         </p>

// //         <div className="space-y-6 mb-10">
// //           <div className="relative">
// //             <input 
// //               type="text" 
// //               value={input}
// //               onChange={(e) => setInput(e.target.value)}
// //               onKeyDown={(e) => e.key === 'Enter' && generateJD()}
// //               placeholder="e.g. Senior Software Engineer (React/Node)"
// //               className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all pr-32 shadow-sm"
// //             />
// //             <button 
// //               onClick={generateJD}
// //               disabled={isGenerating || !input.trim()}
// //               className="absolute right-2 top-2 bottom-2 px-6 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
// //             >
// //               {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
// //               Generate
// //             </button>
// //           </div>

// //           <ul className="space-y-4">
// //             {[
// //               "Instant JD generation",
// //               "Auto-attach skills & requirements",
// //               "Optimized for conversion"
// //             ].map((item, i) => (
// //               <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
// //                 <CheckCircle2 className="text-emerald-500 w-5 h-5" />
// //                 {item}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </motion.div>
// //     </div>
// //   );
// // };

// // const LandingPage = ({ onStart }: { onStart: () => void }) => {
// //   const [isDemoOpen, setIsDemoOpen] = useState(false);

// //   return (
// //     <div className="pt-24 pb-20">
// //       <AnimatePresence>
// //         {isDemoOpen && <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />}
// //       </AnimatePresence>
// //       {/* Hero Section */}
// //       <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 overflow-hidden">
// //         <div className="grid lg:grid-cols-2 gap-16 items-center">
// //           <motion.div
// //             initial={{ opacity: 0, x: -30 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.8, ease: "easeOut" }}
// //             className="text-left"
// //           >
// //             <motion.span 
// //               initial={{ opacity: 0, y: 10 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.2 }}
// //               className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-8 border border-indigo-100 uppercase tracking-wider"
// //             >
// //               <Zap className="w-3.5 h-3.5" />
// //               The Future of HR Automation
// //             </motion.span>
// //             <h1 className="text-6xl md:text-7xl xl:text-8xl font-display font-bold text-slate-900 tracking-tight mb-8 leading-[0.95]">
// //               Recruitment <br />
// //               <span className="text-indigo-600">Redefined.</span>
// //             </h1>
// //             <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
// //               From Resume Scraping to Final Selection. TalentFlow AI is the comprehensive HR Automation ecosystem by <span className="font-bold text-slate-900">MG³ Verse</span>, engineered to eliminate manual bottlenecks and secure top-tier talent.
// //             </p>
// //             <div className="flex flex-col sm:flex-row items-center gap-4">
// //               <button 
// //                 onClick={onStart}
// //                 className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-200 flex items-center justify-center gap-3 group"
// //               >
// //                 Launch Dashboard
// //                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
// //               </button>
// //               <button 
// //                 onClick={() => setIsDemoOpen(true)}
// //                 className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
// //               >
// //                 Watch Demo
// //               </button>
// //             </div>
            
// //             <div className="mt-12 flex items-center gap-6">
// //               <div className="flex -space-x-3">
// //                 {[1, 2, 3, 4].map((i) => (
// //                   <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
// //                     <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" referrerPolicy="no-referrer" />
// //                   </div>
// //                 ))}
// //               </div>
// //               <div className="text-sm">
// //                 <div className="font-bold text-slate-900">Trusted by 500+ HR Teams</div>
// //                 <div className="text-slate-500">Global recruitment excellence</div>
// //               </div>
// //             </div>
// //           </motion.div>

// //           <motion.div 
// //             initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
// //             animate={{ opacity: 1, scale: 1, rotate: 0 }}
// //             transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
// //             className="relative"
// //           >
// //             <div className="absolute -inset-10 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-[80px] opacity-50" />
// //             <div className="relative bg-white rounded-[3rem] border border-slate-200 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden aspect-[4/3] flex items-center justify-center p-4">
// //               <div className="w-full h-full bg-slate-50 rounded-[2rem] border border-slate-100 overflow-hidden relative group">
// //                 <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-transparent" />
// //                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
// //                   <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
// //                     <Brain className="w-10 h-10 text-indigo-600" />
// //                   </div>
// //                   <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">AI Talent Engine</h3>
// //                   <div className="w-full max-w-xs h-2 bg-slate-200 rounded-full overflow-hidden mb-4">
// //                     <motion.div 
// //                       animate={{ width: ["0%", "100%"] }}
// //                       transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
// //                       className="h-full bg-indigo-600"
// //                     />
// //                   </div>
// //                   <p className="text-slate-500 text-sm font-medium">Analyzing 1,240+ Candidate Profiles...</p>
// //                 </div>
// //               </div>
// //             </div>
            
// //             {/* Floating Stats Card */}
// //             <motion.div 
// //               animate={{ y: [0, -10, 0] }}
// //               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
// //               className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 max-w-[200px]"
// //             >
// //               <div className="flex items-center gap-3 mb-2">
// //                 <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center">
// //                   <CheckCircle2 className="w-4 h-4 text-emerald-600" />
// //                 </div>
// //                 <span className="text-2xl font-bold text-slate-900">98%</span>
// //               </div>
// //               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Match Accuracy</p>
// //             </motion.div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Trusted Integrations */}
// //       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-y border-slate-100 bg-slate-50/30">
// //         <div className="flex flex-col md:flex-row items-center justify-between gap-12">
// //           <div className="text-left max-w-xs">
// //             <p className="text-xs font-black text-indigo-600 uppercase tracking-[0.2em] mb-2">Ecosystem</p>
// //             <h4 className="text-xl font-display font-bold text-slate-900">Seamless Enterprise Integrations</h4>
// //           </div>
// //           <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
// //             {['MGCV_Clone','RecruitAI', 'HeyGen', 'OpenAI'].map((brand) => (
// //               <span key={brand} className="text-2xl font-display font-black text-slate-900 tracking-tighter">{brand}</span>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Recruitment Journey Steps */}
// //       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
// //         <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
// //           <div className="text-left max-w-2xl">
// //             <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">The MG³ Verse Methodology</span>
// //             <h3 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-6 leading-tight">Complete Automation Pipeline</h3>
// //             <p className="text-slate-600 text-xl leading-relaxed">
// //               We've engineered a frictionless journey that automates the entire recruitment lifecycle across eight integrated stages.
// //             </p>
// //           </div>
// //           <div className="hidden md:block">
// //             <div className="p-6 bg-slate-900 rounded-3xl text-white max-w-[240px]">
// //               <div className="text-3xl font-bold mb-1">75%</div>
// //               <p className="text-xs text-slate-400 font-medium">Reduction in Time-to-Hire across enterprise clients.</p>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //           {[
// //             { 
// //               step: '01', 
// //               title: 'Resume Scraping', 
// //               desc: 'High-speed automated extraction from MGCV_Clone and major job boards via secure API protocols.',
// //               icon: <RefreshCcw className="w-6 h-6" />,
// //               color: 'bg-blue-50 text-blue-600'
// //             },
// //             { 
// //               step: '02', 
// //               title: 'AI Analysis', 
// //               desc: 'Proprietary LLM-driven analysis utilizing advanced agent frameworks and LangGraph orchestration to score candidates against complex JD requirements with 98% precision.',
// //               icon: <Brain className="w-6 h-6" />,
// //               color: 'bg-purple-50 text-purple-600'
// //             },
// //             { 
// //               step: '03', 
// //               title: 'Assessment Engine', 
// //               desc: 'Dynamic technical and behavioral test generation integrated with RecruitAI for deep skill verification.',
// //               icon: <FileText className="w-6 h-6" />,
// //               color: 'bg-emerald-50 text-emerald-600'
// //             },
// //             { 
// //               step: '04', 
// //               title: 'Automated Delivery', 
// //               desc: 'Intelligent exam distribution with anti-cheat monitoring and real-time candidate engagement tracking.',
// //               icon: <Zap className="w-6 h-6" />,
// //               color: 'bg-orange-50 text-orange-600'
// //             },
// //             { 
// //               step: '05', 
// //               title: 'Results Processing', 
// //               desc: 'Instant cross-platform score aggregation and automated qualification based on your custom thresholds.',
// //               icon: <Target className="w-6 h-6" />,
// //               color: 'bg-pink-50 text-pink-600'
// //             },
// //             { 
// //               step: '06', 
// //               title: 'Smart Scheduling', 
// //               desc: 'Eliminate scheduling friction with automated calendar sync and multi-interviewer slot management.',
// //               icon: <Calendar className="w-6 h-6" />,
// //               color: 'bg-indigo-50 text-indigo-600'
// //             },
// //             { 
// //               step: '07', 
// //               title: 'AI Avatar Screening', 
// //               desc: 'Scalable first-round interviews using HeyGen AI Avatars for a consistent, high-tech candidate experience.',
// //               icon: <Users className="w-6 h-6" />,
// //               color: 'bg-cyan-50 text-cyan-600'
// //             },
// //             { 
// //               step: '08', 
// //               title: 'Final Selection', 
// //               desc: 'Data-driven decision support with multi-dimensional reports comparing top-tier candidates side-by-side.',
// //               icon: <CheckCircle2 className="w-6 h-6" />,
// //               color: 'bg-slate-900 text-white'
// //             },
// //           ].map((item, i) => (
// //             <motion.div 
// //               key={i}
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: i * 0.1 }}
// //               className="group relative p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
// //             >
// //               <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110", item.color)}>
// //                 {item.icon}
// //               </div>
// //               <div className="text-6xl font-display font-black text-slate-50 absolute top-6 right-10 group-hover:text-indigo-50 transition-colors duration-500">{item.step}</div>
// //               <h4 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">{item.title}</h4>
// //               <p className="text-slate-500 leading-relaxed relative z-10 text-sm">{item.desc}</p>
              
// //               <div className="mt-8 pt-8 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
// //                 <button className="text-indigo-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
// //                   Learn More
// //                   <ArrowRight className="w-3 h-3" />
// //                 </button>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Features Section */}
// //       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
        
// //         {/* AI-Powered Matching */}
// //         <div className="grid md:grid-cols-2 gap-24 items-center">
// //           <motion.div
// //             initial={{ opacity: 0, x: -20 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //           >
// //             <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">Precision Matching</span>
// //             <h3 className="text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">Secure the Top 1% of Global Talent</h3>
// //             <p className="text-slate-600 mb-10 text-xl leading-relaxed">
// //               Our 5-dimensional AI scoring engine moves beyond simple keyword matching. We analyze technical depth, behavioral alignment, and growth potential to ensure every hire is a long-term success.
// //             </p>
// //             <div className="grid grid-cols-1 gap-6">
// //               {[
// //                 { title: "Multi-Stack Detection", desc: "Auto-detects complex stacks like MERN, LAMP, or Cloud-Native." },
// //                 { title: "Cultural Alignment", desc: "AI-driven behavioral analysis against your team's core values." }
// //               ].map((item, i) => (
// //                 <div key={i} className="flex gap-4">
// //                   <div className="mt-1 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
// //                     <CheckCircle2 className="text-emerald-600 w-4 h-4" />
// //                   </div>
// //                   <div>
// //                     <h5 className="font-bold text-slate-900 mb-1">{item.title}</h5>
// //                     <p className="text-sm text-slate-500">{item.desc}</p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </motion.div>
// //           <div className="relative">
// //             <div className="absolute -inset-4 bg-indigo-600/5 rounded-[3rem] blur-2xl" />
// //             <div className="relative bg-white rounded-[2.5rem] p-12 border border-slate-100 shadow-2xl">
// //                <div className="flex items-center gap-4 mb-10">
// //                   <div className="w-16 h-16 rounded-2xl bg-slate-50 overflow-hidden">
// //                     <img src="https://i.pravatar.cc/150?u=sarah" alt="Candidate" referrerPolicy="no-referrer" />
// //                   </div>
// //                   <div>
// //                     <h4 className="font-bold text-xl text-slate-900">Sarah Chen</h4>
// //                     <p className="text-sm text-indigo-600 font-bold">94% Match Score</p>
// //                   </div>
// //                </div>
// //                <div className="grid grid-cols-2 gap-6">
// //                   {[
// //                     { label: 'Technical', val: 92, color: 'bg-indigo-600' },
// //                     { label: 'Experience', val: 88, color: 'bg-purple-600' },
// //                     { label: 'Education', val: 95, color: 'bg-blue-600' },
// //                     { label: 'Job Fit', val: 90, color: 'bg-pink-600' }
// //                   ].map((stat, i) => (
// //                     <div key={i} className="space-y-2">
// //                       <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
// //                         <span>{stat.label}</span>
// //                         <span className="text-slate-900">{stat.val}%</span>
// //                       </div>
// //                       <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
// //                         <motion.div 
// //                           initial={{ width: 0 }}
// //                           whileInView={{ width: `${stat.val}%` }}
// //                           transition={{ duration: 1, delay: i * 0.1 }}
// //                           className={cn("h-full rounded-full", stat.color)}
// //                         />
// //                       </div>
// //                     </div>
// //                   ))}
// //                </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* AI Job Posting Generator */}
// //         <JobPostingGenerator />

// //         {/* Talent Pool with AI Parsing */}
// //         <div className="grid md:grid-cols-2 gap-16 items-center">
// //           <motion.div
// //             initial={{ opacity: 0, x: -20 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //           >
// //             <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">AI-Powered Parsing</span>
// //             <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Talent Pool with AI Parsing</h3>
// //             <p className="text-slate-600 mb-8 text-lg leading-relaxed">
// //               Upload hundreds of resumes at once. Our AI parses, formats, and structures them perfectly. Search, filter, and assign candidates to roles in seconds. Your private talent database.
// //             </p>
// //             <ul className="space-y-4">
// //               {[
// //                 "Bulk resume upload & parsing",
// //                 "Private searchable database",
// //                 "Automatic profile enrichment"
// //               ].map((item, i) => (
// //                 <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
// //                   <CheckCircle2 className="text-emerald-500 w-5 h-5" />
// //                   {item}
// //                 </li>
// //               ))}
// //             </ul>
// //           </motion.div>
// //           <div className="bg-slate-50 rounded-[2.5rem] p-12 border border-slate-100 flex items-center justify-center">
// //             <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-100 w-full max-w-sm">
// //               <div className="flex items-center gap-3 mb-6">
// //                 <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
// //                   <RefreshCcw className="w-5 h-5 text-indigo-600 animate-spin" />
// //                 </div>
// //                 <div>
// //                   <h4 className="font-bold text-slate-900">AI is parsing resumes...</h4>
// //                   <p className="text-xs text-slate-400">Extracting skills and experience</p>
// //                 </div>
// //               </div>
// //               <div className="space-y-4">
// //                 {[
// //                   { name: 'john_doe_resume.pdf', progress: 100 },
// //                   { name: 'sarah_chen_cv.pdf', progress: 65 },
// //                   { name: 'mike_wilson_resume.docx', progress: 30 }
// //                 ].map((file, i) => (
// //                   <div key={i} className="space-y-2">
// //                     <div className="flex items-center justify-between text-xs">
// //                       <span className="font-medium text-slate-700">{file.name}</span>
// //                       <span className="text-slate-400">{file.progress}%</span>
// //                     </div>
// //                     <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
// //                       <motion.div 
// //                         initial={{ width: 0 }}
// //                         whileInView={{ width: `${file.progress}%` }}
// //                         className="h-full bg-indigo-600 rounded-full" 
// //                       />
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Pipeline Management */}
// //         <div className="grid md:grid-cols-2 gap-16 items-center">
// //           <div className="order-2 md:order-1 bg-slate-50 rounded-[2.5rem] p-12 border border-slate-100 flex items-center justify-center">
// //             <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-100 w-full max-w-sm">
// //               <div className="grid grid-cols-3 gap-2">
// //                 {['APPLIED', 'INTERVIEW', 'OFFER'].map((col) => (
// //                   <div key={col} className="space-y-2">
// //                     <div className="text-[8px] font-bold text-slate-400 mb-2">{col}</div>
// //                     <div className="h-10 bg-slate-50 rounded-lg border border-slate-100" />
// //                     <div className="h-10 bg-slate-50 rounded-lg border border-slate-100" />
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //           <motion.div
// //             initial={{ opacity: 0, x: 20 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             className="order-1 md:order-2"
// //           >
// //             <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">Smart Pipeline</span>
// //             <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Pipeline Management</h3>
// //             <p className="text-slate-600 mb-8 text-lg leading-relaxed">
// //               Move candidates seamlessly from talent pool to pipeline stages. Drag-and-drop through each phase while tracking every interaction. Define visibility and automate candidate notifications at each step.
// //             </p>
// //             <ul className="space-y-4">
// //               {[
// //                 "Define public/private stages",
// //                 "Email notifications per stage",
// //                 "Notes, ratings & activity tracking"
// //               ].map((item, i) => (
// //                 <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
// //                   <CheckCircle2 className="text-emerald-500 w-5 h-5" />
// //                   {item}
// //                 </li>
// //               ))}
// //             </ul>
// //           </motion.div>
// //         </div>

// //         {/* Advanced Filtering */}
// //         <div className="grid md:grid-cols-2 gap-16 items-center">
// //           <motion.div
// //             initial={{ opacity: 0, x: -20 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //           >
// //             <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">Smart Filtering</span>
// //             <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Advanced Filtering & Staleness Alerts</h3>
// //             <p className="text-slate-600 mb-8 text-lg leading-relaxed">
// //               Filter candidates by stage, staleness level, tags, score range, skills, and more. Get real-time alerts when candidates stay too long in pipeline stages to keep your hiring process moving.
// //             </p>
// //             <ul className="space-y-4">
// //               {[
// //                 "9+ advanced filter types",
// //                 "Real-time staleness warnings",
// //                 "Smart candidate tracking"
// //               ].map((item, i) => (
// //                 <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
// //                   <CheckCircle2 className="text-emerald-500 w-5 h-5" />
// //                   {item}
// //                 </li>
// //               ))}
// //             </ul>
// //           </motion.div>
// //           <div className="bg-slate-50 rounded-[2.5rem] p-12 border border-slate-100 flex items-center justify-center">
// //             <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-100 w-full max-w-sm">
// //               <div className="space-y-4">
// //                 <div className="flex items-center justify-between">
// //                   <span className="text-xs font-bold text-slate-900">Smart Filters Active</span>
// //                   <span className="text-[10px] text-slate-400">3 filters applied</span>
// //                 </div>
// //                 <div className="flex flex-wrap gap-2">
// //                   <div className="px-2 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded">Score: 80%+</div>
// //                   <div className="px-2 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded">Stage: Interview</div>
// //                   <div className="px-2 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded">Skills: React</div>
// //                 </div>
// //                 <div className="p-3 bg-amber-50 border border-amber-100 rounded-xl flex items-center gap-3">
// //                   <Bell className="w-4 h-4 text-amber-600" />
// //                   <span className="text-[10px] font-bold text-amber-900">2 candidates stale for 5+ days</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* AI Interviews */}
// //         <div className="grid md:grid-cols-2 gap-16 items-center">
// //           <div className="order-2 md:order-1 bg-slate-50 rounded-[2.5rem] p-12 border border-slate-100 flex items-center justify-center">
// //             <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-100 w-full max-w-sm">
// //               <div className="flex items-center gap-4 mb-6">
// //                 <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center">
// //                   <Zap className="text-white w-6 h-6" />
// //                 </div>
// //                 <div>
// //                   <h4 className="font-bold text-slate-900">AI Interview Session</h4>
// //                   <p className="text-xs text-slate-400">Technical Assessment</p>
// //                 </div>
// //               </div>
// //               <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 mb-4">
// //                 <span className="text-[8px] font-bold text-emerald-600 uppercase mb-2 block">Live Transcription</span>
// //                 <p className="text-[10px] text-slate-600 italic">"Can you explain your experience with React hooks and state management?"</p>
// //               </div>
// //               <div className="space-y-2">
// //                 <div className="flex items-center justify-between text-[10px]">
// //                   <span className="font-bold text-slate-700">Technical</span>
// //                   <span className="text-indigo-600 font-bold">85%</span>
// //                 </div>
// //                 <div className="flex items-center justify-between text-[10px]">
// //                   <span className="font-bold text-slate-700">Communication</span>
// //                   <span className="text-indigo-600 font-bold">92%</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           <motion.div
// //             initial={{ opacity: 0, x: 20 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             className="order-1 md:order-2"
// //           >
// //             <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">AI Interviews</span>
// //             <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Boooply AI Meetings</h3>
// //             <p className="text-slate-600 mb-8 text-lg leading-relaxed">
// //               Native meeting platform with real-time transcription and AI-powered candidate evaluation. Conduct autonomous AI interviews for screening and technical assessments with custom question sets.
// //             </p>
// //             <ul className="space-y-4">
// //               {[
// //                 "Real-time transcription",
// //                 "AI-powered candidate rating",
// //                 "Autonomous AI interviews"
// //               ].map((item, i) => (
// //                 <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
// //                   <CheckCircle2 className="text-emerald-500 w-5 h-5" />
// //                   {item}
// //                 </li>
// //               ))}
// //             </ul>
// //           </motion.div>
// //         </div>

// //         {/* Full Pipeline Transparency */}
// //         <div className="grid md:grid-cols-2 gap-16 items-center">
// //           <motion.div
// //             initial={{ opacity: 0, x: -20 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //           >
// //             <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">For Jobseekers</span>
// //             <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Full Pipeline Transparency</h3>
// //             <p className="text-slate-600 mb-8 text-lg leading-relaxed">
// //               No more ghosting. Candidates get real-time visibility into their application status with automated updates at every stage. Track your journey from application to offer.
// //             </p>
// //             <ul className="space-y-4">
// //               {[
// //                 "Real-time status tracking",
// //                 "Automated email notifications",
// //                 "AI interview preparation"
// //               ].map((item, i) => (
// //                 <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
// //                   <CheckCircle2 className="text-emerald-500 w-5 h-5" />
// //                   {item}
// //                 </li>
// //               ))}
// //             </ul>
// //           </motion.div>
// //           <div className="bg-slate-50 rounded-[2.5rem] p-12 border border-slate-100 flex items-center justify-center">
// //             <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-100 w-full max-w-sm">
// //               <h4 className="font-bold text-slate-900 mb-6">Your Application</h4>
// //               <div className="space-y-6">
// //                 {[
// //                   { label: 'Applied', date: 'Dec 18', status: 'completed' },
// //                   { label: 'Screening', date: 'Dec 20', status: 'completed' },
// //                   { label: 'Interview', date: 'In progress', status: 'active' },
// //                   { label: 'Offer', date: '', status: 'pending' },
// //                 ].map((step, i) => (
// //                   <div key={i} className="flex items-center gap-4">
// //                     <div className={cn(
// //                       "w-6 h-6 rounded-full flex items-center justify-center",
// //                       step.status === 'completed' ? "bg-emerald-500 text-white" :
// //                       step.status === 'active' ? "bg-blue-500 text-white ring-4 ring-blue-100" :
// //                       "bg-slate-100 text-slate-300"
// //                     )}>
// //                       {step.status === 'completed' ? <CheckCircle2 className="w-4 h-4" /> : <div className="w-2 h-2 rounded-full bg-current" />}
// //                     </div>
// //                     <div className="flex-1">
// //                       <div className="text-xs font-bold text-slate-900">{step.label}</div>
// //                     </div>
// //                     <div className="text-[10px] font-medium text-slate-400">{step.date}</div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Recruitment Analytics */}
// //         <div className="grid md:grid-cols-2 gap-16 items-center">
// //           <div className="order-2 md:order-1 bg-slate-50 rounded-[2.5rem] p-12 border border-slate-100 flex items-center justify-center">
// //             <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-100 w-full max-w-sm">
// //               <div className="flex items-center justify-between mb-6">
// //                 <h4 className="font-bold text-slate-900">This Month</h4>
// //                 <span className="text-[10px] text-slate-400">Recruitment Overview</span>
// //               </div>
// //               <div className="grid grid-cols-2 gap-4">
// //                 {[
// //                   { label: 'Applications', val: '142' },
// //                   { label: 'Interviews', val: '28' },
// //                   { label: 'Offers Sent', val: '8', color: 'text-emerald-600' },
// //                   { label: 'Avg. Time to Hire', val: '12d' }
// //                 ].map((stat, i) => (
// //                   <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
// //                     <div className={cn("text-xl font-bold mb-1", stat.color || "text-slate-900")}>{stat.val}</div>
// //                     <div className="text-[10px] text-slate-500 font-bold">{stat.label}</div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //           <motion.div
// //             initial={{ opacity: 0, x: 20 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             className="order-1 md:order-2"
// //           >
// //             <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">Insights</span>
// //             <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Recruitment Analytics</h3>
// //             <p className="text-slate-600 mb-8 text-lg leading-relaxed">
// //               Make data-driven hiring decisions with comprehensive analytics. Track KPIs, pipeline performance, team metrics, and candidate distribution across stages and locations.
// //             </p>
// //             <ul className="space-y-4">
// //               {[
// //                 "KPI tracking dashboard",
// //                 "Pipeline performance metrics",
// //                 "Geographic distribution"
// //               ].map((item, i) => (
// //                 <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
// //                   <CheckCircle2 className="text-emerald-500 w-5 h-5" />
// //                   {item}
// //                 </li>
// //               ))}
// //             </ul>
// //           </motion.div>
// //         </div>

// //       </section>

// //       {/* Final CTA */}
// //       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
// //         <div className="bg-indigo-600 rounded-[3rem] p-16 text-white relative overflow-hidden">
// //           <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
// //           <div className="relative z-10">
// //             <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to transform your hiring?</h2>
// //             <p className="text-indigo-100 text-lg mb-12 max-w-2xl mx-auto">
// //               Join hundreds of companies using TalentFlow AI to build their dream teams faster and more effectively.
// //             </p>
// //             <button 
// //               onClick={onStart}
// //               className="px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl"
// //             >
// //               Get Started for Free
// //             </button>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // const Dashboard = () => {
// //   return (
// //     <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
// //       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
// //         <div>
// //           <h1 className="text-3xl font-display font-bold text-slate-900">Recruitment Dashboard</h1>
// //           <p className="text-slate-500">Welcome back! Here's your recruitment overview <span className="text-xs ml-2 opacity-60">Last updated: 11:30:23</span></p>
// //         </div>
// //         <div className="flex items-center gap-3">
// //           <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
// //             <RefreshCcw className="w-5 h-5" />
// //           </button>
// //           <div className="relative">
// //             <select className="appearance-none bg-white border border-slate-200 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
// //               <option>This Month</option>
// //               <option>Last Month</option>
// //               <option>All Time</option>
// //             </select>
// //             <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
// //           </div>
// //           <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2">
// //             <Plus className="w-4 h-4" />
// //             New Pipeline
// //           </button>
// //         </div>
// //       </div>

// //       {/* Recruitment Journey Map */}
// //       <div className="bg-white rounded-[2.5rem] border border-slate-100 p-10 mb-8 shadow-sm overflow-x-auto">
// //         <div className="flex items-center justify-between mb-12">
// //           <div className="flex items-center gap-3">
// //             <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
// //               <Layers className="w-5 h-5 text-indigo-600" />
// //             </div>
// //             <div>
// //               <h3 className="text-lg font-bold text-slate-900">Automation Pipeline Status</h3>
// //               <p className="text-xs text-slate-500">Real-time tracking across 8 integrated stages</p>
// //             </div>
// //           </div>
// //           <div className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-100 flex items-center gap-2">
// //             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
// //             System Active
// //           </div>
// //         </div>
        
// //         <div className="min-w-[1000px] flex items-center justify-between relative px-8">
// //           {/* Progress Line */}
// //           <div className="absolute top-[24px] left-12 right-12 h-1 bg-slate-100 z-0">
// //             <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[45%] rounded-full" />
// //           </div>

// //           {[
// //             { icon: RefreshCcw, label: 'Scraping', active: true },
// //             { icon: Brain, label: 'Analysis', active: true },
// //             { icon: FileText, label: 'Assessment', active: true },
// //             { icon: Zap, label: 'Distribution', active: true, current: true, badge: 12 },
// //             { icon: Target, label: 'Processing', active: false, badge: 4 },
// //             { icon: Calendar, label: 'Scheduling', active: false },
// //             { icon: Users, label: 'AI Interview', active: false },
// //             { icon: CheckCircle2, label: 'Selection', active: false },
// //           ].map((step, i) => (
// //             <div key={i} className="relative z-10 flex flex-col items-center text-center max-w-[100px]">
// //               <div className={cn(
// //                 "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 mb-4",
// //                 step.current ? "bg-indigo-600 text-white ring-8 ring-indigo-50 scale-110" : 
// //                 step.active ? "bg-white border-2 border-indigo-600 text-indigo-600 shadow-lg shadow-indigo-100" : 
// //                 "bg-white border-2 border-slate-100 text-slate-300"
// //               )}>
// //                 <step.icon className="w-5 h-5" />
// //                 {step.badge && (
// //                   <span className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-lg">
// //                     {step.badge}
// //                   </span>
// //                 )}
// //               </div>
// //               <h4 className={cn("text-[10px] font-black uppercase tracking-wider mb-1", step.active ? "text-slate-900" : "text-slate-300")}>{step.label}</h4>
// //             </div>
// //           ))}
// //         </div>
// //         <div className="mt-12 flex items-center justify-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
// //           <div className="flex items-center gap-2 text-indigo-600">
// //             <div className="w-2 h-2 rounded-full bg-indigo-600" />
// //             Completed
// //           </div>
// //           <div className="flex items-center gap-2 text-slate-300">
// //             <div className="w-2 h-2 rounded-full bg-slate-200" />
// //             Pending
// //           </div>
// //         </div>
// //       </div>

// //       {/* Stats Grid */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
// //         {[
// //           { label: 'Total Applications', val: '14', change: '+12.5%', icon: Users, color: 'bg-blue-50 text-blue-600' },
// //           { label: 'Shortlist Rate', val: '50.0%', change: '+5.2%', icon: Target, color: 'bg-emerald-50 text-emerald-600' },
// //           { label: 'Time-to-Hire', val: '0d', change: '-8.3%', icon: Calendar, color: 'bg-orange-50 text-orange-600' },
// //           { label: 'Pending Actions', val: '0', change: null, icon: Bell, color: 'bg-purple-50 text-purple-600' },
// //         ].map((stat, i) => (
// //           <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
// //             <div className="flex items-center justify-between mb-4">
// //               <span className="text-xs font-semibold text-slate-500">{stat.label}</span>
// //               <div className={cn("p-2 rounded-lg", stat.color)}>
// //                 <stat.icon className="w-4 h-4" />
// //               </div>
// //             </div>
// //             <div className="flex items-end gap-2">
// //               <span className="text-2xl font-bold text-slate-900">{stat.val}</span>
// //               {stat.change && (
// //                 <span className={cn("text-xs font-bold mb-1", stat.change.startsWith('+') ? "text-emerald-500" : "text-red-500")}>
// //                   {stat.change}
// //                 </span>
// //               )}
// //             </div>
// //             <p className="text-[10px] text-slate-400 mt-1">All time applications</p>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Charts Section */}
// //       <div className="grid lg:grid-cols-2 gap-8">
// //         <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
// //           <h3 className="text-lg font-bold text-slate-900 mb-6">Recruitment Pipeline</h3>
// //           <div className="h-[300px]">
// //             <ResponsiveContainer width="100%" height="100%">
// //               <BarChart data={pipelineData}>
// //                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
// //                 <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
// //                 <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
// //                 <Tooltip 
// //                   cursor={{ fill: '#f8fafc' }}
// //                   contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
// //                 />
// //                 <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40} />
// //               </BarChart>
// //             </ResponsiveContainer>
// //           </div>
// //         </div>

// //         <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
// //           <h3 className="text-lg font-bold text-slate-900 mb-6">Recruitment Activity</h3>
// //           <div className="h-[300px]">
// //             <ResponsiveContainer width="100%" height="100%">
// //               <LineChart data={activityData}>
// //                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
// //                 <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
// //                 <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
// //                 <Tooltip 
// //                   contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
// //                 />
// //                 <Line type="monotone" dataKey="count" stroke="#6366f1" strokeWidth={3} dot={{ r: 4, fill: '#6366f1', strokeWidth: 2, stroke: '#fff' }} />
// //               </LineChart>
// //             </ResponsiveContainer>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default function App() {
// //   const [view, setView] = useState('landing');

// //   return (
// //     <div className="min-h-screen bg-slate-50/50">
// //       <Navbar onNavigate={setView} currentView={view} />
      
// //       <main>
// //         <AnimatePresence mode="wait">
// //           {view === 'landing' ? (
// //             <motion.div
// //               key="landing"
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //               transition={{ duration: 0.3 }}
// //             >
// //               <LandingPage onStart={() => setView('dashboard')} />
// //             </motion.div>
// //           ) : (
// //             <motion.div
// //               key="dashboard"
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //               transition={{ duration: 0.3 }}
// //             >
// //               <Dashboard />
// //             </motion.div>
// //           )
// //           }
// //         </AnimatePresence>
// //       </main>

// //       {/* Footer */}
// //       <footer className="bg-white border-t border-slate-100 py-12">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="flex flex-col md:flex-row justify-between items-center gap-8">
// //             <div className="flex items-center gap-2">
// //               <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
// //                 <Brain className="text-white w-5 h-5" />
// //               </div>
// //               <div className="flex flex-col">
// //                 <span className="text-lg font-display font-bold text-slate-900 leading-none">TalentFlow AI</span>
// //                 <span className="text-[8px] font-bold text-indigo-600 tracking-widest uppercase mt-0.5">By MG³ Verse</span>
// //               </div>
// //             </div>
// //             <div className="flex gap-8">
// //               <a href="#" className="text-sm text-slate-500 hover:text-indigo-600">Privacy Policy</a>
// //               <a href="#" className="text-sm text-slate-500 hover:text-indigo-600">Terms of Service</a>
// //               <a href="#" className="text-sm text-slate-500 hover:text-indigo-600">Contact Us</a>
// //             </div>
// //             <p className="text-sm text-slate-400">© 2026 TalentFlow AI. All rights reserved.</p>
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // }
// /**
//  * @license
//  * SPDX-License-Identifier: Apache-2.0
//  */

// import React, { useState, useEffect } from 'react';
// import { GoogleGenAI, Type } from "@google/genai";
// import { 
//   LayoutDashboard, 
//   Users, 
//   Calendar, 
//   FileText, 
//   BarChart3, 
//   LogOut, 
//   Plus, 
//   Search, 
//   Bell, 
//   RefreshCcw,
//   ChevronDown,
//   CheckCircle2,
//   Brain,
//   Zap,
//   ShieldCheck,
//   ArrowRight,
//   Menu,
//   X,
//   Briefcase,
//   UserPlus,
//   Target,
//   Layers,
//   Sparkles,
//   Download,
//   Loader2
// } from 'lucide-react';
// import { motion, AnimatePresence } from 'motion/react';
// import { 
//   BarChart, 
//   Bar, 
//   XAxis, 
//   YAxis, 
//   CartesianGrid, 
//   Tooltip, 
//   ResponsiveContainer,
//   LineChart,
//   Line
// } from 'recharts';
// import { cn } from './lib/utils';

// // --- Mock Data ---
// const pipelineData = [
//   { name: 'Applied', value: 14, fill: '#3b82f6' },
//   { name: 'Interview', value: 13, fill: '#10b981' },
//   { name: 'Offer', value: 6, fill: '#f59e0b' },
// ];

// const activityData = [
//   { day: 'Mon', count: 4 },
//   { day: 'Tue', count: 7 },
//   { day: 'Wed', count: 5 },
//   { day: 'Thu', count: 9 },
//   { day: 'Fri', count: 12 },
//   { day: 'Sat', count: 3 },
//   { day: 'Sun', count: 2 },
// ];

// // --- Components ---

// const Navbar = ({ onNavigate, currentView }: { onNavigate: (view: string) => void, currentView: string }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('landing')}>
//             <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
//               <Brain className="text-white w-5 h-5" />
//             </div>
//             <div className="flex flex-col">
//               <span className="text-xl font-display font-bold text-slate-900 leading-none">TalentFlow AI</span>
//               <span className="text-[10px] font-bold text-indigo-600 tracking-widest uppercase mt-1">By MG³ Verse</span>
//             </div>
//           </div>

//           {/* Desktop Nav - Removed as requested */}
//           <div className="hidden md:flex items-center gap-8">
//           </div>

//           <div className="hidden md:flex items-center gap-4">
//             {currentView === 'dashboard' && (
//               <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors ml-4">
//                 <LogOut className="w-4 h-4" />
//                 Logout
//               </button>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">
//               {isMenuOpen ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Nav */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div 
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
//           >
//             <div className="px-4 pt-2 pb-6 space-y-2">
//               {currentView === 'dashboard' ? (
//                 <button 
//                   onClick={() => { onNavigate('landing'); setIsMenuOpen(false); }} 
//                   className="flex items-center gap-2 w-full px-3 py-2 text-base font-medium text-red-600 hover:bg-red-50 rounded-md"
//                 >
//                   <LogOut className="w-4 h-4" />
//                   Logout
//                 </button>
//               ) : (
//                 <button 
//                   onClick={() => { onNavigate('dashboard'); setIsMenuOpen(false); }} 
//                   className="block w-full text-left px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
//                 >
//                   Go to Dashboard
//                 </button>
//               )}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// const DemoModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const steps = [
//     {
//       title: "01. Intelligent Sourcing",
//       description: "Our system autonomously scrapes and parses resumes from MGCV_Clone and global talent pools, extracting deep technical stacks and experience data instantly.",
//       icon: <RefreshCcw className="w-12 h-12 text-indigo-600" />,
//       image: "https://picsum.photos/seed/sourcing/800/450"
//     },
//     {
//       title: "02. 5D AI Analysis",
//       description: "Proprietary LLM-driven analysis utilizing advanced agent frameworks and LangGraph orchestration. This multi-agent system scores candidates against complex JD requirements with 98% precision, ensuring deep technical and behavioral alignment.",
//       icon: <Brain className="w-12 h-12 text-purple-600" />,
//       image: "https://picsum.photos/seed/analysis/800/450"
//     },
//     {
//       title: "03. Automated Assessments",
//       description: "AI-generated technical exams are distributed via Testlify, with real-time monitoring and automated results processing to qualify top-tier talent.",
//       icon: <FileText className="w-12 h-12 text-emerald-600" />,
//       image: "https://picsum.photos/seed/assessment/800/450"
//     },
//     {
//       title: "04. AI Avatar Screening",
//       description: "Scalable first-round interviews conducted by HeyGen AI Avatars, providing consistent screening with live transcription and sentiment analysis.",
//       icon: <Users className="w-12 h-12 text-blue-600" />,
//       image: "https://picsum.photos/seed/avatar/800/450"
//     },
//     {
//       title: "05. Data-Driven Selection",
//       description: "A unified dashboard provides multi-dimensional reports and transparency for the entire hiring team, ensuring the final selection is backed by data.",
//       icon: <LayoutDashboard className="w-12 h-12 text-slate-900" />,
//       image: "https://picsum.photos/seed/selection/800/450"
//     }
//   ];

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         onClick={onClose}
//         className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
//       />
//       <motion.div 
//         initial={{ opacity: 0, scale: 0.9, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.9, y: 20 }}
//         className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row h-[80vh] md:h-auto max-h-[90vh]"
//       >
//         <button 
//           onClick={onClose}
//           className="absolute top-6 right-6 z-10 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
//         >
//           <X className="w-5 h-5 text-slate-600" />
//         </button>

//         <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
//           <div className="mb-8">
//             {steps[currentStep].icon}
//           </div>
//           <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">
//             {steps[currentStep].title}
//           </h3>
//           <p className="text-slate-600 text-lg leading-relaxed mb-8">
//             {steps[currentStep].description}
//           </p>
          
//           <div className="flex items-center gap-4 mt-auto">
//             <button 
//               disabled={currentStep === 0}
//               onClick={() => setCurrentStep(prev => prev - 1)}
//               className="p-3 rounded-xl border border-slate-200 disabled:opacity-30 hover:bg-slate-50 transition-colors"
//             >
//               <ArrowRight className="w-5 h-5 rotate-180" />
//             </button>
//             <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
//               <div 
//                 className="h-full bg-indigo-600 transition-all duration-500" 
//                 style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
//               />
//             </div>
//             <button 
//               onClick={() => {
//                 if (currentStep === steps.length - 1) {
//                   onClose();
//                 } else {
//                   setCurrentStep(prev => prev + 1);
//                 }
//               }}
//               className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors flex items-center gap-2"
//             >
//               {currentStep === steps.length - 1 ? "Finish" : "Next"}
//               <ArrowRight className="w-4 h-4" />
//             </button>
//           </div>
//         </div>

//         <div className="md:w-1/2 bg-slate-50 relative overflow-hidden hidden md:block">
//           <AnimatePresence mode="wait">
//             <motion.img
//               key={currentStep}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               src={steps[currentStep].image}
//               alt={steps[currentStep].title}
//               className="absolute inset-0 w-full h-full object-cover"
//               referrerPolicy="no-referrer"
//             />
//           </AnimatePresence>
//           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// // --- AI Job Posting Generator Component ---
// const JobPostingGenerator = () => {
//   const [input, setInput] = useState('');
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [generatedJD, setGeneratedJD] = useState<any>(null);

//   const generateJD = async () => {
//     if (!input.trim()) return;
    
//     setIsGenerating(true);
//     try {
//       const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
//       const response = await ai.models.generateContent({
//         model: "gemini-3-flash-preview",
//         contents: `Generate a professional job description for the following position: ${input}. 
//         Include a brief description, a list of responsibilities, and a list of required skills and requirements. 
//         Also provide 3-4 short skill tags.`,
//         config: {
//           responseMimeType: "application/json",
//           responseSchema: {
//             type: Type.OBJECT,
//             properties: {
//               title: { type: Type.STRING },
//               description: { type: Type.STRING },
//               responsibilities: { 
//                 type: Type.ARRAY,
//                 items: { type: Type.STRING }
//               },
//               requirements: { 
//                 type: Type.ARRAY,
//                 items: { type: Type.STRING }
//               },
//               tags: { 
//                 type: Type.ARRAY,
//                 items: { type: Type.STRING }
//               }
//             },
//             required: ["title", "description", "responsibilities", "requirements", "tags"]
//           }
//         }
//       });

//       if (response.text) {
//         setGeneratedJD(JSON.parse(response.text));
//       }
//     } catch (error) {
//       console.error("Error generating JD:", error);
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   const handleDownload = () => {
//     window.print();
//   };

//   return (
//     <div className="grid md:grid-cols-2 gap-16 items-center">
//       <div className="order-2 md:order-1 bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 flex flex-col items-center justify-center min-h-[500px]">
//         {!generatedJD && !isGenerating ? (
//           <div className="text-center space-y-6 max-w-sm">
//             <div className="w-20 h-20 bg-indigo-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
//               <Sparkles className="w-10 h-10 text-indigo-600" />
//             </div>
//             <h4 className="text-2xl font-bold text-slate-900">Ready to Generate</h4>
//             <p className="text-slate-500">Enter a job title or key phrases on the right to see the AI in action.</p>
//           </div>
//         ) : isGenerating ? (
//           <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-100 w-full max-w-md animate-pulse">
//             <div className="space-y-6">
//               <div className="h-6 w-3/4 bg-slate-100 rounded" />
//               <div className="space-y-2">
//                 <div className="h-3 w-full bg-slate-50 rounded" />
//                 <div className="h-3 w-full bg-slate-50 rounded" />
//                 <div className="h-3 w-2/3 bg-slate-50 rounded" />
//               </div>
//               <div className="space-y-3 pt-4">
//                 <div className="h-4 w-1/2 bg-slate-100 rounded" />
//                 <div className="h-2 w-full bg-slate-50 rounded" />
//                 <div className="h-2 w-full bg-slate-50 rounded" />
//               </div>
//               <div className="flex gap-2 pt-6">
//                 <div className="h-6 w-16 bg-slate-100 rounded-full" />
//                 <div className="h-6 w-16 bg-slate-100 rounded-full" />
//                 <div className="h-6 w-16 bg-slate-100 rounded-full" />
//               </div>
//             </div>
//             <div className="mt-8 flex justify-center">
//               <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
//             </div>
//           </div>
//         ) : (
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="bg-white rounded-2xl shadow-2xl border border-slate-100 w-full max-w-md overflow-hidden flex flex-col"
//           >
//             <div className="p-8 space-y-6 flex-1 overflow-y-auto max-h-[500px] scrollbar-hide">
//               <div className="space-y-1">
//                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Job Title / Key Phrases</p>
//                 <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-slate-900 font-medium">
//                   {generatedJD.title}
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 <div>
//                   <h5 className="font-bold text-slate-900 mb-2">Description:</h5>
//                   <p className="text-sm text-slate-600 leading-relaxed">{generatedJD.description}</p>
//                 </div>

//                 <div>
//                   <h5 className="font-bold text-slate-900 mb-2">Responsibilities:</h5>
//                   <ul className="space-y-1.5">
//                     {generatedJD.responsibilities.map((item: string, i: number) => (
//                       <li key={i} className="text-sm text-slate-600 flex gap-2">
//                         <span className="text-indigo-400 font-bold">•</span>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div>
//                   <h5 className="font-bold text-slate-900 mb-2">Required Skills & Requirements:</h5>
//                   <ul className="space-y-1.5">
//                     {generatedJD.requirements.map((item: string, i: number) => (
//                       <li key={i} className="text-sm text-slate-600 flex gap-2">
//                         <span className="text-indigo-400 font-bold">•</span>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="flex flex-wrap gap-2 pt-4">
//                   {generatedJD.tags.map((tag: string, i: number) => (
//                     <div key={i} className={cn(
//                       "px-3 py-1 text-[10px] font-bold rounded-full",
//                       i % 3 === 0 ? "bg-blue-50 text-blue-600" :
//                       i % 3 === 1 ? "bg-emerald-50 text-emerald-600" :
//                       "bg-purple-50 text-purple-600"
//                     )}>
//                       {tag}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <button 
//               onClick={handleDownload}
//               className="w-full py-4 bg-slate-50 border-t border-slate-100 text-slate-600 font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors"
//             >
//               <Download className="w-4 h-4" />
//               Download as PDF
//             </button>
//           </motion.div>
//         )}
//       </div>

//       <motion.div
//         initial={{ opacity: 0, x: 20 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         className="order-1 md:order-2"
//       >
//         <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">AI-Powered Generation</span>
//         <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">AI Job Posting Generator</h3>
//         <p className="text-slate-600 mb-8 text-lg leading-relaxed">
//           Type a few words, get a complete job description. AI generates compelling JDs, automatically attaches required skills, requirements, and benefits.
//         </p>

//         <div className="space-y-6 mb-10">
//           <div className="relative">
//             <input 
//               type="text" 
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === 'Enter' && generateJD()}
//               placeholder="e.g. Senior Software Engineer (React/Node)"
//               className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all pr-32 shadow-sm"
//             />
//             <button 
//               onClick={generateJD}
//               disabled={isGenerating || !input.trim()}
//               className="absolute right-2 top-2 bottom-2 px-6 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
//             >
//               {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
//               Generate
//             </button>
//           </div>

//           <ul className="space-y-4">
//             {[
//               "Instant JD generation",
//               "Auto-attach skills & requirements",
//               "Optimized for conversion"
//             ].map((item, i) => (
//               <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
//                 <CheckCircle2 className="text-emerald-500 w-5 h-5" />
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// const LandingPage = ({ onStart }: { onStart: () => void }) => {
//   return (
//     <div className="pt-24 pb-20">
//       {/* Hero Section */}
//       <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 overflow-hidden">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="text-left"
//           >
//             <motion.span 
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-8 border border-indigo-100 uppercase tracking-wider"
//             >
//               <Zap className="w-3.5 h-3.5" />
//               The Future of HR Automation
//             </motion.span>
//             <h1 className="text-6xl md:text-7xl xl:text-8xl font-display font-bold text-slate-900 tracking-tight mb-8 leading-[0.95]">
//               Recruitment <br />
//               <span className="text-indigo-600">Redefined.</span>
//             </h1>
//             <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
//               From Resume Scraping to Final Selection. TalentFlow AI is the comprehensive HR Automation ecosystem by <span className="font-bold text-slate-900">MG³ Verse</span>, engineered to eliminate manual bottlenecks and secure top-tier talent.
//             </p>
//             <div className="flex flex-col sm:flex-row items-center gap-4">
//               <button 
//                 onClick={onStart}
//                 className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-200 flex items-center justify-center gap-3 group"
//               >
//                 Launch Dashboard
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>

//             </div>
            
//             <div className="mt-12 flex items-center gap-6">
//               <div className="flex -space-x-3">
//                 {[1, 2, 3, 4].map((i) => (
//                   <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
//                     <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" referrerPolicy="no-referrer" />
//                   </div>
//                 ))}
//               </div>
//               <div className="text-sm">
//                 <div className="font-bold text-slate-900">Trusted by 500+ HR Teams</div>
//                 <div className="text-slate-500">Global recruitment excellence</div>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div 
//             initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
//             animate={{ opacity: 1, scale: 1, rotate: 0 }}
//             transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
//             className="relative"
//           >
//             <div className="absolute -inset-10 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-[80px] opacity-50" />
//             <div className="relative bg-white rounded-[3rem] border border-slate-200 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden aspect-[4/3] flex items-center justify-center p-4">
//               <div className="w-full h-full bg-slate-50 rounded-[2rem] border border-slate-100 overflow-hidden relative group">
//                 <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-transparent" />
//                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
//                   <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
//                     <Brain className="w-10 h-10 text-indigo-600" />
//                   </div>
//                   <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">AI Talent Engine</h3>
//                   <div className="w-full max-w-xs h-2 bg-slate-200 rounded-full overflow-hidden mb-4">
//                     <motion.div 
//                       animate={{ width: ["0%", "100%"] }}
//                       transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//                       className="h-full bg-indigo-600"
//                     />
//                   </div>
//                   <p className="text-slate-500 text-sm font-medium">Analyzing 1,240+ Candidate Profiles...</p>
//                 </div>
//               </div>
//             </div>
            
//             {/* Floating Stats Card */}
//             <motion.div 
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 max-w-[200px]"
//             >
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center">
//                   <CheckCircle2 className="w-4 h-4 text-emerald-600" />
//                 </div>
//                 <span className="text-2xl font-bold text-slate-900">98%</span>
//               </div>
//               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Match Accuracy</p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Trusted Integrations */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-y border-slate-100 bg-slate-50/30">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-12">
//           <div className="text-left max-w-xs">
//             <p className="text-xs font-black text-indigo-600 uppercase tracking-[0.2em] mb-2">Ecosystem</p>
//             <h4 className="text-xl font-display font-bold text-slate-900">Seamless Enterprise Integrations</h4>
//           </div>
//           <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
//             {['MGCV_Clone','RecruitAI', 'HeyGen', 'OpenAI'].map((brand) => (
//               <span key={brand} className="text-2xl font-display font-black text-slate-900 tracking-tighter">{brand}</span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Recruitment Journey Steps */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
//         <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
//           <div className="text-left max-w-2xl">
//             <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">The MG³ Verse Methodology</span>
//             <h3 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-6 leading-tight">Complete Automation Pipeline</h3>
//             <p className="text-slate-600 text-xl leading-relaxed">
//               We've engineered a frictionless journey that automates the entire recruitment lifecycle across eight integrated stages.
//             </p>
//           </div>
//           <div className="hidden md:block">
//             <div className="p-6 bg-slate-900 rounded-3xl text-white max-w-[240px]">
//               <div className="text-3xl font-bold mb-1">75%</div>
//               <p className="text-xs text-slate-400 font-medium">Reduction in Time-to-Hire across enterprise clients.</p>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {[
//             { 
//               step: '01', 
//               title: 'Resume Scraping', 
//               desc: 'High-speed automated extraction from MGCV_Clone and major job boards via secure API protocols.',
//               icon: <RefreshCcw className="w-6 h-6" />,
//               color: 'bg-blue-50 text-blue-600'
//             },
//             { 
//               step: '02', 
//               title: 'AI Analysis', 
//               desc: 'Proprietary LLM-driven analysis utilizing advanced agent frameworks and LangGraph orchestration to score candidates against complex JD requirements with 98% precision.',
//               icon: <Brain className="w-6 h-6" />,
//               color: 'bg-purple-50 text-purple-600'
//             },
//             { 
//               step: '03', 
//               title: 'Assessment Engine', 
//               desc: 'Dynamic technical and behavioral test generation integrated with RecruitAI for deep skill verification.',
//               icon: <FileText className="w-6 h-6" />,
//               color: 'bg-emerald-50 text-emerald-600'
//             },
//             { 
//               step: '04', 
//               title: 'Automated Delivery', 
//               desc: 'Intelligent exam distribution with anti-cheat monitoring and real-time candidate engagement tracking.',
//               icon: <Zap className="w-6 h-6" />,
//               color: 'bg-orange-50 text-orange-600'
//             },
//             { 
//               step: '05', 
//               title: 'Results Processing', 
//               desc: 'Instant cross-platform score aggregation and automated qualification based on your custom thresholds.',
//               icon: <Target className="w-6 h-6" />,
//               color: 'bg-pink-50 text-pink-600'
//             },
//             { 
//               step: '06', 
//               title: 'Smart Scheduling', 
//               desc: 'Eliminate scheduling friction with automated calendar sync and multi-interviewer slot management.',
//               icon: <Calendar className="w-6 h-6" />,
//               color: 'bg-indigo-50 text-indigo-600'
//             },
//             { 
//               step: '07', 
//               title: 'AI Avatar Screening', 
//               desc: 'Scalable first-round interviews using HeyGen AI Avatars for a consistent, high-tech candidate experience.',
//               icon: <Users className="w-6 h-6" />,
//               color: 'bg-cyan-50 text-cyan-600'
//             },
//             { 
//               step: '08', 
//               title: 'Final Selection', 
//               desc: 'Data-driven decision support with multi-dimensional reports comparing top-tier candidates side-by-side.',
//               icon: <CheckCircle2 className="w-6 h-6" />,
//               color: 'bg-slate-900 text-white'
//             },
//           ].map((item, i) => (
//             <motion.div 
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               className="group relative p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
//             >
//               <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110", item.color)}>
//                 {item.icon}
//               </div>
//               <div className="text-6xl font-display font-black text-slate-50 absolute top-6 right-10 group-hover:text-indigo-50 transition-colors duration-500">{item.step}</div>
//               <h4 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">{item.title}</h4>
//               <p className="text-slate-500 leading-relaxed relative z-10 text-sm">{item.desc}</p>
              
//               <div className="mt-8 pt-8 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                 <button className="text-indigo-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
//                   Learn More
//                   <ArrowRight className="w-3 h-3" />
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
        
//         {/* AI-Powered Matching */}
//         <div className="grid md:grid-cols-2 gap-24 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">Precision Matching</span>
//             <h3 className="text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">Secure the Top 1% of Global Talent</h3>
//             <p className="text-slate-600 mb-10 text-xl leading-relaxed">
//               Our 5-dimensional AI scoring engine moves beyond simple keyword matching. We analyze technical depth, behavioral alignment, and growth potential to ensure every hire is a long-term success.
//             </p>
//             <div className="grid grid-cols-1 gap-6">
//               {[
//                 { title: "Multi-Stack Detection", desc: "Auto-detects complex stacks like MERN, LAMP, or Cloud-Native." },
//                 { title: "Cultural Alignment", desc: "AI-driven behavioral analysis against your team's core values." }
//               ].map((item, i) => (
//                 <div key={i} className="flex gap-4">
//                   <div className="mt-1 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
//                     <CheckCircle2 className="text-emerald-600 w-4 h-4" />
//                   </div>
//                   <div>
//                     <h5 className="font-bold text-slate-900 mb-1">{item.title}</h5>
//                     <p className="text-sm text-slate-500">{item.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//           <div className="relative">
//             <div className="absolute -inset-4 bg-indigo-600/5 rounded-[3rem] blur-2xl" />
//             <div className="relative bg-white rounded-[2.5rem] p-12 border border-slate-100 shadow-2xl">
//                <div className="flex items-center gap-4 mb-10">
//                   <div className="w-16 h-16 rounded-2xl bg-slate-50 overflow-hidden">
//                     <img src="https://i.pravatar.cc/150?u=sarah" alt="Candidate" referrerPolicy="no-referrer" />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-xl text-slate-900">Sarah Chen</h4>
//                     <p className="text-sm text-indigo-600 font-bold">94% Match Score</p>
//                   </div>
//                </div>
//                <div className="grid grid-cols-2 gap-6">
//                   {[
//                     { label: 'Technical', val: 92, color: 'bg-indigo-600' },
//                     { label: 'Experience', val: 88, color: 'bg-purple-600' },
//                     { label: 'Education', val: 95, color: 'bg-blue-600' },
//                     { label: 'Job Fit', val: 90, color: 'bg-pink-600' }
//                   ].map((stat, i) => (
//                     <div key={i} className="space-y-2">
//                       <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
//                         <span>{stat.label}</span>
//                         <span className="text-slate-900">{stat.val}%</span>
//                       </div>
//                       <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
//                         <motion.div 
//                           initial={{ width: 0 }}
//                           whileInView={{ width: `${stat.val}%` }}
//                           transition={{ duration: 1, delay: i * 0.1 }}
//                           className={cn("h-full rounded-full", stat.color)}
//                         />
//                       </div>
//                     </div>
//                   ))}
//                </div>
//             </div>
//           </div>
//         </div>

//         {/* AI Job Posting Generator */}
//         <JobPostingGenerator />

//         {/* Talent Pool with AI Parsing */}
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">AI-Powered Parsing</span>
//             <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Talent Pool with AI Parsing</h3>
//             <p className="text-slate-600 mb-8 text-lg leading-relaxed">
//               Upload hundreds of resumes at once. Our AI parses, formats, and structures them perfectly. Search, filter, and assign candidates to roles in seconds. Your private talent database.
//             </p>
//             <ul className="space-y-4">
//               {[
//                 "Bulk resume upload & parsing",
//                 "Private searchable database",
//                 "Automatic profile enrichment"
//               ].map((item, i) => (
//                 <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
//                   <CheckCircle2 className="text-emerald-500 w-5 h-5" />
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//           <div className="bg-slate-50 rounded-[2.5rem] p-12 border border-slate-100 flex items-center justify-center">
//             <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-100 w-full max-w-sm">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
//                   <RefreshCcw className="w-5 h-5 text-indigo-600 animate-spin" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-slate-900">AI is parsing resumes...</h4>
//                   <p className="text-xs text-slate-400">Extracting skills and experience</p>
//                 </div>
//               </div>
//               <div className="space-y-4">
//                 {[
//                   { name: 'john_doe_resume.pdf', progress: 100 },
//                   { name: 'sarah_chen_cv.pdf', progress: 65 },
//                   { name: 'mike_wilson_resume.docx', progress: 30 }
//                 ].map((file, i) => (
//                   <div key={i} className="space-y-2">
//                     <div className="flex items-center justify-between text-xs">
//                       <span className="font-medium text-slate-700">{file.name}</span>
//                       <span className="text-slate-400">{file.progress}%</span>
//                     </div>
//                     <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
//                       <motion.div 
//                         initial={{ width: 0 }}
//                         whileInView={{ width: `${file.progress}%` }}
//                         className="h-full bg-indigo-600 rounded-full" 
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Pipeline Management */}
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <div className="order-2 md:order-1 bg-slate-50 rounded-[2.5rem] p-6 border border-slate-100 flex items-center justify-center overflow-hidden">
//             <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 w-full relative overflow-hidden" style={{minHeight: 320}}>
//               {/* Top bar */}
//               <div className="flex items-center justify-end gap-3 px-4 pt-3 pb-2 border-b border-slate-50">
//                 <div className="w-5 h-5 rounded bg-slate-100 flex items-center justify-center"><span className="text-[8px] text-slate-400">💬</span></div>
//                 <div className="w-5 h-5 rounded bg-slate-100 flex items-center justify-center"><span className="text-[8px] text-slate-400">?</span></div>
//                 <div className="w-5 h-5 rounded bg-indigo-100 flex items-center justify-center"><Bell className="w-3 h-3 text-indigo-500" /></div>
//               </div>

//               {/* Kanban columns */}
//               <div className="grid grid-cols-3 gap-2 p-3">
//                 {/* APPLIED */}
//                 <div>
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-[8px] font-black text-slate-500 uppercase tracking-wider">Applied</span>
//                     <span className="text-slate-300 text-[10px]">···</span>
//                   </div>
//                   {[
//                     { name: 'Sarah J.', role: 'Sr. Dev', tags: ['React', 'New Grad'] },
//                     { name: 'Sarah L.', role: 'Sr. Dev', tags: ['React', 'New Grad'] },
//                     { name: 'Sarah J.', role: 'Sr. Dev', tags: ['React', 'New Grad'] },
//                   ].map((c, i) => (
//                     <div key={i} className="bg-slate-50 rounded-lg p-2 mb-1.5 border border-slate-100">
//                       <div className="flex items-center gap-1.5 mb-1">
//                         <div className="w-5 h-5 rounded-full bg-indigo-200 overflow-hidden flex-shrink-0">
//                           <img src={`https://i.pravatar.cc/40?u=s${i}`} alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <div className="text-[8px] font-bold text-slate-800 truncate">{c.name}</div>
//                           <div className="text-[7px] text-slate-400">{c.role}</div>
//                         </div>
//                       </div>
//                       <div className="flex gap-1 mb-1">
//                         {[...Array(4)].map((_, s) => <span key={s} className="text-yellow-400 text-[7px]">★</span>)}
//                         <span className="text-slate-200 text-[7px]">★</span>
//                       </div>
//                       <div className="text-[6px] text-slate-400 mb-1">Application 10/0/21</div>
//                       <div className="flex gap-1 flex-wrap mb-1">
//                         {c.tags.map(t => <span key={t} className="px-1 py-0.5 bg-blue-50 text-blue-600 text-[6px] font-bold rounded">{t}</span>)}
//                       </div>
//                       <div className="flex gap-2 text-[6px] text-slate-400">
//                         <span>📄 4/5</span><span>📝 Notes</span><span>📈 Activity</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* INTERVIEW */}
//                 <div>
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-[8px] font-black text-slate-500 uppercase tracking-wider">Interview</span>
//                     <span className="text-slate-300 text-[10px]">···</span>
//                   </div>
//                   {/* Highlighted card */}
//                   <div className="bg-white rounded-lg p-2 mb-1.5 border-2 border-indigo-400 shadow-md">
//                     <div className="flex items-center gap-1.5 mb-1">
//                       <div className="w-5 h-5 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
//                         <img src="https://i.pravatar.cc/40?u=david1" alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
//                       </div>
//                       <div className="flex-1">
//                         <div className="text-[8px] font-bold text-slate-800">David L.</div>
//                       </div>
//                       <Calendar className="w-2.5 h-2.5 text-indigo-500" />
//                     </div>
//                     <div className="flex items-center gap-1 text-[6px] text-slate-500 bg-slate-50 rounded p-1">
//                       <Calendar className="w-2 h-2 text-slate-400" />
//                       Interview scheduled:<br/>2:00 PM Tomorrow
//                     </div>
//                   </div>
//                   {/* Dragging card */}
//                   <motion.div
//                     animate={{ x: [0, 18, 18], y: [0, 0, 20], opacity: [1, 1, 0.7] }}
//                     transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
//                     className="bg-white rounded-lg p-2 mb-1.5 border border-slate-200 shadow-lg cursor-grab relative z-10"
//                   >
//                     <div className="flex items-center gap-1.5">
//                       <div className="w-5 h-5 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
//                         <img src="https://i.pravatar.cc/40?u=david2" alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
//                       </div>
//                       <div className="text-[8px] font-bold text-slate-800">David L.</div>
//                     </div>
//                     <div className="flex gap-2 mt-1 text-[6px] text-slate-400">
//                       <span>💬</span><span>@</span>
//                     </div>
//                     {/* Drag arrow */}
//                     <motion.div
//                       animate={{ opacity: [0, 1, 1, 0] }}
//                       transition={{ duration: 2.5, repeat: Infinity }}
//                       className="absolute -bottom-4 -right-2"
//                     >
//                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//                         <path d="M5 19L19 5M19 5H9M19 5V15" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                       </svg>
//                     </motion.div>
//                   </motion.div>
//                 </div>

//                 {/* OFFER */}
//                 <div>
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-[8px] font-black text-slate-500 uppercase tracking-wider">Offer</span>
//                     <span className="text-slate-300 text-[10px]">···</span>
//                   </div>
//                   {/* Maria G. offer extended */}
//                   <div className="bg-white rounded-lg p-2 mb-1.5 border border-emerald-200 shadow-sm">
//                     <div className="flex items-center gap-1.5 mb-1">
//                       <div className="w-5 h-5 rounded-full bg-orange-200 overflow-hidden flex-shrink-0">
//                         <img src="https://i.pravatar.cc/40?u=mariag" alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
//                       </div>
//                       <div className="flex-1">
//                         <div className="text-[8px] font-bold text-slate-800">Maria G.</div>
//                       </div>
//                       <div className="w-3 h-3 rounded bg-emerald-500 flex items-center justify-center">
//                         <span className="text-white text-[6px]">✓</span>
//                       </div>
//                     </div>
//                     <div className="px-1.5 py-0.5 bg-emerald-50 text-emerald-600 text-[6px] font-bold rounded mb-1">Offer Extended</div>
//                     <div className="flex gap-2 text-[6px] text-slate-400"><span>📝 Notes</span><span>📈 Activity</span></div>
//                   </div>
//                   {/* Maria K. */}
//                   <div className="bg-slate-50 rounded-lg p-2 border border-slate-100">
//                     <div className="flex items-center gap-1.5">
//                       <div className="w-5 h-5 rounded-full bg-purple-200 overflow-hidden flex-shrink-0">
//                         <img src="https://i.pravatar.cc/40?u=mariak" alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
//                       </div>
//                       <div className="text-[8px] font-bold text-slate-800">Maria K.</div>
//                     </div>
//                     <div className="flex gap-2 mt-1 text-[6px] text-slate-400"><span>📝 Notes</span><span>📈 Activity</span></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating tooltip: Automated notification sent */}
//               <motion.div
//                 animate={{ opacity: [0, 1, 1, 0], y: [4, 0, 0, -4] }}
//                 transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
//                 className="absolute top-8 right-2 bg-white rounded-xl shadow-xl border border-slate-100 px-3 py-2 flex items-center gap-2 max-w-[130px]"
//               >
//                 <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
//                   <span className="text-[8px]">@</span>
//                 </div>
//                 <span className="text-[8px] font-bold text-slate-700 leading-tight">Automated notification sent</span>
//               </motion.div>

//               {/* Floating tooltip: Stage set to Private */}
//               <motion.div
//                 animate={{ opacity: [0, 0, 1, 1, 0], y: [4, 4, 0, 0, -4] }}
//                 transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
//                 className="absolute bottom-10 right-2 bg-white rounded-xl shadow-xl border border-slate-100 px-3 py-2 flex items-center gap-2 max-w-[120px]"
//               >
//                 <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
//                   <span className="text-[8px]">🔒</span>
//                 </div>
//                 <span className="text-[8px] font-bold text-slate-700 leading-tight">Stage set to Private</span>
//               </motion.div>

//               {/* Dragging ghost card overlay */}
//               <motion.div
//                 animate={{ x: [140, 175, 190], y: [200, 215, 230], opacity: [0, 0.9, 0] }}
//                 transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
//                 className="absolute pointer-events-none bg-white rounded-lg p-2 border border-indigo-300 shadow-2xl w-24"
//                 style={{ top: 0, left: 0 }}
//               >
//                 <div className="flex items-center gap-1.5">
//                   <div className="w-5 h-5 rounded-full bg-pink-200 overflow-hidden flex-shrink-0">
//                     <img src="https://i.pravatar.cc/40?u=mariag2" alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
//                   </div>
//                   <div className="text-[8px] font-bold text-slate-800">Maria G.</div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="order-1 md:order-2"
//           >
//             <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">Smart Pipeline</span>
//             <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Pipeline Management</h3>
//             <p className="text-slate-600 mb-8 text-lg leading-relaxed">
//               Move candidates seamlessly from talent pool to pipeline stages. Drag-and-drop through each phase while tracking every interaction. Define visibility and automate candidate notifications at each step.
//             </p>
//             <ul className="space-y-4">
//               {[
//                 "Define public/private stages",
//                 "Email notifications per stage",
//                 "Notes, ratings & activity tracking"
//               ].map((item, i) => (
//                 <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
//                   <CheckCircle2 className="text-emerald-500 w-5 h-5" />
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         </div>

//         {/* Advanced Filtering */}
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">Smart Filtering</span>
//             <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Advanced Filtering & Staleness Alerts</h3>
//             <p className="text-slate-600 mb-8 text-lg leading-relaxed">
//               Filter candidates by stage, staleness level, tags, score range, skills, and more. Get real-time alerts when candidates stay too long in pipeline stages to keep your hiring process moving.
//             </p>
//             <ul className="space-y-4">
//               {[
//                 "9+ advanced filter types",
//                 "Real-time staleness warnings",
//                 "Smart candidate tracking"
//               ].map((item, i) => (
//                 <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
//                   <CheckCircle2 className="text-emerald-500 w-5 h-5" />
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//           <div className="bg-slate-50 rounded-[2.5rem] p-12 border border-slate-100 flex items-center justify-center">
//             <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-100 w-full max-w-sm">
//               <div className="space-y-4">
//                 <div className="flex items-center justify-between">
//                   <span className="text-xs font-bold text-slate-900">Smart Filters Active</span>
//                   <span className="text-[10px] text-slate-400">3 filters applied</span>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   <div className="px-2 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded">Score: 80%+</div>
//                   <div className="px-2 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded">Stage: Interview</div>
//                   <div className="px-2 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded">Skills: React</div>
//                 </div>
//                 <div className="p-3 bg-amber-50 border border-amber-100 rounded-xl flex items-center gap-3">
//                   <Bell className="w-4 h-4 text-amber-600" />
//                   <span className="text-[10px] font-bold text-amber-900">2 candidates stale for 5+ days</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* AI Interviews */}
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <div className="order-2 md:order-1 bg-slate-50 rounded-[2.5rem] p-12 border border-slate-100 flex items-center justify-center">
//             <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-100 w-full max-w-sm">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center">
//                   <Zap className="text-white w-6 h-6" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-slate-900">AI Interview Session</h4>
//                   <p className="text-xs text-slate-400">Technical Assessment</p>
//                 </div>
//               </div>
//               <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 mb-4">
//                 <span className="text-[8px] font-bold text-emerald-600 uppercase mb-2 block">Live Transcription</span>
//                 <p className="text-[10px] text-slate-600 italic">"Can you explain your experience with React hooks and state management?"</p>
//               </div>
//               <div className="space-y-2">
//                 <div className="flex items-center justify-between text-[10px]">
//                   <span className="font-bold text-slate-700">Technical</span>
//                   <span className="text-indigo-600 font-bold">85%</span>
//                 </div>
//                 <div className="flex items-center justify-between text-[10px]">
//                   <span className="font-bold text-slate-700">Communication</span>
//                   <span className="text-indigo-600 font-bold">92%</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="order-1 md:order-2"
//           >
//             <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">AI Interviews</span>
//             <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Boooply AI Meetings</h3>
//             <p className="text-slate-600 mb-8 text-lg leading-relaxed">
//               Native meeting platform with real-time transcription and AI-powered candidate evaluation. Conduct autonomous AI interviews for screening and technical assessments with custom question sets.
//             </p>
//             <ul className="space-y-4">
//               {[
//                 "Real-time transcription",
//                 "AI-powered candidate rating",
//                 "Autonomous AI interviews"
//               ].map((item, i) => (
//                 <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
//                   <CheckCircle2 className="text-emerald-500 w-5 h-5" />
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         </div>

//         {/* Full Pipeline Transparency */}
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">For Jobseekers</span>
//             <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Full Pipeline Transparency</h3>
//             <p className="text-slate-600 mb-8 text-lg leading-relaxed">
//               No more ghosting. Candidates get real-time visibility into their application status with automated updates at every stage. Track your journey from application to offer.
//             </p>
//             <ul className="space-y-4">
//               {[
//                 "Real-time status tracking",
//                 "Automated email notifications",
//                 "AI interview preparation"
//               ].map((item, i) => (
//                 <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
//                   <CheckCircle2 className="text-emerald-500 w-5 h-5" />
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//           <div className="bg-slate-50 rounded-[2.5rem] p-12 border border-slate-100 flex items-center justify-center">
//             <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-100 w-full max-w-sm">
//               <h4 className="font-bold text-slate-900 mb-6">Your Application</h4>
//               <div className="space-y-6">
//                 {[
//                   { label: 'Applied', date: 'Dec 18', status: 'completed' },
//                   { label: 'Screening', date: 'Dec 20', status: 'completed' },
//                   { label: 'Interview', date: 'In progress', status: 'active' },
//                   { label: 'Offer', date: '', status: 'pending' },
//                 ].map((step, i) => (
//                   <div key={i} className="flex items-center gap-4">
//                     <div className={cn(
//                       "w-6 h-6 rounded-full flex items-center justify-center",
//                       step.status === 'completed' ? "bg-emerald-500 text-white" :
//                       step.status === 'active' ? "bg-blue-500 text-white ring-4 ring-blue-100" :
//                       "bg-slate-100 text-slate-300"
//                     )}>
//                       {step.status === 'completed' ? <CheckCircle2 className="w-4 h-4" /> : <div className="w-2 h-2 rounded-full bg-current" />}
//                     </div>
//                     <div className="flex-1">
//                       <div className="text-xs font-bold text-slate-900">{step.label}</div>
//                     </div>
//                     <div className="text-[10px] font-medium text-slate-400">{step.date}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Recruitment Analytics */}
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <div className="order-2 md:order-1 bg-slate-50 rounded-[2.5rem] p-12 border border-slate-100 flex items-center justify-center">
//             <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-100 w-full max-w-sm">
//               <div className="flex items-center justify-between mb-6">
//                 <h4 className="font-bold text-slate-900">This Month</h4>
//                 <span className="text-[10px] text-slate-400">Recruitment Overview</span>
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 {[
//                   { label: 'Applications', val: '142' },
//                   { label: 'Interviews', val: '28' },
//                   { label: 'Offers Sent', val: '8', color: 'text-emerald-600' },
//                   { label: 'Avg. Time to Hire', val: '12d' }
//                 ].map((stat, i) => (
//                   <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
//                     <div className={cn("text-xl font-bold mb-1", stat.color || "text-slate-900")}>{stat.val}</div>
//                     <div className="text-[10px] text-slate-500 font-bold">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="order-1 md:order-2"
//           >
//             <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">Insights</span>
//             <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Recruitment Analytics</h3>
//             <p className="text-slate-600 mb-8 text-lg leading-relaxed">
//               Make data-driven hiring decisions with comprehensive analytics. Track KPIs, pipeline performance, team metrics, and candidate distribution across stages and locations.
//             </p>
//             <ul className="space-y-4">
//               {[
//                 "KPI tracking dashboard",
//                 "Pipeline performance metrics",
//                 "Geographic distribution"
//               ].map((item, i) => (
//                 <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
//                   <CheckCircle2 className="text-emerald-500 w-5 h-5" />
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         </div>

//       </section>

//       {/* Final CTA */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
//         <div className="bg-indigo-600 rounded-[3rem] p-16 text-white relative overflow-hidden">
//           <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
//           <div className="relative z-10">
//             <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to transform your hiring?</h2>
//             <p className="text-indigo-100 text-lg mb-12 max-w-2xl mx-auto">
//               Join hundreds of companies using TalentFlow AI to build their dream teams faster and more effectively.
//             </p>
//             <button 
//               onClick={onStart}
//               className="px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl"
//             >
//               Get Started for Free
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// const Dashboard = () => {
//   return (
//     <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
//         <div>
//           <h1 className="text-3xl font-display font-bold text-slate-900">Recruitment Dashboard</h1>
//           <p className="text-slate-500">Welcome back! Here's your recruitment overview <span className="text-xs ml-2 opacity-60">Last updated: 11:30:23</span></p>
//         </div>
//         <div className="flex items-center gap-3">
//           <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
//             <RefreshCcw className="w-5 h-5" />
//           </button>
//           <div className="relative">
//             <select className="appearance-none bg-white border border-slate-200 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
//               <option>This Month</option>
//               <option>Last Month</option>
//               <option>All Time</option>
//             </select>
//             <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
//           </div>
//           <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2">
//             <Plus className="w-4 h-4" />
//             New Pipeline
//           </button>
//         </div>
//       </div>

//       {/* Recruitment Journey Map */}
//       <div className="bg-white rounded-[2.5rem] border border-slate-100 p-10 mb-8 shadow-sm overflow-x-auto">
//         <div className="flex items-center justify-between mb-12">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
//               <Layers className="w-5 h-5 text-indigo-600" />
//             </div>
//             <div>
//               <h3 className="text-lg font-bold text-slate-900">Automation Pipeline Status</h3>
//               <p className="text-xs text-slate-500">Real-time tracking across 8 integrated stages</p>
//             </div>
//           </div>
//           <div className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-100 flex items-center gap-2">
//             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
//             System Active
//           </div>
//         </div>
        
//         <div className="min-w-[1000px] flex items-center justify-between relative px-8">
//           {/* Progress Line */}
//           <div className="absolute top-[24px] left-12 right-12 h-1 bg-slate-100 z-0">
//             <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[45%] rounded-full" />
//           </div>

//           {[
//             { icon: RefreshCcw, label: 'Scraping', active: true },
//             { icon: Brain, label: 'Analysis', active: true },
//             { icon: FileText, label: 'Assessment', active: true },
//             { icon: Zap, label: 'Distribution', active: true, current: true, badge: 12 },
//             { icon: Target, label: 'Processing', active: false, badge: 4 },
//             { icon: Calendar, label: 'Scheduling', active: false },
//             { icon: Users, label: 'AI Interview', active: false },
//             { icon: CheckCircle2, label: 'Selection', active: false },
//           ].map((step, i) => (
//             <div key={i} className="relative z-10 flex flex-col items-center text-center max-w-[100px]">
//               <div className={cn(
//                 "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 mb-4",
//                 step.current ? "bg-indigo-600 text-white ring-8 ring-indigo-50 scale-110" : 
//                 step.active ? "bg-white border-2 border-indigo-600 text-indigo-600 shadow-lg shadow-indigo-100" : 
//                 "bg-white border-2 border-slate-100 text-slate-300"
//               )}>
//                 <step.icon className="w-5 h-5" />
//                 {step.badge && (
//                   <span className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-lg">
//                     {step.badge}
//                   </span>
//                 )}
//               </div>
//               <h4 className={cn("text-[10px] font-black uppercase tracking-wider mb-1", step.active ? "text-slate-900" : "text-slate-300")}>{step.label}</h4>
//             </div>
//           ))}
//         </div>
//         <div className="mt-12 flex items-center justify-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
//           <div className="flex items-center gap-2 text-indigo-600">
//             <div className="w-2 h-2 rounded-full bg-indigo-600" />
//             Completed
//           </div>
//           <div className="flex items-center gap-2 text-slate-300">
//             <div className="w-2 h-2 rounded-full bg-slate-200" />
//             Pending
//           </div>
//         </div>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         {[
//           { label: 'Total Applications', val: '14', change: '+12.5%', icon: Users, color: 'bg-blue-50 text-blue-600' },
//           { label: 'Shortlist Rate', val: '50.0%', change: '+5.2%', icon: Target, color: 'bg-emerald-50 text-emerald-600' },
//           { label: 'Time-to-Hire', val: '0d', change: '-8.3%', icon: Calendar, color: 'bg-orange-50 text-orange-600' },
//           { label: 'Pending Actions', val: '0', change: null, icon: Bell, color: 'bg-purple-50 text-purple-600' },
//         ].map((stat, i) => (
//           <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
//             <div className="flex items-center justify-between mb-4">
//               <span className="text-xs font-semibold text-slate-500">{stat.label}</span>
//               <div className={cn("p-2 rounded-lg", stat.color)}>
//                 <stat.icon className="w-4 h-4" />
//               </div>
//             </div>
//             <div className="flex items-end gap-2">
//               <span className="text-2xl font-bold text-slate-900">{stat.val}</span>
//               {stat.change && (
//                 <span className={cn("text-xs font-bold mb-1", stat.change.startsWith('+') ? "text-emerald-500" : "text-red-500")}>
//                   {stat.change}
//                 </span>
//               )}
//             </div>
//             <p className="text-[10px] text-slate-400 mt-1">All time applications</p>
//           </div>
//         ))}
//       </div>

//       {/* Charts Section */}
//       <div className="grid lg:grid-cols-2 gap-8">
//         <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
//           <h3 className="text-lg font-bold text-slate-900 mb-6">Recruitment Pipeline</h3>
//           <div className="h-[300px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={pipelineData}>
//                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
//                 <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
//                 <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
//                 <Tooltip 
//                   cursor={{ fill: '#f8fafc' }}
//                   contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
//                 />
//                 <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
//           <h3 className="text-lg font-bold text-slate-900 mb-6">Recruitment Activity</h3>
//           <div className="h-[300px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={activityData}>
//                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
//                 <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
//                 <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
//                 <Tooltip 
//                   contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
//                 />
//                 <Line type="monotone" dataKey="count" stroke="#6366f1" strokeWidth={3} dot={{ r: 4, fill: '#6366f1', strokeWidth: 2, stroke: '#fff' }} />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function App() {
//   const [view, setView] = useState('landing');

//   return (
//     <div className="min-h-screen bg-slate-50/50">
//       <Navbar onNavigate={setView} currentView={view} />
      
//       <main>
//         <AnimatePresence mode="wait">
//           {view === 'landing' ? (
//             <motion.div
//               key="landing"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <LandingPage onStart={() => setView('dashboard')} />
//             </motion.div>
//           ) : (
//             <motion.div
//               key="dashboard"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <Dashboard />
//             </motion.div>
//           )
//           }
//         </AnimatePresence>
//       </main>

//       {/* Footer */}
//       <footer className="bg-white border-t border-slate-100 py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
//                 <Brain className="text-white w-5 h-5" />
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-lg font-display font-bold text-slate-900 leading-none">TalentFlow AI</span>
//                 <span className="text-[8px] font-bold text-indigo-600 tracking-widest uppercase mt-0.5">By MG³ Verse</span>
//               </div>
//             </div>
//             <div className="flex gap-8">
//               <a href="#" className="text-sm text-slate-500 hover:text-indigo-600">Privacy Policy</a>
//               <a href="#" className="text-sm text-slate-500 hover:text-indigo-600">Terms of Service</a>
//               <a href="#" className="text-sm text-slate-500 hover:text-indigo-600">Contact Us</a>
//             </div>
//             <p className="text-sm text-slate-400">© 2026 TalentFlow AI. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  FileText, 
  BarChart3, 
  LogOut, 
  Plus, 
  Search, 
  Bell, 
  RefreshCcw,
  ChevronDown,
  CheckCircle2,
  Brain,
  Zap,
  ShieldCheck,
  ArrowRight,
  Menu,
  X,
  Briefcase,
  UserPlus,
  Target,
  Layers,
  Sparkles,
  Download,
  Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';
import { cn } from './lib/utils';

// --- Mock Data ---
const pipelineData = [
  { name: 'Applied', value: 14, fill: '#3b82f6' },
  { name: 'Interview', value: 13, fill: '#10b981' },
  { name: 'Offer', value: 6, fill: '#f59e0b' },
];

const activityData = [
  { day: 'Mon', count: 4 },
  { day: 'Tue', count: 7 },
  { day: 'Wed', count: 5 },
  { day: 'Thu', count: 9 },
  { day: 'Fri', count: 12 },
  { day: 'Sat', count: 3 },
  { day: 'Sun', count: 2 },
];

// --- Components ---

const Navbar = ({ onNavigate, currentView }: { onNavigate: (view: string) => void, currentView: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('landing')}>
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Brain className="text-white w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold text-slate-900 leading-none">TalentFlow AI</span>
              <span className="text-[10px] font-bold text-indigo-600 tracking-widest uppercase mt-1">By MG³ Verse</span>
            </div>
          </div>

          {/* Desktop Nav - Removed as requested */}
          <div className="hidden md:flex items-center gap-8">
          </div>

          <div className="hidden md:flex items-center gap-4">
            {currentView === 'dashboard' && (
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors ml-4">
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {currentView === 'dashboard' ? (
                <button 
                  onClick={() => { onNavigate('landing'); setIsMenuOpen(false); }} 
                  className="flex items-center gap-2 w-full px-3 py-2 text-base font-medium text-red-600 hover:bg-red-50 rounded-md"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              ) : (
                <button 
                  onClick={() => { onNavigate('dashboard'); setIsMenuOpen(false); }} 
                  className="block w-full text-left px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
                >
                  Go to Dashboard
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const DemoModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    {
      title: "01. Intelligent Sourcing",
      description: "Our system autonomously scrapes and parses resumes from MGCV_Clone and global talent pools, extracting deep technical stacks and experience data instantly.",
      icon: <RefreshCcw className="w-12 h-12 text-indigo-600" />,
      image: "https://picsum.photos/seed/sourcing/800/450"
    },
    {
      title: "02. 5D AI Analysis",
      description: "Proprietary LLM-driven analysis utilizing advanced agent frameworks and LangGraph orchestration. This multi-agent system scores candidates against complex JD requirements with 98% precision, ensuring deep technical and behavioral alignment.",
      icon: <Brain className="w-12 h-12 text-purple-600" />,
      image: "https://picsum.photos/seed/analysis/800/450"
    },
    {
      title: "03. Automated Assessments",
      description: "AI-generated technical exams are distributed via Testlify, with real-time monitoring and automated results processing to qualify top-tier talent.",
      icon: <FileText className="w-12 h-12 text-emerald-600" />,
      image: "https://picsum.photos/seed/assessment/800/450"
    },
    {
      title: "04. AI Avatar Screening",
      description: "Scalable first-round interviews conducted by HeyGen AI Avatars, providing consistent screening with live transcription and sentiment analysis.",
      icon: <Users className="w-12 h-12 text-blue-600" />,
      image: "https://picsum.photos/seed/avatar/800/450"
    },
    {
      title: "05. Data-Driven Selection",
      description: "A unified dashboard provides multi-dimensional reports and transparency for the entire hiring team, ensuring the final selection is backed by data.",
      icon: <LayoutDashboard className="w-12 h-12 text-slate-900" />,
      image: "https://picsum.photos/seed/selection/800/450"
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row h-[80vh] md:h-auto max-h-[90vh]"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-slate-600" />
        </button>

        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            {steps[currentStep].icon}
          </div>
          <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">
            {steps[currentStep].title}
          </h3>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            {steps[currentStep].description}
          </p>
          
          <div className="flex items-center gap-4 mt-auto">
            <button 
              disabled={currentStep === 0}
              onClick={() => setCurrentStep(prev => prev - 1)}
              className="p-3 rounded-xl border border-slate-200 disabled:opacity-30 hover:bg-slate-50 transition-colors"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-600 transition-all duration-500" 
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
            <button 
              onClick={() => {
                if (currentStep === steps.length - 1) {
                  onClose();
                } else {
                  setCurrentStep(prev => prev + 1);
                }
              }}
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors flex items-center gap-2"
            >
              {currentStep === steps.length - 1 ? "Finish" : "Next"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="md:w-1/2 bg-slate-50 relative overflow-hidden hidden md:block">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              src={steps[currentStep].image}
              alt={steps[currentStep].title}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
};

// --- AI Job Posting Generator Component ---
const JobPostingGenerator = () => {
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedJD, setGeneratedJD] = useState<any>(null);

  const generateJD = async () => {
    if (!input.trim()) return;
    
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Generate a professional job description for the following position: ${input}. 
        Include a brief description, a list of responsibilities, and a list of required skills and requirements. 
        Also provide 3-4 short skill tags.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              responsibilities: { 
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              requirements: { 
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              tags: { 
                type: Type.ARRAY,
                items: { type: Type.STRING }
              }
            },
            required: ["title", "description", "responsibilities", "requirements", "tags"]
          }
        }
      });

      if (response.text) {
        setGeneratedJD(JSON.parse(response.text));
      }
    } catch (error) {
      console.error("Error generating JD:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div className="order-2 md:order-1 bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 flex flex-col items-center justify-center min-h-[500px]">
        {!generatedJD && !isGenerating ? (
          <div className="text-center space-y-6 max-w-sm">
            <div className="w-20 h-20 bg-indigo-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-indigo-600" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900">Ready to Generate</h4>
            <p className="text-slate-500">Enter a job title or key phrases on the right to see the AI in action.</p>
          </div>
        ) : isGenerating ? (
          <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-100 w-full max-w-md animate-pulse">
            <div className="space-y-6">
              <div className="h-6 w-3/4 bg-slate-100 rounded" />
              <div className="space-y-2">
                <div className="h-3 w-full bg-slate-50 rounded" />
                <div className="h-3 w-full bg-slate-50 rounded" />
                <div className="h-3 w-2/3 bg-slate-50 rounded" />
              </div>
              <div className="space-y-3 pt-4">
                <div className="h-4 w-1/2 bg-slate-100 rounded" />
                <div className="h-2 w-full bg-slate-50 rounded" />
                <div className="h-2 w-full bg-slate-50 rounded" />
              </div>
              <div className="flex gap-2 pt-6">
                <div className="h-6 w-16 bg-slate-100 rounded-full" />
                <div className="h-6 w-16 bg-slate-100 rounded-full" />
                <div className="h-6 w-16 bg-slate-100 rounded-full" />
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
            </div>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl border border-slate-100 w-full max-w-md overflow-hidden flex flex-col"
          >
            <div className="p-8 space-y-6 flex-1 overflow-y-auto max-h-[500px] scrollbar-hide">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Job Title / Key Phrases</p>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-slate-900 font-medium">
                  {generatedJD.title}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h5 className="font-bold text-slate-900 mb-2">Description:</h5>
                  <p className="text-sm text-slate-600 leading-relaxed">{generatedJD.description}</p>
                </div>

                <div>
                  <h5 className="font-bold text-slate-900 mb-2">Responsibilities:</h5>
                  <ul className="space-y-1.5">
                    {generatedJD.responsibilities.map((item: string, i: number) => (
                      <li key={i} className="text-sm text-slate-600 flex gap-2">
                        <span className="text-indigo-400 font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold text-slate-900 mb-2">Required Skills & Requirements:</h5>
                  <ul className="space-y-1.5">
                    {generatedJD.requirements.map((item: string, i: number) => (
                      <li key={i} className="text-sm text-slate-600 flex gap-2">
                        <span className="text-indigo-400 font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {generatedJD.tags.map((tag: string, i: number) => (
                    <div key={i} className={cn(
                      "px-3 py-1 text-[10px] font-bold rounded-full",
                      i % 3 === 0 ? "bg-blue-50 text-blue-600" :
                      i % 3 === 1 ? "bg-emerald-50 text-emerald-600" :
                      "bg-purple-50 text-purple-600"
                    )}>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button 
              onClick={handleDownload}
              className="w-full py-4 bg-slate-50 border-t border-slate-100 text-slate-600 font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download as PDF
            </button>
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="order-1 md:order-2"
      >
        <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">AI-Powered Generation</span>
        <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">AI Job Posting Generator</h3>
        <p className="text-slate-600 mb-8 text-lg leading-relaxed">
          Type a few words, get a complete job description. AI generates compelling JDs, automatically attaches required skills, requirements, and benefits.
        </p>

        <div className="space-y-6 mb-10">
          <div className="relative">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && generateJD()}
              placeholder="e.g. Senior Software Engineer (React/Node)"
              className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all pr-32 shadow-sm"
            />
            <button 
              onClick={generateJD}
              disabled={isGenerating || !input.trim()}
              className="absolute right-2 top-2 bottom-2 px-6 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
              Generate
            </button>
          </div>

          <ul className="space-y-4">
            {[
              "Instant JD generation",
              "Auto-attach skills & requirements",
              "Optimized for conversion"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

const LandingPage = ({ onStart }: { onStart: () => void }) => {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-8 border border-indigo-100 uppercase tracking-wider"
            >
              <Zap className="w-3.5 h-3.5" />
              The Future of HR Automation
            </motion.span>
            <h1 className="text-6xl md:text-7xl xl:text-8xl font-display font-bold text-slate-900 tracking-tight mb-8 leading-[0.95]">
              Recruitment <br />
              <span className="text-indigo-600">Redefined.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              From Resume Scraping to Final Selection. TalentFlow AI is the comprehensive HR Automation ecosystem by <span className="font-bold text-slate-900">MG³ Verse</span>, engineered to eliminate manual bottlenecks and secure top-tier talent.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="https://mgcv-final-frontend.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-200 flex items-center justify-center gap-3 group"
              >
                Launch Dashboard
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="font-bold text-slate-900">Trusted by 500+ HR Teams</div>
                <div className="text-slate-500">Global recruitment excellence</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-[80px] opacity-50" />
            <div className="relative bg-white rounded-[3rem] border border-slate-200 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden aspect-[4/3] flex items-center justify-center p-4">
              <div className="w-full h-full bg-slate-50 rounded-[2rem] border border-slate-100 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                  <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Brain className="w-10 h-10 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">AI Talent Engine</h3>
                  <div className="w-full max-w-xs h-2 bg-slate-200 rounded-full overflow-hidden mb-4">
                    <motion.div 
                      animate={{ width: ["0%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="h-full bg-indigo-600"
                    />
                  </div>
                  <p className="text-slate-500 text-sm font-medium">Analyzing 1,240+ Candidate Profiles...</p>
                </div>
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-2xl font-bold text-slate-900">98%</span>
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Match Accuracy</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trusted Integrations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-y border-slate-100 bg-slate-50/30">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-left max-w-xs">
            <p className="text-xs font-black text-indigo-600 uppercase tracking-[0.2em] mb-2">Ecosystem</p>
            <h4 className="text-xl font-display font-bold text-slate-900">Seamless Enterprise Integrations</h4>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {['MGCV_Clone','RecruitAI', 'HeyGen', 'OpenAI'].map((brand) => (
              <span key={brand} className="text-2xl font-display font-black text-slate-900 tracking-tighter">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Journey Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="text-left max-w-2xl">
            <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">The MG³ Verse Methodology</span>
            <h3 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-6 leading-tight">Complete Automation Pipeline</h3>
            <p className="text-slate-600 text-xl leading-relaxed">
              We've engineered a frictionless journey that automates the entire recruitment lifecycle across eight integrated stages.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="p-6 bg-slate-900 rounded-3xl text-white max-w-[240px]">
              <div className="text-3xl font-bold mb-1">75%</div>
              <p className="text-xs text-slate-400 font-medium">Reduction in Time-to-Hire across enterprise clients.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              step: '01', 
              title: 'Resume Scraping', 
              desc: 'High-speed automated extraction from MGCV_Clone and major job boards via secure API protocols.',
              icon: <RefreshCcw className="w-6 h-6" />,
              color: 'bg-blue-50 text-blue-600'
            },
            { 
              step: '02', 
              title: 'AI Analysis', 
              desc: 'Proprietary LLM-driven analysis utilizing advanced agent frameworks and LangGraph orchestration to score candidates against complex JD requirements with 98% precision.',
              icon: <Brain className="w-6 h-6" />,
              color: 'bg-purple-50 text-purple-600'
            },
            { 
              step: '03', 
              title: 'Assessment Engine', 
              desc: 'Dynamic technical and behavioral test generation integrated with RecruitAI for deep skill verification.',
              icon: <FileText className="w-6 h-6" />,
              color: 'bg-emerald-50 text-emerald-600'
            },
            { 
              step: '04', 
              title: 'Automated Delivery', 
              desc: 'Intelligent exam distribution with anti-cheat monitoring and real-time candidate engagement tracking.',
              icon: <Zap className="w-6 h-6" />,
              color: 'bg-orange-50 text-orange-600'
            },
            { 
              step: '05', 
              title: 'Results Processing', 
              desc: 'Instant cross-platform score aggregation and automated qualification based on your custom thresholds.',
              icon: <Target className="w-6 h-6" />,
              color: 'bg-pink-50 text-pink-600'
            },
            { 
              step: '06', 
              title: 'Smart Scheduling', 
              desc: 'Eliminate scheduling friction with automated calendar sync and multi-interviewer slot management.',
              icon: <Calendar className="w-6 h-6" />,
              color: 'bg-indigo-50 text-indigo-600'
            },
            { 
              step: '07', 
              title: 'AI Avatar Screening', 
              desc: 'Scalable first-round interviews using HeyGen AI Avatars for a consistent, high-tech candidate experience.',
              icon: <Users className="w-6 h-6" />,
              color: 'bg-cyan-50 text-cyan-600'
            },
            { 
              step: '08', 
              title: 'Final Selection', 
              desc: 'Data-driven decision support with multi-dimensional reports comparing top-tier candidates side-by-side.',
              icon: <CheckCircle2 className="w-6 h-6" />,
              color: 'bg-slate-900 text-white'
            },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110", item.color)}>
                {item.icon}
              </div>
              <div className="text-6xl font-display font-black text-slate-50 absolute top-6 right-10 group-hover:text-indigo-50 transition-colors duration-500">{item.step}</div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">{item.title}</h4>
              <p className="text-slate-500 leading-relaxed relative z-10 text-sm">{item.desc}</p>
              
              <div className="mt-8 pt-8 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <button className="text-indigo-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
        
        {/* AI-Powered Matching */}
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">Precision Matching</span>
            <h3 className="text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">Secure the Top 1% of Global Talent</h3>
            <p className="text-slate-600 mb-10 text-xl leading-relaxed">
              Our 5-dimensional AI scoring engine moves beyond simple keyword matching. We analyze technical depth, behavioral alignment, and growth potential to ensure every hire is a long-term success.
            </p>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: "Multi-Stack Detection", desc: "Auto-detects complex stacks like MERN, LAMP, or Cloud-Native." },
                { title: "Cultural Alignment", desc: "AI-driven behavioral analysis against your team's core values." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-emerald-600 w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">{item.title}</h5>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-600/5 rounded-[3rem] blur-2xl" />
            <div className="relative bg-white rounded-[2.5rem] p-12 border border-slate-100 shadow-2xl">
               <div className="flex items-center gap-4 mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?u=sarah" alt="Candidate" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-slate-900">Sarah Chen</h4>
                    <p className="text-sm text-indigo-600 font-bold">94% Match Score</p>
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: 'Technical', val: 92, color: 'bg-indigo-600' },
                    { label: 'Experience', val: 88, color: 'bg-purple-600' },
                    { label: 'Education', val: 95, color: 'bg-blue-600' },
                    { label: 'Job Fit', val: 90, color: 'bg-pink-600' }
                  ].map((stat, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        <span>{stat.label}</span>
                        <span className="text-slate-900">{stat.val}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.val}%` }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className={cn("h-full rounded-full", stat.color)}
                        />
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>

        {/* AI Job Posting Generator */}
        <JobPostingGenerator />

        {/* Talent Pool with AI Parsing */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">AI-Powered Parsing</span>
            <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Talent Pool with AI Parsing</h3>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Upload hundreds of resumes at once. Our AI parses, formats, and structures them perfectly. Search, filter, and assign candidates to roles in seconds. Your private talent database.
            </p>
            <ul className="space-y-4">
              {[
                "Bulk resume upload & parsing",
                "Private searchable database",
                "Automatic profile enrichment"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <div className="bg-slate-50 rounded-[2.5rem] p-12 border border-slate-100 flex items-center justify-center">
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-100 w-full max-w-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                  <RefreshCcw className="w-5 h-5 text-indigo-600 animate-spin" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">AI is parsing resumes...</h4>
                  <p className="text-xs text-slate-400">Extracting skills and experience</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'john_doe_resume.pdf', progress: 100 },
                  { name: 'sarah_chen_cv.pdf', progress: 65 },
                  { name: 'mike_wilson_resume.docx', progress: 30 }
                ].map((file, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-700">{file.name}</span>
                      <span className="text-slate-400">{file.progress}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${file.progress}%` }}
                        className="h-full bg-indigo-600 rounded-full" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pipeline Management */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 bg-slate-50 rounded-[2.5rem] p-6 border border-slate-100 flex items-center justify-center overflow-hidden">
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 w-full relative overflow-hidden" style={{minHeight: 320}}>
              {/* Top bar */}
              <div className="flex items-center justify-end gap-3 px-4 pt-3 pb-2 border-b border-slate-50">
                <div className="w-5 h-5 rounded bg-slate-100 flex items-center justify-center"><span className="text-[8px] text-slate-400">💬</span></div>
                <div className="w-5 h-5 rounded bg-slate-100 flex items-center justify-center"><span className="text-[8px] text-slate-400">?</span></div>
                <div className="w-5 h-5 rounded bg-indigo-100 flex items-center justify-center"><Bell className="w-3 h-3 text-indigo-500" /></div>
              </div>

              {/* Kanban columns */}
              <div className="grid grid-cols-3 gap-2 p-3">
                {/* APPLIED */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[8px] font-black text-slate-500 uppercase tracking-wider">Applied</span>
                    <span className="text-slate-300 text-[10px]">···</span>
                  </div>
                  {[
                    { name: 'Sarah J.', role: 'Sr. Dev', tags: ['React', 'New Grad'] },
                    { name: 'Sarah L.', role: 'Sr. Dev', tags: ['React', 'New Grad'] },
                    { name: 'Sarah J.', role: 'Sr. Dev', tags: ['React', 'New Grad'] },
                  ].map((c, i) => (
                    <div key={i} className="bg-slate-50 rounded-lg p-2 mb-1.5 border border-slate-100">
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="w-5 h-5 rounded-full bg-indigo-200 overflow-hidden flex-shrink-0">
                          <img src={`https://i.pravatar.cc/40?u=s${i}`} alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[8px] font-bold text-slate-800 truncate">{c.name}</div>
                          <div className="text-[7px] text-slate-400">{c.role}</div>
                        </div>
                      </div>
                      <div className="flex gap-1 mb-1">
                        {[...Array(4)].map((_, s) => <span key={s} className="text-yellow-400 text-[7px]">★</span>)}
                        <span className="text-slate-200 text-[7px]">★</span>
                      </div>
                      <div className="text-[6px] text-slate-400 mb-1">Application 10/0/21</div>
                      <div className="flex gap-1 flex-wrap mb-1">
                        {c.tags.map(t => <span key={t} className="px-1 py-0.5 bg-blue-50 text-blue-600 text-[6px] font-bold rounded">{t}</span>)}
                      </div>
                      <div className="flex gap-2 text-[6px] text-slate-400">
                        <span>📄 4/5</span><span>📝 Notes</span><span>📈 Activity</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* INTERVIEW */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[8px] font-black text-slate-500 uppercase tracking-wider">Interview</span>
                    <span className="text-slate-300 text-[10px]">···</span>
                  </div>
                  {/* Highlighted card */}
                  <div className="bg-white rounded-lg p-2 mb-1.5 border-2 border-indigo-400 shadow-md">
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="w-5 h-5 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
                        <img src="https://i.pravatar.cc/40?u=david1" alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[8px] font-bold text-slate-800">David L.</div>
                      </div>
                      <Calendar className="w-2.5 h-2.5 text-indigo-500" />
                    </div>
                    <div className="flex items-center gap-1 text-[6px] text-slate-500 bg-slate-50 rounded p-1">
                      <Calendar className="w-2 h-2 text-slate-400" />
                      Interview scheduled:<br/>2:00 PM Tomorrow
                    </div>
                  </div>
                  {/* Dragging card */}
                  <motion.div
                    animate={{ x: [0, 18, 18], y: [0, 0, 20], opacity: [1, 1, 0.7] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-white rounded-lg p-2 mb-1.5 border border-slate-200 shadow-lg cursor-grab relative z-10"
                  >
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
                        <img src="https://i.pravatar.cc/40?u=david2" alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                      </div>
                      <div className="text-[8px] font-bold text-slate-800">David L.</div>
                    </div>
                    <div className="flex gap-2 mt-1 text-[6px] text-slate-400">
                      <span>💬</span><span>@</span>
                    </div>
                    {/* Drag arrow */}
                    <motion.div
                      animate={{ opacity: [0, 1, 1, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="absolute -bottom-4 -right-2"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M5 19L19 5M19 5H9M19 5V15" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </motion.div>
                </div>

                {/* OFFER */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[8px] font-black text-slate-500 uppercase tracking-wider">Offer</span>
                    <span className="text-slate-300 text-[10px]">···</span>
                  </div>
                  {/* Maria G. offer extended */}
                  <div className="bg-white rounded-lg p-2 mb-1.5 border border-emerald-200 shadow-sm">
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="w-5 h-5 rounded-full bg-orange-200 overflow-hidden flex-shrink-0">
                        <img src="https://i.pravatar.cc/40?u=mariag" alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[8px] font-bold text-slate-800">Maria G.</div>
                      </div>
                      <div className="w-3 h-3 rounded bg-emerald-500 flex items-center justify-center">
                        <span className="text-white text-[6px]">✓</span>
                      </div>
                    </div>
                    <div className="px-1.5 py-0.5 bg-emerald-50 text-emerald-600 text-[6px] font-bold rounded mb-1">Offer Extended</div>
                    <div className="flex gap-2 text-[6px] text-slate-400"><span>📝 Notes</span><span>📈 Activity</span></div>
                  </div>
                  {/* Maria K. */}
                  <div className="bg-slate-50 rounded-lg p-2 border border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-purple-200 overflow-hidden flex-shrink-0">
                        <img src="https://i.pravatar.cc/40?u=mariak" alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                      </div>
                      <div className="text-[8px] font-bold text-slate-800">Maria K.</div>
                    </div>
                    <div className="flex gap-2 mt-1 text-[6px] text-slate-400"><span>📝 Notes</span><span>📈 Activity</span></div>
                  </div>
                </div>
              </div>

              {/* Floating tooltip: Automated notification sent */}
              <motion.div
                animate={{ opacity: [0, 1, 1, 0], y: [4, 0, 0, -4] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute top-8 right-2 bg-white rounded-xl shadow-xl border border-slate-100 px-3 py-2 flex items-center gap-2 max-w-[130px]"
              >
                <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-[8px]">@</span>
                </div>
                <span className="text-[8px] font-bold text-slate-700 leading-tight">Automated notification sent</span>
              </motion.div>

              {/* Floating tooltip: Stage set to Private */}
              <motion.div
                animate={{ opacity: [0, 0, 1, 1, 0], y: [4, 4, 0, 0, -4] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-10 right-2 bg-white rounded-xl shadow-xl border border-slate-100 px-3 py-2 flex items-center gap-2 max-w-[120px]"
              >
                <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-[8px]">🔒</span>
                </div>
                <span className="text-[8px] font-bold text-slate-700 leading-tight">Stage set to Private</span>
              </motion.div>

              {/* Dragging ghost card overlay */}
              <motion.div
                animate={{ x: [140, 175, 190], y: [200, 215, 230], opacity: [0, 0.9, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute pointer-events-none bg-white rounded-lg p-2 border border-indigo-300 shadow-2xl w-24"
                style={{ top: 0, left: 0 }}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-pink-200 overflow-hidden flex-shrink-0">
                    <img src="https://i.pravatar.cc/40?u=mariag2" alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-[8px] font-bold text-slate-800">Maria G.</div>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">Smart Pipeline</span>
            <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Pipeline Management</h3>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Move candidates seamlessly from talent pool to pipeline stages. Drag-and-drop through each phase while tracking every interaction. Define visibility and automate candidate notifications at each step.
            </p>
            <ul className="space-y-4">
              {[
                "Define public/private stages",
                "Email notifications per stage",
                "Notes, ratings & activity tracking"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Advanced Filtering */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">Smart Filtering</span>
            <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Advanced Filtering & Staleness Alerts</h3>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Filter candidates by stage, staleness level, tags, score range, skills, and more. Get real-time alerts when candidates stay too long in pipeline stages to keep your hiring process moving.
            </p>
            <ul className="space-y-4">
              {[
                "9+ advanced filter types",
                "Real-time staleness warnings",
                "Smart candidate tracking"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <div className="bg-slate-50 rounded-[2.5rem] p-12 border border-slate-100 flex items-center justify-center">
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-100 w-full max-w-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">Smart Filters Active</span>
                  <span className="text-[10px] text-slate-400">3 filters applied</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="px-2 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded">Score: 80%+</div>
                  <div className="px-2 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded">Stage: Interview</div>
                  <div className="px-2 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded">Skills: React</div>
                </div>
                <div className="p-3 bg-amber-50 border border-amber-100 rounded-xl flex items-center gap-3">
                  <Bell className="w-4 h-4 text-amber-600" />
                  <span className="text-[10px] font-bold text-amber-900">2 candidates stale for 5+ days</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Interviews */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 bg-slate-50 rounded-[2.5rem] p-12 border border-slate-100 flex items-center justify-center">
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-100 w-full max-w-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center">
                  <Zap className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">AI Interview Session</h4>
                  <p className="text-xs text-slate-400">Technical Assessment</p>
                </div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 mb-4">
                <span className="text-[8px] font-bold text-emerald-600 uppercase mb-2 block">Live Transcription</span>
                <p className="text-[10px] text-slate-600 italic">"Can you explain your experience with React hooks and state management?"</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-bold text-slate-700">Technical</span>
                  <span className="text-indigo-600 font-bold">85%</span>
                </div>
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-bold text-slate-700">Communication</span>
                  <span className="text-indigo-600 font-bold">92%</span>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">AI Interviews</span>
            <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Boooply AI Meetings</h3>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Native meeting platform with real-time transcription and AI-powered candidate evaluation. Conduct autonomous AI interviews for screening and technical assessments with custom question sets.
            </p>
            <ul className="space-y-4">
              {[
                "Real-time transcription",
                "AI-powered candidate rating",
                "Autonomous AI interviews"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Full Pipeline Transparency */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">For Jobseekers</span>
            <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Full Pipeline Transparency</h3>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              No more ghosting. Candidates get real-time visibility into their application status with automated updates at every stage. Track your journey from application to offer.
            </p>
            <ul className="space-y-4">
              {[
                "Real-time status tracking",
                "Automated email notifications",
                "AI interview preparation"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <div className="bg-slate-50 rounded-[2.5rem] p-12 border border-slate-100 flex items-center justify-center">
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-100 w-full max-w-sm">
              <h4 className="font-bold text-slate-900 mb-6">Your Application</h4>
              <div className="space-y-6">
                {[
                  { label: 'Applied', date: 'Dec 18', status: 'completed' },
                  { label: 'Screening', date: 'Dec 20', status: 'completed' },
                  { label: 'Interview', date: 'In progress', status: 'active' },
                  { label: 'Offer', date: '', status: 'pending' },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className={cn(
                      "w-6 h-6 rounded-full flex items-center justify-center",
                      step.status === 'completed' ? "bg-emerald-500 text-white" :
                      step.status === 'active' ? "bg-blue-500 text-white ring-4 ring-blue-100" :
                      "bg-slate-100 text-slate-300"
                    )}>
                      {step.status === 'completed' ? <CheckCircle2 className="w-4 h-4" /> : <div className="w-2 h-2 rounded-full bg-current" />}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-slate-900">{step.label}</div>
                    </div>
                    <div className="text-[10px] font-medium text-slate-400">{step.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recruitment Analytics */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 bg-slate-50 rounded-[2.5rem] p-12 border border-slate-100 flex items-center justify-center">
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-100 w-full max-w-sm">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-bold text-slate-900">This Month</h4>
                <span className="text-[10px] text-slate-400">Recruitment Overview</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Applications', val: '142' },
                  { label: 'Interviews', val: '28' },
                  { label: 'Offers Sent', val: '8', color: 'text-emerald-600' },
                  { label: 'Avg. Time to Hire', val: '12d' }
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <div className={cn("text-xl font-bold mb-1", stat.color || "text-slate-900")}>{stat.val}</div>
                    <div className="text-[10px] text-slate-500 font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">Insights</span>
            <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Recruitment Analytics</h3>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Make data-driven hiring decisions with comprehensive analytics. Track KPIs, pipeline performance, team metrics, and candidate distribution across stages and locations.
            </p>
            <ul className="space-y-4">
              {[
                "KPI tracking dashboard",
                "Pipeline performance metrics",
                "Geographic distribution"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="bg-indigo-600 rounded-[3rem] p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to transform your hiring?</h2>
            <p className="text-indigo-100 text-lg mb-12 max-w-2xl mx-auto">
              Join hundreds of companies using TalentFlow AI to build their dream teams faster and more effectively.
            </p>
            <a 
              href="https://mgcv-final-frontend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl"
            >
              Get Started for Free
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-slate-900">Recruitment Dashboard</h1>
          <p className="text-slate-500">Welcome back! Here's your recruitment overview <span className="text-xs ml-2 opacity-60">Last updated: 11:30:23</span></p>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
            <RefreshCcw className="w-5 h-5" />
          </button>
          <div className="relative">
            <select className="appearance-none bg-white border border-slate-200 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>This Month</option>
              <option>Last Month</option>
              <option>All Time</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Pipeline
          </button>
        </div>
      </div>

      {/* Recruitment Journey Map */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 p-10 mb-8 shadow-sm overflow-x-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
              <Layers className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Automation Pipeline Status</h3>
              <p className="text-xs text-slate-500">Real-time tracking across 8 integrated stages</p>
            </div>
          </div>
          <div className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-100 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            System Active
          </div>
        </div>
        
        <div className="min-w-[1000px] flex items-center justify-between relative px-8">
          {/* Progress Line */}
          <div className="absolute top-[24px] left-12 right-12 h-1 bg-slate-100 z-0">
            <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[45%] rounded-full" />
          </div>

          {[
            { icon: RefreshCcw, label: 'Scraping', active: true },
            { icon: Brain, label: 'Analysis', active: true },
            { icon: FileText, label: 'Assessment', active: true },
            { icon: Zap, label: 'Distribution', active: true, current: true, badge: 12 },
            { icon: Target, label: 'Processing', active: false, badge: 4 },
            { icon: Calendar, label: 'Scheduling', active: false },
            { icon: Users, label: 'AI Interview', active: false },
            { icon: CheckCircle2, label: 'Selection', active: false },
          ].map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center max-w-[100px]">
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 mb-4",
                step.current ? "bg-indigo-600 text-white ring-8 ring-indigo-50 scale-110" : 
                step.active ? "bg-white border-2 border-indigo-600 text-indigo-600 shadow-lg shadow-indigo-100" : 
                "bg-white border-2 border-slate-100 text-slate-300"
              )}>
                <step.icon className="w-5 h-5" />
                {step.badge && (
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                    {step.badge}
                  </span>
                )}
              </div>
              <h4 className={cn("text-[10px] font-black uppercase tracking-wider mb-1", step.active ? "text-slate-900" : "text-slate-300")}>{step.label}</h4>
            </div>
          ))}
        </div>
        <div className="mt-12 flex items-center justify-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
          <div className="flex items-center gap-2 text-indigo-600">
            <div className="w-2 h-2 rounded-full bg-indigo-600" />
            Completed
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <div className="w-2 h-2 rounded-full bg-slate-200" />
            Pending
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Applications', val: '14', change: '+12.5%', icon: Users, color: 'bg-blue-50 text-blue-600' },
          { label: 'Shortlist Rate', val: '50.0%', change: '+5.2%', icon: Target, color: 'bg-emerald-50 text-emerald-600' },
          { label: 'Time-to-Hire', val: '0d', change: '-8.3%', icon: Calendar, color: 'bg-orange-50 text-orange-600' },
          { label: 'Pending Actions', val: '0', change: null, icon: Bell, color: 'bg-purple-50 text-purple-600' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-slate-500">{stat.label}</span>
              <div className={cn("p-2 rounded-lg", stat.color)}>
                <stat.icon className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold text-slate-900">{stat.val}</span>
              {stat.change && (
                <span className={cn("text-xs font-bold mb-1", stat.change.startsWith('+') ? "text-emerald-500" : "text-red-500")}>
                  {stat.change}
                </span>
              )}
            </div>
            <p className="text-[10px] text-slate-400 mt-1">All time applications</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Recruitment Pipeline</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={pipelineData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Recruitment Activity</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Line type="monotone" dataKey="count" stroke="#6366f1" strokeWidth={3} dot={{ r: 4, fill: '#6366f1', strokeWidth: 2, stroke: '#fff' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [view, setView] = useState('landing');

  return (
    <div className="min-h-screen bg-slate-50/50">
      <Navbar onNavigate={setView} currentView={view} />
      
      <main>
        <AnimatePresence mode="wait">
          {view === 'landing' ? (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <LandingPage onStart={() => setView('dashboard')} />
            </motion.div>
          ) : (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Dashboard />
            </motion.div>
          )
          }
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Brain className="text-white w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-display font-bold text-slate-900 leading-none">TalentFlow AI</span>
                <span className="text-[8px] font-bold text-indigo-600 tracking-widest uppercase mt-0.5">By MG³ Verse</span>
              </div>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-sm text-slate-500 hover:text-indigo-600">Privacy Policy</a>
              <a href="#" className="text-sm text-slate-500 hover:text-indigo-600">Terms of Service</a>
              <a href="#" className="text-sm text-slate-500 hover:text-indigo-600">Contact Us</a>
            </div>
            <p className="text-sm text-slate-400">© 2026 TalentFlow AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}