import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";

import packageJson from "../../../package.json";

export default function Statement() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("hasVisited", "true");
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={handleClose}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Welcome in the emojis page!
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Please read this notice carefully before using this website. It
            contains essential information.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            This website operates under an open-source license (
            <a
              href={packageJson.repository + "/blob/main/LICENSE"}
              className="statement-link"
              target="_blank"
            >
              CC0-1.0 Universal Public Domain Dedication
            </a>
            ). It does not utilize cookies and refrains from collecting any
            user data. By using this website, you acknowledge and accept
            these terms. For further information, please refer to the
            accompanying documentation. The source code repository is
            available{" "}
            <a
              href={packageJson.repository}
              className="statement-link"
              target="_blank"
            >
              here
            </a>
            .
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Thank you for your visit and interest!
          </p>
        </DialogHeader>
        <DialogFooter style={{ display: "contents" }}>
          <Button onClick={handleClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
