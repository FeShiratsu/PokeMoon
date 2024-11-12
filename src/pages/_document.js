import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const cspHeader = "img-src 'self' https://raw.githubusercontent.com/PokeAPI/"
  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="Content-Security-Policy" content={cspHeader} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
