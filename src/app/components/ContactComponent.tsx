"use client";
import { addDoc, collection } from "@firebase/firestore";
import React, { useState } from "react";
import db from "../utils/firestore";
import { emptyMessage } from "../constants";

const ContactComponent = () => {
  const [message, setMessage] = useState({ ...emptyMessage });
  const date = new Date().toDateString();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(message);
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        ...message,
        date: date,
      });
      console.log("Document written with ID: ", docRef.id);
      setMessage({ ...emptyMessage });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    close();
  };

  const handleMessageChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="pt-60 sm:pt-20 w-screen contactUs-pattern">
        <div className="h-80 flex flex-row justify-center items-center ">
          <div className="absolute text-center flex flex-col gap-10 justify-center items-center">
            <div className="w-1/2">
              <p className="text-md lg:text-4xl text-blue-400 uppercase">
                Nếu bạn cần hỗ trợ phục hồi chức năng tại nhà, hãy liên hệ ngay
                với chúng tôi để được tư vấn và hỗ trợ tốt nhất!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-12 w-full mx-auto max-w-7xl">
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Liên hệ với chúng tôi
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Bạn cần hỗ trợ về phục hồi chức năng? Muốn gửi góp ý về dịch vụ?
              Cần thông tin chi tiết về các chương trình tại nhà? Hãy liên hệ
              với chúng tôi!
            </p>
            <form onSubmit={(e) => handleSubmit(e)} className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Nhập email của bạn
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleMessageChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Nhập tiêu đề
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  onChange={handleMessageChange}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Hãy cho chúng tôi biết để được hỗ trợ bạn"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Nhập nội dung
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={handleMessageChange}
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Để lại nội dung để tôi có thể liên hệ bạn sớm nhất..."></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Gửi lời nhắn
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactComponent;
