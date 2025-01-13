"use client";
import React, { Suspense } from "react";
import SourceDetails from "@/app/components/SourceDetails";
import Search from "../ui/search";
import {
  fetchFilteredSource,
  fetchSourcesPage,
  totalNumberSourceSearchQuery,
} from "@/app/constants/common";
import Pagination from "./Pagination";
import { useSearchParams } from "next/navigation";

const ListItem = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const currentPage = searchParams.get("page") || 1;
  const sources = fetchFilteredSource(query, +currentPage);

  const totalPages = fetchSourcesPage(query);
  const totalItems = totalNumberSourceSearchQuery(query);

  return (
    <>
      <div className="pt-20 w-screen hero-pattern"></div>
      <div className="pt-12 w-full mx-auto max-w-7xl">
        <Suspense>
          <Search placeholder="Tìm kiếm ..." />
        </Suspense>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {sources.map((source) => (
            <SourceDetails key={source.id} {...source} />
          ))}
        </div>
        <Pagination totalPages={totalPages} totalItems={totalItems} />
      </div>
    </>
  );
};

export default ListItem;
