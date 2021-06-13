import { Fragment } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.css";
import { GlobalStateProvider } from "../src/context";

function App({ Component, pageProps }) {
  return (
    <Fragment>
      <GlobalStateProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </GlobalStateProvider>
    </Fragment>
  );
}

export default App;
