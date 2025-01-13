"use client";
import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { EquipmentTypes } from "../../types/common";
import Image from "next/image";
import parse from "html-react-parser";

export default function ViewModal({
  showViewEquipModal,
  equipmentCurrent,
  setShowViewEquipModal,
}: {
  showViewEquipModal: boolean;
  equipmentCurrent: EquipmentTypes;
  setShowViewEquipModal: (showViewEquipModal: boolean) => void;
}) {
  const [equip, setEquip] = useState<EquipmentTypes>({
    ...equipmentCurrent,
  });
  console.log(equip);

  useEffect(() => {
    setEquip({ ...equipmentCurrent });
  }, [equipmentCurrent]);

  const close = () => {
    setShowViewEquipModal(!showViewEquipModal);
  };
  return (
    <div className="py-4">
      <Dialog
        open={showViewEquipModal}
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
                className="text-base/7 font-medium text-black"></DialogTitle>
              <div className="w-full h-full">
                <form>
                  <div className="px-4">Mã sản phẩm : {equip.code}</div>
                  <div className="px-4">
                    <label>Tên sản phẩm: {equip.title}</label>
                  </div>
                  <div className="px-4">
                    <label>Danh mục: {equip.type}</label>
                  </div>
                  <div className="px-4">
                    <Image
                      width={200}
                      height={200}
                      src={equip.image}
                      alt={equip.title}
                    />
                  </div>
                  <div className="px-4">
                    <label>Mô tả: {parse(equip.content.slice(1, -1))}</label>
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
