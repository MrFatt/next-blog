import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html style={{height: "100%"}}>
        <Head>
          <title>Next-Blog</title>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto|Open+Sans:300,400,500"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github.min.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Oswald"
            rel="stylesheet"
          />
          <script src="http://apps.bdimg.com/libs/highlight.js/9.1.0/highlight.min.js" />
          <script>hljs.initHighlightingOnLoad();</script>
        </Head>
        <body style={{height:'100%',margin:0}}>
          <Main style={{height:'100%'}} />
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
