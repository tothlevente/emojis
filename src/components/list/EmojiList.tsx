import emojis from "@/data/emojis";

import { Input } from "../ui/input";
import { useState } from "react";

export default function EmojiList() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredEmojis = emojis.filter(
    (emoji) =>
      emoji.name.toLowerCase().includes(searchTerm) ||
      emoji.symbol.includes(searchTerm)
  );

  const handleClick = (
    symbol: string,
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    navigator.clipboard.writeText(symbol);
    const element = event.currentTarget;
    element.classList.add("show-message");

    setTimeout(() => {
      element.classList.remove("show-message");
    }, 4000);
  };

  return (
    <div className="emoji-list">
      <Input
        type="text"
        placeholder="Search emojis..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredEmojis.map((emoji, index) => (
          <li
            key={index}
            className="emoji-item"
            onClick={(event) => handleClick(emoji.symbol, event)}
          >
            {emoji.symbol}
            <span className="copy-message">Copied to clipboard!</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
