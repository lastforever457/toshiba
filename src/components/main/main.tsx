import { useMemo } from "react";
import { useTranslation } from "react-i18next";
//@ts-ignore
import "swiper/css";
//@ts-ignore
import "swiper/css/navigation";
//@ts-ignore
import "swiper/css/pagination";
//@ts-ignore
import "swiper/css/scrollbar";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Main = () => {
  const { t } = useTranslation();
  const bgImages = useMemo(
    () => [
      { img: "elevator-bg1.png", title: t("title1") },
      {
        img: "elevator-bg2.png",
        title: t("title2"),
      },
      {
        img: "elevator-bg3.png",
        title: t("title3"),
      },
    ],
    [t]
  );
  return (
    <div id="main" className="w-full h-[80vh] md:h-[90vh]">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        className="w-full h-full"
      >
        {bgImages.map((image: Record<string, any>, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[80vh] md:h-[90vh] bg-center bg-cover object-cover bg-no-repeat flex justify-center items-center text-white text-5xl"
              style={{ backgroundImage: `url("/${image.img}")` }}
            >
              <div
                className="flex justify-center rounded-3xl items-center w-[80%] md:w-[700px] h-[300px]"
                style={{ backdropFilter: "blur(20px)" }}
              >
                <h2 className="text-center font-bold">{image.title}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Main;
