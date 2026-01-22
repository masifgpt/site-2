import Link from "next/link";
import styles from "./Footer.module.css";
import { Twitter, Linkedin, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Big Call to Action */}
        <div className={styles.ctaSection}>
           <h2 className={styles.ctaTitle}>Ready to Scale Your Revenue?</h2>
           <button className={styles.ctaBtn}>Start Your Free Trial</button>
        </div>

        <div className={styles.grid}>
          {/* Brand Column */}
          <div>
            <h3 style={{color:'white', fontSize:'1.5rem', fontWeight:'bold'}}>NextGen</h3>
            <p className={styles.brandDesc}>
              The AI-powered platform that turns conversations into conversions. 
              Trusted by modern brands worldwide.
            </p>
            <div style={{display:'flex', gap:'15px', marginTop:'20px'}}>
               <Twitter size={20} className={styles.link} />
               <Linkedin size={20} className={styles.link} />
               <Instagram size={20} className={styles.link} />
               <Github size={20} className={styles.link} />
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <span className={styles.colTitle}>Product</span>
            <ul className={styles.linkList}>
              <li><Link href="/solutions" className={styles.link}>Solutions</Link></li>
              <li><Link href="/pricing" className={styles.link}>Pricing</Link></li>
              <li><Link href="#" className={styles.link}>API Docs</Link></li>
            </ul>
          </div>

          <div>
            <span className={styles.colTitle}>Company</span>
            <ul className={styles.linkList}>
              <li><Link href="#" className={styles.link}>About Us</Link></li>
              <li><Link href="#" className={styles.link}>Careers</Link></li>
              <li><Link href="#" className={styles.link}>Blog</Link></li>
            </ul>
          </div>

          <div>
            <span className={styles.colTitle}>Support</span>
            <ul className={styles.linkList}>
              <li><Link href="/support" className={styles.link}>Help Center</Link></li>
              <li><Link href="#" className={styles.link}>Contact Us</Link></li>
              <li><Link href="#" className={styles.link}>Status</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className={styles.bottomBar}>
           <p>© 2025 NextGen AI Inc. All rights reserved.</p>
           <div style={{display:'flex', gap:'20px'}}>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
           </div>
        </div>

      </div>
    </footer>
  );
}