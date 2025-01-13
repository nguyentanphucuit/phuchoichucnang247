"use client";
import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { MessageProps } from "../types/common";

export default function ViewModal({
  showViewModal,
  messageCurrent,
  setShowViewModal,
}: {
  showViewModal: boolean;
  messageCurrent: MessageProps;
  setShowViewModal: (showViewModal: boolean) => void;
}) {
  const [message, setMessage] = useState<MessageProps>({ ...messageCurrent });

  useEffect(() => {
    setMessage({ ...messageCurrent });
  }, [messageCurrent]);

  const close = () => {
    setShowViewModal(!showViewModal);
  };
  return (
    <div className="py-4">
      <Dialog
        open={showViewModal}
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
                View Message
              </DialogTitle>
              <div className="w-full h-full">
                <form>
                  <div className="px-4">ID : {message.id}</div>
                  <div className="px-4">
                    <label>Email: {message.email}</label>
                  </div>
                  <div className="px-4">
                    <label>Subject: {message.subject}</label>
                  </div>
                  <div className="px-4">
                    <label>Message: {message.message}</label>
                  </div>

                  <div className="flex justify-end gap-4 mt-4">
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
