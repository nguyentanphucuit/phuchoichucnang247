"use client";
import { emptyAuthor } from "@/app/constants";
import CreateModal from "@/app/modal/CreateModal";
import { BlogTypes } from "@/app/types/common";
import db from "@/app/utils/firestore";
import { collection, getDocs } from "@firebase/firestore";
import { Pencil, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";

const BlogAdminPage = () => {
  const [blogList, setBlogList] = useState<BlogTypes[]>([]);

  const onEditBlog = (id: string) => {
    console.log(id);
    console.log("Edit Blog");
  };

  const onDeleteBlog = (id: string) => {
    console.log(id);
    console.log("Delete Blog");
  };

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      setBlogList(
        querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            date: data.date,
            title: data.title,
            subtitle: data.subtitle,
            related: data.related,
            href: data.href,
            content: data.content,
            author: data.author && emptyAuthor,
          };
        })
      );
    };

    fetchItems();
  }, []);
  console.log(blogList);

  return (
    <div>
      <CreateModal />
      <table className="w-full p-10 table-fixed border border-gray-400">
        <thead className="">
          <tr>
            <th className="w-1/6 p-4">ID</th>
            <th className="w-2/6 p-4">Title</th>
            <th className="w-2/6 p-4">Subtitle</th>
            <th className="w-1/12 p-4">Edit</th>
            <th className="w-1/12 p-4">Delete</th>
          </tr>
        </thead>
        <tbody>
          {blogList.map((blog) => (
            <tr className="border border-gray-400" key={blog.id}>
              <td className="p-4">
                <div className="flex justify-center items-center">
                  <p className="line-clamp-2">{blog.id}</p>
                </div>
              </td>
              <td className="p-4">
                <div className="flex justify-center items-center ">
                  <p className="line-clamp-2">{blog.title}</p>
                </div>
              </td>
              <td className="p-4">
                <div className="flex justify-center items-center ">
                  <p className="line-clamp-2">{blog.subtitle}</p>
                </div>
              </td>
              <td className="p-4">
                <div className="flex justify-center items-center">
                  <button onClick={() => onEditBlog(blog.id)}>
                    <Pencil className="p-1 rounded-sm bg-orange-300 text-orange-600 w-6 h-6" />
                  </button>
                </div>
              </td>
              <td className="p-4">
                <div className="flex justify-center items-center">
                  <button onClick={() => onDeleteBlog(blog.id)}>
                    <Trash2 className="p-1 rounded-sm bg-red-300 text-red-600 w-6 h-6" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogAdminPage;
