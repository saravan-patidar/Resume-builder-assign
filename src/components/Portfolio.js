import Isotope from "isotope-layout";
import { Fragment, useEffect, useState } from "react";
import { dataImage } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
import { FaGithub } from "react-icons/fa";

const Portfolio = ({ userInfo }) => {
  const portfolioInfo = userInfo?.user || {};
  const { projects, about } = portfolioInfo;
  const [activeDetailsPopup, setActiveDetailsPopup] = useState(false);
  // Isotope
  useEffect(() => {
    dataImage();
    setTimeout(() => {
      new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
      });
    }, 500);
  }, []);
  return (
    <Fragment>
      <DetailsPopup
        show={activeDetailsPopup}
        close={() => setActiveDetailsPopup(false)}
      />
      <div className="tonni_tm_section" id="portfolio">
        <div className="tonni_tm_portfolio">
          <div className="container">
            <div className="tonni_tm_main_title" data-type="centered">
              <div className="title">
                <h3>Latest Projects</h3>
              </div>
              <div className="subtitle">
                <p>{about?.subTitle}</p>
              </div>
            </div>
            <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
              <ul className="gallery_zoom grid">
                {/* <li className="grid-sizer" /> */}
                {projects
                  .sort((a, b) => a.sequence - b.sequence)
                  .map((project) => {
                    const { title, techStack, image, githuburl } = project;
                    return (
                      <li className="grid-item" key={project?._id}>
                        <div className="list_inner">
                          <div className="image">
                            <img src="img/thumbs/1-1.jpg" alt="" />
                            <div className="main" data-img-url={image?.url} />
                          </div>
                          <div className="details">
                            <span className="category">{title}</span>

                            <a href={githuburl}>
                              <FaGithub className="github-icon" />
                            </a>

                            <h3 className="title">{techStack.join("")}</h3>
                            <img
                              className="svg"
                              src="img/svg/vector5.svg"
                              alt=""
                            />
                          </div>
                          <a
                            className="tonni_tm_full_link popup-youtube"
                            href="//www.youtube.com/embed/7e90gBu4pas?autoplay=1"
                          />
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
