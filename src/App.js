import React from 'react';
import { BackgroundBeams } from './components/ui/background-beams';

function App() {
  return (
    <div className="min-h-screen bg-[#0D0D10] relative overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#6344F5] to-[#18CCFC] rounded-lg"></div>
          <span className="text-xl font-clash font-bold text-white tracking-tight">Verseo </span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="/docs" className="text-sm text-gray-300 hover:text-white transition-colors">Documentation</a>
          <a href="/examples" className="text-sm text-gray-300 hover:text-white transition-colors">Examples</a>
          <a href="/pricing" className="text-sm text-gray-300 hover:text-white transition-colors">Pricing</a>
          <a href="/blog" className="text-sm text-gray-300 hover:text-white transition-colors">Blog</a>
          <div className="h-4 w-px bg-gray-800"></div>
          <a href="/login" className="text-sm text-gray-300 hover:text-white transition-colors">Sign in</a>
          <a href="/signup" className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/90 transition-colors">
            Get Started
          </a>
        </div>
      </nav>

      {/* Blog Link */}
      <div className="relative z-10 flex justify-center mt-12">
        <a href="/blog/announcement" className="group inline-flex items-center gap-2 bg-white/5 text-sm text-gray-300 px-4 py-2 rounded-full hover:bg-white/10 transition-colors">
          <div className="w-2 h-2 rounded-full bg-[#18CCFC]"></div>
          <span>Introducing Groq API v2.0</span>
          <svg className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 mt-16 md:mt-24">
        <h1 className="text-4xl md:text-7xl font-clash font-medium text-white text-center max-w-4xl leading-[1.1] mb-6">
        Discover Ready to Use Multimodal AI Tools
        </h1>
        <p className="text-lg md:text-xl text-gray-400 text-center max-w-2xl mb-12">
        Leverage Groq's ultra-fast inference engine to create powerful, responsive, and innovative AI experiences that push the boundaries of what's possible.
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
          <div className="group relative bg-white/5 p-8 rounded-2xl hover:bg-white/[0.07] transition-colors">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#6344F5]/10">
              <svg className="w-6 h-6 text-[#6344F5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-clash font-medium text-white mb-3">Multilingual AI Assistant</h3>
            <p className="text-gray-400 leading-relaxed">Create sophisticated AI assistants that understand and respond to text, voice, and visual inputs in real-time across multiple languages.</p>
          </div>

          <div className="group relative bg-white/5 p-8 rounded-2xl hover:bg-white/[0.07] transition-colors">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#18CCFC]/10">
              <svg className="w-6 h-6 text-[#18CCFC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-clash font-medium text-white mb-3">AI-Powered Code Editor</h3>
            <p className="text-gray-400 leading-relaxed">Experience real-time code analysis, intelligent suggestions, and automated documentation powered by Groq's ultra-fast inference engine.</p>
          </div>

          <div className="group relative bg-white/5 p-8 rounded-2xl hover:bg-white/[0.07] transition-colors">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#AE48FF]/10">
              <svg className="w-6 h-6 text-[#AE48FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-clash font-medium text-white mb-3">Live News Summarizer</h3>
            <p className="text-gray-400 leading-relaxed">Process and analyze real-time news feeds across multiple formats, delivering instant, comprehensive summaries and insights.</p>
          </div>

          <div className="group relative bg-white/5 p-8 rounded-2xl hover:bg-white/[0.07] transition-colors">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#6344F5]/10">
              <svg className="w-6 h-6 text-[#6344F5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-clash font-medium text-white mb-3">Educational AI Tutor</h3>
            <p className="text-gray-400 leading-relaxed">Deploy intelligent tutoring systems that provide personalized learning experiences with instant feedback and adaptive content delivery.</p>
          </div>

          <div className="group relative bg-white/5 p-8 rounded-2xl hover:bg-white/[0.07] transition-colors">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#18CCFC]/10">
              <svg className="w-6 h-6 text-[#18CCFC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-clash font-medium text-white mb-3">Vision Accessibility Tool</h3>
            <p className="text-gray-400 leading-relaxed">Enable real-time visual assistance with advanced computer vision and natural language processing for enhanced accessibility.</p>
          </div>

          <div className="group relative bg-white/5 p-8 rounded-2xl hover:bg-white/[0.07] transition-colors">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#AE48FF]/10">
              <svg className="w-6 h-6 text-[#AE48FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-clash font-medium text-white mb-3">Health AI Companion</h3>
            <p className="text-gray-400 leading-relaxed">Build intelligent health monitoring systems that provide real-time insights and personalized recommendations for improved well-being.</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center gap-4">
          <a href="/signup" className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-xl text-sm font-medium hover:bg-white/90 transition-colors text-center">
            Start Building
          </a>
          <a href="/docs" className="w-full sm:w-auto bg-white/5 text-white px-8 py-4 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors text-center">
            View Documentation
          </a>
        </div>
      </div>

      {/* Background Effect */}
      <BackgroundBeams className="absolute inset-0" />

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/4 top-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-16 h-16 bg-[#6344F5] rounded-2xl rotate-12 opacity-20"></div>
        </div>
        <div className="absolute right-1/4 top-1/3 transform translate-x-1/2 -translate-y-1/2">
          <div className="w-16 h-16 bg-[#18CCFC] rounded-2xl -rotate-12 opacity-20"></div>
        </div>
        <div className="absolute left-1/3 bottom-1/4 transform -translate-x-1/2 translate-y-1/2">
          <div className="w-16 h-16 bg-[#AE48FF] rounded-2xl rotate-45 opacity-20"></div>
        </div>
      </div>
    </div>
  );
}

export default App;