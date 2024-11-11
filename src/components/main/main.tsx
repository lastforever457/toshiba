import { Suspense, useMemo } from "react";
import { useTranslation } from "react-i18next";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Lazy load uchun komponent
const LazyBackgroundImage = ({
  src,
  title,
}: {
  src: string;
  title: string;
}) => {
  return (
    <div
      className="w-full h-[80vh] md:h-[90vh] bg-center bg-cover object-cover bg-no-repeat flex justify-center items-center text-white text-2xl lg:text-5xl"
      style={{ backgroundImage: `url("/${src}")` }}
    >
      <div
        className="flex justify-center rounded-3xl items-center w-[80%] md:w-[700px] h-[300px]"
        style={{ backdropFilter: "blur(20px)" }}
      >
        <h2 className="text-center font-bold">{title}</h2>
      </div>
    </div>
  );
};

const Main = () => {
  const { t } = useTranslation();
  const bgImages = useMemo(
    () => [
      { img: "elevator-bg1.png", title: t("title1") },
      { img: "elevator-bg2.png", title: t("title2") },
      { img: "elevator-bg3.png", title: t("title3") },
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
            <Suspense fallback={<div>Loading...</div>}>
              <LazyBackgroundImage src={image.img} title={image.title} />
            </Suspense>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Main;
