import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Next-Blog</title>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto|Open+Sans:300,400,500"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/tomorrow.min.css"
            rel="stylesheet"
          />
          <script src="http://apps.bdimg.com/libs/highlight.js/9.1.0/highlight.min.js" />
          <script>hljs.initHighlightingOnLoad();</script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
