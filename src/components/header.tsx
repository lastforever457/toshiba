import { Button, Drawer, Segmented, Space } from "antd";
import { useState } from "react";
import { FiMenu, FiPhoneCall } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import logo from "../../public/logo.png";
import useCompanyMenus from "../hooks/use-company-menus";
import i18n from "../i18n/i18n";

const Header = () => {
  const { menus } = useCompanyMenus();
  const [open, setOpen] = useState(false);
  const [buttonText, setButtonText] = useState("РУС");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="w-full sticky top-0 z-50 text-white bg-[#6C757D] shadow-lg px-5 md:px-10 2xl:px-72 flex justify-between items-center min-h-[70px]">
      <Link
        to={"main"}
        smooth={true}
        duration={800}
        className="text-2xl font-bold cursor-pointer"
      >
        <img src={logo} alt="Logo" width={200} />
      </Link>
      <div className="hidden lg:flex justify-center items-center gap-5">
        {menus.map((menu: Record<string, any>, index: number) => (
          <Link
            key={index}
            smooth={true}
            to={menu.path}
            duration={500}
            className="uppercase text-lg cursor-pointer"
          >
            {menu.title}
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex justify-center items-center gap-5">
        <Button
          onClick={() => {
            changeLanguage(buttonText === "UZB" ? "ru" : "uz");
            setButtonText(buttonText === "UZB" ? "РУС" : "UZB");
          }}
        >
          {buttonText}
        </Button>
        <RouterLink to={"tel:+998913541111"}>
          <div className="flex justify-center items-center text-xl gap-2">
            <FiPhoneCall />
            +998 (91) 354 11 11
          </div>
        </RouterLink>
      </div>

      <div className="lg:hidden">
        <FiMenu className="text-3xl" onClick={showDrawer} />
        <Drawer
          title="KONL CANNY"
          placement={"top"}
          onClose={onClose}
          open={open}
        >
          {menus.map((menu: Record<string, any>, index: number) => (
            <Link
              key={index}
              to={menu.path}
              className="uppercase text-lg block py-2"
              onClick={onClose}
              smooth={true}
            >
              {menu.title}
            </Link>
          ))}
          <div className="flex justify-center items-center gap-5 pt-4">
            <Space>
              <Segmented
                onChange={changeLanguage}
                defaultValue={i18n.language}
                options={[
                  { label: "UZB", value: "uz" },
                  { label: "RUS", value: "ru" },
                ]}
              />
            </Space>
            <div className="flex justify-center items-center text-xl gap-2">
              <FiPhoneCall />
              +998 (91) 354 11 11
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
