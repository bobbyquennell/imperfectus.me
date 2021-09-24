import Document, { Html, Head, Main, NextScript } from 'next/document'
import { themeKey } from '../components/ColorModeToggle/ColorModeToggle';
import { lightMode } from '../styles/sprinkles.css';


const colorModeInitializer = `
  (function () {
    var colorMode = localStorage.getItem('${themeKey}') || ${lightMode};
    document.documentElement.classList.add(colorMode);
  })();`;
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script dangerouslySetInnerHTML={{__html: colorModeInitializer}}/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
