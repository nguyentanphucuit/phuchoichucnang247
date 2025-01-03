import { Editor } from "@tiptap/react";
import { StaticImageData } from "next/image";

export interface AuthorTypes {
  name: string;
  role: string;
  href: string;
  imageUrl: StaticImageData;
}

export interface BlogTypes {
  id: string;
  date: string;
  mainImg: string;
  title: string;
  subtitle: string;
  href: string;
  content: string;
  author: AuthorTypes;
  related: boolean;
}

export interface ToolbarProps {
  editor: Editor | null;
  content: string;
}
