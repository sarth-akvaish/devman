import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialsSlider } from "../sliderProps";
import { dataImage, imgToSVG } from "../utilits";
import { UserContext } from "../Context/UserContext";

const Testimonials = () => {

  const userData = useContext(UserContext);
  if (!userData?.user) return <h1>Loading...</h1>;
  const [testimonialsData, setTestimonialsData] = useState(userData?.user?.testimonials);

  useEffect(() => {
    dataImage();
    // imgToSVG();
  }, []);

  return (
    <div className="devman_tm_section">
      <div className="devman_tm_testimonials">
        <div className="container">
          <div className="devman_tm_main_title" data-text-align="center">
            <span>Testimonial</span>
            <h3>What Clients Say</h3>
            <p>
              Dliquip ex ea commo do conse namber onequa ute irure dolor in
              reprehen derit in voluptate
            </p>
          </div>
          <div
            className="testimonials_list wow fadeInUp"
            data-wow-duration="1s"
          >
            <Swiper
              {...testimonialsSlider}
              className="owl-carousel owl-theme owl-loaded"
            >
              {testimonialsData?.map(testimonial => (
                <SwiperSlide key={testimonial?._id}>
                  <div className="list_inner">
                    <img className="svg" src="img/svg/quote.svg" alt="" />
                    <p className="text">
                      {testimonial?.review.split(' ').slice(0, 20).join(' ')}....
                    </p>
                    <div className="details">
                      <div className="image">
                        <div
                          className="main"
                          data-img-url={testimonial?.image?.url}
                        />
                      </div>
                      <div className="short">
                        <h3>{testimonial?.name}</h3>
                        <span>{testimonial?.position}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* <SwiperSlide>
                <div className="list_inner">
                  <img className="svg" src="img/svg/quote.svg" alt="" />
                  <p className="text">
                    Duis aute irure dolor in repre hen derit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <div className="details">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="img/testimonials/3.jpg"
                      />
                    </div>
                    <div className="short">
                      <h3>David Parker</h3>
                      <span>Designer</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <img className="svg" src="img/svg/quote.svg" alt="" />
                  <p className="text">
                    Duis aute irure dolor in repre hen derit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <div className="details">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="img/testimonials/4.jpg"
                      />
                    </div>
                    <div className="short">
                      <h3>Jessica Smith</h3>
                      <span>Vivaco Group</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <img className="svg" src="img/svg/quote.svg" alt="" />
                  <p className="text">
                    Duis aute irure dolor in repre hen derit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <div className="details">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="img/testimonials/5.jpg"
                      />
                    </div>
                    <div className="short">
                      <h3>Collin Mattew</h3>
                      <span>Photographer</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide> */}
              <div className="owl-dots"></div>
            </Swiper>
            <div
              className="shape moving_effect"
              data-direction="y"
              data-reverse="yes"
            />
            <div
              className="shape_2 moving_effect"
              data-direction="y"
              data-reverse="yes"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
