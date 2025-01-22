import { ThemeProvider } from "./components/theme-provider";

import EmojiList from "./components/contents/EmojiList";
import Header from "./components/contents/Header";
import Footer from "./components/contents/Footer";
import Statement from "./components/statement";

export default function App() {
  return (
    <ThemeProvider
      defaultTheme="light"
      storageKey="vite-ui-theme"
    >
      <Statement />
      <div className="wrapper">
        <Header />
        <div className="container">
          <EmojiList />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
