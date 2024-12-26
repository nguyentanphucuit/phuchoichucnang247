"use client";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Tiptap from "@/app/components/Tiptap";
import React, { useState } from "react";
import { addDoc, collection } from "@firebase/firestore";
import db from "@/app/utils/firestore";
import { emptyBlog } from "@/app/constants";
import {
  classNames,
  removeVietnameseTones,
  spaceToSlash,
} from "@/app/constants/common";

export default function MyModal() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const [blog, setBlog] = React.useState({ ...emptyBlog });
  const date = new Date().toDateString();

  const handleContentChange = (newContent: string) => {
    setBlog({ ...blog, content: newContent });
  };

  const handleRelatedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlog({ ...blog, related: e.target.checked });
  };

  const handleBlogChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (blog.title === "" || blog.subtitle === "" || blog.content === "")
      return;
    console.log(blog);
    try {
      const docRef = await addDoc(collection(db, "blogs"), {
        ...blog,
        content: JSON.stringify(blog.content).replaceAll("\\", ""),
        href: "/blog/" + spaceToSlash(removeVietnameseTones(blog.title)),
        date: date,
      });
      console.log("Document written with ID: ", docRef.id);
      setBlog({ ...emptyBlog });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    close();
  };

  return (
    <div className="py-4">
      <Button
        onClick={open}
        className="rounded-md bg-blue-600 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-blue-700/70 data-[focus]:outline-1 data-[focus]:outline-black">
        Create Blog
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
        __demoMode>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex h-screen items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-screen-lg rounded-xl bg-blue-700/15 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-black">
                Create Blog
              </DialogTitle>
              <div className="w-full h-full">
                <form onSubmit={handleSubmit}>
                  <div className="px-4">
                    <label>
                      Title:
                      <input
                        type="text"
                        name="title"
                        className="border p-2 m-2"
                        value={blog.title}
                        onChange={handleBlogChange}
                      />
                    </label>
                  </div>
                  <div className="px-4">
                    <label>
                      Subtitle:
                      <input
                        type="text"
                        name="subtitle"
                        className="border p-2 m-2"
                        value={blog.subtitle}
                        onChange={handleBlogChange}
                      />
                    </label>
                  </div>
                  <div className="p-1">
                    <label className="inline-flex items-center cursor-pointer">
                      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Related :
                      </span>
                      <input
                        type="checkbox"
                        name="related"
                        checked={blog.related}
                        onChange={handleRelatedChange}
                        className="sr-only peer"
                      />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <Tiptap
                    content={blog.content}
                    onChange={(newContent: string) =>
                      handleContentChange(newContent)
                    }
                  />
                  <div className="flex justify-end gap-4 mt-4">
                    <Button
                      type="submit"
                      className={classNames(
                        blog.content === "" && "opacity-50 cursor-not-allowed",
                        "inline-flex items-center gap-2 rounded-md bg-blue-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-black data-[open]:bg-gray-500"
                      )}>
                      Save
                    </Button>
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-gray-600 py-1.5 px-3 text-sm/6 font-semibold text-gray-100 shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-500 data-[focus]:outline-1 data-[focus]:outline-black data-[open]:bg-gray-500"
                      onClick={close}>
                      Close
                    </Button>
                  </div>
                </form>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
