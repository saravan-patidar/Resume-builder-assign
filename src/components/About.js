const About = ({ userInfo }) => {
  const aboutInfo = userInfo?.user?.about || {};
  const { exp_year, title, description } = aboutInfo;
  const { skills } = userInfo?.user || {};
  return (
    <div className="tonni_tm_section" id="about">
      <div className="tonni_tm_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <div className="left_inner">
                <div className="year">
                  <h3>{exp_year}</h3>
                  <span className="rounded">
                    <img src="img/about/flower.png" alt="" />
                  </span>
                </div>
                <div className="experience">
                  <h3>+</h3>
                  <p>years experience</p>
                  <span className="shape">
                    <img src="img/about/dots.png" alt="" />
                  </span>
                  <span className="circle_shape">
                    <img className="svg" src="img/svg/icon1.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title">
                <span>Have A Nice Day!</span>
                <h3>
                  {`I'm`} Looking For {title}.
                </h3>
              </div>
              <div className="text">
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div className="dodo_progress">
            <ul>
              {skills &&
                skills
                  .sort((a, b) => a.sequence - b.sequence)
                  .map((skill) => {
                    const { percentage, image, _id } = skill;
                    return (
                      <li key={_id}>
                        <div className="list_inner">
                          <div
                            className="progress_inner skillsInner___"
                            data-value={percentage}
                            data-color="#000"
                          >
                            <div className="background">
                              <div className="bar">
                                <div className="bar_in" />
                              </div>
                            </div>
                            <div className="percent">
                              <img className="svg" src={image.url} alt="" />
                              <span className="number">{percentage}%</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
