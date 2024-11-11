import { Col, Row } from "antd";

const About = () => {
  return (
    <div
      id="about"
      className="w-full min-h-[400px] px-5 mdpx-10 xl:px-72 py-16"
    >
      <div
        className="flex min-h-[400px] bg-center rounded-xl overflow-hidden md:rounded-none bg-cover object-cover"
        style={{ backgroundImage: `url("/about.png")` }}
      >
        <div
          className="flex w-full h-full"
          style={{ backdropFilter: "blur(5px)" }}
        >
          <Row>
            <Col xs={24} sm={24} md={24} lg={12}></Col>
            <Col xs={24} sm={24} md={24} lg={12}>
              <div className="flex flex-col justify-center items-start text-white p-5 gap-2 w-full h-full">
                <h2 className="text-3xl font-bold">
                  Современный ремонт и отделка квартир Под Ключ - USTAZODA.UZ
                </h2>
                <p className="text-xl">
                  Современный ремонт и отделка квартир Под Ключ в Ташкенте и по
                  всему Узбекистану. Ремонт квартир, домов и других, жилых
                  помещений любой сложности под ключ форма оплаты любая,
                  Ламинат, пластик, линолеум, ковролан, гипсокартон любой
                  сложности, укладка кафеля, мрамор, гранит, корка, цоколь,
                  малярь-ка, обои, штукатурка, декор, электросварка, сантехника,
                  электрика, установка козырьков, установка дверей топчаны,
                  стяжка пола, кладка кирпичей, установка ванн и сантехники,
                  сборка и разборка мебели.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default About;
