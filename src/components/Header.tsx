import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>OTAKASPACE</div>
        <div className={styles.links}>
          <Link href={'/about'} className={styles.link}>OTAKAとは</Link>
          <Link href={'/services'} className={styles.link}>事業内容</Link>
          <Link href={'/achievements'} className={styles.link}>実績</Link>
          <Link href={'/contact'} className={styles.link}>お問い合わせ</Link>
          <Link href={'/news'} className={styles.link}>ニュース</Link>
        </div>
      </header>
    </>
  );
}