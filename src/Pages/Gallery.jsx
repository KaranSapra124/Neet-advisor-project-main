import React, { useEffect, useState } from "react";
import Root from "../Components/Helper/Root";
import InternationalGallery from "../Components/Gallery/InternationalGallery";
import { Tabs } from "antd";
import Container from "../Components/Helper/Container";
import AccrossCountry from "../Components/Gallery/AccrossCountry";
import NeetPGSeminar from "../Components/Gallery/NeetPGSeminar";
import SeminarAndWorkshops from "../Components/Gallery/Seminar&Workshops";
import HappyClients from "../Components/Gallery/HappyClients";
import scrollToTop from "../Utils/ScrollToTop";

const Gallery = () => {
  const [curr, setCurr] = useState(1);
  const [items, setItems] = useState([
    {
      label: "Explore Our Achievements",
      key: 1,
      children: <InternationalGallery />,
    },
    {
      label: "Guidance Across Country",
      key: 2,
      children: <AccrossCountry />,
    },
    {
      label: "NEET PG Info Sessions",
      key: 3,
      children: <NeetPGSeminar />,
    },
    {
      label: "Seminar & Workshops",
      key: 4,
      children: <SeminarAndWorkshops />,
    },
    {
      label: "Our Happy Clients",
      key: 5,
      children: <HappyClients />,
    },
  ]);

  useEffect(() => {
    scrollToTop();
    const keyInterval = setInterval(() => {
      setCurr((prev) => {
        if (prev < 5) {
          return prev + 1;
        } else if (prev === 5) {
          return 1;
        }
      });
    }, 100000);
    return () => clearInterval(keyInterval);
  }, []);
  return (
    <>
      <Root>
        <div className={"relative bg-webinar-hero p-10"}>
          <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-white/50  to-gray-500/60 backdrop-blur-md"></div>
          <Tabs
            activeKey={curr}
            onTabClick={(e) => {
              setCurr(e);
            }}
            animated={true}
            className="antTabs sticky"
            items={items}
            tabPosition="left"
          />
        </div>
      </Root>
    </>
  );
};

export default Gallery;
