import React from "react";
import Image from "next/image";
import doctorImage from "/public/assets/img/doctor-image-2.png";
const Section = () => {
  return (
    <div>
      <div className="relative w-screen h-128 bg-blue-300 flex flex-row justify-center items-center">
        <div className="absolute top-0 left-72 p-12 flex flex-col gap-4">
          <div className="flex flex-row items-center justify-start gap-2">
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512">
              <path d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z" />
            </svg>
            <p className="text-xl">NGUYỄN MINH VƯƠNG</p>
          </div>

          <button className="w-1/2 relative inline-flex text-start rounded-sm p-2 text-gray-900 border-blue-600 border-2">
            <h1 className="text-3xl font-mono">
              10+ năm trong lĩnh vực phục hồi chức năng
            </h1>
          </button>
          <div className="w-1/2">
            <p className="text-lg text-dark font-mono">
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

        <Image
          className="absolute w-96 bottom-0 right-72"
          alt="doctor-image"
          src={doctorImage}
        />
      </div>
    </div>
  );
};

export default Section;
