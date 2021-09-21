import {
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
} from 'react';

import * as styles from './ColorModeToggle.css';

type ColorMode = 'dark' | 'light';
export const themeKey = 'imperfectus-color-mode';

interface ColorModeContextValues {
  colorMode: ColorMode | null;
  setColorMode: (colorMode: ColorMode) => void;
}

export const ColorModeContext = createContext<ColorModeContextValues>({
  colorMode: null,
  setColorMode: () => {},
});

export function ColorModeProvider({ children }: { children: ReactNode }) {
  const [colorMode, setColorMode] = useState<ColorMode | null>(null);

  useEffect(() => {
    setColorMode(
      document.documentElement.classList.contains('dark') ? 'dark' : 'light',
    );
  }, []);

  const setter = (c: ColorMode) => {
    setColorMode(c);

    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(c);

    try {
      localStorage.setItem(themeKey, c);
    } catch (e) {}
  };

  return (
    <ColorModeContext.Provider
      value={{
        colorMode,
        setColorMode: setter,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
}

export const ColorModeToggle = () => {
  const { colorMode, setColorMode } = useContext(ColorModeContext);

  return (
    <button
      className={styles.root}
      title="Toggle dark mode"
      onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
    >
      &nbsp;
    </button>
  );
};
