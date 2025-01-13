"use client";
import { emptyMessage } from "@/app/constants";
import DeleteModal from "@/app/modal/DeleteModal";
import ViewModal from "@/app/modal/ViewModal";
import { MessageProps } from "@/app/types/common";
import db from "@/app/utils/firestore";
import { collection, getDocs } from "@firebase/firestore";
import { Eye, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";

const ContactAdminPage = () => {
  const [messageList, setMessageList] = useState<MessageProps[]>([]);
  const [messageCurrent, setMessageCurrent] = useState<MessageProps>({
    ...emptyMessage,
  });
  const [showViewModal, setShowViewModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const onViewMessage = (message: MessageProps) => {
    setShowViewModal(!showViewModal);
    setMessageCurrent(message);
    console.log("View Message");
  };

  const onDeleteMessage = (message: MessageProps) => {
    setShowDeleteModal(!showDeleteModal);
    setMessageCurrent(message);
    console.log("Delete Message");
  };

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, "messages"));
      setMessageList(
        querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            date: data.date,
            email: data.email,
            subject: data.subject,
            message: data.message,
          };
        })
      );
    };

    fetchItems();
  }, []);
  console.log(messageList);
  return (
    <div className="pt-32 px-10">
      <ViewModal
        showViewModal={showViewModal}
        messageCurrent={messageCurrent}
        setShowViewModal={setShowViewModal}
      />
      <DeleteModal
        showDeleteModal={showDeleteModal}
        idCurrent={messageCurrent.id}
        collection="messages"
        setShowDeleteModal={setShowDeleteModal}
      />
      <table className="w-full p-10 table-fixed border border-gray-400">
        <thead className="">
          <tr>
            <th className="w-1/6 p-4">ID</th>
            <th className="w-1/6 p-4">Email</th>
            <th className="w-1/6 p-4">Subject</th>
            <th className="w-2/6 p-4">Message</th>
            <th className="w-1/12 p-4">View</th>
            <th className="w-1/12 p-4">Delete</th>
          </tr>
        </thead>
        <tbody>
          {messageList.map((message) => (
            <tr className="border border-gray-400" key={message.id}>
              <td className="p-4">
                <div className="flex justify-center items-center">
                  <p className="line-clamp-2">{message.id}</p>
                </div>
              </td>
              <td className="p-4">
                <div className="flex justify-center items-center ">
                  <p className="line-clamp-2">{message.email}</p>
                </div>
              </td>
              <td className="p-4">
                <div className="flex justify-center items-center ">
                  <p className="line-clamp-2">{message.subject}</p>
                </div>
              </td>
              <td className="p-4">
                <div className="flex justify-center items-center ">
                  <p className="line-clamp-2">{message.message}</p>
                </div>
              </td>
              <td className="p-4">
                <div className="flex justify-center items-center">
                  <button onClick={() => onViewMessage(message)}>
                    <Eye className="p-1 rounded-sm bg-blue-300 text-blue-600 w-6 h-6" />
                  </button>
                </div>
              </td>
              <td className="p-4">
                <div className="flex justify-center items-center">
                  <button onClick={() => onDeleteMessage(message)}>
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

export default ContactAdminPage;
