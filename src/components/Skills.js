import { useContext, useEffect, useState } from "react";
import { activeSkillProgress } from "../utilits";
import { UserContext } from "../Context/UserContext";

const Skills = () => {

  const userData = useContext(UserContext);

  if (!userData?.user) return <h1>Loading...</h1>;

  const [skillsData, setSkillsData] = useState(userData?.user?.skills);

  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  return (
    <div className="devman_tm_section">
      <div className="devman_tm_skills">
        <div className="container">
          <div className="devman_tm_main_title" data-text-align="center">
            <span>My Skills</span>
            <h3>I Develop Skills Regularly</h3>
            <p>
              Dliquip ex ea commo do conse namber onequa ute irure dolor in
              reprehen derit in voluptate
            </p>
          </div>
          <div className="skills_wrapper">
            <div className="left">
              <div className="dodo_progress">
                {skillsData?.slice(0, 10).map(skill => (
                  <div key={skill?._id}
                    className="skillsInner___ progress_inner"
                    data-value={skill?.percentage}
                    data-color="#142eb5"
                  >
                    <span>
                      <span className="label">{skill?.name}</span>
                      <span className="number">{skill?.percentage}%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="right">
              <div className="dodo_progress">
              {skillsData?.slice(10, 20).map(skill => (
                  <div key={skill?._id}
                    className="skillsInner___ progress_inner"
                    data-value={skill?.percentage}
                    data-color="#142eb5"
                  >
                    <span>
                      <span className="label">{skill?.name}</span>
                      <span className="number">{skill?.percentage}%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
