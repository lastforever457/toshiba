import {
  FacebookOutlined,
  InstagramOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Button, Col, Form, Input, Row } from "antd";

const Footer = () => {
  return (
    <footer
      id="contacts"
      className="bg-[#6c757d] text-white py-10 px-5 md:px-10 lg:px-72"
    >
      <Row gutter={[25, 25]}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="bg-gray-100 text-black p-6 rounded-md">
            <h2 className="text-lg font-semibold mb-4">Свяжитесь с нами</h2>
            <Form className="">
              <Row gutter={[16, 10]}>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item name={"name"} rules={[{ required: true }]}>
                    <Input placeholder="Имя" className="w-full" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item name={"phone"} rules={[{ required: true }]}>
                    <Input placeholder="Тел. номер" className="w-full" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item name={"message"} rules={[{ required: true }]}>
                <Input.TextArea placeholder="Сообщение" rows={4} />
              </Form.Item>
              <p className="text-sm text-red-500">
                * обязательно для заполнения
              </p>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-gray-500 border-none"
              >
                Отправить
              </Button>
            </Form>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-start gap-3">
                <strong className="text-xl">Адрес:</strong>
                <p className="text-lg">Тошкент ш., Сайрам к., 2-уй</p>
              </div>
              <div className="flex items-center justify-start gap-3">
                <strong className="text-xl">Телефон:</strong>{" "}
                <p className="text-lg">+998 (91) 354 11 11</p>
              </div>
              {/* <div className="flex items-center justify-start gap-3">
                <strong className="text-xl">E-mail:</strong>
                <p className="text-lg">ustazoda2017@mail.ru</p>
              </div> */}
            </div>
            <div className="flex space-x-4 text-2xl">
              <FacebookOutlined className="hover:text-blue-600 cursor-pointer transition-all" />
              <InstagramOutlined className="hover:text-pink-600 cursor-pointer transition-all" />
              <SendOutlined className="hover:text-blue-400 cursor-pointer transition-all" />
            </div>
            <p className="text-xl text-gray-300">
              {new Date().getFullYear()} © KONL CANNY"
            </p>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
