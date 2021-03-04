import "../styles/globals.css";
import { Context } from "../components/Context";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <Nav />
      <Component {...pageProps} />
      <Sidebar />
    </Context>
  );
}

export default MyApp;
