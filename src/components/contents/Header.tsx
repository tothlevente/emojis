import { ModeToggle } from "../mode-toggle";
import { SmileIcon } from "lucide-react";

export default function Header() {
  return (
    <div className="header">
      <div className="header-title">
        <SmileIcon />
        <p>Emojis</p>
      </div>
      <ModeToggle />
    </div>
  );
}
