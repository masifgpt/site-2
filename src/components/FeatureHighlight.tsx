"use client";

import { motion } from "framer-motion";
import styles from "./FeatureHighlight.module.css";
import { Bot, MessageSquare, Zap, ArrowRight } from "lucide-react";

export default function FeatureHighlight() {
  return (
    <section className={styles.section}>
      
      {/* Background Abstract Blocks */}
      <div className={`${styles.bgBlock} ${styles.block1}`}></div>
      <div className={`${styles.bgBlock} ${styles.block2}`}></div>

      <div className={styles.container}>
        
        {/* Main Phone Wrapper */}
        <motion.div 
          className={styles.phoneWrapper}
          animate={{ y: [0, -20, 0] }} // Gentle Floating
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          
          {/* The Phone */}
          <div className={styles.phone}>
            <div className={styles.notch}></div>
            
            {/* Screen Content */}
            <div className={styles.screen}>
              <div className={styles.tag}>Legacy vs AI</div>
              
              <h2 className={styles.heading}>
                Still using <br/> old SMS? <br/>
                <span style={{color: '#3b82f6'}}>Wake Up.</span>
              </h2>
              
              <p className={styles.subText}>
                Your customers are waiting. Don't bore them with text-only blasts. Give them an interactive experience.
              </p>

              {/* Inner UI Element */}
              <div className={styles.innerCard}>
                <div style={{display:'flex', justifyContent:'space-between', fontSize:'0.8rem', color:'#94a3b8', marginBottom:'10px'}}>
                   <span>Optimization</span>
                   <span style={{color: '#3b82f6'}}>85%</span>
                </div>
                <p style={{fontSize:'0.9rem', fontWeight:'600', color:'white'}}>Converting Sales...</p>
                <div className={styles.slider}>
                  <div className={styles.sliderFill}>
                    <div className={styles.sliderKnob}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- Floating Cards (Parallax feel) --- */}
          
          {/* Card 1: Right Side */}
          <motion.div 
            className={`${styles.floatCard} ${styles.card1}`}
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          >
            <div className={styles.iconBox}>
              <Bot color="white" size={24} />
            </div>
            <h4 className={styles.cardTitle}>AI Smart Replies</h4>
            <p className={styles.cardDesc}>
              Seamlessly recommend products and answer questions instantly.
            </p>
          </motion.div>

          {/* Card 2: Bottom Left */}
          <motion.div 
            className={`${styles.floatCard} ${styles.card2}`}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity, delay: 0 }}
          >
            <div className={styles.iconBox} style={{ background: '#8b5cf6' }}>
              <Zap color="white" size={24} />
            </div>
            <h4 className={styles.cardTitle}>Instant Magic Links</h4>
            <p className={styles.cardDesc}>
              The texts you write today will realize 35% more sales. Really!
            </p>
          </motion.div>

           {/* Card 3: Back Left (Subtle) */}
           <motion.div 
            className={`${styles.floatCard} ${styles.card3}`}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          >
            <div className={styles.iconBox} style={{ background: '#10b981' }}>
              <MessageSquare color="white" size={24} />
            </div>
            <h4 className={styles.cardTitle}>24/7 Engagement</h4>
            <p className={styles.cardDesc}>
              Never miss a lead, even while you sleep.
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}