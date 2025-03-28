import image1 from "../../../public/assets/img/image1.jpg";
import image2 from "../../../public/assets/img/image2.jpg";
import image3 from "../../../public/assets/img/image3.jpg";
import image4 from "../../../public/assets/img/image4.jpg";
import image5 from "../../../public/assets/img/image5.jpg";
import image6 from "../../../public/assets/img/image6.jpg";
import image7 from "../../../public/assets/img/image7.jpg";
import image8 from "../../../public/assets/img/image8.jpg";
import image9 from "../../../public/assets/img/image9.jpg";
import image10 from "../../../public/assets/img/image10.jpg";
import image11 from "../../../public/assets/img/image11.jpg";
import image12 from "../../../public/assets/img/image12.jpg";
import image13 from "../../../public/assets/img/image13.jpg";
import image14 from "../../../public/assets/img/image14.jpg";
import image15 from "../../../public/assets/img/image15.jpg";
import image16 from "../../../public/assets/img/image16.jpg";
import image17 from "../../../public/assets/img/image17.jpg";
import image18 from "../../../public/assets/img/image18.jpg";
import image19 from "../../../public/assets/img/image19.jpg";
import image20 from "../../../public/assets/img/image20.jpg";
// import A001 from "../../../public/assets/img/A001.jpg";
// import A002 from "../../../public/assets/img/A002.png";
// import A003 from "../../../public/assets/img/A003.png";
// import A004 from "../../../public/assets/img/A004.jpg";
// import A005 from "../../../public/assets/img/A005.jpg";
// import A006 from "../../../public/assets/img/A006.jpg";
// import A007 from "../../../public/assets/img/A007.jpg";
// import A008 from "../../../public/assets/img/A008.jpg";
// import A009 from "../../../public/assets/img/A009.png";

import imageAuthor from "/public/assets/img/author.jpg";

const sourcesPerPage = 4;

const emptyAuthor = {
  name: "Minh Vương",
  role: "Co-Founder / CTO",
  href: "#",
  imageUrl: imageAuthor,
};
const emptyBlog = {
  id: "",
  title: "",
  typeValue: "",
  typeLabel: "",
  subtitle: "",
  content: "",
  mainImg: "",
  href: "",
  date: "",
  author: emptyAuthor,
  related: false,
  views: 0,
};

const emptyMessage = {
  id: "",
  email: "",
  subject: "",
  message: "",
  date: "",
};

const emptyEquipment = {
  id: "",
  code: "",
  title: "",
  subtitle: "",
  content: "",
  type: "",
  date: "",
  image: "",
  href: "",
  price: 0,
  discount: 0,
};

const listType = [
  { value: "0", label: "Tất cả bệnh lý", href: "/blog" },
  { value: "1", label: "Bệnh lý cơ xương khớp", href: "/blog" },
  { value: "2", label: "Bệnh lý thần kinh", href: "/blog" },
];

