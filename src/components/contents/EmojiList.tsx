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
            onClick={() => navigator.clipboard.writeText(emoji.symbol)}
          >
            {emoji.symbol}
          </li>
        ))}
      </ul>
    </div>
  );
}
