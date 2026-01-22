"use client";

import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import styles from "./Navbar.module.css"; // <--- YE LINE SABSE ZAROORI HAI

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          Next<span className={styles.highlight}>Gen</span>
        </Link>

        {/* Desktop Links */}
        
<div className={styles.links}>
  <Link href="/solutions" className={styles.link}>Solutions</Link>
  <Link href="/pricing" className={styles.link}>Pricing</Link>
  <Link href="/resources" className={styles.link}>Resources</Link>
  <Link href="/support" className={styles.link}>Support</Link>
</div>
        {/* Buttons */}
        <div className={styles.actions}>
          <Link href="#" className={styles.loginBtn}>
            Log in
          </Link>
          <Link href="#" className={styles.ctaBtn}>
            Get Started <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white" style={{ display: 'none' }}> 
           {/* Mobile menu baad me on karenge */}
           <Menu size={28} />
        </div>

      </div>
    </nav>
  );
}