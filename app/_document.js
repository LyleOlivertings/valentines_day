import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Press+Start+2P&display=swap"
            rel="stylesheet"
          />
          <link
            rel="preload"
            href="/maria-sprite.png"
            as="image"
          />
        </Head>
        <body className="crt">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument