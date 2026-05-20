import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FolderOpen, ExternalLink, ArrowRight, Check, Shield, Circle, Activity } from "lucide-react";

export default function App() {
  const [clicked, setClicked] = useState(false);
  const driveLink = "https://drive.google.com/drive/folders/1Vqe3P43x7Y_BgvOimbM7jI9Uhr88dsFz?usp=drive_link";

  const handleRedirect = () => {
    setClicked(true);
    // Open in a new tab securely to bypass frame blocking and ensure smooth loading
    window.open(driveLink, "_blank", "noopener,noreferrer");
    
    // Reset click visual state after 2 seconds
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  };

  return (
    <div 
      id="page-container" 
      className="min-h-screen w-full flex flex-col justify-between bg-[#050505] text-[#E0E0E0] font-sans overflow-x-hidden relative"
    >
      {/* Delicate background accent lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Decorative top ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* HEADER SECTION */}
      <header 
        id="app-header" 
        className="w-full h-20 border-b border-[#262626] flex items-center justify-between px-6 md:px-12 z-10 bg-[#050505]/80 backdrop-blur-md"
      >
        <div id="header-logo" className="flex items-center gap-2">
          <Circle size={10} className="fill-[#D4AF37] text-[#D4AF37] animate-pulse" />
          <span className="text-xs md:text-sm tracking-[4px] uppercase font-semibold text-[#D4AF37]">
            AESTHETIC ARCHIVE
          </span>
        </div>
        <div id="header-nav" className="hidden md:flex gap-8 text-[11px] uppercase tracking-widest text-[#888888]">
          <span className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"><Shield size={12} className="text-[#D4AF37]/70" /> Security Verified</span>
          <span className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"><Activity size={12} className="text-[#D4AF37]/70" /> Live Logs</span>
        </div>
      </header>

      {/* CORE HERO SECTION */}
      <main 
        id="hero-section" 
        className="flex-1 flex flex-col justify-center items-center px-6 py-12 md:py-16 text-center z-10 max-w-4xl mx-auto w-full"
      >
        <motion.div
          id="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Tag/Label */}
          <div 
            id="restricted-label" 
            className="text-[11px] uppercase tracking-[3px] text-[#888888] mb-6 bg-[#111111] px-4 py-1.5 rounded-full border border-[#262626]"
          >
            Restricted Access Workspace
          </div>

          {/* Folder Icon Illustration in Elegant Gold */}
          <motion.div
            id="folder-icon-glow"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 450, damping: 25 }}
            className="w-20 h-20 rounded-2xl bg-[#111111] border border-[#262626] flex items-center justify-center mb-8 text-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.05)] cursor-pointer"
          >
            <FolderOpen size={36} strokeWidth={1.5} />
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-tight md:leading-none text-white max-w-2xl mb-6">
            Internal Assets &amp;<br />
            <span className="font-medium text-[#D4AF37]">Documentation</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-sm md:text-base text-[#888888] font-light max-w-xl leading-relaxed mb-10">
            Access the shared project repository containing high-resolution source files, motion studies, and design system specifications secure on Google Drive.
          </p>

          {/* Interactive Button */}
          <motion.button
            id="redirect-btn"
            onClick={handleRedirect}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050505] text-xs font-semibold uppercase tracking-[2px] transition-all duration-300 cursor-pointer min-w-[260px] flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(212,175,55,0.03)]"
          >
            <AnimatePresence mode="wait" initial={false}>
              {clicked ? (
                <motion.span
                  key="success-state"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex items-center gap-2"
                >
                  <Check size={16} />
                  Opening Drive...
                </motion.span>
              ) : (
                <motion.span
                  key="default-state"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="flex items-center gap-2"
                >
                  Open Drive Folder
                  <ArrowRight size={16} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Action indicator note */}
          <div id="action-hint" className="mt-5 text-[11px] text-[#888888] flex items-center gap-2 font-mono opacity-80">
            <span>Opens safely in a new tab</span>
            <ExternalLink size={11} className="text-[#D4AF37]" />
          </div>
        </motion.div>
      </main>

      {/* METRIC FOOTER SECTION */}
      <footer 
        id="app-footer" 
        className="w-full border-t border-[#262626] bg-[#050505] grid grid-cols-1 md:grid-cols-3 z-10"
      >
        <div className="border-b md:border-b-0 md:border-r border-[#262626] p-6 md:p-8 flex flex-col justify-center items-start md:pl-12">
          <span className="text-xl md:text-2xl text-white font-light mb-1">4.2 GB</span>
          <span className="text-[10px] text-[#888888] uppercase tracking-widest font-mono">Total Data Volume</span>
        </div>
        <div className="border-b md:border-b-0 md:border-r border-[#262626] p-6 md:p-8 flex flex-col justify-center items-start md:pl-12">
          <span className="text-xl md:text-2xl text-white font-light mb-1">128 Items</span>
          <span className="text-[10px] text-[#888888] uppercase tracking-widest font-mono font-medium">Document Count</span>
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center items-start md:pl-12">
          <span className="text-xl md:text-2xl text-[#D4AF37] font-light mb-1 flex items-center gap-2">
            Sync Active
          </span>
          <span className="text-[10px] text-[#888888] uppercase tracking-widest font-mono">Repository Status</span>
        </div>
      </footer>

      {/* Persistent Technical Tag */}
      <div 
        id="folder-ref-id" 
        className="hidden lg:block absolute bottom-28 left-12 font-mono text-[10px] text-[#888888]/40 hover:text-[#888888]/80 transition-colors pointer-events-auto"
      >
        REF: 1Vqe3P43x7Y_BgvOimbM7jI9Uhr88dsFz
      </div>
    </div>
  );
}
