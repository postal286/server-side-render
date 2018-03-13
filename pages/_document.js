import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

import globalStyles from '../globalStyles'

export default class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="../static/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="../static/posts-title-bg.jpg" />
          <link rel="icon" type="image/png" sizes="16x16" href="../static/favicon-16x16.png" />
          <link rel="manifest" href="../static/site.webmanifest" />
          <link rel="mask-icon" href="../static/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#2b5797" />
          <meta name="theme-color" content="#ffffff" />
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <style jsx global>{globalStyles}</style>
        </Head>
        <body>
          {this.props.children}
          <Main />
          <NextScript />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=String.prototype.startsWith,Array.from,Array.prototype.fill,Array.prototype.keys,Array.prototype.findIndex,Number.isInteger&flags=gated" />
        </body>
      </html>
    )
  }
}