import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <link rel="shortcut icon" href={""} />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
