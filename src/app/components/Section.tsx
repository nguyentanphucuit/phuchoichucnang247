import React from "react";
// import Image from "next/image";
// import doctorImage from "/public/assets/img/doctor-image-2.png";
const Section = () => {
  return (
    <div className="w-screen">
      <div className="h-screen flex flex-row justify-center items-center">
        <div className="absolute text-center flex flex-col gap-10 justify-center items-center">
          <div className="w-1/2">
            <p className="text-5xl text-blue-400 uppercase ">
              Giấc mơ phục hồi sau chấn thương sẽ không còn là ước mơ xa vời đối
              với bạn
            </p>
          </div>
          <div className="w-1/2">
            <p className="text-lg text-white font-mono">
              Bác sĩ phục hồi chức năng với chuyên môn cao, tận tâm và giàu kinh
              nghiệm, cam kết hỗ trợ bệnh nhân phục hồi sức khỏe, cải thiện khả
              năng vận động và chất lượng cuộc sống. Chúng tôi cung cấp các
              phương pháp điều trị hiệu quả, an toàn và phù hợp với từng nhu cầu
              cụ thể, giúp bệnh nhân nhanh chóng trở lại cuộc sống bình thường.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <button className="w-40 relative inline-flex items-center justify-center rounded-sm p-2 text-white bg-blue-600 hover:bg-gray-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white border-blue-500">
              Thông tin chi tiết
            </button>
            <button className="w-80 relative inline-flex items-center justify-center rounded-sm p-2 text-blue-600 bg-white hover:bg-gray-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white border-blue-500 border-2">
              Thông tin Bệnh nhân đã bình phục
            </button>
          </div>
        </div>
      </div>

      {/* <Image
          className="absolute w-96 bottom-0 right-72"
          alt="doctor-image"
          src={doctorImage}
        /> */}
    </div>
  );
};

export default Section;
