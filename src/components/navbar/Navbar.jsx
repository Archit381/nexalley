import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link href="https://www.linkedin.com/in/archit-ojha-5b1350204/">
          <Image src="/linkedin.png" alt="linkedin" height={24} width={24} />
        </Link>

        <Link href="https://www.instagram.com/__.archit/">
          <Image src="/instagram.png" alt="instagram" height={24} width={24} />
        </Link>

        <Link href="https://github.com/Archit381">
          <Image src="/github.png" alt="tiktok" height={24} width={24} />
        </Link>
      </div>
      <div className={styles.logo}>NexAlley</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/" className={styles.link}>
          Contact
        </Link>
        <Link href="/" className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
}

export default Navbar;
