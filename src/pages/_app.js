import "../styles/globals.css";
import dynamic from "next/dynamic";
import Layout from "../components/layout";

function RinApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(RinApp), { ssr: false });
