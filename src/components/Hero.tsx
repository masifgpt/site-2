"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Zap, Globe } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* === TOP SECTION === */}
        <div className={styles.mainGrid}>
          
          {/* Left: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.badge}>
              <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              v2.0 is Live
            </div>

            <h1 className={styles.title}>
              Automate Sales <br />
              <span style={{background: 'linear-gradient(to right, #60a5fa, #a855f7)', WebkitBackgroundClip: 'text', color: 'transparent'}}>
                With Intelligence.
              </span>
            </h1>

            <p className={styles.description}>
              Turn visitors into loyal customers with our AI-driven engagement platform.
              Smart text automation that feels personal and converts instantly.
            </p>

            <div className={styles.inputGroup}>
              <div className={styles.iconBox}>
                <Sparkles size={20} />
              </div>
              <input type="text" placeholder="Enter your website URL" className={styles.input} />
              <button className={styles.submitBtn}>
                Analyze <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* Right: The Living Machine */}
          <motion.div 
            className={styles.visualWrapper}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             <div className={styles.reactor}>
                <div className={`${styles.ring} ${styles.ring1}`}></div>
                <div className={`${styles.ring} ${styles.ring2}`}></div>
                <div className={`${styles.ring} ${styles.ring3}`}></div>
                <div className={styles.core}></div>
                <div className={`${styles.floater} ${styles.f1}`}></div>
                <div className={`${styles.floater} ${styles.f2}`}></div>
             </div>

             <motion.div className={`${styles.bubble} ${styles.b1}`} animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
               "AI Analysis Complete"
             </motion.div>
             <motion.div className={`${styles.bubble} ${styles.b2}`} animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
               "Sales increased by 40%"
             </motion.div>
             <motion.div className={`${styles.bubble} ${styles.b3}`} animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
               Traffic Optimized 🚀
             </motion.div>
          </motion.div>
        </div>


        {/* === BOTTOM DARK CARD (Updated Info: Muhammad Asif) === */}
        <motion.div 
           className={styles.bottomCard}
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
        >
           {/* Left: Review Text */}
           <div className={styles.quoteBox}>
              <h3 className={styles.quoteText}>“The Best Investment for Growth”</h3>
              <div className={styles.userProfile}>
                 
                 {/* Avatar / Picture */}
                 <div className={styles.avatar}>
                    <img 
                       src="/pic6.jpg" 
                       alt="Muhammad Asif" 
                       style={{width:'100%', height:'100%', objectFit:'cover'}} 
                       // Agar pic na mile toh ye backup avatar dikhayega
                       onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=Muhammad+Asif&background=2563eb&color=fff" }}
                    />
                 </div>

                 <div className={styles.userInfo}>
                    <h4>Muhammad Asif</h4>
                    <p>UI Design Expert</p>
                 </div>
              </div>
           </div>

           {/* Right: Feature Highlights */}
           <div className={styles.logoGrid}>
              <div className={styles.logoBox} style={{display:'flex', alignItems:'center', gap:'10px'}}>
                 <TrendingUp size={20} color="#4ade80"/> 
                 <span>Growth</span>
              </div>
              <div className={styles.logoBox} style={{display:'flex', alignItems:'center', gap:'10px'}}>
                 <ShieldCheck size={20} color="#60a5fa"/> 
                 <span>Secure</span>
              </div>
              <div className={styles.logoBox} style={{display:'flex', alignItems:'center', gap:'10px'}}>
                 <Zap size={20} color="#fbbf24"/> 
                 <span>Fast</span>
              </div>
              <div className={styles.logoBox} style={{display:'flex', alignItems:'center', gap:'10px'}}>
                 <Globe size={20} color="#a855f7"/> 
                 <span>Global</span>
              </div>
           </div>
        </motion.div>

      </div>
    </section>
  );
}