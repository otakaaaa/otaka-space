import { Fragment } from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import { FooterLinks } from '@/constants/Footer/Footer';

export default function Footer() {
  return (
    <>
      <footer className={styles.footerArea}>
        <div className={styles.footerWrapper}>
          <div className={styles.logo}>OTAKA SPACE</div>
          <div>
            <div className={styles.footerLinks}>
              {
                FooterLinks.map((link, index) => (
                  <Fragment key={index}>
                    <Link href={link.link} className={styles.footerLink}>{link.title}</Link>
                  </Fragment>
                ))
              }
            </div>
            <div className={styles.localeArea}>
              言語：<span>日本語</span> | <span>English</span>
            </div>
          </div>
        </div>
        <div className={styles.copyRight}>&copy; 2024 OTAKA SPACE</div>
      </footer>
    </>
  );
}