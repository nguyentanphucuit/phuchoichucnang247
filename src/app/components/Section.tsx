import React from "react";
// import Image from "next/image";
// import doctorImage from "/public/assets/img/doctor-image-2.png";
const Section = () => {
  return (
    <div className="w-screen pt-40 sm:pt-10">
      <div className="h-screen flex flex-row justify-center items-center">
        <div className="absolute text-center flex flex-col gap-10 justify-center items-center">
          <div className="w-3/4 sm:w-2/3 xl:w-1/2">
            <p className="text-lg sm:text-2xl md:text-5xl text-blue-400 uppercase ">
              Giải pháp Phục Hồi Chức Năng Tại Nhà – Tiện Lợi, Hiệu Quả, An Toàn
            </p>
          </div>
          <div className="w-3/4 sm:w-2/3 xl:w-1/2">
            <p className="text-sm sm:text-lg md:text-lg text-white font-mono">
              Chúng tôi thấu hiểu những khó khăn mà bạn và gia đình phải đối mặt
              khi di chuyển để điều trị, đặc biệt trong giai đoạn phục hồi sau
              chấn thương hay bệnh tật. Vì vậy, chúng tôi mang dịch vụ phục hồi
              chức năng tận nhà, giúp bạn cải thiện sức khỏe ngay trong không
              gian quen thuộc, giảm bớt gánh nặng và nâng cao chất lượng cuộc
              sống.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
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
