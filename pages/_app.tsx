import "../styles/tailwind.css";
import Head from "next/head";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jazz Vila</title>
      </Head>
      <div className="min-h-screen bg-gray-100 text-gray-700 pb-10 overscroll-none">
        <Component {...pageProps} />
      </div>
    </>
  );
}
