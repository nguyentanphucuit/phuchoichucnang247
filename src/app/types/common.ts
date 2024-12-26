import { Editor } from "@tiptap/react";
import { StaticImageData } from "next/image";

export interface AuthorTypes {
  name: string;
  role: string;
  href: string;
  imageUrl: StaticImageData;
}

export interface BlogTypes {
  id: string | number;
  date: string;
  title: string;
  href: string;
  content: string;
  author: AuthorTypes;
}

export interface ToolbarProps {
  editor: Editor | null;
  content: string;
}
