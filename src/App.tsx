import { ThemeProvider } from "./components/theme-provider";

import EmojiList from "./components/contents/EmojiList";
import Header from "./components/contents/Header";

export default function App() {
  return (
    <ThemeProvider
      defaultTheme="light"
      storageKey="vite-ui-theme"
    >
      <Header />
      <EmojiList />
    </ThemeProvider>
  );
}
