"use client";

import { motion } from "framer-motion";
import styles from "./MobileShowcase.module.css";
import { TrendingUp, Users, ShieldCheck } from "lucide-react";

export default function MobileShowcase() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Heading */}
        <div className={styles.header}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.title}
          >
            Built for <span style={{ color: "#3b82f6" }}>Performance</span>
          </motion.h2>
          <p className={styles.subtitle}>
            Experience mobile-first analytics that keeps your business running smoothly from anywhere.
          </p>
        </div>

        <div className={styles.grid}>
          
          {/* Phone 1: Left Side (Dashboard Style) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.phone}
          >
            <div className={styles.notch}></div>
            <div className={styles.screen}>
              <div className={styles.screenHeader}>
                <p style={{color: '#64748b', fontSize: '12px', fontWeight: 'bold', marginBottom: '8px'}}>ANALYTICS</p>
                <h3 className={styles.screenTitle}>Real-time<br/>Growth Data</h3>
              </div>
              
              <div className={styles.screenCard}>
                 {/* CSS Chart */}
                 <div className={styles.chartCircle}>
                    <div className={styles.chartInner}></div>
                 </div>
                 <h4 style={{fontSize: '1.2rem', fontWeight: 'bold'}}>Total Revenue</h4>
                 <p style={{fontSize: '2rem', fontWeight: 'bold', margin: '10px 0'}}>$124,500</p>
                 <div style={{display:'flex', alignItems:'center', gap:'5px', fontSize:'0.9rem'}}>
                    <TrendingUp size={16} /> +12.5% this week
                 </div>
              </div>
            </div>

            {/* Floating Glass Card 1 */}
            <motion.div 
               className={`${styles.floatingCard} ${styles.card1}`}
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity }}
            >
              <span className={styles.statNumber}>35%</span>
              <p className={styles.statText}>Increase in mobile conversion rates.</p>
            </motion.div>
          </motion.div>


          {/* Phone 2: Right Side (List Style) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.phone}
            style={{ transform: "rotate(5deg)" }} // Slight opposite tilt
          >
            <div className={styles.notch}></div>
            <div className={styles.screen} style={{ background: "#0f172a" }}>
              <div className={styles.screenHeader}>
                 <p style={{color: '#64748b', fontSize: '12px', fontWeight: 'bold', marginBottom: '8px'}}>PARTNERS</p>
                 <h3 className={styles.screenTitle}>Backed by<br/>Industry Leaders</h3>
              </div>

              <div style={{ padding: "0 20px" }}>
                 {/* List Items simulating the image */}
                 {[1, 2, 3].map((item) => (
                   <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', marginBottom: '12px' }}>
                      <div style={{ width: '40px', height: '40px', background: '#334155', borderRadius: '50%', display:'flex', alignItems:'center', justifyContent:'center' }}>
                         <Users size={20} color="white" />
                      </div>
                      <div>
                         <p style={{ color: 'white', fontWeight: 'bold', fontSize: '0.9rem' }}>Venture Corp</p>
                         <p style={{ color: '#64748b', fontSize: '0.75rem' }}>Strategic Partner</p>
                      </div>
                   </div>
                 ))}
              </div>

              {/* Bottom CTA in Phone */}
              <div style={{ marginTop: 'auto', padding: '20px' }}>
                 <button style={{ width: '100%', padding: '15px', background: '#2563eb', border: 'none', borderRadius: '12px', color: 'white', fontWeight: 'bold' }}>View All Partners</button>
              </div>
            </div>

            {/* Floating Glass Card 2 */}
            <motion.div 
               className={`${styles.floatingCard} ${styles.card2}`}
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            >
               <span className={styles.statNumber}>10x</span>
               <p className={styles.statText}>Faster deployment speed vs competitors.</p>
            </motion.div>

            {/* Floating Glass Card 3 (Left side of phone) */}
             <motion.div 
               className={`${styles.floatingCard} ${styles.card3}`}
               animate={{ y: [0, -8, 0] }}
               transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
            >
               <span style={{ color: '#4ade80', fontWeight:'800', fontSize: '1.5rem' }}>Active</span>
               <p className={styles.statText} style={{ textAlign: 'right' }}>System is 99.9% uptime secure.</p>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}