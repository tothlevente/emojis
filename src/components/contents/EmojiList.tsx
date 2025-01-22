import { Input } from "../ui/input";
import { useState } from "react";

interface Emoji {
  name: string;
  symbol: string;
}

const emojis: Emoji[] = [
  { name: "grinning face", symbol: "😀" },
  { name: "face with tears of joy", symbol: "😂" },
  { name: "smiling face with heart-eyes", symbol: "😍" },
  { name: "thinking face", symbol: "🤔" },
  { name: "upside-down face", symbol: "🙃" },
  { name: "partying face", symbol: "🥳" },
  { name: "smiling face with sunglasses", symbol: "😎" },
  { name: "hugging face", symbol: "🤗" },
  { name: "star-struck", symbol: "🤩" },
  { name: "smiling face with halo", symbol: "😇" },
  { name: "nerd face", symbol: "🤓" },
  { name: "face with monocle", symbol: "🧐" },
  { name: "face with tongue", symbol: "😛" },
  { name: "winking face with tongue", symbol: "😜" },
  { name: "zany face", symbol: "🤪" },
  { name: "sleeping face", symbol: "😴" },
  { name: "drooling face", symbol: "🤤" },
  { name: "face with medical mask", symbol: "😷" },
  { name: "face with thermometer", symbol: "🤒" },
  { name: "face with head-bandage", symbol: "🤕" },
  { name: "nauseated face", symbol: "🤢" },
  { name: "face vomiting", symbol: "🤮" },
  { name: "hot face", symbol: "🥵" },
  { name: "cold face", symbol: "🥶" },
  { name: "pleading face", symbol: "🥺" },
  { name: "cowboy hat face", symbol: "🤠" },
];

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
