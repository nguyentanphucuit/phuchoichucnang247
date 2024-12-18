import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogTypes } from "@/app/types/common";

const BlogCard = ({ ...props }: BlogTypes) => {
  return (
    <article
      key={props.id}
      className="flex max-w-xl flex-col items-start justify-between">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={props.date} className="text-gray-500">
          {props.date}
        </time>
      </div>
      <div className="group relative py-2">
        <Link
          className="mt-3 font-semibold text-gray-900 group-hover:text-gray-600"
          href={props.href}>
          {props.title}
        </Link>
        <div className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
          {props.content}
        </div>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <Image
          alt=""
          src={props.author.imageUrl}
          className="size-10 rounded-full bg-gray-50"
        />
        <div className="text-sm/6">
          <p className="font-semibold text-gray-900">
            <a href={props.author.href}>
              <span className="absolute inset-0" />
              {props.author.name}
            </a>
          </p>
          <p className="text-gray-600">{props.author.role}</p>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
