const TimeLine = ({ userInfo }) => {
  const { timeline } = userInfo?.user;

  const compare = (a, b) => {
    const A = a.startDate.slice(0, 10);
    const B = b.startDate.slice(0, 10);
    if (A < B) {
      return 1;
    } else {
      return -1;
    }
  };
  return (
    <div className="tonni_tm_section">
      <div className="tonni_tm_timeline">
        <div className="container bigger">
          <div className="timeline_inner">
            <div className="container">
              <div className="tonni_tm_main_title" data-type="flex">
                <div className="title">
                  <span>Experience</span>
                  <h3>Creative Timeline</h3>
                </div>
                <div className="subtitle">
                  <p>
                    Fusce sollicitudin eros id ex maximus gravida non vitae
                    ante. Cras ac mi a dolor suscipit rutrum ut vitae mi.
                  </p>
                </div>
              </div>
              <div className="timeline_list">
                <span className="line" />
                <ul>
                  {timeline.sort(compare).map((list) => {
                    const {
                      company_name,
                      jobTitle,
                      summary,
                      startDate,
                      endDate,
                      icon,
                    } = list;
                    return (
                      <li className="wow fadeInUp" data-wow-duration="1s">
                        <ul className="items">
                          <li>
                            <div className="list_inner">
                              <div className="details">
                                {icon && (
                                  <img className="svg" src={icon?.url} alt="" />
                                )}
                                <div className="title">
                                  <h3>{jobTitle}</h3>
                                  <span>{company_name}</span>
                                  <br />
                                  <p className="education">
                                    {list.forEducation && "Education"}
                                  </p>
                                </div>
                                <div className="text">
                                  <p>{summary}</p>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="list_inner">
                              <div className="year">
                                <span>
                                  {startDate.slice(0, 7)} -{" "}
                                  {endDate.slice(0, 7)}
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="list_inner">
                              <div className="image">
                                <img src="img/thumbs/37-25.jpg" alt="" />
                                <div
                                  className="main"
                                  data-img-url="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285431821-3lfg2r"
                                />
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <span className="shape">
              <img className="svg" src="img/svg/vector6.svg" alt="" />
            </span>
            <span className="shape2">
              <img className="svg" src="img/svg/icon8.svg" alt="" />
            </span>
            <span className="shape3">
              <img className="svg anim_circle" src="img/svg/icon9.svg" alt="" />
            </span>
            <span className="shape4">
              <img className="svg anim_circle" src="img/svg/icon5.svg" alt="" />
            </span>
            <span className="shape5">
              <img className="svg" src="img/svg/icon10.svg" alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimeLine;
