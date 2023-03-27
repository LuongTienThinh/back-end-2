import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles['footer-area']}>
      <div className="container">
        <div className={styles['footer-content']}>Footer</div>
      </div>
    </div>
  );
}

export default Footer;
