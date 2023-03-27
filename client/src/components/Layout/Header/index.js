import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles['header-area']}>
      <div className="container">
        <div className={styles['header-content']}>Header</div>
      </div>
    </div>
  );
}

export default Header;
