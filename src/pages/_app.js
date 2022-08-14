import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import dynamic from "next/dynamic";
import Layout from "../components/layout";
import Footer from "../components/footer";

function RinApp({ Component, pageProps }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(RinApp), { ssr: false });
