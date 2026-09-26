import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroImage = ({
  src,
  title,
  isFirst,
}: {
  src: string;
  title: string;
  isFirst: boolean;
}) => {
  return (
    <div className="relative w-full h-[80vh] md:h-[90vh] flex justify-center items-center text-white text-2xl lg:text-5xl">
      <img
        src={`/${src}`}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority={isFirst ? "high" : "auto"}
        loading={isFirst ? "eager" : "lazy"}
      />
      <div
        className="relative flex justify-center rounded-3xl items-center w-[80%] md:w-[700px] h-[300px] bg-black/10"
        style={{ backdropFilter: "blur(15px)" }}
      >
        <h2 className="text-center font-bold px-4">{title}</h2>
      </div>
    </div>
  );
};

const Main = () => {
  const { t } = useTranslation();
  const bgImages = useMemo(
    () => [
      { img: "elevator-bg1.webp", title: t("title1") },
      { img: "elevator-bg2.webp", title: t("title2") },
      { img: "elevator-bg3.webp", title: t("title3") },
    ],
    [t]
  );

  return (
    <div id="main" className="w-full h-[80vh] md:h-[90vh]">
      <Swiper
        spaceBetween={0}
        autoplay={{
          delay: 3500,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        loop={true}
        className="w-full h-full"
      >
        {bgImages.map((image, index) => (
          <SwiperSlide key={index}>
            <HeroImage src={image.img} title={image.title} isFirst={index === 0} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Main;
