import { Config } from "@/util/config";
import { useScrollAnimate } from "../../util/useScrollAnimate";
import { Footer } from "../Footer";
import { HeaderCenter } from "../HeaderCenter";
import { HeaderLeft } from "../HeaderLeft";
import { FooterNewsletter } from "../FooterNewsletter";

interface MainLayoutProps {
  children: JSX.Element;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  useScrollAnimate();
  return (
    <>
      <HeaderCenter />
      {children}
      <FooterNewsletter />
    </>
  );
};
