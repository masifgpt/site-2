import styles from "./support.module.css";

export default function Support() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h1 className={styles.title}>Contact Support</h1>
          <p className={styles.text}>We typically reply within 2 hours.</p>
        </div>
        
        <form className={styles.form}>
           <div className={styles.fieldGroup}>
              <label className={styles.label}>Your Email</label>
              <input 
                type="email" 
                className={styles.input} 
                placeholder="name@company.com" 
              />
           </div>
           
           <div className={styles.fieldGroup}>
              <label className={styles.label}>Subject</label>
              <input 
                type="text" 
                className={styles.input} 
                placeholder="How can we help?" 
              />
           </div>
           
           <div className={styles.fieldGroup}>
              <label className={styles.label}>Message</label>
              <textarea 
                className={styles.textarea} 
                placeholder="Tell us more about your issue..."
              ></textarea>
           </div>

           <button type="button" className={styles.button}>
              Send Message
           </button>
        </form>
      </div>
    </main>
  );
}