import { ThemeProvider } from "./components/themes/theme-provider";

import Statement from "./components/statement/statement";
import EmojiList from "./components/list/EmojiList";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

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
