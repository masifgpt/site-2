"use client";

import Link from "next/link";
import { useState } from "react"; // State add kiya
import { ArrowRight, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Menu open/close state

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={() => setIsOpen(false)}>
          Next<span className={styles.highlight}>Gen</span>
        </Link>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className={styles.links}>
          <Link href="/solutions" className={styles.link}>Solutions</Link>
          <Link href="/pricing" className={styles.link}>Pricing</Link>
          <Link href="/resources" className={styles.link}>Resources</Link>
          <Link href="/support" className={styles.link}>Support</Link>
        </div>

        {/* Desktop Buttons (Hidden on Mobile) */}
        <div className={styles.actions}>
          <Link href="#" className={styles.loginBtn}>Log in</Link>
          <Link href="#" className={styles.ctaBtn}>
            Get Started <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className={styles.menuBtn} onClick={() => setIsOpen(!isOpen)}>
           {isOpen ? <X size={30} /> : <Menu size={30} />}
        </div>

        {/* Mobile Full Screen Menu */}
        <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
           <Link href="/solutions" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Solutions</Link>
           <Link href="/pricing" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Pricing</Link>
           <Link href="/resources" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Resources</Link>
           <Link href="/support" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Support</Link>
           
           <div style={{marginTop: '20px', display:'flex', flexDirection:'column', gap:'15px', alignItems:'center'}}>
              <Link href="#" className={styles.loginBtn} onClick={() => setIsOpen(false)}>Log in</Link>
              <Link href="#" className={styles.ctaBtn} onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
           </div>
        </div>

      </div>
    </nav>
  );
}