import styles from "./solutions.module.css";

export default function Solutions() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Our Solutions</h1>
        <p className={styles.subtitle}>
           We provide industry-leading AI tools to automate your workflow.
           Scalable, secure, and built for growth.
        </p>
        
        <div className={styles.grid}>
           {[1, 2, 3, 4, 5, 6].map((i) => (
             <div key={i} className={styles.card}>
                <h3 className={styles.cardTitle}>Smart Feature {i}</h3>
                <p className={styles.cardDesc}>
                  Our AI analyzes data in real-time to provide actionable insights.
                  Increase efficiency by 40% immediately.
                </p>
             </div>
           ))}
        </div>
      </div>
    </main>
  );
}