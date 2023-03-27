import Layout from "../../components/Layout";
import styles from "./Home.module.scss";

function Home() {
  return (
    <Layout>
      <span className={styles['content']}>Home content</span>
    </Layout>
  );
}

export default Home;
