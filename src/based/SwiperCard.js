import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { CardWallet } from "../based/CardWallet";
import { Pagination } from "swiper/modules";

const ConfigColor = {
  color1: () => {
    return {
      background:
        "linear-gradient(to bottom, rgba(204, 224, 255, 1), rgba(138, 46, 255, 1))",
    };
  },
  color2: () => {
    return {
      background:
        "linear-gradient(to bottom, rgba(248, 255, 237, 0.5), rgba(73, 221, 105, 1))",
    };
  },

  color3: () => {
    return {
      background: "linear-gradient(to bottom, #FF69B4, #FF8C00)",
    };
  },
};

const SwiperCard = (props) => {
  const renderColor = (index) => {
    if (index % 3 === 0) {
      return ConfigColor.color1();
    } else if (index % 3 === 1) {
      return ConfigColor.color2();
    } else {
      return ConfigColor.color3();
    }
  };

  return (
    <Swiper
      pagination={{
        clickable: true,
        dynamicBullets: true,
        el: ".swiper-pagination",
      }}
      loop={true}
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
            color={renderColor(index)}
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
