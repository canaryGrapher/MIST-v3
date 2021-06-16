import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.css";
import { GlobalStateProvider } from "../src/context";

function App({ Component, pageProps }) {
  return (
    <div className="text-gray-50">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <GlobalStateProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </GlobalStateProvider>
    </div>
  );
}

export default App;
