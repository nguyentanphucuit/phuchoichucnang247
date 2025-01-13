"use client";
import React, { Suspense, useEffect, useState } from "react";
import SourceDetails from "@/app/components/SourceDetails";
import Search from "../../ui/search";
// import {
//   fetchFilteredSource,
//   fetchSourcesPage,
//   totalNumberSourceSearchQuery,
// } from "@/app/constants/common";
import { collection, getDocs } from "firebase/firestore";
// import Pagination from "../Pagination";
// import { useSearchParams } from "next/navigation";
import ViewModal from "@/app/modal/equipment/ViewModal";
import { EquipmentTypes } from "@/app/types/common";
import { emptyEquipment } from "@/app/constants";
import db from "@/app/utils/firestore";

const ListItem = () => {
  // const searchParams = useSearchParams();
  const [showViewModal, setShowViewModal] = useState(false);
  const [equipmentCurrent, setEquipmentCurrent] = useState<EquipmentTypes>({
    ...emptyEquipment,
  });

  const [items, setItems] = useState<EquipmentTypes[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, "equipments"));
      setItems(
        querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            code: data.code,
            type: data.type,
            date: data.date,
            title: data.title,
            image: data.image,
            subtitle: data.subtitle,
            href: data.href,
            content: data.content,
            price: data.price,
            discount: data.discount,
          };
        })
      );
    };

    fetchItems();
  }, []);

  // const query = searchParams.get("query") || "";
  // const currentPage = searchParams.get("page") || 1;
  // const sources = fetchFilteredSource(query, +currentPage);

  // const totalPages = fetchSourcesPage(query);
  // const totalItems = totalNumberSourceSearchQuery(query);

  return (
    <>
      <div className="pt-20 w-screen hero-pattern"></div>
      <div className="pt-12 w-full mx-auto max-w-7xl">
        <Suspense>
          <Search placeholder="Tìm kiếm ..." />
        </Suspense>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {items.map((equip) => (
            <SourceDetails
              key={equip.id}
              source={{ ...equip, id: equip.id.toString() }}
              setShowViewModal={setShowViewModal}
              setEquipmentCurrent={setEquipmentCurrent}
            />
          ))}
        </div>
        {/* <Pagination totalPages={totalPages} totalItems={totalItems} /> */}
      </div>
      <ViewModal
        showViewEquipModal={showViewModal}
        equipmentCurrent={equipmentCurrent}
        setShowViewEquipModal={setShowViewModal}
      />
    </>
  );
};

export default ListItem;
