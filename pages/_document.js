import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html style={{ height: "100%" }}>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto|Open+Sans:300,400,500"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Oswald"
            rel="stylesheet"
          />
          <link
            href="/static/dracula.css"
            rel="stylesheet"
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/highlight.min.js" />
          <script>hljs.initHighlightingOnLoad();</script>
        </Head>
        <body style={{ height: "100%", margin: 0 }}>
          <Main style={{ height: "100%" }} />
          <NextScript />
        </body>
        <style global jsx>{`
          div#__next {
            height: 100%;
          }
        `}</style>
      </html>
    );
  }
}
