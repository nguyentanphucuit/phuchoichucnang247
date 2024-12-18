import { StaticImageData } from "next/image";

export interface AuthorTypes {
  name: string;
  role: string;
  href: string;
  imageUrl: StaticImageData;
}

export interface BlogTypes {
  id: number;
  date: string;
  title: string;
  href: string;
  content: React.ReactNode;
  author: AuthorTypes;
}
