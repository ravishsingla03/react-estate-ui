import "./Navbar.scss";
import { Link } from "react-router-dom";
function Navbar() {
  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>GLA Estate</span>
        </a>
        <a href="/">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>John doe</span>
            <Link to={"/profile"} className="profile">
              Profile
              <div className="notification">3</div>
            </Link>
          </div>
        ) : (
          <>
            <a href="">Signin</a>
            <a href="" className="register">
              Signup
            </a>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
