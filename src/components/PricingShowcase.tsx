"use client";

import { motion } from "framer-motion";
import styles from "./PricingShowcase.module.css";
import { CheckCircle2, ArrowRight, X } from "lucide-react";

export default function PricingShowcase() {
  return (
    <section className={styles.section}>
      
      {/* Background Grid Pattern */}
      <div className={styles.bgGrid}></div>

      <div className={styles.container}>
        
        {/* === LEFT PHONE: Value Proposition === */}
        <motion.div 
          className={styles.phone}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.notch}></div>
          <div className={styles.screen}>
            <div className={styles.statusBar}>
               <span>9:27</span>
               <span>5G</span>
            </div>
            
            <div className={styles.leftContent}>
               <div className={styles.tag}>WHY NEXTGEN</div>
               <h2 className={styles.bigTitle}>
                 Text to Buy <br/>
                 Means More <br/>
                 <span className={styles.fadedText}>Money in Your Bank</span>
               </h2>
            </div>

            {/* Bottom Dark Popup */}
            <div className={styles.bottomPopup}>
               <div style={{display:'flex', justifyContent:'space-between', marginBottom:'10px'}}>
                  <span style={{fontSize:'0.9rem', color:'#9ca3af'}}>Back to URL</span>
                  <X size={18} color="#9ca3af" />
               </div>
               <h3 style={{fontSize:'1.2rem', fontWeight:'bold'}}>Enter your Business email</h3>
               <input type="text" placeholder="E.g.: contact@company.com" className={styles.popupInput} />
               <button className={styles.popupBtn}>
                  Test our AI <ArrowRight size={16} style={{display:'inline', marginLeft:'5px'}} />
               </button>
            </div>
          </div>

          {/* Floating Blue Ball */}
          <motion.div 
             className={`${styles.ball} ${styles.ball1}`}
             animate={{ y: [0, -15, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>


        {/* === RIGHT PHONE: Pricing === */}
        <motion.div 
          className={styles.phone}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.notch}></div>
          <div className={styles.screen}>
            <div className={styles.statusBar}>
               <span>9:27</span>
               <span>5G</span>
            </div>

            <div className={styles.rightContent}>
               <div className={styles.pricingHeader}>
                 <h2 style={{fontSize:'1.8rem', fontWeight:'800', color:'#1e293b'}}>NextGen Pricing</h2>
                 <p style={{fontSize:'0.8rem', color:'#64748b', marginTop:'5px'}}>First month has no membership fee</p>
               </div>

               <div className={styles.priceCard}>
                  <h3 style={{fontSize:'1.5rem', fontWeight:'bold', color:'#334155'}}>Pro</h3>
                  <div className={styles.priceTag}>
                    $200 <span style={{fontSize:'1rem', fontWeight:'400', color:'#94a3b8'}}>/mo</span>
                  </div>
                  
                  <div className={styles.featureList}>
                     {[
                       "Live Concierge", "Unlimited Campaigns", 
                       "Smart Automations", "Email & In-App Support"
                     ].map((item, i) => (
                       <div key={i} className={styles.featureItem}>
                          <CheckCircle2 size={16} className={styles.checkIcon} />
                          {item}
                       </div>
                     ))}
                  </div>

                  <button className={styles.mainBtn}>
                    Start free trial <ArrowRight size={16} style={{display:'inline', marginLeft:'5px'}} />
                  </button>
               </div>
            </div>
          </div>

          {/* Floating Blue Ball */}
          <motion.div 
             className={`${styles.ball} ${styles.ball2}`}
             animate={{ y: [0, 15, 0] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </motion.div>

      </div>
    </section>
  );
}