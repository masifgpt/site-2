"use client";

import { motion } from "framer-motion";
import styles from "./DemoSection.module.css";
import { QrCode, Check, ArrowRight } from "lucide-react";

export default function DemoSection() {
  return (
    <section className={styles.section}>
      
      {/* Background Red Planet Effect */}
      <div className={styles.planet}></div>

      {/* Main Glass Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={styles.card}
      >
        
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.subTitle}>Interactive AI Experience</p>
          <h2 className={styles.title}>Try Your Free AI Demo</h2>
        </div>

        {/* Split Content */}
        <div className={styles.contentGrid}>
          
          {/* Left: QR Scanner */}
          <div className={styles.qrWrapper}>
            <div className={styles.qrBox}>
               {/* Scan Line Animation */}
               <div className={styles.scanLine}></div>
               {/* QR Icon */}
               <QrCode size={100} color="white" strokeWidth={1} />
            </div>
            <p className={styles.qrLabel}>Scan to open on mobile</p>
          </div>

          {/* Divider with "OR" */}
          <div className={styles.divider}>
            <span className={styles.dividerText}>Or</span>
          </div>

          {/* Right: Confirmation Message */}
          <div className={styles.successWrapper}>
            <div className={styles.checkCircle}>
              <Check size={32} />
            </div>
            <p className={styles.successText}>
              Thank you! We're preparing <br />
              your personalized demo.
            </p>
            <button className={styles.backBtn}>
              Go to Dashboard <ArrowRight size={16} />
            </button>
          </div>

        </div>

        {/* Footer Legal Text */}
        <div className={styles.footer}>
          By scanning the QR code or entering your details, you agree to receive 
          automated marketing messages from NextGen. Message frequency varies. 
          Msg & data rates may apply. <br />
          <span className={styles.link}>Privacy Policy</span> & <span className={styles.link}>Terms</span>.
        </div>

      </motion.div>
    </section>
  );
}