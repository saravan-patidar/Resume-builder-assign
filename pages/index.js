import dynamic from "next/dynamic";
import { useEffect } from "react";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import News from "../src/components/News";
import Priceing from "../src/components/Priceing";
import Service from "../src/components/Service";
import Testimonials from "../src/components/Testimonials";
import TimeLine from "../src/components/TimeLine";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";
import MobileMenu from "../src/layout/MobileMenu";
import Mouse from "../src/layout/Mouse";
import PogressBar from "../src/layout/PogressBar";
import { activeSkillProgress } from "../src/utilits";
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const Index = ({ data }) => {
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  return (
    <Layout>
      <MobileMenu />
      <Header />
      <Home userInfo={data} />
      {/* /HERO */}
      {/* ABOUT */}
      <About userInfo={data} />
      {/* /ABOUT */}
      {/* SERVICE */}
      <Service userInfo={data} />
      {/* /SERVICE */}
      {/* PORTFOLIO */}
      <Portfolio userInfo={data} />
      {/* /PORTFOLIO */}
      {/* TIMELINE */}
      <TimeLine userInfo={data} />
      {/* /TIMELINE */}
      {/* PRICING */}
      <Priceing userInfo={data} />
      {/* /PRICING */}
      {/* TESTIMONIALS */}
      <Testimonials userInfo={data} />

      {/* /TESTIMONIALS */}
      {/* NEWS */}
      <News userInfo="jhj" />
      {/* /NEWS */}
      {/* CONTACT */}
      <Contact userInfo={data} />
      <Mouse />
      <PogressBar />
    </Layout>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    );
    const data = await res.json();
    return {
      props: { data },
    };
  } catch (err) {
    console.log("Error fetching data: ", err);
    return {
      props: {
        data: null,
      },
    };
  }
}
export default Index;
