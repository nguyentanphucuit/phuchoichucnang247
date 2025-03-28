"use client";
import React, { Suspense, useEffect, useState } from "react";
import Search from "../ui/search";
// import {
//   fetchFilteredBlog,
//   fetchBlogsPage,
//   totalNumberBlogSearchQuery,
// } from "@/app/constants/common";
// import Pagination from "./Pagination";
// import { useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BlogCard from "./blog/BlogCard";
import { collection, getDocs } from "@firebase/firestore";
import db from "../utils/firestore";
import { BlogTypes } from "../types/common";
import { emptyAuthor, listType } from "../constants";
// import blogList from "../constants/blogListJSX";
// import parse from "html-react-parser";

const ListBlog = () => {
  // const searchParams = useSearchParams();
  const [items, setItems] = useState<BlogTypes[]>([]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      setItems(
        querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            date: data.date,
            title: data.title,
            typeValue: data.typeValue,
            typeLabel: data.typeLabel,
            mainImg: data.mainImg,
            subtitle: data.subtitle,
            related: data.related,
            href: data.href,
            content: data.content,
            author: data.author && emptyAuthor,
            views: data.views,
          };
        })
      );
    };

    fetchItems();
  }, []);

  const itemsFiltered = items.filter((item) => {
    if (selected === 0) return true;
    return item.typeValue === listType[selected].value;
  });
  console.log(listType[selected]?.value);
  console.log(items);

  // const query = searchParams.get("query") || "";
  // const currentPage = searchParams.get("page") || 1;
  // const blogs = fetchFilteredBlog(query, +currentPage);

  // const totalPages = fetchBlogsPage(query);
  // const totalItems = totalNumberBlogSearchQuery(query);
  return (
    <>
      <div className="pt-12">
        <Suspense>
          <Search placeholder="Tìm kiếm ..." />
        </Suspense>
        <TypeSelect selected={selected} setSelected={setSelected} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8">
          {itemsFiltered.map((blog) => (
            <BlogCard key={blog.href} {...blog} />
          ))}
        </div>
        {/* <Pagination totalPages={totalPages} totalItems={totalItems} /> */}
      </div>
    </>
  );
};

const TypeSelect = ({
  selected,
  setSelected,
}: {
  selected: number;
  setSelected: (value: number) => void;
}) => {
  return (
    <Select
      onValueChange={(value) => setSelected(Number(value))}
      defaultValue={selected.toString()}>
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder="Chọn loại bệnh" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Bệnh lý</SelectLabel>
          {listType.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ListBlog;
