import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { CardWallet } from "./CardWallet";
import { Pagination } from "swiper/modules";
import { Common } from "../Common";

const SwiperCard = (props) => {
  return (
    <Swiper
      pagination={{
        clickable: true,
        dynamicBullets: true,
        el: ".swiper-pagination",
      }}
      slidesPerView={1.2}
      centeredSlides={true}
      loop={true}
      initialSlide={1}
      modules={[Pagination]}
      className="mySwiper"
    >
      {props.data.map((card, index) => (
        <SwiperSlide>
          <CardWallet
            name={card.name}
            address={card.address}
            balance={card.balance}
            color1={card.color1}
            color2={card.color2}
            color={Common.renderBackgroundLinear(index)}
          />
        </SwiperSlide>
      ))}

      <div className="swiper-pagination-container">
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  );
};

export default SwiperCard;
