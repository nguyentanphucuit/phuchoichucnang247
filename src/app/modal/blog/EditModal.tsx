"use client";
import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Tiptap from "@/app/components/Tiptap";
import React, { useEffect, useState } from "react";
import { doc, setDoc } from "@firebase/firestore";
import db from "@/app/utils/firestore";
import {
  classNames,
  removeVietnameseTones,
  spaceToSlash,
} from "@/app/constants/common";
import { BlogTypes } from "../../types/common";
import ComboboxComp from "@/app/components/ComboboxComp";
import { listType } from "@/app/constants";

export default function EditModal({
  showEditModal,
  blogCurrent,
  setShowEditModal,
}: {
  showEditModal: boolean;
  blogCurrent: BlogTypes;
  setShowEditModal: (showEditModal: boolean) => void;
}) {
  const [blog, setBlog] = useState<BlogTypes>({ ...blogCurrent });
  const [selected, setSelected] = useState<{
    label: string;
    value: string;
  } | null>(listType[1]);

  useEffect(() => {
    setBlog({ ...blogCurrent });
    setSelected({
      label: blogCurrent.typeLabel,
      value: blogCurrent.typeValue,
    });
  }, [blogCurrent]);

  const date = new Date().toDateString();
  const handleContentChange = (newContent: string) => {
    setBlog({ ...blog, content: newContent });
  };
  const close = () => {
    setShowEditModal(!showEditModal);
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
    console.log(selected);
    try {
      const blogRef = doc(db, "blogs", blog.id);
      await setDoc(blogRef, {
        ...blog,
        content: JSON.stringify(blog.content).replaceAll("\\", ""),
        href: "/blog/" + spaceToSlash(removeVietnameseTones(blog.title)),
        typeValue: selected?.value,
        typeLabel: selected?.label,
        date: date,
      });
      console.log("Document written with ID: ", blog.id);
      setBlog({ ...blog });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    close();
  };

  return (
    <div className="py-4">
      <Dialog
        open={showEditModal}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
        __demoMode>
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex h-auto items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-screen-lg rounded-xl bg-blue-200 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-black">
                Edit Blog
              </DialogTitle>
              <div className="w-full h-full">
                <form onSubmit={handleSubmit}>
                  <div className="px-4">ID : {blog.id}</div>
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
                  <div className="px-4">
                    <label>
                      Main Image:
                      <input
                        type="text"
                        name="mainImg"
                        className="border p-2 m-2"
                        value={blog.mainImg}
                        onChange={handleBlogChange}
                      />
                    </label>
                  </div>
                  <div className="p-1">
                    <label className="inline-flex items-center cursor-pointer">
                      <span className="ms-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
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
                  <ComboboxComp selected={selected} setSelected={setSelected} />
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
