import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";

// const aboutData = {
//   designation: "Developer",
//   title: "I Develop Application that Help People",
//   text: [
//     "Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat cupidatat",
//     "Krnon proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis",
//   ],
//   skillIcons: [
//     { name: "joomla", icon: "img/svg/joomla.svg" },
//     { name: "wp", icon: "img/svg/wp.svg" },
//     { name: "drupal", icon: "img/svg/drupal.svg" },
//     { name: "laravel", icon: "img/svg/laravel.svg" },
//   ],
// };

const About = () => {
  const userData = useContext(UserContext);

  if (!userData?.user) return <h1>Loading....</h1>;

  const [skills, setSkills] = useState(userData?.user?.skills);
  console.log(skills)
  return (
    <div className="devman_tm_section" id="about">
      <div className="devman_tm_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <div className="image_wrap">
                <img src="img/thumbs/64-49.jpg" alt="" />
                <div className="main" data-img-url={userData?.user?.about?.avatar?.url} />
                <div className="extra_image">
                  <div className="image_inner">
                    <img src="img/thumbs/1-1.jpg" alt="" />
                    <div
                      className="main_extra"
                      data-img-url={skills[0]?.image?.url}
                    />
                  </div>
                </div>
                {skills?.slice(0, 4).map((skill, i) => (
                  <div className={i === 0 ? "extra_image" : ""} key={i}>
                    <span
                      className={`icon_${i + 1} wow fadeIn`}
                      data-wow-duration="1s"
                      data-wow-delay={`0.${i * 2}s`}
                    >
                      <img className='svg' src={skill?.image?.url} alt="" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="right">
              <div className="title">
                <span>
                  {`I'm`} a {userData?.user?.about?.title}
                </span>
                <h3>{userData?.user?.about?.subTitle}</h3>
              </div>
              <div className="text">
                {userData?.user?.about?.description}
              </div>
              <div className="devman_tm_button">
                <a className="anchor" href="#portfolio">
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
