"use client";

import { motion } from "framer-motion";
import styles from "./BlogShowcase.module.css";
import { ArrowRight, FileText } from "lucide-react";

export default function BlogShowcase() {
  return (
    <section className={styles.section}>
      
      <div className={styles.header}>
        <h2 className={styles.title}>Learn from the Best</h2>
        <p className={styles.subtitle}>Insights, strategies, and guides to help you grow.</p>
      </div>

      {/* 3D Scene Container */}
      <motion.div 
        className={styles.scene}
        initial={{ opacity: 0, rotateX: 45, y: 100 }}
        whileInView={{ opacity: 1, rotateX: 25, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        
        {/* Yellow Sphere Decoration */}
        <motion.div 
           className={`${styles.sphere} ${styles.sphere1}`} 
           animate={{ y: [0, -20, 0] }}
           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
           className={`${styles.sphere} ${styles.sphere2}`} 
           animate={{ y: [0, 20, 0] }}
           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Card Left */}
        <motion.div 
          className={`${styles.popCard} ${styles.leftCard}`}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <div className={`${styles.cardImage} ${styles.imgOrange}`}></div>
          <div className={styles.cardText}>
            <h4 className={styles.cardTitle}>The Future of Texting: Hello RCS</h4>
            <div className={styles.readMore}>Read article <ArrowRight size={14}/></div>
          </div>
        </motion.div>

        {/* Floating Card Right */}
        <motion.div 
          className={`${styles.popCard} ${styles.rightCard}`}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        >
          <div className={`${styles.cardImage} ${styles.imgBlue}`}></div>
          <div className={styles.cardText}>
            <h4 className={styles.cardTitle}>The Text-to-Buy Resort Analogy</h4>
            <div className={styles.readMore}>Read article <ArrowRight size={14}/></div>
          </div>
        </motion.div>


        {/* Main Tablet */}
        <div className={styles.tablet}>
          <div className={styles.screen}>
            
            {/* Tablet Navbar */}
            <div className={styles.navBar}>
               <span style={{fontWeight:'800', fontSize:'1.2rem', marginRight:'auto'}}>OneText</span>
               <span className={`${styles.navItem} ${styles.activeItem}`}>Blog</span>
               <span className={styles.navItem}>Features</span>
               <span className={styles.navItem}>Pricing</span>
            </div>

            {/* Tablet Content */}
            <div className={styles.mainContent}>
              <span className={styles.articleTag}>New Strategy • May 24, 2025</span>
              <h1 className={styles.articleTitle}>
                DTC Brands Have a Blind Spot: Vaulting Credit Cards
              </h1>
              <p style={{color: '#64748b', lineHeight: '1.6'}}>
                 In this article, we explain how vaulting credit cards empowers brands 
                 to secure their future by treating returning customers like royalty.
              </p>

              <div className={styles.authorBox}>
                 <div className={styles.authorAvatar}></div>
                 <div>
                    <p style={{fontSize:'0.9rem', fontWeight:'700', color:'#334155'}}>Everett Milman</p>
                    <p style={{fontSize:'0.8rem', color:'#94a3b8'}}>Head of Growth</p>
                 </div>
              </div>
            </div>

          </div>
        </div>

      </motion.div>
    </section>
  );
}