const ListItems = [
  {
    id: "1",
    code: "A001",
    title: "Khung tập đi bánh nhỏ",
    subtitle: "",
    content: "",
    type: "DỤNG CỤ",
    date: "2024-12-01",
    image:
      "https://phuchoichucnang247.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FA001.a182ed20.jpg&w=256&q=75",
    href: "#",
    price: 1200000,
    discount: 10,
  },
  {
    id: "2",
    code: "A002",
    title: "Khung tập đi có ghế ngồi",
    subtitle: "",
    content: "",
    type: "DỤNG CỤ",
    date: "2024-12-01",
    image:
      "https://phuchoichucnang247.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FA002.a51445f9.png&w=256&q=75",
    href: "#",
    price: 1500000,
    discount: 15,
  },
  {
    id: "3",
    code: "A003",
    title: "Gậy 4 chân",
    subtitle: "",
    content: "",
    type: "DỤNG CỤ",
    date: "2024-12-01",
    image:
      "https://phuchoichucnang247.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FA003.1a286c08.png&w=256&q=75",
    href: "#",
    price: 1100000,
    discount: 5,
  },
  {
    id: "4",
    code: "A004",
    title: "Xe lăn có bô",
    subtitle: "",
    content: "",
    type: "DỤNG CỤ",
    date: "2024-12-01",
    image:
      "https://phuchoichucnang247.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FA004.bc4ee021.jpg&w=256&q=75",
    href: "#",
    price: 900000,
    discount: 20,
  },
  {
    id: "5",
    code: "A005",
    title: "Nẹp cổ tay ngón tay",
    subtitle: "",
    content: "",
    type: "DỤNG CỤ",
    date: "2024-12-01",
    image:
      "https://phuchoichucnang247.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FA005.b1f5da33.jpg&w=256&q=75",
    href: "#",
    price: 2000000,
    discount: 10,
  },
  {
    id: "6",
    code: "A006",
    title: "Bóng cầm tay tập vận động",
    subtitle: "",
    content: "",
    type: "DỤNG CỤ",
    date: "2024-12-01",
    image:
      "https://phuchoichucnang247.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FA006.45728f0b.jpg&w=256&q=75",
    href: "#",
    price: 1400000,
    discount: 12,
  },
  {
    id: "7",
    code: "A007",
    title: "Dụng cụ hỗ trợ cầm thìa, nĩa",
    subtitle: "",
    content: "",
    type: "DỤNG CỤ",
    date: "2024-12-01",
    image:
      "https://phuchoichucnang247.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FA007.f4f4e8b0.jpg&w=256&q=75",
    href: "#",
    price: 1000000,
    discount: 18,
  },
  {
    id: "8",
    code: "A008",
    title: "Dây kháng lực",
    subtitle: "",
    content: "",
    type: "DỤNG CỤ",
    date: "2024-12-01",
    image:
      "https://phuchoichucnang247.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FA008.6e626ca8.jpg&w=256&q=75",
    href: "#",
    price: 2500000,
    discount: 20,
  },
  {
    id: "9",
    code: "A009",
    title: "Tay vịn nhà vệ sinh",
    subtitle: "",
    content: "",
    type: "DỤNG CỤ",
    date: "2024-12-01",
    image:
      "https://phuchoichucnang247.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FA009.2c1733b2.png&w=256&q=75",
    href: "#",
    price: 700000,
    discount: 10,
  },
];

