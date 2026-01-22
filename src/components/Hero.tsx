"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* === TOP SECTION (Text + Animation) === */}
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
              20% More Revenue <br />
              <span style={{background: 'linear-gradient(to right, #60a5fa, #a855f7)', WebkitBackgroundClip: 'text', color: 'transparent'}}>
                Per Campaign.
              </span>
            </h1>

            <p className={styles.description}>
              Incremental growth is why we exist. Add text-to-buy, 
              shopper-specific recommendations, and two-way texting on top 
              of conventional SMS marketing.
            </p>

            <div className={styles.inputGroup}>
              <div className={styles.iconBox}>
                <Sparkles size={20} />
              </div>
              <input type="text" placeholder="Enter your brand's URL" className={styles.input} />
              <button className={styles.submitBtn}>
                Test AI <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* Right: The Living Machine (CSS Animation) */}
          <motion.div 
            className={styles.visualWrapper}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             {/* The Reactor Core */}
             <div className={styles.reactor}>
                {/* Rotating Rings */}
                <div className={`${styles.ring} ${styles.ring1}`}></div>
                <div className={`${styles.ring} ${styles.ring2}`}></div>
                <div className={`${styles.ring} ${styles.ring3}`}></div>
                
                {/* Center Core */}
                <div className={styles.core}></div>

                {/* Floating Particles */}
                <div className={`${styles.floater} ${styles.f1}`}></div>
                <div className={`${styles.floater} ${styles.f2}`}></div>
             </div>

             {/* Floating Data Bubbles */}
             <motion.div 
               className={`${styles.bubble} ${styles.b1}`}
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             >
               "Would you like to buy a cookie?"
             </motion.div>

             <motion.div 
               className={`${styles.bubble} ${styles.b2}`}
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             >
               "Absolutely! Add to cart."
             </motion.div>

             <motion.div 
               className={`${styles.bubble} ${styles.b3}`}
               animate={{ y: [0, -8, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
             >
               Revenue +20% 📈
             </motion.div>
          </motion.div>
        </div>


        {/* === BOTTOM DARK CARD ("Incredible") === */}
        <motion.div 
           className={styles.bottomCard}
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
        >
           {/* Left Quote */}
           <div className={styles.quoteBox}>
              <h3 className={styles.quoteText}>“Incredible Performance”</h3>
              <div className={styles.userProfile}>
                 {/* Avatar (Placeholder) */}
                 <div className={styles.avatar}>
                    <img src="https://i.pravatar.cc/150?img=11" alt="User" style={{width:'100%', height:'100%', objectFit:'cover'}} />
                 </div>
                 <div className={styles.userInfo}>
                    <h4>Moiz Ali</h4>
                    <p>Founder of Native Deodorant</p>
                 </div>
              </div>
           </div>

           {/* Right Logos */}
           <div className={styles.logoGrid}>
              <div className={styles.logoBox}>tabs</div>
              <div className={styles.logoBox}>wonder</div>
              <div className={styles.logoBox}>CADEN LANE</div>
              <div className={styles.logoBox}>create</div>
           </div>
        </motion.div>

      </div>
    </section>
  );
}