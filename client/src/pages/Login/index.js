import Layout from "../../components/Layout";
import styles from "./Login.module.scss";

function Login() {
  return (
    <Layout>
      <span className={styles['content']}>Login content</span>
      <span>Hello world</span>
    </Layout>
  );
}

export default Login;
