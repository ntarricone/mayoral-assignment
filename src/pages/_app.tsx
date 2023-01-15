import Head from 'next/head';
import '../styles/global.styles.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="title" content="Mayoral Test" />
        <meta name="description" content="Nahuel Tarricone solution to Mayoral Test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
