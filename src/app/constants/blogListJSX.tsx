// import Image from "next/image";
// import blog1Image1 from "/public/assets/img/blog-1-image-1.jpg";
// import blog2Image2 from "/public/assets/img/blog-2-image-2.jpg";
// import React from "react";
import imageAuthor from "/public/assets/img/author.jpg";
import { BlogTypes } from "../types/common";

const blogList: BlogTypes[] = [
  {
    id: "0",
    title: "NGUYÊN TẮC TỔ CHỨC KHÔNG GIAN SỐNG CHO BỆNH NHÂN ĐỘT QUỴ",
    related: false,
    subtitle:
      "Bệnh nhân đột quỵ thường gặp phải những khó khăn lớn trong các sinh hoạt hàng ngày, từ việc di chuyển đến tự chăm sóc bản thân. Những hạn chế này không chỉ ảnh hưởng đến chất lượng cuộc sống mà còn làm tăng nguy cơ tai nạn, đặc biệt là ngã. Vì vậy, việc tổ chức không gian sống sao cho hợp lý và khoa học là rất quan trọng để hỗ trợ bệnh nhân duy trì sự độc lập và giảm thiểu nguy cơ tai nạn.",
    href: "/blog/NGUYEN-TAC-TO-CHUC-KHONG-GIAN-SONG-CHO-BENH-NHAN-DOT-QUY",
    date: "Monday, December 16, 2024",
    content: `<div className="">
        <div>
          Bệnh nhân đột quỵ thường gặp phải những khó khăn lớn trong các sinh
          hoạt hàng ngày, từ việc di chuyển đến tự chăm sóc bản thân. Những hạn
          chế này không chỉ ảnh hưởng đến chất lượng cuộc sống mà còn làm tăng
          nguy cơ tai nạn, đặc biệt là ngã. Vì vậy, việc tổ chức không gian sống
          sao cho hợp lý và khoa học là rất quan trọng để hỗ trợ bệnh nhân duy
          trì sự độc lập và giảm thiểu nguy cơ tai nạn.
        </div>
        <div>
          Sau đây là hai nguyên tắc cơ bản trong việc thiết kế không gian sống
          cho bệnh nhân đột quỵ.
        </div>
        <div>
          <div className="py-2">
            <div className="font-bold py-2">
              NGUYÊN TẮC 1: AN TOÀN LÀ ƯU TIÊN HÀNG ĐẦU
            </div>
            <div>
              Bệnh nhân đột quỵ có nguy cơ ngã cao do yếu cơ, mất cảm giác, rối
              loạn nhận thức, co cứng cơ và dễ mệt mỏi. Vì vậy,
              <strong> an toàn phải được đặt lên hàng đầu</strong> trong việc
              thiết kế không gian sống. Một môi trường an toàn không chỉ giảm
              thiểu nguy cơ ngã mà còn giúp bệnh nhân duy trì sự độc lập trong
              sinh hoạt.
            </div>
            <div>Để làm được điều này, cần chú ý:</div>
            <ul className="list-decimal p-4">
              <li>
                <strong>Lối đi rộng, không vật cản</strong> giúp bệnh nhân di
                chuyển dễ dàng. Đảm bảo phòng ngủ có đủ không gian để bệnh nhân
                có thể di chuyển và không gặp khó khăn khi ra vào.
              </li>
              <li>
                <strong>Giường có chiều cao phù hợp</strong>, giúp bệnh nhân
                ngồi với hai lòng bàn chân chạm sàn, tạo cảm giác vững vàng khi
                ngồi. Giường cũng cần đủ rộng để bệnh nhân dễ dàng lăn trở
              </li>
              <li>
                <strong>Sàn và thảm chống trơn</strong> giúp ngăn ngừa trượt
                ngã. Tránh đặt thảm dễ trơn trong phòng để giảm nguy cơ té ngã.
              </li>
              <li>
                <strong>Tay vịn</strong> ở các khu vực trọng yếu như cầu thang,
                phòng tắm hỗ trợ bệnh nhân giữ thăng bằng và di chuyển an toàn.
                Lắp tay vịn hỗ trợ ở phía tay mạnh, giúp bệnh nhân dễ dàng di
                chuyển và duy trì tư thế an toàn.
              </li>
              <ul>
                <div className="flex flex-col justify-center items-center gap-2">
                  <Image alt="blog-1-image-1" src={blog1Image1} />
                  <div className="italic">
                    Hình: Nhà vệ sinh được lắp đặt các tay vịn giúp an toàn
                    trong phòng tắm
                  </div>
                </div>
              </ul>
              <li>
                <strong>Ánh sáng đủ</strong> để dễ dàng nhận diện và tránh
                chướng ngại vật, đặc biệt là khi bệnh nhân di chuyển trong đêm.
              </li>
              <li>
                <strong>Thiết kế dễ tiếp cận</strong>, giảm thiểu việc di chuyển
                quá nhiều, giúp bệnh nhân tiếp cận các vật dụng cần thiết một
                cách thuận tiện mà không tốn sức.
              </li>
            </ul>
            <div>
              Không gian sống an toàn giúp bệnh nhân đột quỵ tự tin hơn trong
              các hoạt động hàng ngày, giảm thiểu nguy cơ ngã và nâng cao chất
              lượng cuộc sống.
            </div>
          </div>
          <div className="py-2">
            <div className="font-bold py-2">
              NGUYÊN TẮC 2: TĂNG SỰ TIỆN LỢI VÀ TIẾT KIỆM SỨC LỰC
            </div>
            <div>
              Ngoài an toàn, việc
              <strong> tăng sự tiện lợi và tiết kiệm sức lực</strong> cho bệnh
              nhân đột quỵ là yếu tố quyết định trong việc nâng cao chất lượng
              cuộc sống. Một không gian sống tiện nghi giúp bệnh nhân dễ dàng
              thực hiện các hoạt động hàng ngày mà không tốn nhiều sức lực.
            </div>
            <div>Để đạt được điều này:</div>
            <ul className="list-decimal p-4">
              <li>
                <strong>Vị trí vật dụng hợp lý</strong>, như đèn, điện thoại,
                nước uống gần giường, giúp bệnh nhân không phải di chuyển quá
                nhiều, tiết kiệm sức lực và tránh cảm giác mệt mỏi.
              </li>
              <li>
                <strong>Phòng vệ sinh gần phòng ngủ</strong> để bệnh nhân dễ
                dàng tiếp cận. Nếu không thể, có thể sử dụng bô vệ sinh hoặc bàn
                nhỏ với gương cho việc vệ sinh cá nhân.
              </li>
              <div className="flex flex-col justify-center items-center gap-2">
                <Image alt="blog-2-image-2" src={blog2Image2} />
                <div className="italic">
                  Hình: Bô vệ sinh nên đặt cạnh giường nếu khó tiếp cận phòng vệ
                  sinh
                </div>
              </div>
              <li>
                <strong>Thiết bị hỗ trợ</strong> như ghế tựa, xe lăn, dụng cụ ăn
                uống đặc biệt giúp giảm sức lực trong các hoạt động.
              </li>
              <li>
                <strong>Không gian gọn gàng</strong>, giảm bớt vật dụng không
                cần thiết giúp bệnh nhân dễ dàng tìm kiếm vật dụng và di chuyển
                nhẹ nhàng hơn.
              </li>
              <li>
                <strong>Công nghệ hỗ trợ</strong> với đèn cảm ứng, thiết bị điều
                khiển từ xa giúp giảm công sức khi điều chỉnh các thiết bị.
              </li>
              <li>
                <strong>Giảm công việc nhà</strong> bằng các thiết bị tự động
                như máy hút bụi, máy rửa chén giúp tiết kiệm thời gian và năng
                lượng cho bệnh nhân.
              </li>
            </ul>
            <div>
              Một không gian sống tiện nghi không chỉ giúp bệnh nhân đột quỵ
              giảm bớt mệt mỏi mà còn tạo ra môi trường sống thoải mái, tự do và
              đầy đủ.
            </div>
          </div>
        </div>
      </div>`,
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: imageAuthor,
    },
  },
  {
    id: "1",
    title: "NGUYÊN TẮC TỔ CHỨC KHÔNG GIAN SỐNG CHO BỆNH NHÂN ĐỘT QUỴ - 1",
    related: false,
    subtitle:
      "Bệnh nhân đột quỵ thường gặp phải những khó khăn lớn trong các sinh hoạt hàng ngày, từ việc di chuyển đến tự chăm sóc bản thân. Những hạn chế này không chỉ ảnh hưởng đến chất lượng cuộc sống mà còn làm tăng nguy cơ tai nạn, đặc biệt là ngã. Vì vậy, việc tổ chức không gian sống sao cho hợp lý và khoa học là rất quan trọng để hỗ trợ bệnh nhân duy trì sự độc lập và giảm thiểu nguy cơ tai nạn.",
    href: "/blog/NGUYEN-TAC-TO-CHUC-KHONG-GIAN-SONG-CHO-BENH-NHAN-DOT-QUY-1",
    date: "Tuesday, December 17, 2024",
    content: `<div className="">
        <div>
          Bệnh nhân đột quỵ thường gặp phải những khó khăn lớn trong các sinh
          hoạt hàng ngày, từ việc di chuyển đến tự chăm sóc bản thân. Những hạn
          chế này không chỉ ảnh hưởng đến chất lượng cuộc sống mà còn làm tăng
          nguy cơ tai nạn, đặc biệt là ngã. Vì vậy, việc tổ chức không gian sống
          sao cho hợp lý và khoa học là rất quan trọng để hỗ trợ bệnh nhân duy
          trì sự độc lập và giảm thiểu nguy cơ tai nạn.
        </div>
        <div>
          Sau đây là hai nguyên tắc cơ bản trong việc thiết kế không gian sống
          cho bệnh nhân đột quỵ.
        </div>
        <div>
          <div className="py-2">
            <div className="font-bold py-2">
              NGUYÊN TẮC 1: AN TOÀN LÀ ƯU TIÊN HÀNG ĐẦU
            </div>
            <div>
              Bệnh nhân đột quỵ có nguy cơ ngã cao do yếu cơ, mất cảm giác, rối
              loạn nhận thức, co cứng cơ và dễ mệt mỏi. Vì vậy,
              <strong> an toàn phải được đặt lên hàng đầu</strong> trong việc
              thiết kế không gian sống. Một môi trường an toàn không chỉ giảm
              thiểu nguy cơ ngã mà còn giúp bệnh nhân duy trì sự độc lập trong
              sinh hoạt.
            </div>
            <div>Để làm được điều này, cần chú ý:</div>
            <ul className="list-decimal p-4">
              <li>
                <strong>Lối đi rộng, không vật cản</strong> giúp bệnh nhân di
                chuyển dễ dàng. Đảm bảo phòng ngủ có đủ không gian để bệnh nhân
                có thể di chuyển và không gặp khó khăn khi ra vào.
              </li>
              <li>
                <strong>Giường có chiều cao phù hợp</strong>, giúp bệnh nhân
                ngồi với hai lòng bàn chân chạm sàn, tạo cảm giác vững vàng khi
                ngồi. Giường cũng cần đủ rộng để bệnh nhân dễ dàng lăn trở
              </li>
              <li>
                <strong>Sàn và thảm chống trơn</strong> giúp ngăn ngừa trượt
                ngã. Tránh đặt thảm dễ trơn trong phòng để giảm nguy cơ té ngã.
              </li>
              <li>
                <strong>Tay vịn</strong> ở các khu vực trọng yếu như cầu thang,
                phòng tắm hỗ trợ bệnh nhân giữ thăng bằng và di chuyển an toàn.
                Lắp tay vịn hỗ trợ ở phía tay mạnh, giúp bệnh nhân dễ dàng di
                chuyển và duy trì tư thế an toàn.
              </li>
              <ul>
                <div className="flex flex-col justify-center items-center gap-2">
                  <Image alt="blog-1-image-1" src={blog1Image1} />
                  <div className="italic">
                    Hình: Nhà vệ sinh được lắp đặt các tay vịn giúp an toàn
                    trong phòng tắm
                  </div>
                </div>
              </ul>
              <li>
                <strong>Ánh sáng đủ</strong> để dễ dàng nhận diện và tránh
                chướng ngại vật, đặc biệt là khi bệnh nhân di chuyển trong đêm.
              </li>
              <li>
                <strong>Thiết kế dễ tiếp cận</strong>, giảm thiểu việc di chuyển
                quá nhiều, giúp bệnh nhân tiếp cận các vật dụng cần thiết một
                cách thuận tiện mà không tốn sức.
              </li>
            </ul>
            <div>
              Không gian sống an toàn giúp bệnh nhân đột quỵ tự tin hơn trong
              các hoạt động hàng ngày, giảm thiểu nguy cơ ngã và nâng cao chất
              lượng cuộc sống.
            </div>
          </div>
          <div className="py-2">
            <div className="font-bold py-2">
              NGUYÊN TẮC 2: TĂNG SỰ TIỆN LỢI VÀ TIẾT KIỆM SỨC LỰC
            </div>
            <div>
              Ngoài an toàn, việc
              <strong> tăng sự tiện lợi và tiết kiệm sức lực</strong> cho bệnh
              nhân đột quỵ là yếu tố quyết định trong việc nâng cao chất lượng
              cuộc sống. Một không gian sống tiện nghi giúp bệnh nhân dễ dàng
              thực hiện các hoạt động hàng ngày mà không tốn nhiều sức lực.
            </div>
            <div>Để đạt được điều này:</div>
            <ul className="list-decimal p-4">
              <li>
                <strong>Vị trí vật dụng hợp lý</strong>, như đèn, điện thoại,
                nước uống gần giường, giúp bệnh nhân không phải di chuyển quá
                nhiều, tiết kiệm sức lực và tránh cảm giác mệt mỏi.
              </li>
              <li>
                <strong>Phòng vệ sinh gần phòng ngủ</strong> để bệnh nhân dễ
                dàng tiếp cận. Nếu không thể, có thể sử dụng bô vệ sinh hoặc bàn
                nhỏ với gương cho việc vệ sinh cá nhân.
              </li>
              <div className="flex flex-col justify-center items-center gap-2">
                <Image alt="blog-2-image-2" src={blog2Image2} />
                <div className="italic">
                  Hình: Bô vệ sinh nên đặt cạnh giường nếu khó tiếp cận phòng vệ
                  sinh
                </div>
              </div>
              <li>
                <strong>Thiết bị hỗ trợ</strong> như ghế tựa, xe lăn, dụng cụ ăn
                uống đặc biệt giúp giảm sức lực trong các hoạt động.
              </li>
              <li>
                <strong>Không gian gọn gàng</strong>, giảm bớt vật dụng không
                cần thiết giúp bệnh nhân dễ dàng tìm kiếm vật dụng và di chuyển
                nhẹ nhàng hơn.
              </li>
              <li>
                <strong>Công nghệ hỗ trợ</strong> với đèn cảm ứng, thiết bị điều
                khiển từ xa giúp giảm công sức khi điều chỉnh các thiết bị.
              </li>
              <li>
                <strong>Giảm công việc nhà</strong> bằng các thiết bị tự động
                như máy hút bụi, máy rửa chén giúp tiết kiệm thời gian và năng
                lượng cho bệnh nhân.
              </li>
            </ul>
            <div>
              Một không gian sống tiện nghi không chỉ giúp bệnh nhân đột quỵ
              giảm bớt mệt mỏi mà còn tạo ra môi trường sống thoải mái, tự do và
              đầy đủ.
            </div>
          </div>
        </div>
      </div>`,
    author: {
      name: "Minh Vương Nguyễn",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: imageAuthor,
    },
  },
  {
    id: "2",
    title: "NGUYÊN TẮC TỔ CHỨC KHÔNG GIAN SỐNG CHO BỆNH NHÂN ĐỘT QUỴ - 2",
    related: false,
    subtitle:
      "Bệnh nhân đột quỵ thường gặp phải những khó khăn lớn trong các sinh hoạt hàng ngày, từ việc di chuyển đến tự chăm sóc bản thân. Những hạn chế này không chỉ ảnh hưởng đến chất lượng cuộc sống mà còn làm tăng nguy cơ tai nạn, đặc biệt là ngã. Vì vậy, việc tổ chức không gian sống sao cho hợp lý và khoa học là rất quan trọng để hỗ trợ bệnh nhân duy trì sự độc lập và giảm thiểu nguy cơ tai nạn.",
    href: "/blog/NGUYEN-TAC-TO-CHUC-KHONG-GIAN-SONG-CHO-BENH-NHAN-DOT-QUY-2",
    date: "Monday, December 16, 2024",
    content: `<div className="">
        <div>
          Bệnh nhân đột quỵ thường gặp phải những khó khăn lớn trong các sinh
          hoạt hàng ngày, từ việc di chuyển đến tự chăm sóc bản thân. Những hạn
          chế này không chỉ ảnh hưởng đến chất lượng cuộc sống mà còn làm tăng
          nguy cơ tai nạn, đặc biệt là ngã. Vì vậy, việc tổ chức không gian sống
          sao cho hợp lý và khoa học là rất quan trọng để hỗ trợ bệnh nhân duy
          trì sự độc lập và giảm thiểu nguy cơ tai nạn.
        </div>
        <div>
          Sau đây là hai nguyên tắc cơ bản trong việc thiết kế không gian sống
          cho bệnh nhân đột quỵ.
        </div>
        <div>
          <div className="py-2">
            <div className="font-bold py-2">
              NGUYÊN TẮC 1: AN TOÀN LÀ ƯU TIÊN HÀNG ĐẦU
            </div>
            <div>
              Bệnh nhân đột quỵ có nguy cơ ngã cao do yếu cơ, mất cảm giác, rối
              loạn nhận thức, co cứng cơ và dễ mệt mỏi. Vì vậy,
              <strong> an toàn phải được đặt lên hàng đầu</strong> trong việc
              thiết kế không gian sống. Một môi trường an toàn không chỉ giảm
              thiểu nguy cơ ngã mà còn giúp bệnh nhân duy trì sự độc lập trong
              sinh hoạt.
            </div>
            <div>Để làm được điều này, cần chú ý:</div>
            <ul className="list-decimal p-4">
              <li>
                <strong>Lối đi rộng, không vật cản</strong> giúp bệnh nhân di
                chuyển dễ dàng. Đảm bảo phòng ngủ có đủ không gian để bệnh nhân
                có thể di chuyển và không gặp khó khăn khi ra vào.
              </li>
              <li>
                <strong>Giường có chiều cao phù hợp</strong>, giúp bệnh nhân
                ngồi với hai lòng bàn chân chạm sàn, tạo cảm giác vững vàng khi
                ngồi. Giường cũng cần đủ rộng để bệnh nhân dễ dàng lăn trở
              </li>
              <li>
                <strong>Sàn và thảm chống trơn</strong> giúp ngăn ngừa trượt
                ngã. Tránh đặt thảm dễ trơn trong phòng để giảm nguy cơ té ngã.
              </li>
              <li>
                <strong>Tay vịn</strong> ở các khu vực trọng yếu như cầu thang,
                phòng tắm hỗ trợ bệnh nhân giữ thăng bằng và di chuyển an toàn.
                Lắp tay vịn hỗ trợ ở phía tay mạnh, giúp bệnh nhân dễ dàng di
                chuyển và duy trì tư thế an toàn.
              </li>
              <ul>
                <div className="flex flex-col justify-center items-center gap-2">
                  <Image alt="blog-1-image-1" src={blog1Image1} />
                  <div className="italic">
                    Hình: Nhà vệ sinh được lắp đặt các tay vịn giúp an toàn
                    trong phòng tắm
                  </div>
                </div>
              </ul>
              <li>
                <strong>Ánh sáng đủ</strong> để dễ dàng nhận diện và tránh
                chướng ngại vật, đặc biệt là khi bệnh nhân di chuyển trong đêm.
              </li>
              <li>
                <strong>Thiết kế dễ tiếp cận</strong>, giảm thiểu việc di chuyển
                quá nhiều, giúp bệnh nhân tiếp cận các vật dụng cần thiết một
                cách thuận tiện mà không tốn sức.
              </li>
            </ul>
            <div>
              Không gian sống an toàn giúp bệnh nhân đột quỵ tự tin hơn trong
              các hoạt động hàng ngày, giảm thiểu nguy cơ ngã và nâng cao chất
              lượng cuộc sống.
            </div>
          </div>
          <div className="py-2">
            <div className="font-bold py-2">
              NGUYÊN TẮC 2: TĂNG SỰ TIỆN LỢI VÀ TIẾT KIỆM SỨC LỰC
            </div>
            <div>
              Ngoài an toàn, việc
              <strong> tăng sự tiện lợi và tiết kiệm sức lực</strong> cho bệnh
              nhân đột quỵ là yếu tố quyết định trong việc nâng cao chất lượng
              cuộc sống. Một không gian sống tiện nghi giúp bệnh nhân dễ dàng
              thực hiện các hoạt động hàng ngày mà không tốn nhiều sức lực.
            </div>
            <div>Để đạt được điều này:</div>
            <ul className="list-decimal p-4">
              <li>
                <strong>Vị trí vật dụng hợp lý</strong>, như đèn, điện thoại,
                nước uống gần giường, giúp bệnh nhân không phải di chuyển quá
                nhiều, tiết kiệm sức lực và tránh cảm giác mệt mỏi.
              </li>
              <li>
                <strong>Phòng vệ sinh gần phòng ngủ</strong> để bệnh nhân dễ
                dàng tiếp cận. Nếu không thể, có thể sử dụng bô vệ sinh hoặc bàn
                nhỏ với gương cho việc vệ sinh cá nhân.
              </li>
              <div className="flex flex-col justify-center items-center gap-2">
                <Image alt="blog-2-image-2" src={blog2Image2} />
                <div className="italic">
                  Hình: Bô vệ sinh nên đặt cạnh giường nếu khó tiếp cận phòng vệ
                  sinh
                </div>
              </div>
              <li>
                <strong>Thiết bị hỗ trợ</strong> như ghế tựa, xe lăn, dụng cụ ăn
                uống đặc biệt giúp giảm sức lực trong các hoạt động.
              </li>
              <li>
                <strong>Không gian gọn gàng</strong>, giảm bớt vật dụng không
                cần thiết giúp bệnh nhân dễ dàng tìm kiếm vật dụng và di chuyển
                nhẹ nhàng hơn.
              </li>
              <li>
                <strong>Công nghệ hỗ trợ</strong> với đèn cảm ứng, thiết bị điều
                khiển từ xa giúp giảm công sức khi điều chỉnh các thiết bị.
              </li>
              <li>
                <strong>Giảm công việc nhà</strong> bằng các thiết bị tự động
                như máy hút bụi, máy rửa chén giúp tiết kiệm thời gian và năng
                lượng cho bệnh nhân.
              </li>
            </ul>
            <div>
              Một không gian sống tiện nghi không chỉ giúp bệnh nhân đột quỵ
              giảm bớt mệt mỏi mà còn tạo ra môi trường sống thoải mái, tự do và
              đầy đủ.
            </div>
          </div>
        </div>
      </div>`,
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: imageAuthor,
    },
  },
  {
    id: "3",
    title: "NGUYÊN TẮC TỔ CHỨC KHÔNG GIAN SỐNG CHO BỆNH NHÂN ĐỘT QUỴ - 3",
    related: false,
    subtitle:
      "Bệnh nhân đột quỵ thường gặp phải những khó khăn lớn trong các sinh hoạt hàng ngày, từ việc di chuyển đến tự chăm sóc bản thân. Những hạn chế này không chỉ ảnh hưởng đến chất lượng cuộc sống mà còn làm tăng nguy cơ tai nạn, đặc biệt là ngã. Vì vậy, việc tổ chức không gian sống sao cho hợp lý và khoa học là rất quan trọng để hỗ trợ bệnh nhân duy trì sự độc lập và giảm thiểu nguy cơ tai nạn.",
    href: "/blog/NGUYEN-TAC-TO-CHUC-KHONG-GIAN-SONG-CHO-BENH-NHAN-DOT-QUY-3",
    date: "Monday, December 16, 2024",
    content: `<div className="">
        <div>
          Bệnh nhân đột quỵ thường gặp phải những khó khăn lớn trong các sinh
          hoạt hàng ngày, từ việc di chuyển đến tự chăm sóc bản thân. Những hạn
          chế này không chỉ ảnh hưởng đến chất lượng cuộc sống mà còn làm tăng
          nguy cơ tai nạn, đặc biệt là ngã. Vì vậy, việc tổ chức không gian sống
          sao cho hợp lý và khoa học là rất quan trọng để hỗ trợ bệnh nhân duy
          trì sự độc lập và giảm thiểu nguy cơ tai nạn.
        </div>
        <div>
          Sau đây là hai nguyên tắc cơ bản trong việc thiết kế không gian sống
          cho bệnh nhân đột quỵ.
        </div>
        <div>
          <div className="py-2">
            <div className="font-bold py-2">
              NGUYÊN TẮC 1: AN TOÀN LÀ ƯU TIÊN HÀNG ĐẦU
            </div>
            <div>
              Bệnh nhân đột quỵ có nguy cơ ngã cao do yếu cơ, mất cảm giác, rối
              loạn nhận thức, co cứng cơ và dễ mệt mỏi. Vì vậy,
              <strong> an toàn phải được đặt lên hàng đầu</strong> trong việc
              thiết kế không gian sống. Một môi trường an toàn không chỉ giảm
              thiểu nguy cơ ngã mà còn giúp bệnh nhân duy trì sự độc lập trong
              sinh hoạt.
            </div>
            <div>Để làm được điều này, cần chú ý:</div>
            <ul className="list-decimal p-4">
              <li>
                <strong>Lối đi rộng, không vật cản</strong> giúp bệnh nhân di
                chuyển dễ dàng. Đảm bảo phòng ngủ có đủ không gian để bệnh nhân
                có thể di chuyển và không gặp khó khăn khi ra vào.
              </li>
              <li>
                <strong>Giường có chiều cao phù hợp</strong>, giúp bệnh nhân
                ngồi với hai lòng bàn chân chạm sàn, tạo cảm giác vững vàng khi
                ngồi. Giường cũng cần đủ rộng để bệnh nhân dễ dàng lăn trở
              </li>
              <li>
                <strong>Sàn và thảm chống trơn</strong> giúp ngăn ngừa trượt
                ngã. Tránh đặt thảm dễ trơn trong phòng để giảm nguy cơ té ngã.
              </li>
              <li>
                <strong>Tay vịn</strong> ở các khu vực trọng yếu như cầu thang,
                phòng tắm hỗ trợ bệnh nhân giữ thăng bằng và di chuyển an toàn.
                Lắp tay vịn hỗ trợ ở phía tay mạnh, giúp bệnh nhân dễ dàng di
                chuyển và duy trì tư thế an toàn.
              </li>
              <ul>
                <div className="flex flex-col justify-center items-center gap-2">
                  <Image alt="blog-1-image-1" src={blog1Image1} />
                  <div className="italic">
                    Hình: Nhà vệ sinh được lắp đặt các tay vịn giúp an toàn
                    trong phòng tắm
                  </div>
                </div>
              </ul>
              <li>
                <strong>Ánh sáng đủ</strong> để dễ dàng nhận diện và tránh
                chướng ngại vật, đặc biệt là khi bệnh nhân di chuyển trong đêm.
              </li>
              <li>
                <strong>Thiết kế dễ tiếp cận</strong>, giảm thiểu việc di chuyển
                quá nhiều, giúp bệnh nhân tiếp cận các vật dụng cần thiết một
                cách thuận tiện mà không tốn sức.
              </li>
            </ul>
            <div>
              Không gian sống an toàn giúp bệnh nhân đột quỵ tự tin hơn trong
              các hoạt động hàng ngày, giảm thiểu nguy cơ ngã và nâng cao chất
              lượng cuộc sống.
            </div>
          </div>
          <div className="py-2">
            <div className="font-bold py-2">
              NGUYÊN TẮC 2: TĂNG SỰ TIỆN LỢI VÀ TIẾT KIỆM SỨC LỰC
            </div>
            <div>
              Ngoài an toàn, việc
              <strong> tăng sự tiện lợi và tiết kiệm sức lực</strong> cho bệnh
              nhân đột quỵ là yếu tố quyết định trong việc nâng cao chất lượng
              cuộc sống. Một không gian sống tiện nghi giúp bệnh nhân dễ dàng
              thực hiện các hoạt động hàng ngày mà không tốn nhiều sức lực.
            </div>
            <div>Để đạt được điều này:</div>
            <ul className="list-decimal p-4">
              <li>
                <strong>Vị trí vật dụng hợp lý</strong>, như đèn, điện thoại,
                nước uống gần giường, giúp bệnh nhân không phải di chuyển quá
                nhiều, tiết kiệm sức lực và tránh cảm giác mệt mỏi.
              </li>
              <li>
                <strong>Phòng vệ sinh gần phòng ngủ</strong> để bệnh nhân dễ
                dàng tiếp cận. Nếu không thể, có thể sử dụng bô vệ sinh hoặc bàn
                nhỏ với gương cho việc vệ sinh cá nhân.
              </li>
              <div className="flex flex-col justify-center items-center gap-2">
                <Image alt="blog-2-image-2" src={blog2Image2} />
                <div className="italic">
                  Hình: Bô vệ sinh nên đặt cạnh giường nếu khó tiếp cận phòng vệ
                  sinh
                </div>
              </div>
              <li>
                <strong>Thiết bị hỗ trợ</strong> như ghế tựa, xe lăn, dụng cụ ăn
                uống đặc biệt giúp giảm sức lực trong các hoạt động.
              </li>
              <li>
                <strong>Không gian gọn gàng</strong>, giảm bớt vật dụng không
                cần thiết giúp bệnh nhân dễ dàng tìm kiếm vật dụng và di chuyển
                nhẹ nhàng hơn.
              </li>
              <li>
                <strong>Công nghệ hỗ trợ</strong> với đèn cảm ứng, thiết bị điều
                khiển từ xa giúp giảm công sức khi điều chỉnh các thiết bị.
              </li>
              <li>
                <strong>Giảm công việc nhà</strong> bằng các thiết bị tự động
                như máy hút bụi, máy rửa chén giúp tiết kiệm thời gian và năng
                lượng cho bệnh nhân.
              </li>
            </ul>
            <div>
              Một không gian sống tiện nghi không chỉ giúp bệnh nhân đột quỵ
              giảm bớt mệt mỏi mà còn tạo ra môi trường sống thoải mái, tự do và
              đầy đủ.
            </div>
          </div>
        </div>
      </div>`,
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: imageAuthor,
    },
  },
  {
    id: "4",
    title: "NGUYÊN TẮC TỔ CHỨC KHÔNG GIAN SỐNG CHO BỆNH NHÂN ĐỘT QUỴ - 4",
    related: false,
    subtitle:
      "Bệnh nhân đột quỵ thường gặp phải những khó khăn lớn trong các sinh hoạt hàng ngày, từ việc di chuyển đến tự chăm sóc bản thân. Những hạn chế này không chỉ ảnh hưởng đến chất lượng cuộc sống mà còn làm tăng nguy cơ tai nạn, đặc biệt là ngã. Vì vậy, việc tổ chức không gian sống sao cho hợp lý và khoa học là rất quan trọng để hỗ trợ bệnh nhân duy trì sự độc lập và giảm thiểu nguy cơ tai nạn.",
    href: "/blog/NGUYEN-TAC-TO-CHUC-KHONG-GIAN-SONG-CHO-BENH-NHAN-DOT-QUY-4",
    date: "Monday, December 16, 2024",
    content: `<div className="">
        <div>
          Bệnh nhân đột quỵ thường gặp phải những khó khăn lớn trong các sinh
          hoạt hàng ngày, từ việc di chuyển đến tự chăm sóc bản thân. Những hạn
          chế này không chỉ ảnh hưởng đến chất lượng cuộc sống mà còn làm tăng
          nguy cơ tai nạn, đặc biệt là ngã. Vì vậy, việc tổ chức không gian sống
          sao cho hợp lý và khoa học là rất quan trọng để hỗ trợ bệnh nhân duy
          trì sự độc lập và giảm thiểu nguy cơ tai nạn.
        </div>
        <div>
          Sau đây là hai nguyên tắc cơ bản trong việc thiết kế không gian sống
          cho bệnh nhân đột quỵ.
        </div>
        <div>
          <div className="py-2">
            <div className="font-bold py-2">
              NGUYÊN TẮC 1: AN TOÀN LÀ ƯU TIÊN HÀNG ĐẦU
            </div>
            <div>
              Bệnh nhân đột quỵ có nguy cơ ngã cao do yếu cơ, mất cảm giác, rối
              loạn nhận thức, co cứng cơ và dễ mệt mỏi. Vì vậy,
              <strong> an toàn phải được đặt lên hàng đầu</strong> trong việc
              thiết kế không gian sống. Một môi trường an toàn không chỉ giảm
              thiểu nguy cơ ngã mà còn giúp bệnh nhân duy trì sự độc lập trong
              sinh hoạt.
            </div>
            <div>Để làm được điều này, cần chú ý:</div>
            <ul className="list-decimal p-4">
              <li>
                <strong>Lối đi rộng, không vật cản</strong> giúp bệnh nhân di
                chuyển dễ dàng. Đảm bảo phòng ngủ có đủ không gian để bệnh nhân
                có thể di chuyển và không gặp khó khăn khi ra vào.
              </li>
              <li>
                <strong>Giường có chiều cao phù hợp</strong>, giúp bệnh nhân
                ngồi với hai lòng bàn chân chạm sàn, tạo cảm giác vững vàng khi
                ngồi. Giường cũng cần đủ rộng để bệnh nhân dễ dàng lăn trở
              </li>
              <li>
                <strong>Sàn và thảm chống trơn</strong> giúp ngăn ngừa trượt
                ngã. Tránh đặt thảm dễ trơn trong phòng để giảm nguy cơ té ngã.
              </li>
              <li>
                <strong>Tay vịn</strong> ở các khu vực trọng yếu như cầu thang,
                phòng tắm hỗ trợ bệnh nhân giữ thăng bằng và di chuyển an toàn.
                Lắp tay vịn hỗ trợ ở phía tay mạnh, giúp bệnh nhân dễ dàng di
                chuyển và duy trì tư thế an toàn.
              </li>
              <ul>
                <div className="flex flex-col justify-center items-center gap-2">
                  <Image alt="blog-1-image-1" src={blog1Image1} />
                  <div className="italic">
                    Hình: Nhà vệ sinh được lắp đặt các tay vịn giúp an toàn
                    trong phòng tắm
                  </div>
                </div>
              </ul>
              <li>
                <strong>Ánh sáng đủ</strong> để dễ dàng nhận diện và tránh
                chướng ngại vật, đặc biệt là khi bệnh nhân di chuyển trong đêm.
              </li>
              <li>
                <strong>Thiết kế dễ tiếp cận</strong>, giảm thiểu việc di chuyển
                quá nhiều, giúp bệnh nhân tiếp cận các vật dụng cần thiết một
                cách thuận tiện mà không tốn sức.
              </li>
            </ul>
            <div>
              Không gian sống an toàn giúp bệnh nhân đột quỵ tự tin hơn trong
              các hoạt động hàng ngày, giảm thiểu nguy cơ ngã và nâng cao chất
              lượng cuộc sống.
            </div>
          </div>
          <div className="py-2">
            <div className="font-bold py-2">
              NGUYÊN TẮC 2: TĂNG SỰ TIỆN LỢI VÀ TIẾT KIỆM SỨC LỰC
            </div>
            <div>
              Ngoài an toàn, việc
              <strong> tăng sự tiện lợi và tiết kiệm sức lực</strong> cho bệnh
              nhân đột quỵ là yếu tố quyết định trong việc nâng cao chất lượng
              cuộc sống. Một không gian sống tiện nghi giúp bệnh nhân dễ dàng
              thực hiện các hoạt động hàng ngày mà không tốn nhiều sức lực.
            </div>
            <div>Để đạt được điều này:</div>
            <ul className="list-decimal p-4">
              <li>
                <strong>Vị trí vật dụng hợp lý</strong>, như đèn, điện thoại,
                nước uống gần giường, giúp bệnh nhân không phải di chuyển quá
                nhiều, tiết kiệm sức lực và tránh cảm giác mệt mỏi.
              </li>
              <li>
                <strong>Phòng vệ sinh gần phòng ngủ</strong> để bệnh nhân dễ
                dàng tiếp cận. Nếu không thể, có thể sử dụng bô vệ sinh hoặc bàn
                nhỏ với gương cho việc vệ sinh cá nhân.
              </li>
              <div className="flex flex-col justify-center items-center gap-2">
                <Image alt="blog-2-image-2" src={blog2Image2} />
                <div className="italic">
                  Hình: Bô vệ sinh nên đặt cạnh giường nếu khó tiếp cận phòng vệ
                  sinh
                </div>
              </div>
              <li>
                <strong>Thiết bị hỗ trợ</strong> như ghế tựa, xe lăn, dụng cụ ăn
                uống đặc biệt giúp giảm sức lực trong các hoạt động.
              </li>
              <li>
                <strong>Không gian gọn gàng</strong>, giảm bớt vật dụng không
                cần thiết giúp bệnh nhân dễ dàng tìm kiếm vật dụng và di chuyển
                nhẹ nhàng hơn.
              </li>
              <li>
                <strong>Công nghệ hỗ trợ</strong> với đèn cảm ứng, thiết bị điều
                khiển từ xa giúp giảm công sức khi điều chỉnh các thiết bị.
              </li>
              <li>
                <strong>Giảm công việc nhà</strong> bằng các thiết bị tự động
                như máy hút bụi, máy rửa chén giúp tiết kiệm thời gian và năng
                lượng cho bệnh nhân.
              </li>
            </ul>
            <div>
              Một không gian sống tiện nghi không chỉ giúp bệnh nhân đột quỵ
              giảm bớt mệt mỏi mà còn tạo ra môi trường sống thoải mái, tự do và
              đầy đủ.
            </div>
          </div>
        </div>
      </div>`,
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: imageAuthor,
    },
  },
  {
    id: "5",
    title: "NGUYÊN TẮC TỔ CHỨC KHÔNG GIAN SỐNG CHO BỆNH NHÂN ĐỘT QUỴ - 5",
    related: false,
    subtitle:
      "Bệnh nhân đột quỵ thường gặp phải những khó khăn lớn trong các sinh hoạt hàng ngày, từ việc di chuyển đến tự chăm sóc bản thân. Những hạn chế này không chỉ ảnh hưởng đến chất lượng cuộc sống mà còn làm tăng nguy cơ tai nạn, đặc biệt là ngã. Vì vậy, việc tổ chức không gian sống sao cho hợp lý và khoa học là rất quan trọng để hỗ trợ bệnh nhân duy trì sự độc lập và giảm thiểu nguy cơ tai nạn.",
    href: "/blog/NGUYEN-TAC-TO-CHUC-KHONG-GIAN-SONG-CHO-BENH-NHAN-DOT-QUY-5",
    date: "Monday, December 16, 2024",
    content: `<div className="">
        <div>
          Bệnh nhân đột quỵ thường gặp phải những khó khăn lớn trong các sinh
          hoạt hàng ngày, từ việc di chuyển đến tự chăm sóc bản thân. Những hạn
          chế này không chỉ ảnh hưởng đến chất lượng cuộc sống mà còn làm tăng
          nguy cơ tai nạn, đặc biệt là ngã. Vì vậy, việc tổ chức không gian sống
          sao cho hợp lý và khoa học là rất quan trọng để hỗ trợ bệnh nhân duy
          trì sự độc lập và giảm thiểu nguy cơ tai nạn.
        </div>
        <div>
          Sau đây là hai nguyên tắc cơ bản trong việc thiết kế không gian sống
          cho bệnh nhân đột quỵ.
        </div>
        <div>
          <div className="py-2">
            <div className="font-bold py-2">
              NGUYÊN TẮC 1: AN TOÀN LÀ ƯU TIÊN HÀNG ĐẦU
            </div>
            <div>
              Bệnh nhân đột quỵ có nguy cơ ngã cao do yếu cơ, mất cảm giác, rối
              loạn nhận thức, co cứng cơ và dễ mệt mỏi. Vì vậy,
              <strong> an toàn phải được đặt lên hàng đầu</strong> trong việc
              thiết kế không gian sống. Một môi trường an toàn không chỉ giảm
              thiểu nguy cơ ngã mà còn giúp bệnh nhân duy trì sự độc lập trong
              sinh hoạt.
            </div>
            <div>Để làm được điều này, cần chú ý:</div>
            <ul className="list-decimal p-4">
              <li>
                <strong>Lối đi rộng, không vật cản</strong> giúp bệnh nhân di
                chuyển dễ dàng. Đảm bảo phòng ngủ có đủ không gian để bệnh nhân
                có thể di chuyển và không gặp khó khăn khi ra vào.
              </li>
              <li>
                <strong>Giường có chiều cao phù hợp</strong>, giúp bệnh nhân
                ngồi với hai lòng bàn chân chạm sàn, tạo cảm giác vững vàng khi
                ngồi. Giường cũng cần đủ rộng để bệnh nhân dễ dàng lăn trở
              </li>
              <li>
                <strong>Sàn và thảm chống trơn</strong> giúp ngăn ngừa trượt
                ngã. Tránh đặt thảm dễ trơn trong phòng để giảm nguy cơ té ngã.
              </li>
              <li>
                <strong>Tay vịn</strong> ở các khu vực trọng yếu như cầu thang,
                phòng tắm hỗ trợ bệnh nhân giữ thăng bằng và di chuyển an toàn.
                Lắp tay vịn hỗ trợ ở phía tay mạnh, giúp bệnh nhân dễ dàng di
                chuyển và duy trì tư thế an toàn.
              </li>
              <ul>
                <div className="flex flex-col justify-center items-center gap-2">
                  <Image alt="blog-1-image-1" src={blog1Image1} />
                  <div className="italic">
                    Hình: Nhà vệ sinh được lắp đặt các tay vịn giúp an toàn
                    trong phòng tắm
                  </div>
                </div>
              </ul>
              <li>
                <strong>Ánh sáng đủ</strong> để dễ dàng nhận diện và tránh
                chướng ngại vật, đặc biệt là khi bệnh nhân di chuyển trong đêm.
              </li>
              <li>
                <strong>Thiết kế dễ tiếp cận</strong>, giảm thiểu việc di chuyển
                quá nhiều, giúp bệnh nhân tiếp cận các vật dụng cần thiết một
                cách thuận tiện mà không tốn sức.
              </li>
            </ul>
            <div>
              Không gian sống an toàn giúp bệnh nhân đột quỵ tự tin hơn trong
              các hoạt động hàng ngày, giảm thiểu nguy cơ ngã và nâng cao chất
              lượng cuộc sống.
            </div>
          </div>
          <div className="py-2">
            <div className="font-bold py-2">
              NGUYÊN TẮC 2: TĂNG SỰ TIỆN LỢI VÀ TIẾT KIỆM SỨC LỰC
            </div>
            <div>
              Ngoài an toàn, việc
              <strong> tăng sự tiện lợi và tiết kiệm sức lực</strong> cho bệnh
              nhân đột quỵ là yếu tố quyết định trong việc nâng cao chất lượng
              cuộc sống. Một không gian sống tiện nghi giúp bệnh nhân dễ dàng
              thực hiện các hoạt động hàng ngày mà không tốn nhiều sức lực.
            </div>
            <div>Để đạt được điều này:</div>
            <ul className="list-decimal p-4">
              <li>
                <strong>Vị trí vật dụng hợp lý</strong>, như đèn, điện thoại,
                nước uống gần giường, giúp bệnh nhân không phải di chuyển quá
                nhiều, tiết kiệm sức lực và tránh cảm giác mệt mỏi.
              </li>
              <li>
                <strong>Phòng vệ sinh gần phòng ngủ</strong> để bệnh nhân dễ
                dàng tiếp cận. Nếu không thể, có thể sử dụng bô vệ sinh hoặc bàn
                nhỏ với gương cho việc vệ sinh cá nhân.
              </li>
              <div className="flex flex-col justify-center items-center gap-2">
                <Image alt="blog-2-image-2" src={blog2Image2} />
                <div className="italic">
                  Hình: Bô vệ sinh nên đặt cạnh giường nếu khó tiếp cận phòng vệ
                  sinh
                </div>
              </div>
              <li>
                <strong>Thiết bị hỗ trợ</strong> như ghế tựa, xe lăn, dụng cụ ăn
                uống đặc biệt giúp giảm sức lực trong các hoạt động.
              </li>
              <li>
                <strong>Không gian gọn gàng</strong>, giảm bớt vật dụng không
                cần thiết giúp bệnh nhân dễ dàng tìm kiếm vật dụng và di chuyển
                nhẹ nhàng hơn.
              </li>
              <li>
                <strong>Công nghệ hỗ trợ</strong> với đèn cảm ứng, thiết bị điều
                khiển từ xa giúp giảm công sức khi điều chỉnh các thiết bị.
              </li>
              <li>
                <strong>Giảm công việc nhà</strong> bằng các thiết bị tự động
                như máy hút bụi, máy rửa chén giúp tiết kiệm thời gian và năng
                lượng cho bệnh nhân.
              </li>
            </ul>
            <div>
              Một không gian sống tiện nghi không chỉ giúp bệnh nhân đột quỵ
              giảm bớt mệt mỏi mà còn tạo ra môi trường sống thoải mái, tự do và
              đầy đủ.
            </div>
          </div>
        </div>
      </div>`,
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: imageAuthor,
    },
  },
  {
    id: "6",
    title: "NGUYÊN TẮC TỔ CHỨC KHÔNG GIAN SỐNG CHO BỆNH NHÂN ĐỘT QUỴ - 6",
    related: false,
    subtitle:
      "Bệnh nhân đột quỵ thường gặp phải những khó khăn lớn trong các sinh hoạt hàng ngày, từ việc di chuyển đến tự chăm sóc bản thân. Những hạn chế này không chỉ ảnh hưởng đến chất lượng cuộc sống mà còn làm tăng nguy cơ tai nạn, đặc biệt là ngã. Vì vậy, việc tổ chức không gian sống sao cho hợp lý và khoa học là rất quan trọng để hỗ trợ bệnh nhân duy trì sự độc lập và giảm thiểu nguy cơ tai nạn.",
    href: "/blog/NGUYEN-TAC-TO-CHUC-KHONG-GIAN-SONG-CHO-BENH-NHAN-DOT-QUY-6",
    date: "Monday, December 16, 2024",
    content: `<div className="">
        <div>
          Bệnh nhân đột quỵ thường gặp phải những khó khăn lớn trong các sinh
          hoạt hàng ngày, từ việc di chuyển đến tự chăm sóc bản thân. Những hạn
          chế này không chỉ ảnh hưởng đến chất lượng cuộc sống mà còn làm tăng
          nguy cơ tai nạn, đặc biệt là ngã. Vì vậy, việc tổ chức không gian sống
          sao cho hợp lý và khoa học là rất quan trọng để hỗ trợ bệnh nhân duy
          trì sự độc lập và giảm thiểu nguy cơ tai nạn.
        </div>
        <div>
          Sau đây là hai nguyên tắc cơ bản trong việc thiết kế không gian sống
          cho bệnh nhân đột quỵ.
        </div>
        <div>
          <div className="py-2">
            <div className="font-bold py-2">
              NGUYÊN TẮC 1: AN TOÀN LÀ ƯU TIÊN HÀNG ĐẦU
            </div>
            <div>
              Bệnh nhân đột quỵ có nguy cơ ngã cao do yếu cơ, mất cảm giác, rối
              loạn nhận thức, co cứng cơ và dễ mệt mỏi. Vì vậy,
              <strong> an toàn phải được đặt lên hàng đầu</strong> trong việc
              thiết kế không gian sống. Một môi trường an toàn không chỉ giảm
              thiểu nguy cơ ngã mà còn giúp bệnh nhân duy trì sự độc lập trong
              sinh hoạt.
            </div>
            <div>Để làm được điều này, cần chú ý:</div>
            <ul className="list-decimal p-4">
              <li>
                <strong>Lối đi rộng, không vật cản</strong> giúp bệnh nhân di
                chuyển dễ dàng. Đảm bảo phòng ngủ có đủ không gian để bệnh nhân
                có thể di chuyển và không gặp khó khăn khi ra vào.
              </li>
              <li>
                <strong>Giường có chiều cao phù hợp</strong>, giúp bệnh nhân
                ngồi với hai lòng bàn chân chạm sàn, tạo cảm giác vững vàng khi
                ngồi. Giường cũng cần đủ rộng để bệnh nhân dễ dàng lăn trở
              </li>
              <li>
                <strong>Sàn và thảm chống trơn</strong> giúp ngăn ngừa trượt
                ngã. Tránh đặt thảm dễ trơn trong phòng để giảm nguy cơ té ngã.
              </li>
              <li>
                <strong>Tay vịn</strong> ở các khu vực trọng yếu như cầu thang,
                phòng tắm hỗ trợ bệnh nhân giữ thăng bằng và di chuyển an toàn.
                Lắp tay vịn hỗ trợ ở phía tay mạnh, giúp bệnh nhân dễ dàng di
                chuyển và duy trì tư thế an toàn.
              </li>
              <ul>
                <div className="flex flex-col justify-center items-center gap-2">
                  <Image alt="blog-1-image-1" src={blog1Image1} />
                  <div className="italic">
                    Hình: Nhà vệ sinh được lắp đặt các tay vịn giúp an toàn
                    trong phòng tắm
                  </div>
                </div>
              </ul>
              <li>
                <strong>Ánh sáng đủ</strong> để dễ dàng nhận diện và tránh
                chướng ngại vật, đặc biệt là khi bệnh nhân di chuyển trong đêm.
              </li>
              <li>
                <strong>Thiết kế dễ tiếp cận</strong>, giảm thiểu việc di chuyển
                quá nhiều, giúp bệnh nhân tiếp cận các vật dụng cần thiết một
                cách thuận tiện mà không tốn sức.
              </li>
            </ul>
            <div>
              Không gian sống an toàn giúp bệnh nhân đột quỵ tự tin hơn trong
              các hoạt động hàng ngày, giảm thiểu nguy cơ ngã và nâng cao chất
              lượng cuộc sống.
            </div>
          </div>
          <div className="py-2">
            <div className="font-bold py-2">
              NGUYÊN TẮC 2: TĂNG SỰ TIỆN LỢI VÀ TIẾT KIỆM SỨC LỰC
            </div>
            <div>
              Ngoài an toàn, việc
              <strong> tăng sự tiện lợi và tiết kiệm sức lực</strong> cho bệnh
              nhân đột quỵ là yếu tố quyết định trong việc nâng cao chất lượng
              cuộc sống. Một không gian sống tiện nghi giúp bệnh nhân dễ dàng
              thực hiện các hoạt động hàng ngày mà không tốn nhiều sức lực.
            </div>
            <div>Để đạt được điều này:</div>
            <ul className="list-decimal p-4">
              <li>
                <strong>Vị trí vật dụng hợp lý</strong>, như đèn, điện thoại,
                nước uống gần giường, giúp bệnh nhân không phải di chuyển quá
                nhiều, tiết kiệm sức lực và tránh cảm giác mệt mỏi.
              </li>
              <li>
                <strong>Phòng vệ sinh gần phòng ngủ</strong> để bệnh nhân dễ
                dàng tiếp cận. Nếu không thể, có thể sử dụng bô vệ sinh hoặc bàn
                nhỏ với gương cho việc vệ sinh cá nhân.
              </li>
              <div className="flex flex-col justify-center items-center gap-2">
                <Image alt="blog-2-image-2" src={blog2Image2} />
                <div className="italic">
                  Hình: Bô vệ sinh nên đặt cạnh giường nếu khó tiếp cận phòng vệ
                  sinh
                </div>
              </div>
              <li>
                <strong>Thiết bị hỗ trợ</strong> như ghế tựa, xe lăn, dụng cụ ăn
                uống đặc biệt giúp giảm sức lực trong các hoạt động.
              </li>
              <li>
                <strong>Không gian gọn gàng</strong>, giảm bớt vật dụng không
                cần thiết giúp bệnh nhân dễ dàng tìm kiếm vật dụng và di chuyển
                nhẹ nhàng hơn.
              </li>
              <li>
                <strong>Công nghệ hỗ trợ</strong> với đèn cảm ứng, thiết bị điều
                khiển từ xa giúp giảm công sức khi điều chỉnh các thiết bị.
              </li>
              <li>
                <strong>Giảm công việc nhà</strong> bằng các thiết bị tự động
                như máy hút bụi, máy rửa chén giúp tiết kiệm thời gian và năng
                lượng cho bệnh nhân.
              </li>
            </ul>
            <div>
              Một không gian sống tiện nghi không chỉ giúp bệnh nhân đột quỵ
              giảm bớt mệt mỏi mà còn tạo ra môi trường sống thoải mái, tự do và
              đầy đủ.
            </div>
          </div>
        </div>
      </div>`,
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: imageAuthor,
    },
  },
  {
    id: "7",
    title: "NGUYÊN TẮC TỔ CHỨC KHÔNG GIAN SỐNG CHO BỆNH NHÂN ĐỘT QUỴ - 7",
    related: false,
    subtitle:
      "Bệnh nhân đột quỵ thường gặp phải những khó khăn lớn trong các sinh hoạt hàng ngày, từ việc di chuyển đến tự chăm sóc bản thân. Những hạn chế này không chỉ ảnh hưởng đến chất lượng cuộc sống mà còn làm tăng nguy cơ tai nạn, đặc biệt là ngã. Vì vậy, việc tổ chức không gian sống sao cho hợp lý và khoa học là rất quan trọng để hỗ trợ bệnh nhân duy trì sự độc lập và giảm thiểu nguy cơ tai nạn.",
    href: "/blog/NGUYEN-TAC-TO-CHUC-KHONG-GIAN-SONG-CHO-BENH-NHAN-DOT-QUY-7",
    date: "Monday, December 16, 2024",
    content: `<div className="">
        <div>
          Bệnh nhân đột quỵ thường gặp phải những khó khăn lớn trong các sinh
          hoạt hàng ngày, từ việc di chuyển đến tự chăm sóc bản thân. Những hạn
          chế này không chỉ ảnh hưởng đến chất lượng cuộc sống mà còn làm tăng
          nguy cơ tai nạn, đặc biệt là ngã. Vì vậy, việc tổ chức không gian sống
          sao cho hợp lý và khoa học là rất quan trọng để hỗ trợ bệnh nhân duy
          trì sự độc lập và giảm thiểu nguy cơ tai nạn.
        </div>
        <div>
          Sau đây là hai nguyên tắc cơ bản trong việc thiết kế không gian sống
          cho bệnh nhân đột quỵ.
        </div>
        <div>
          <div className="py-2">
            <div className="font-bold py-2">
              NGUYÊN TẮC 1: AN TOÀN LÀ ƯU TIÊN HÀNG ĐẦU
            </div>
            <div>
              Bệnh nhân đột quỵ có nguy cơ ngã cao do yếu cơ, mất cảm giác, rối
              loạn nhận thức, co cứng cơ và dễ mệt mỏi. Vì vậy,
              <strong> an toàn phải được đặt lên hàng đầu</strong> trong việc
              thiết kế không gian sống. Một môi trường an toàn không chỉ giảm
              thiểu nguy cơ ngã mà còn giúp bệnh nhân duy trì sự độc lập trong
              sinh hoạt.
            </div>
            <div>Để làm được điều này, cần chú ý:</div>
            <ul className="list-decimal p-4">
              <li>
                <strong>Lối đi rộng, không vật cản</strong> giúp bệnh nhân di
                chuyển dễ dàng. Đảm bảo phòng ngủ có đủ không gian để bệnh nhân
                có thể di chuyển và không gặp khó khăn khi ra vào.
              </li>
              <li>
                <strong>Giường có chiều cao phù hợp</strong>, giúp bệnh nhân
                ngồi với hai lòng bàn chân chạm sàn, tạo cảm giác vững vàng khi
                ngồi. Giường cũng cần đủ rộng để bệnh nhân dễ dàng lăn trở
              </li>
              <li>
                <strong>Sàn và thảm chống trơn</strong> giúp ngăn ngừa trượt
                ngã. Tránh đặt thảm dễ trơn trong phòng để giảm nguy cơ té ngã.
              </li>
              <li>
                <strong>Tay vịn</strong> ở các khu vực trọng yếu như cầu thang,
                phòng tắm hỗ trợ bệnh nhân giữ thăng bằng và di chuyển an toàn.
                Lắp tay vịn hỗ trợ ở phía tay mạnh, giúp bệnh nhân dễ dàng di
                chuyển và duy trì tư thế an toàn.
              </li>
              <ul>
                <div className="flex flex-col justify-center items-center gap-2">
                  <Image alt="blog-1-image-1" src={blog1Image1} />
                  <div className="italic">
                    Hình: Nhà vệ sinh được lắp đặt các tay vịn giúp an toàn
                    trong phòng tắm
                  </div>
                </div>
              </ul>
              <li>
                <strong>Ánh sáng đủ</strong> để dễ dàng nhận diện và tránh
                chướng ngại vật, đặc biệt là khi bệnh nhân di chuyển trong đêm.
              </li>
              <li>
                <strong>Thiết kế dễ tiếp cận</strong>, giảm thiểu việc di chuyển
                quá nhiều, giúp bệnh nhân tiếp cận các vật dụng cần thiết một
                cách thuận tiện mà không tốn sức.
              </li>
            </ul>
            <div>
              Không gian sống an toàn giúp bệnh nhân đột quỵ tự tin hơn trong
              các hoạt động hàng ngày, giảm thiểu nguy cơ ngã và nâng cao chất
              lượng cuộc sống.
            </div>
          </div>
          <div className="py-2">
            <div className="font-bold py-2">
              NGUYÊN TẮC 2: TĂNG SỰ TIỆN LỢI VÀ TIẾT KIỆM SỨC LỰC
            </div>
            <div>
              Ngoài an toàn, việc
              <strong> tăng sự tiện lợi và tiết kiệm sức lực</strong> cho bệnh
              nhân đột quỵ là yếu tố quyết định trong việc nâng cao chất lượng
              cuộc sống. Một không gian sống tiện nghi giúp bệnh nhân dễ dàng
              thực hiện các hoạt động hàng ngày mà không tốn nhiều sức lực.
            </div>
            <div>Để đạt được điều này:</div>
            <ul className="list-decimal p-4">
              <li>
                <strong>Vị trí vật dụng hợp lý</strong>, như đèn, điện thoại,
                nước uống gần giường, giúp bệnh nhân không phải di chuyển quá
                nhiều, tiết kiệm sức lực và tránh cảm giác mệt mỏi.
              </li>
              <li>
                <strong>Phòng vệ sinh gần phòng ngủ</strong> để bệnh nhân dễ
                dàng tiếp cận. Nếu không thể, có thể sử dụng bô vệ sinh hoặc bàn
                nhỏ với gương cho việc vệ sinh cá nhân.
              </li>
              <div className="flex flex-col justify-center items-center gap-2">
                <Image alt="blog-2-image-2" src={blog2Image2} />
                <div className="italic">
                  Hình: Bô vệ sinh nên đặt cạnh giường nếu khó tiếp cận phòng vệ
                  sinh
                </div>
              </div>
              <li>
                <strong>Thiết bị hỗ trợ</strong> như ghế tựa, xe lăn, dụng cụ ăn
                uống đặc biệt giúp giảm sức lực trong các hoạt động.
              </li>
              <li>
                <strong>Không gian gọn gàng</strong>, giảm bớt vật dụng không
                cần thiết giúp bệnh nhân dễ dàng tìm kiếm vật dụng và di chuyển
                nhẹ nhàng hơn.
              </li>
              <li>
                <strong>Công nghệ hỗ trợ</strong> với đèn cảm ứng, thiết bị điều
                khiển từ xa giúp giảm công sức khi điều chỉnh các thiết bị.
              </li>
              <li>
                <strong>Giảm công việc nhà</strong> bằng các thiết bị tự động
                như máy hút bụi, máy rửa chén giúp tiết kiệm thời gian và năng
                lượng cho bệnh nhân.
              </li>
            </ul>
            <div>
              Một không gian sống tiện nghi không chỉ giúp bệnh nhân đột quỵ
              giảm bớt mệt mỏi mà còn tạo ra môi trường sống thoải mái, tự do và
              đầy đủ.
            </div>
          </div>
        </div>
      </div>`,
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: imageAuthor,
    },
  },
  {
    id: "8",
    title: "NGUYÊN TẮC TỔ CHỨC KHÔNG GIAN SỐNG CHO BỆNH NHÂN ĐỘT QUỴ - 8",
    related: false,
    subtitle:
      "Bệnh nhân đột quỵ thường gặp phải những khó khăn lớn trong các sinh hoạt hàng ngày, từ việc di chuyển đến tự chăm sóc bản thân. Những hạn chế này không chỉ ảnh hưởng đến chất lượng cuộc sống mà còn làm tăng nguy cơ tai nạn, đặc biệt là ngã. Vì vậy, việc tổ chức không gian sống sao cho hợp lý và khoa học là rất quan trọng để hỗ trợ bệnh nhân duy trì sự độc lập và giảm thiểu nguy cơ tai nạn.",
    href: "/blog/NGUYEN-TAC-TO-CHUC-KHONG-GIAN-SONG-CHO-BENH-NHAN-DOT-QUY-8",
    date: "Monday, December 16, 2024",
    content: `<div className="">
        <div>
          Bệnh nhân đột quỵ thường gặp phải những khó khăn lớn trong các sinh
          hoạt hàng ngày, từ việc di chuyển đến tự chăm sóc bản thân. Những hạn
          chế này không chỉ ảnh hưởng đến chất lượng cuộc sống mà còn làm tăng
          nguy cơ tai nạn, đặc biệt là ngã. Vì vậy, việc tổ chức không gian sống
          sao cho hợp lý và khoa học là rất quan trọng để hỗ trợ bệnh nhân duy
          trì sự độc lập và giảm thiểu nguy cơ tai nạn.
        </div>
        <div>
          Sau đây là hai nguyên tắc cơ bản trong việc thiết kế không gian sống
          cho bệnh nhân đột quỵ.
        </div>
        <div>
          <div className="py-2">
            <div className="font-bold py-2">
              NGUYÊN TẮC 1: AN TOÀN LÀ ƯU TIÊN HÀNG ĐẦU
            </div>
            <div>
              Bệnh nhân đột quỵ có nguy cơ ngã cao do yếu cơ, mất cảm giác, rối
              loạn nhận thức, co cứng cơ và dễ mệt mỏi. Vì vậy,
              <strong> an toàn phải được đặt lên hàng đầu</strong> trong việc
              thiết kế không gian sống. Một môi trường an toàn không chỉ giảm
              thiểu nguy cơ ngã mà còn giúp bệnh nhân duy trì sự độc lập trong
              sinh hoạt.
            </div>
            <div>Để làm được điều này, cần chú ý:</div>
            <ul className="list-decimal p-4">
              <li>
                <strong>Lối đi rộng, không vật cản</strong> giúp bệnh nhân di
                chuyển dễ dàng. Đảm bảo phòng ngủ có đủ không gian để bệnh nhân
                có thể di chuyển và không gặp khó khăn khi ra vào.
              </li>
              <li>
                <strong>Giường có chiều cao phù hợp</strong>, giúp bệnh nhân
                ngồi với hai lòng bàn chân chạm sàn, tạo cảm giác vững vàng khi
                ngồi. Giường cũng cần đủ rộng để bệnh nhân dễ dàng lăn trở
              </li>
              <li>
                <strong>Sàn và thảm chống trơn</strong> giúp ngăn ngừa trượt
                ngã. Tránh đặt thảm dễ trơn trong phòng để giảm nguy cơ té ngã.
              </li>
              <li>
                <strong>Tay vịn</strong> ở các khu vực trọng yếu như cầu thang,
                phòng tắm hỗ trợ bệnh nhân giữ thăng bằng và di chuyển an toàn.
                Lắp tay vịn hỗ trợ ở phía tay mạnh, giúp bệnh nhân dễ dàng di
                chuyển và duy trì tư thế an toàn.
              </li>
              <ul>
                <div className="flex flex-col justify-center items-center gap-2">
                  <Image alt="blog-1-image-1" src={blog1Image1} />
                  <div className="italic">
                    Hình: Nhà vệ sinh được lắp đặt các tay vịn giúp an toàn
                    trong phòng tắm
                  </div>
                </div>
              </ul>
              <li>
                <strong>Ánh sáng đủ</strong> để dễ dàng nhận diện và tránh
                chướng ngại vật, đặc biệt là khi bệnh nhân di chuyển trong đêm.
              </li>
              <li>
                <strong>Thiết kế dễ tiếp cận</strong>, giảm thiểu việc di chuyển
                quá nhiều, giúp bệnh nhân tiếp cận các vật dụng cần thiết một
                cách thuận tiện mà không tốn sức.
              </li>
            </ul>
            <div>
              Không gian sống an toàn giúp bệnh nhân đột quỵ tự tin hơn trong
              các hoạt động hàng ngày, giảm thiểu nguy cơ ngã và nâng cao chất
              lượng cuộc sống.
            </div>
          </div>
          <div className="py-2">
            <div className="font-bold py-2">
              NGUYÊN TẮC 2: TĂNG SỰ TIỆN LỢI VÀ TIẾT KIỆM SỨC LỰC
            </div>
            <div>
              Ngoài an toàn, việc
              <strong> tăng sự tiện lợi và tiết kiệm sức lực</strong> cho bệnh
              nhân đột quỵ là yếu tố quyết định trong việc nâng cao chất lượng
              cuộc sống. Một không gian sống tiện nghi giúp bệnh nhân dễ dàng
              thực hiện các hoạt động hàng ngày mà không tốn nhiều sức lực.
            </div>
            <div>Để đạt được điều này:</div>
            <ul className="list-decimal p-4">
              <li>
                <strong>Vị trí vật dụng hợp lý</strong>, như đèn, điện thoại,
                nước uống gần giường, giúp bệnh nhân không phải di chuyển quá
                nhiều, tiết kiệm sức lực và tránh cảm giác mệt mỏi.
              </li>
              <li>
                <strong>Phòng vệ sinh gần phòng ngủ</strong> để bệnh nhân dễ
                dàng tiếp cận. Nếu không thể, có thể sử dụng bô vệ sinh hoặc bàn
                nhỏ với gương cho việc vệ sinh cá nhân.
              </li>
              <div className="flex flex-col justify-center items-center gap-2">
                <Image alt="blog-2-image-2" src={blog2Image2} />
                <div className="italic">
                  Hình: Bô vệ sinh nên đặt cạnh giường nếu khó tiếp cận phòng vệ
                  sinh
                </div>
              </div>
              <li>
                <strong>Thiết bị hỗ trợ</strong> như ghế tựa, xe lăn, dụng cụ ăn
                uống đặc biệt giúp giảm sức lực trong các hoạt động.
              </li>
              <li>
                <strong>Không gian gọn gàng</strong>, giảm bớt vật dụng không
                cần thiết giúp bệnh nhân dễ dàng tìm kiếm vật dụng và di chuyển
                nhẹ nhàng hơn.
              </li>
              <li>
                <strong>Công nghệ hỗ trợ</strong> với đèn cảm ứng, thiết bị điều
                khiển từ xa giúp giảm công sức khi điều chỉnh các thiết bị.
              </li>
              <li>
                <strong>Giảm công việc nhà</strong> bằng các thiết bị tự động
                như máy hút bụi, máy rửa chén giúp tiết kiệm thời gian và năng
                lượng cho bệnh nhân.
              </li>
            </ul>
            <div>
              Một không gian sống tiện nghi không chỉ giúp bệnh nhân đột quỵ
              giảm bớt mệt mỏi mà còn tạo ra môi trường sống thoải mái, tự do và
              đầy đủ.
            </div>
          </div>
        </div>
      </div>`,
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: imageAuthor,
    },
  },
  {
    id: "9",
    title: "NGUYÊN TẮC TỔ CHỨC KHÔNG GIAN SỐNG CHO BỆNH NHÂN ĐỘT QUỴ - 9",
    related: false,
    subtitle:
      "Bệnh nhân đột quỵ thường gặp phải những khó khăn lớn trong các sinh hoạt hàng ngày, từ việc di chuyển đến tự chăm sóc bản thân. Những hạn chế này không chỉ ảnh hưởng đến chất lượng cuộc sống mà còn làm tăng nguy cơ tai nạn, đặc biệt là ngã. Vì vậy, việc tổ chức không gian sống sao cho hợp lý và khoa học là rất quan trọng để hỗ trợ bệnh nhân duy trì sự độc lập và giảm thiểu nguy cơ tai nạn.",
    href: "/blog/NGUYEN-TAC-TO-CHUC-KHONG-GIAN-SONG-CHO-BENH-NHAN-DOT-QUY-9",
    date: "Monday, December 16, 2024",
    content: `<div className="">
        <div>
          Bệnh nhân đột quỵ thường gặp phải những khó khăn lớn trong các sinh
          hoạt hàng ngày, từ việc di chuyển đến tự chăm sóc bản thân. Những hạn
          chế này không chỉ ảnh hưởng đến chất lượng cuộc sống mà còn làm tăng
          nguy cơ tai nạn, đặc biệt là ngã. Vì vậy, việc tổ chức không gian sống
          sao cho hợp lý và khoa học là rất quan trọng để hỗ trợ bệnh nhân duy
          trì sự độc lập và giảm thiểu nguy cơ tai nạn.
        </div>
        <div>
          Sau đây là hai nguyên tắc cơ bản trong việc thiết kế không gian sống
          cho bệnh nhân đột quỵ.
        </div>
        <div>
          <div className="py-2">
            <div className="font-bold py-2">
              NGUYÊN TẮC 1: AN TOÀN LÀ ƯU TIÊN HÀNG ĐẦU
            </div>
            <div>
              Bệnh nhân đột quỵ có nguy cơ ngã cao do yếu cơ, mất cảm giác, rối
              loạn nhận thức, co cứng cơ và dễ mệt mỏi. Vì vậy,
              <strong> an toàn phải được đặt lên hàng đầu</strong> trong việc
              thiết kế không gian sống. Một môi trường an toàn không chỉ giảm
              thiểu nguy cơ ngã mà còn giúp bệnh nhân duy trì sự độc lập trong
              sinh hoạt.
            </div>
            <div>Để làm được điều này, cần chú ý:</div>
            <ul className="list-decimal p-4">
              <li>
                <strong>Lối đi rộng, không vật cản</strong> giúp bệnh nhân di
                chuyển dễ dàng. Đảm bảo phòng ngủ có đủ không gian để bệnh nhân
                có thể di chuyển và không gặp khó khăn khi ra vào.
              </li>
              <li>
                <strong>Giường có chiều cao phù hợp</strong>, giúp bệnh nhân
                ngồi với hai lòng bàn chân chạm sàn, tạo cảm giác vững vàng khi
                ngồi. Giường cũng cần đủ rộng để bệnh nhân dễ dàng lăn trở
              </li>
              <li>
                <strong>Sàn và thảm chống trơn</strong> giúp ngăn ngừa trượt
                ngã. Tránh đặt thảm dễ trơn trong phòng để giảm nguy cơ té ngã.
              </li>
              <li>
                <strong>Tay vịn</strong> ở các khu vực trọng yếu như cầu thang,
                phòng tắm hỗ trợ bệnh nhân giữ thăng bằng và di chuyển an toàn.
                Lắp tay vịn hỗ trợ ở phía tay mạnh, giúp bệnh nhân dễ dàng di
                chuyển và duy trì tư thế an toàn.
              </li>
              <ul>
                <div className="flex flex-col justify-center items-center gap-2">
                  <Image alt="blog-1-image-1" src={blog1Image1} />
                  <div className="italic">
                    Hình: Nhà vệ sinh được lắp đặt các tay vịn giúp an toàn
                    trong phòng tắm
                  </div>
                </div>
              </ul>
              <li>
                <strong>Ánh sáng đủ</strong> để dễ dàng nhận diện và tránh
                chướng ngại vật, đặc biệt là khi bệnh nhân di chuyển trong đêm.
              </li>
              <li>
                <strong>Thiết kế dễ tiếp cận</strong>, giảm thiểu việc di chuyển
                quá nhiều, giúp bệnh nhân tiếp cận các vật dụng cần thiết một
                cách thuận tiện mà không tốn sức.
              </li>
            </ul>
            <div>
              Không gian sống an toàn giúp bệnh nhân đột quỵ tự tin hơn trong
              các hoạt động hàng ngày, giảm thiểu nguy cơ ngã và nâng cao chất
              lượng cuộc sống.
            </div>
          </div>
          <div className="py-2">
            <div className="font-bold py-2">
              NGUYÊN TẮC 2: TĂNG SỰ TIỆN LỢI VÀ TIẾT KIỆM SỨC LỰC
            </div>
            <div>
              Ngoài an toàn, việc
              <strong> tăng sự tiện lợi và tiết kiệm sức lực</strong> cho bệnh
              nhân đột quỵ là yếu tố quyết định trong việc nâng cao chất lượng
              cuộc sống. Một không gian sống tiện nghi giúp bệnh nhân dễ dàng
              thực hiện các hoạt động hàng ngày mà không tốn nhiều sức lực.
            </div>
            <div>Để đạt được điều này:</div>
            <ul className="list-decimal p-4">
              <li>
                <strong>Vị trí vật dụng hợp lý</strong>, như đèn, điện thoại,
                nước uống gần giường, giúp bệnh nhân không phải di chuyển quá
                nhiều, tiết kiệm sức lực và tránh cảm giác mệt mỏi.
              </li>
              <li>
                <strong>Phòng vệ sinh gần phòng ngủ</strong> để bệnh nhân dễ
                dàng tiếp cận. Nếu không thể, có thể sử dụng bô vệ sinh hoặc bàn
                nhỏ với gương cho việc vệ sinh cá nhân.
              </li>
              <div className="flex flex-col justify-center items-center gap-2">
                <Image alt="blog-2-image-2" src={blog2Image2} />
                <div className="italic">
                  Hình: Bô vệ sinh nên đặt cạnh giường nếu khó tiếp cận phòng vệ
                  sinh
                </div>
              </div>
              <li>
                <strong>Thiết bị hỗ trợ</strong> như ghế tựa, xe lăn, dụng cụ ăn
                uống đặc biệt giúp giảm sức lực trong các hoạt động.
              </li>
              <li>
                <strong>Không gian gọn gàng</strong>, giảm bớt vật dụng không
                cần thiết giúp bệnh nhân dễ dàng tìm kiếm vật dụng và di chuyển
                nhẹ nhàng hơn.
              </li>
              <li>
                <strong>Công nghệ hỗ trợ</strong> với đèn cảm ứng, thiết bị điều
                khiển từ xa giúp giảm công sức khi điều chỉnh các thiết bị.
              </li>
              <li>
                <strong>Giảm công việc nhà</strong> bằng các thiết bị tự động
                như máy hút bụi, máy rửa chén giúp tiết kiệm thời gian và năng
                lượng cho bệnh nhân.
              </li>
            </ul>
            <div>
              Một không gian sống tiện nghi không chỉ giúp bệnh nhân đột quỵ
              giảm bớt mệt mỏi mà còn tạo ra môi trường sống thoải mái, tự do và
              đầy đủ.
            </div>
          </div>
        </div>
      </div>`,
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: imageAuthor,
    },
  },
  {
    id: "3",
    title: "NGUYÊN TẮC TỔ CHỨC KHÔNG GIAN SỐNG CHO BỆNH NHÂN ĐỘT QUỴ - 11",
    related: false,
    subtitle:
      "Bệnh nhân đột quỵ thường gặp phải những khó khăn lớn trong các sinh hoạt hàng ngày, từ việc di chuyển đến tự chăm sóc bản thân. Những hạn chế này không chỉ ảnh hưởng đến chất lượng cuộc sống mà còn làm tăng nguy cơ tai nạn, đặc biệt là ngã. Vì vậy, việc tổ chức không gian sống sao cho hợp lý và khoa học là rất quan trọng để hỗ trợ bệnh nhân duy trì sự độc lập và giảm thiểu nguy cơ tai nạn.",
    href: "/blog/NGUYEN-TAC-TO-CHUC-KHONG-GIAN-SONG-CHO-BENH-NHAN-DOT-QUY-11",
    date: "Monday, December 16, 2024",
    content: `<div className="">
        <div>
          Bệnh nhân đột quỵ thường gặp phải những khó khăn lớn trong các sinh
          hoạt hàng ngày, từ việc di chuyển đến tự chăm sóc bản thân. Những hạn
          chế này không chỉ ảnh hưởng đến chất lượng cuộc sống mà còn làm tăng
          nguy cơ tai nạn, đặc biệt là ngã. Vì vậy, việc tổ chức không gian sống
          sao cho hợp lý và khoa học là rất quan trọng để hỗ trợ bệnh nhân duy
          trì sự độc lập và giảm thiểu nguy cơ tai nạn.
        </div>
        <div>
          Sau đây là hai nguyên tắc cơ bản trong việc thiết kế không gian sống
          cho bệnh nhân đột quỵ.
        </div>
        <div>
          <div className="py-2">
            <div className="font-bold py-2">
              NGUYÊN TẮC 1: AN TOÀN LÀ ƯU TIÊN HÀNG ĐẦU
            </div>
            <div>
              Bệnh nhân đột quỵ có nguy cơ ngã cao do yếu cơ, mất cảm giác, rối
              loạn nhận thức, co cứng cơ và dễ mệt mỏi. Vì vậy,
              <strong> an toàn phải được đặt lên hàng đầu</strong> trong việc
              thiết kế không gian sống. Một môi trường an toàn không chỉ giảm
              thiểu nguy cơ ngã mà còn giúp bệnh nhân duy trì sự độc lập trong
              sinh hoạt.
            </div>
            <div>Để làm được điều này, cần chú ý:</div>
            <ul className="list-decimal p-4">
              <li>
                <strong>Lối đi rộng, không vật cản</strong> giúp bệnh nhân di
                chuyển dễ dàng. Đảm bảo phòng ngủ có đủ không gian để bệnh nhân
                có thể di chuyển và không gặp khó khăn khi ra vào.
              </li>
              <li>
                <strong>Giường có chiều cao phù hợp</strong>, giúp bệnh nhân
                ngồi với hai lòng bàn chân chạm sàn, tạo cảm giác vững vàng khi
                ngồi. Giường cũng cần đủ rộng để bệnh nhân dễ dàng lăn trở
              </li>
              <li>
                <strong>Sàn và thảm chống trơn</strong> giúp ngăn ngừa trượt
                ngã. Tránh đặt thảm dễ trơn trong phòng để giảm nguy cơ té ngã.
              </li>
              <li>
                <strong>Tay vịn</strong> ở các khu vực trọng yếu như cầu thang,
                phòng tắm hỗ trợ bệnh nhân giữ thăng bằng và di chuyển an toàn.
                Lắp tay vịn hỗ trợ ở phía tay mạnh, giúp bệnh nhân dễ dàng di
                chuyển và duy trì tư thế an toàn.
              </li>
              <ul>
                <div className="flex flex-col justify-center items-center gap-2">
                  <Image alt="blog-1-image-1" src={blog1Image1} />
                  <div className="italic">
                    Hình: Nhà vệ sinh được lắp đặt các tay vịn giúp an toàn
                    trong phòng tắm
                  </div>
                </div>
              </ul>
              <li>
                <strong>Ánh sáng đủ</strong> để dễ dàng nhận diện và tránh
                chướng ngại vật, đặc biệt là khi bệnh nhân di chuyển trong đêm.
              </li>
              <li>
                <strong>Thiết kế dễ tiếp cận</strong>, giảm thiểu việc di chuyển
                quá nhiều, giúp bệnh nhân tiếp cận các vật dụng cần thiết một
                cách thuận tiện mà không tốn sức.
              </li>
            </ul>
            <div>
              Không gian sống an toàn giúp bệnh nhân đột quỵ tự tin hơn trong
              các hoạt động hàng ngày, giảm thiểu nguy cơ ngã và nâng cao chất
              lượng cuộc sống.
            </div>
          </div>
          <div className="py-2">
            <div className="font-bold py-2">
              NGUYÊN TẮC 2: TĂNG SỰ TIỆN LỢI VÀ TIẾT KIỆM SỨC LỰC
            </div>
            <div>
              Ngoài an toàn, việc
              <strong> tăng sự tiện lợi và tiết kiệm sức lực</strong> cho bệnh
              nhân đột quỵ là yếu tố quyết định trong việc nâng cao chất lượng
              cuộc sống. Một không gian sống tiện nghi giúp bệnh nhân dễ dàng
              thực hiện các hoạt động hàng ngày mà không tốn nhiều sức lực.
            </div>
            <div>Để đạt được điều này:</div>
            <ul className="list-decimal p-4">
              <li>
                <strong>Vị trí vật dụng hợp lý</strong>, như đèn, điện thoại,
                nước uống gần giường, giúp bệnh nhân không phải di chuyển quá
                nhiều, tiết kiệm sức lực và tránh cảm giác mệt mỏi.
              </li>
              <li>
                <strong>Phòng vệ sinh gần phòng ngủ</strong> để bệnh nhân dễ
                dàng tiếp cận. Nếu không thể, có thể sử dụng bô vệ sinh hoặc bàn
                nhỏ với gương cho việc vệ sinh cá nhân.
              </li>
              <div className="flex flex-col justify-center items-center gap-2">
                <Image alt="blog-2-image-2" src={blog2Image2} />
                <div className="italic">
                  Hình: Bô vệ sinh nên đặt cạnh giường nếu khó tiếp cận phòng vệ
                  sinh
                </div>
              </div>
              <li>
                <strong>Thiết bị hỗ trợ</strong> như ghế tựa, xe lăn, dụng cụ ăn
                uống đặc biệt giúp giảm sức lực trong các hoạt động.
              </li>
              <li>
                <strong>Không gian gọn gàng</strong>, giảm bớt vật dụng không
                cần thiết giúp bệnh nhân dễ dàng tìm kiếm vật dụng và di chuyển
                nhẹ nhàng hơn.
              </li>
              <li>
                <strong>Công nghệ hỗ trợ</strong> với đèn cảm ứng, thiết bị điều
                khiển từ xa giúp giảm công sức khi điều chỉnh các thiết bị.
              </li>
              <li>
                <strong>Giảm công việc nhà</strong> bằng các thiết bị tự động
                như máy hút bụi, máy rửa chén giúp tiết kiệm thời gian và năng
                lượng cho bệnh nhân.
              </li>
            </ul>
            <div>
              Một không gian sống tiện nghi không chỉ giúp bệnh nhân đột quỵ
              giảm bớt mệt mỏi mà còn tạo ra môi trường sống thoải mái, tự do và
              đầy đủ.
            </div>
          </div>
        </div>
      </div>`,
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: imageAuthor,
    },
  },
];

export default blogList;
