import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 -</span>
          <span className={styles.category}> CULTURE</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit amet</h1>
        </Link>
        <p>
          Nulla lobortis tempor mi, quis aliquet velit iaculis ac. In facilisis
          nibh quis aliquet volutpat. Aenean viverra, lorem vel cursus
          scelerisque, ex ipsum volutpat sapien, id mollis lorem dolor vitae
          quam. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Vestibulum maximus ....
        </p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
