import Document, { Html, Head, Main, NextScript } from 'next/document'
import { themeKey } from '../components/ColorModeToggle/ColorModeToggle';
import { darkMode, lightMode } from '../styles/sprinkles.css';


const colorModeInitializer = `
  (function () {
    var colorMode = localStorage.getItem('${themeKey}');
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

    if(colorMode === '${darkMode}' || colorMode !== '${lightMode}' && userPrefersDark){
      document.documentElement.classList.add('${darkMode}');
    }
    if(colorMode === '${lightMode}' || colorMode !== '${darkMode}' && userPrefersLight){
      document.documentElement.classList.add('${lightMode}');
    }
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
