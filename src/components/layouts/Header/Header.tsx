import { styles } from './Header.module';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className={styles.headerArea}>
        <Link href={'/'} className={styles.logo}>OTAKASPACE</Link>
        <div className={styles.links}>
          <Link href={'/'} className={styles.link}>TOP</Link>
          <Link href={'/works'} className={styles.link}>実績</Link>
          <Link href={'/services'} className={styles.link}>事業内容</Link>
          <Link href={'/contact'} className={styles.link}>お問い合わせ</Link>
          <Link href={'/blog'} className={styles.link}>ブログ</Link>
        </div>
      </header>
    </>
  );
}