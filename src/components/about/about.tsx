import { Col, Row } from "antd";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const items = useMemo(
    () => [
      {
        label: t("sifat"),
        content: t("sifat desc"),
      },
      {
        label: t("security"),
        content: t("security desc"),
      },
      {
        label: t("tech support"),
        content: t("tech support desc"),
      },
    ],
    [t]
  );
  return (
    <div className="px-5 md:px-10 xl:px-72 py-16" id="about">
      <h1 className="text-center text-3xl mb-5 uppercase">{t("about")}</h1>
      <p className="text-center text-lg mb-10">{t("about slogan")}</p>
      <Row gutter={[16, 16]}>
        {items.map((item, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}>
            <div
              className="flex flex-col h-full justify-center gap-2 items-center px-5 py-10 text-white cursor-pointer bg-center bg-cover bg-no-repeat rounded-xl object-cover"
              style={{ backgroundImage: `url("/card-bg.png")` }}
            >
              <h2 className="text-2xl font-bold">{item.label}</h2>
              <p className="text-center text-lg">{item.content}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default About;
