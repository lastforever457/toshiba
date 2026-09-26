import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export interface MenuItem {
  id: number;
  title: string;
  path: string;
}

const useCompanyMenus = () => {
  const { t } = useTranslation();
  const menus: MenuItem[] = useMemo(
    () => [
      {
        id: 1,
        title: t("about"),
        path: "about",
      },
      {
        id: 2,
        title: t("works"),
        path: "works",
      },
      {
        id: 3,
        title: t("services"),
        path: "services",
      },
      {
        id: 4,
        title: t("contacts"),
        path: "contacts",
      },
    ],
    [t]
  );

  return { menus };
};

export default useCompanyMenus;
