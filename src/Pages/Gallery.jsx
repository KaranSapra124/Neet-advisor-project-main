import React, { useEffect, useState } from "react";
import Root from "../Components/Helper/Root";
import InternationalGallery from "../Components/Gallery/InternationalGallery";
import { Tabs } from "antd";
import Container from "../Components/Helper/Container";
import AccrossCountry from "../Components/Gallery/AccrossCountry";
import NeetPGSeminar from "../Components/Gallery/NeetPGSeminar";
import SeminarAndWorkshops from "../Components/Gallery/Seminar&Workshops";
import HappyClients from "../Components/Gallery/HappyClients";

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
      const keyInterval = setInterval(() => {
          setCurr((prev) => {
              if (prev < 5) {
                  return prev + 1
              } else if (prev === 5) {
                  return 1
              }
          })
      }, 10000)
      return () => clearInterval(keyInterval)
  }, [])
  return (
    <>
      <Root>
        <Container
          className={"bg-webinar-hero relative"}
        >
          <div className="absolute h-full w-full bg-gradient-to-br from-black/15   to-gray-900/50 inset-0 backdrop-blur-md"></div>
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
        </Container>
      </Root>
    </>
  );
};

export default Gallery;
