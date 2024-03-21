import { useRef, useState } from "react";

// const data = [
//   {
//     name: "Anna Barbera",
//     img: "img/testimonials/2.jpg",
//     job: "Vivaco Group",
//     review:
//       "Wonderful support. Immediate response and they return with an easy fix and clear information. Applied the fix and it worked like a charm. You can definately trust this producer. Overall great quality service and code. Thanks a lot Marketify team!",
//   },
//   {
//     name: "David Parker",
//     img: "img/testimonials/3.jpg",
//     job: "Senior Designer",
//     review:
//       "Minimal design, incredibly well documented, and an absolute pleasure to use! The customer support is one of the absolute best I've ever had the pleasure of interacting with. Quick, courteous, and extremely helpful! I can recommend this to anyone.",
//   },
//   {
//     name: "Alan Walker",
//     img: "img/testimonials/4.jpg",
//     job: "Singer",
//     review:
//       "Loved the template design and customer support from Marketify team! I am a noob in programming with very little knowledge about coding but the Marketify team helped me to launch my resume website from editing to uploading the template successfully.",
//   },
//   {
//     name: "James Cameron",
//     img: "img/testimonials/1.jpg",
//     job: "Aroa Founder",
//     review:
//       "Super easy to update in a code editor. All the code is labeled with comments and laid out nicely. The documentation is great and the support via live chat was perfect. They helped me out super quick when I had a minor code customization.",
//   },
//   {
//     image: {
//       public_id: "portfolio3/1710357726628-c4dr18.png",
//       url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357726628-c4dr18.png",
//     },
//     name: "Samantha Wu",
//     review:
//       "I had the pleasure of working closely with John on a challenging project. He is a highly skilled developer who consistently delivered excellent results. His ability to understand complex requirements and implement efficient solutions was truly impressive. I would highly recommend him to any organization looking for a talented developer.",
//     position: "Software Engineer",
//     enabled: true,
//     _id: "65f1fcdf0556c3f887e9d74c",
//   },
// ];

const Testimonials = ({ userInfo }) => {
  const { testimonials } = userInfo?.user;

  const [active, setActive] = useState(testimonials[0]);

  const reviewData = useRef(testimonials);

  const activeDotFun = (value, i) => {
    setActive(value);
    let data = reviewData.current;
    data.push(data[i]);
    data.splice(i, 1);
    reviewData.current = data;
  };
  const activeImg = (value, key) => {
    if (active[key] === value) {
      return "active";
    }
    return "";
  };

  return (
    <div className="tonni_tm_section">
      <div className="tonni_tm_testimonials">
        <div className="container">
          <div
            className="testimonials_inner wow fadeInUp"
            data-wow-duration="1s"
          >
            <span className="shape">
              <img className="svg anim_circle" src="img/svg/icon9.svg" alt="" />
            </span>
            <span className="shape2">
              <img className="svg" src="img/svg/icon12.svg" alt="" />
            </span>
            <div className="leftpart">
              <ul>
                {testimonials.map((item, i) => {
                  const { image, _id } = item;
                  const url = image && image?.url;
                  return (
                    <li
                      className={activeImg(image, "image")}
                      key={_id}
                      data-index={_id}
                    >
                      <div className="image">
                        <img src={url} alt="" />
                        <div
                          className="main"
                          data-img-url={url}
                          style={{
                            backgroundImage: `url(${url})`,
                          }}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="rightpart">
              <div className="rightpart_in">
                <div className="main_title">
                  <h3>
                    <span className="big">
                      Testimonials
                      <span className="small">
                        Testimonials
                        <img className="svg" src="img/svg/quote.svg" alt="" />
                      </span>
                    </span>
                  </h3>
                </div>
                <div className="quotes">
                  <ul>
                    {testimonials.map((item) => {
                      const { review, _id } = item;
                      return (
                        <li
                          className={activeImg(review, "review")}
                          data-index={_id}
                        >
                          <p>{review}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="details">
                  <div className="infos">
                    <div className="avatars" s>
                      <ul className="grid-sort">
                        {reviewData.current.map((review, i) => (
                          <li className={` grid-item ${i}`} key={i}>
                            <span onClick={() => activeDotFun(review, i)}>
                              <div
                                data-img-url={review && review?.image?.url}
                                style={{
                                  backgroundImage: `url(${
                                    review && review?.image?.url
                                  })`,
                                }}
                              />
                            </span>
                            <span className="hidden">1</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="short">
                      <ul className="name">
                        {testimonials.map((user, i) => {
                          const { name, _id } = user;
                          return (
                            <li
                              className={activeImg(name, "name")}
                              data-index={_id}
                              key={_id}
                            >
                              <h3>{name}</h3>
                            </li>
                          );
                        })}
                      </ul>
                      <ul className="job">
                        {testimonials.map((user, i) => {
                          const { position, _id } = user;
                          return (
                            <li
                              className={activeImg(position, "position")}
                              data-index={_id}
                              key={_id}
                            >
                              <h3>{position}</h3>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
