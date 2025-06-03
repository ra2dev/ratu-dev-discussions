import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <h1>Example protected route</h1>
       <a href="https://github.com/ra2dev/ratu-dev-discussions/tree/main/examples/password-protect-nextjs-pages">Code: https://github.com/ra2dev/ratu-dev-discussions/tree/main/examples/password-protect-nextjs-pages</a>
       <a href="https://ratu.dev/snippets/password-protect-nextjs-pages">Blog: https://ratu.dev/snippets/password-protect-nextjs-pages</a>
      </main>
    </div>
  );
}
