import "../styles/tailwind.css";
import Head from "next/head";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jazz Vila</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
