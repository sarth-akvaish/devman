import { useEffect, useState } from "react";
import Counter from "./Counter";

// const homeData = {
//   firstName: "James",
//   lastName: "Smith",
//   designation: "Web Developer",
//   address: "New York",
//   img: "img/hero/2.jpg",
//   bio: "Jodi kokhono vul hoye jai tumi oporadh nio na ptate velit esse cillum dolore",
//   numberOfProject: 800,
//   numberofyear: 12,
// };

const Home = () => {

  const [portfolioData, setPortfolioData] = useState(null);
  
  const getData = async () => {
    const data = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
    const json = await data.json();
    // console.log(json)
    setPortfolioData(json?.user)
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="devman_tm_section" id="home">
      <div className="devman_tm_hero">
        <div className="background">
          <div className="image" data-img-url="img/hero/hero2.jpeg" />
        </div>
        <div className="container">
          <div className="content">
            <div className="left">
              <div className="inner">
                <h3 className="hello">Hello {`I'm`}</h3>
                <h3 className="name">
                  {portfolioData?.about.name}
                </h3>
                <h3 className="job">
                  {portfolioData?.about?.title} from {portfolioData?.about?.address}
                </h3>
                <p className="text">{portfolioData?.about?.subTitle}</p>
                <div className="buttons">
                  <div className="devman_tm_button">
                    <a className="anchor" href="#contact">
                      {portfolioData?.about?.quote}
                    </a>
                  </div>
                  <div className="simple_button">
                    <a className="anchor" href="#about">
                      About Me
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="stroke_1">{portfolioData?.about?.name}</h3>
            </div>
            <div className="right">
              <div className="image">
                <img src="img/thumbs/53-61.jpg" alt="" />
                <div className="main" data-img-url={portfolioData?.about?.avatar?.url} />
                <span className="win">
                  <img src="img/svg/award.svg" alt="" className="svg" />
                </span>
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={portfolioData?.about?.exp_year} />
                    </h3>
                    <span className="item_name">
                      Years of
                      <br />
                      Success
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={portfolioData?.about?.some_total} />
                      <span className="extra">+</span>
                    </h3>
                    <span className="item_name">
                      Projects
                      <br />
                      Completed
                    </span>
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
export default Home;
