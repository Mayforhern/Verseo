import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MobileMenu from './components/ui/mobile-menu';
import { BackgroundBeams } from './components/ui/background-beams';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const createParticle = () => {
      const particle = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: window.innerHeight,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 1,
        rotation: Math.random() * 360,
      };
      setParticles((prev) => [...prev, particle]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const particleInterval = setInterval(createParticle, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(particleInterval);
    };
  }, []);

  useEffect(() => {
    const updateParticles = () => {
      setParticles((prev) =>
        prev
          .map((particle) => ({
            ...particle,
            y: particle.y - particle.speed,
            rotation: particle.rotation + 1,
          }))
          .filter((particle) => particle.y > -20)
      );
    };

    const animationFrame = requestAnimationFrame(updateParticles);
    return () => cancelAnimationFrame(animationFrame);
  }, [particles]);

  return (
    <Router>
      <div className="relative min-h-screen bg-[#0D0D10] overflow-hidden">
        {/* Mobile Menu */}
        <div className="fixed top-4 right-4 z-50">
          <MobileMenu />
        </div>

        {/* Background */}
        <BackgroundBeams className="absolute inset-0" />

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-0 top-0 w-96 h-96 bg-[#6344F5] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#18CCFC] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute left-1/2 top-1/2 w-96 h-96 bg-[#AE48FF] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Interactive Mouse Trail */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="mouse-trail"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
            }}
          ></div>
        </div>

        {/* Main Content */}
        <main className="relative z-10">
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-50">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-xl border-b border-white/5"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-center">
                  <div className="relative flex items-center space-x-2">
                    <div className="relative w-6 h-6">
                      <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#6344F5] rounded-tl-lg"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#18CCFC] rounded-br-lg"></div>
                      </div>
                    </div>
                    <span className="text-lg font-clash font-bold text-white">Verseo</span>
                  </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  <div className="flex items-center space-x-8">
                    {[
                      { href: '/docs', label: 'Documentation' },
                      { href: '/examples', label: 'Examples' },
                      { href: '/pricing', label: 'Pricing' },
                      { href: '/blog', label: 'Blog' }
                    ].map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 group"
                      >
                        <span className="relative">
                          {item.label}
                          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#6344F5] to-[#18CCFC] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </span>
                      </a>
                    ))}
                  </div>

                  <div className="h-6 w-px bg-white/10"></div>

                  <div className="flex items-center space-x-4">
                    <a
                      href="/login"
                      className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Sign in
                    </a>
                    <a
                      href="/signup"
                      className="relative group px-4 py-2 rounded-lg text-sm font-medium text-white overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#6344F5] to-[#18CCFC] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                      <span className="relative">Get Started</span>
                    </a>
                  </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* Add padding to account for fixed navbar */}
          <div className="pt-16">
           
            {/* Animated Hero Text */}
            <div className="relative z-10 flex flex-col items-center justify-center px-4 mt-16 md:mt-24">
              <div className="relative">
                <h1 className="text-4xl md:text-7xl font-clash font-medium text-white text-center max-w-4xl leading-[1.1] mb-6 animate-text-gradient">
                  Discover Ready to Use Multimodal AI Tools
                </h1>
                <div className="absolute inset-0 bg-gradient-to-r from-[#6344F5] via-[#18CCFC] to-[#AE48FF] opacity-20 blur-2xl -z-10"></div>
              </div>
              <p className="text-lg md:text-xl text-gray-400 text-center max-w-2xl mb-12 animate-fade-in">
                Leverage Groq's ultra-fast inference engine to create powerful, responsive, and innovative AI experiences that push the boundaries of what's possible.
              </p>

              {/* Animated CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
                <a href="/signup" className="group relative w-full sm:w-auto bg-white text-black px-8 py-4 rounded-xl text-sm font-medium overflow-hidden">
                  <span className="relative z-10">Start Building</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6344F5] to-[#18CCFC] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a href="/docs" className="group relative w-full sm:w-auto bg-white/5 text-white px-8 py-4 rounded-xl text-sm font-medium overflow-hidden">
                  <span className="relative z-10">View Documentation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#18CCFC] to-[#AE48FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>

              {/* Animated Feature Highlights */}
              <div className="relative w-full max-w-7xl mb-16">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6344F5] via-[#18CCFC] to-[#AE48FF] opacity-10 blur-3xl -z-10"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 rounded-2xl bg-white/5 backdrop-blur-sm">
                  <div className="group relative p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#6344F5] to-[#18CCFC] opacity-0 group-hover:opacity-10 transition-opacity rounded-xl"></div>
                    <h3 className="text-xl font-clash font-medium text-white mb-3">Lightning Fast</h3>
                    <p className="text-gray-400">Process complex AI tasks in milliseconds with our optimized engine</p>
                  </div>
                  <div className="group relative p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#18CCFC] to-[#AE48FF] opacity-0 group-hover:opacity-10 transition-opacity rounded-xl"></div>
                    <h3 className="text-xl font-clash font-medium text-white mb-3">Easy Integration</h3>
                    <p className="text-gray-400">Seamlessly integrate with your existing applications and workflows</p>
                  </div>
                  <div className="group relative p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#AE48FF] to-[#6344F5] opacity-0 group-hover:opacity-10 transition-opacity rounded-xl"></div>
                    <h3 className="text-xl font-clash font-medium text-white mb-3">Scalable</h3>
                    <p className="text-gray-400">Scale from prototype to production with enterprise-grade infrastructure</p>
                  </div>
                </div>
              </div>

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
            </div>
          </div>
        </main>

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-1/4 top-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-float">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#6344F5] rounded-2xl rotate-12 opacity-20"></div>
          </div>
          <div className="absolute right-1/4 top-1/3 transform translate-x-1/2 -translate-y-1/2 animate-float-delayed">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#18CCFC] rounded-2xl -rotate-12 opacity-20"></div>
          </div>
          <div className="absolute left-1/3 bottom-1/4 transform -translate-x-1/2 translate-y-1/2 animate-float-delayed-2">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#AE48FF] rounded-2xl rotate-45 opacity-20"></div>
          </div>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="particles-container">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  left: `${particle.x}px`,
                  top: `${particle.y}px`,
                  transform: `rotate(${particle.rotation}deg)`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;