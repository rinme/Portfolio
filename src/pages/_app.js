import { AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import "../styles/globals.css";
import dynamic from "next/dynamic";
import Layout from "../components/layout";

function RinApp({ Component, pageProps }) {
  const { theme, setTheme } = useTheme();
  return (
    <Layout>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(RinApp), { ssr: false });