const listHighHeels = [
  {
    id: 1,
    title: "Giày Cao Gót Da Lộn Màu Đỏ",
    subtitle: "Kiểu dáng thanh thoát, dễ dàng phối đồ",
    type: "HIGH HEEL",
    price: 2500000,
    discount: 10,
    image: image1,
  },
  {
    id: 2,
    title: "Giày Cao Gót Mũi Nhọn Da",
    subtitle: "Cổ điển và sang trọng cho các dịp lễ",
    type: "HIGH HEEL",
    price: 3200000,
    discount: 15,
    image: image2,
  },
  {
    id: 3,
    title: "Giày Cao Gót Đính Đá Swarovski",
    subtitle: "Sự lựa chọn hoàn hảo cho tiệc đêm",
    type: "HIGH HEEL",
    price: 4500000,
    discount: 20,
    image: image3,
  },
  {
    id: 4,
    title: "Giày Cao Gót Đế Bằng Cổ Điển",
    subtitle: "Sang trọng và dễ sử dụng trong mọi hoàn cảnh",
    type: "HIGH HEEL",
    price: 2700000,
    discount: 5,
    image: image4,
  },
  {
    id: 5,
    title: "Giày Cao Gót Quai Mảnh Da Lộn",
    subtitle: "Kiểu dáng tinh tế, phù hợp mọi phong cách",
    type: "HIGH HEEL",
    price: 3500000,
    discount: 25,
    image: image5,
  },
  {
    id: 6,
    title: "Giày Cao Gót Kim Loại Màu Vàng",
    subtitle: "Phong cách mạnh mẽ, nổi bật với chất liệu kim loại",
    type: "HIGH HEEL",
    price: 3900000,
    discount: 12,
    image: image6,
  },
  {
    id: 7,
    title: "Giày Cao Gót Cao Cấp Da Bò",
    subtitle: "Chất liệu da bò mềm mại và bền bỉ",
    type: "HIGH HEEL",
    price: 5000000,
    discount: 15,
    image: image7,
  },
  {
    id: 8,
    title: "Giày Cao Gót Kim Loại Mạ Vàng",
    subtitle: "Phong cách sang trọng với mạ vàng tinh tế",
    type: "HIGH HEEL",
    price: 4500000,
    discount: 10,
    image: image8,
  },
  {
    id: 9,
    title: "Giày Cao Gót Đen Mũi Nhọn",
    subtitle: "Đơn giản, thanh lịch, dễ dàng kết hợp với mọi trang phục",
    type: "HIGH HEEL",
    price: 2800000,
    discount: 18,
    image: image9,
  },
  {
    id: 10,
    title: "Giày Cao Gót Màu Hồng Phấn",
    subtitle: "Dịu dàng và nữ tính với màu sắc nhẹ nhàng",
    type: "HIGH HEEL",
    price: 3200000,
    discount: 10,
    image: image10,
  },
  {
    id: 11,
    title: "Giày Cao Gót Cổ Điển Màu Đen",
    subtitle: "Lựa chọn tuyệt vời cho công sở và sự kiện",
    type: "HIGH HEEL",
    price: 2800000,
    discount: 10,
    image: image11,
  },
  {
    id: 12,
    title: "Giày Cao Gót Mũi Vuông Da Màu Nâu",
    subtitle: "Chắc chắn và thoải mái với thiết kế mũi vuông",
    type: "HIGH HEEL",
    price: 3500000,
    discount: 8,
    image: image12,
  },
  {
    id: 13,
    title: "Giày Cao Gót Thời Trang Màu Xám",
    subtitle: "Dành cho những cô nàng yêu thích sự khác biệt",
    type: "HIGH HEEL",
    price: 4000000,
    discount: 20,
    image: image13,
  },
  {
    id: 14,
    title: "Giày Cao Gót Đính Hoa Vải",
    subtitle: "Thiết kế nhẹ nhàng và tinh tế cho các buổi tiệc",
    type: "HIGH HEEL",
    price: 3800000,
    discount: 12,
    image: image14,
  },
  {
    id: 15,
    title: "Giày Cao Gót Đế Xuồng Màu Đen",
    subtitle: "Đế xuồng giúp tăng thêm sự thoải mái khi di chuyển",
    type: "HIGH HEEL",
    price: 4200000,
    discount: 18,
    image: image15,
  },
  {
    id: 16,
    title: "Giày Cao Gót Màu Vàng Mới Lạ",
    subtitle: "Chất liệu da mềm mại và bóng bẩy",
    type: "HIGH HEEL",
    price: 4500000,
    discount: 10,
    image: image16,
  },
  {
    id: 17,
    title: "Giày Cao Gót Xỏ Ngón Màu Hồng",
    subtitle: "Sự kết hợp hoàn hảo giữa phong cách hiện đại và cổ điển",
    type: "HIGH HEEL",
    price: 4000000,
    discount: 5,
    image: image17,
  },
  {
    id: 18,
    title: "Giày Cao Gót Mũi Nhọn Màu Đỏ Rượu",
    subtitle: "Màu sắc sang trọng cho mọi dịp đặc biệt",
    type: "HIGH HEEL",
    price: 3300000,
    discount: 15,
    image: image18,
  },
  {
    id: 19,
    title: "Giày Cao Gót Cổ Điển Đen Mới",
    subtitle: "Một sự lựa chọn tối giản nhưng không kém phần nổi bật",
    type: "HIGH HEEL",
    price: 2600000,
    discount: 10,
    image: image19,
  },
  {
    id: 20,
    title: "Giày Cao Gót Xinh Xắn Màu Be",
    subtitle: "Dễ dàng kết hợp với nhiều bộ trang phục khác nhau",
    type: "HIGH HEEL",
    price: 2900000,
    discount: 12,
    image: image20,
  },
];

export {
  ListItems,
  sourcesPerPage,
  listHighHeels,
  emptyAuthor,
  emptyBlog,
  emptyMessage,
  emptyEquipment,
  listType,
};
