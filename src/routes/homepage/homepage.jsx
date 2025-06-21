import "./homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      {/* <img src="/orbital.png" alt="" className="orbital" /> */}
      <div className="left">
        <h1>STUNTER AI</h1>
        <h2>super charge your creativity and productivityI</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          officia hic molestiae voluptate optio expedita quo? Animi
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
