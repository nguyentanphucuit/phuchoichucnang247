"use client";
import { emptyEquipment } from "@/app/constants";
import CreateModal from "@/app/modal/equipment/CreateModal";
import DeleteModal from "@/app/modal/DeleteModal";
import EditModal from "@/app/modal/equipment/EditModal";
import { EquipmentTypes } from "@/app/types/common";
import db from "@/app/utils/firestore";
import { collection, getDocs } from "@firebase/firestore";
import { Pencil, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";

const EquipmentAdminPage = () => {
  const [equipmentList, setEquipmentList] = useState<EquipmentTypes[]>([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [equipmentCurrent, setEquipmentCurrent] = useState({
    ...emptyEquipment,
  });

  const onEditEquipment = (equipment: EquipmentTypes) => {
    setShowEditModal(!showEditModal);
    setEquipmentCurrent(equipment);
    console.log("Edit Equipment");
  };

  const onDeleteEquipment = (equipment: EquipmentTypes) => {
    setShowDeleteModal(!showDeleteModal);
    setEquipmentCurrent(equipment);
    console.log("Delete Equipment");
  };

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, "equipments"));
      setEquipmentList(
        querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            date: data.date,
            title: data.title,
            subtitle: data.subtitle,
            content: data.content,
            type: data.type,
            code: data.code,
            image: data.image,
            href: data.href,
            price: data.price,
            discount: data.discount,
          };
        })
      );
    };

    fetchItems();
  }, []);

  return (
    <div className="pt-32 px-10">
      <CreateModal />
      <EditModal
        showEditModal={showEditModal}
        equipmentCurrent={equipmentCurrent}
        setShowEditModal={setShowEditModal}
      />
      <DeleteModal
        showDeleteModal={showDeleteModal}
        idCurrent={equipmentCurrent.id}
        collection="equipments"
        setShowDeleteModal={setShowDeleteModal}
      />
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
          {equipmentList.map((equipment) => (
            <tr className="border border-gray-400" key={equipment.id}>
              <td className="p-4">
                <div className="flex justify-center items-center">
                  <p className="line-clamp-2">{equipment.id}</p>
                </div>
              </td>
              <td className="p-4">
                <div className="flex justify-center items-center ">
                  <p className="line-clamp-2">{equipment.title}</p>
                </div>
              </td>
              <td className="p-4">
                <div className="flex justify-center items-center ">
                  <p className="line-clamp-2">{equipment.subtitle}</p>
                </div>
              </td>
              <td className="p-4">
                <div className="flex justify-center items-center">
                  <button onClick={() => onEditEquipment(equipment)}>
                    <Pencil className="p-1 rounded-sm bg-orange-300 text-orange-600 w-6 h-6" />
                  </button>
                </div>
              </td>
              <td className="p-4">
                <div className="flex justify-center items-center">
                  <button onClick={() => onDeleteEquipment(equipment)}>
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

export default EquipmentAdminPage;
