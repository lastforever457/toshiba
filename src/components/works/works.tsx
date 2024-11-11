import { Col, Row } from "antd";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const Works = () => {
  const { t } = useTranslation();
  const imageNames = useMemo(
    () => [
      "image123.jpg",
      "image.jpg",
      "image1.jpg",
      "image2.jpg",
      "image3.jpeg",
      "image4.jpg",
      "image5.jpg",
      "image6.jpg",
      "image7.jpg",
      "image8.jpg",
      "image9.jpg",
      "image10.jpg",
      "image11.jpg",
      "image12.jpeg",
      "image12.jpg",
      "image13.jpeg",
      "image14.jpeg",
      "image15.jpg",
      "image15.jpeg",
      "image16.jpeg",
      "image19.jpeg",
      "image20.jpeg",
      "image22.jpeg",
      "image25.jpeg",
      "image26.jpeg",
      "image27.jpeg",
      "image28.jpeg",
      "image29.jpeg",
      "image30.jpeg",
      "image31.jpeg",
      "image32.jpeg",
      "image33.jpeg",
      "image34.jpeg",
      "image35.jpeg",
      "image36.jpeg",
      "image37.jpeg",
      "image38.jpeg",
      "image39.jpeg",
      "image40.jpeg",
      "image41.jpeg",
      "image42.jpeg",
      "image43.jpeg",
      "image44.jpeg",
      "image45.jpeg",
      "image46.jpeg",
      "image47.jpeg",
      "image48.jpeg",
      "image49.jpeg",
      "image50.jpeg",
      "image51.jpeg",
      "image52.jpeg",
      "image53.jpeg",
      "image54.jpeg",
      "image55.jpeg",
      "image142.jpg",
      "image147.jpg",
      "image156.jpg",
      "image157.jpg",
      "image182.jpg",
      "image314.jpg",
      "wp2303645.jpg",
      "wp2303772.jpg",
      "wp2303773.jpg",
      "wp2303774.jpg",
      "wp2303787.jpg",
    ],
    []
  );

  const [visibleImages, setVisibleImages] = useState(imageNames.slice(0, 6));

  const handleLoadMore = () => {
    setVisibleImages(() => [...imageNames]);
  };

  return (
    <div id="works" className="bg-[#6C757D] px-5 md:px-10 xl:px-72 py-16">
      <h1 className="text-white text-center text-3xl mb-5 uppercase">
        {t("works")}
      </h1>
      <Row gutter={[25, 25]}>
        {visibleImages.map((imageName, index) => (
          <Col
            key={index}
            className="transition-all"
            xs={24}
            sm={12}
            md={12}
            lg={8}
          >
            <img
              src={`/elevators/${imageName}`}
              alt={`Image ${index + 1}`}
              className="w-full h-[250px] object-cover"
            />
          </Col>
        ))}
      </Row>
      <div className="flex justify-center items-center mt-5">
        <button
          onClick={handleLoadMore}
          className="py-3 px-5 text-xl rounded-md"
          style={{ border: "1px solid #fff", color: "#fff" }}
        >
          {t("upload more")}
        </button>
      </div>
    </div>
  );
};

export default Works;
