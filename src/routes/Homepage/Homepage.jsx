import SearchBar from "../../components/SearchBar/SearchBar";
import "./homepage.scss";
import {Link} from "react-router-dom";
function Homepage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title"> Find Real Estate & Get your dream place
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque libero corporis amet. Molestiae accusantium sed quo, similique iste expedita possimus. Est nesciunt, molestiae ratione laudantium illum amet omnis odit fugit.
          </p>
          <SearchBar></SearchBar>
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">

        <img src="./bg.png" alt="" />

      </div>
    </div>
  );
}

export default Homepage;
