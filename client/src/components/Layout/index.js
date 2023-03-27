import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
