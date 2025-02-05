import { ThemeProvider } from "./components/theme-provider";

import EmojiList from "./components/layouts/EmojiList";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
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
