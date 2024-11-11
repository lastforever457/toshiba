import { Card, Col, Row } from "antd";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  const imageNames = useMemo(
    () => [
      { name: "Монтаж лифтов", src: "image123.jpg" },
      { name: "Техническое обслуживание лифтов", src: "image.jpg" },
      { name: "Модернизация лифтов", src: "image1.jpg" },
      { name: "Аварийное обслуживание лифтов", src: "image2.jpg" },
      { name: "Ремонт лифтов", src: "image3.jpeg" },
      { name: "Консультации по лифтам", src: "image4.jpg" },
      { name: "Решения для обеспечения доступности", src: "image5.jpg" },
      { name: "Техническое обслуживание эскалаторов", src: "image6.jpg" },
    ],
    []
  );
  return (
    <div id="services" className="px-5 md:px-10 xl:px-72 py-16">
      <h1 className="text-black text-center text-3xl mb-5 uppercase">
        {t("services")}
      </h1>
      <Row gutter={[25, 25]}>
        {imageNames.map((imageName, index) => (
          <Col
            key={index}
            className="transition-all"
            xs={24}
            sm={12}
            md={8}
            lg={6}
          >
            <Card
              cover={
                <img
                  src={`/elevators/${imageName.src}`}
                  alt={`Image ${index + 1}`}
                  className="w-full h-[250px] object-cover"
                />
              }
            >
              <Card.Meta
                title={<p className="text-center">{imageName.name}</p>}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;
