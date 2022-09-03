import react from 'react';
import { BiSearch } from 'react-icons/bi';
import './Nav.css';

class Navigation extends react.Component {
  render() {
    return (
      <div>
        <nav style={{position:"fixed",top:"0"}} className="navbar navbar-expand-lg sticky-top navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a style={{color:"white"}} className="navbar-brand logo" href="#">
              <img src='logo.png'></img>
            </a>
            <ul className="navbar-nav mr-auto mt-2 mt-sm-0">
              <li className="nav-item active">
                <a className="nav-link post" href="#" style={{color:"White"}}>
                  <b  style={{color:"white"}}><i class="fa fa-plus " style={{backgroundColor:"white",color:"#1bb76e"}}></i>&nbsp;New post</b><span className="sr-only">(current)</span>
                </a>
              </li>
              <div style={{marginLeft:"95px",height:"20px"}}>
                <input style={{opacity:"0.2",height:"35px"}}
                  type="text"
                  className="inputbox"
                  placeholder="Images, #tag, @users oh my!"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                ></input>
                <i style={{color:"white"}}  class="fa fa-search"></i>
              </div>
              


              <li className="nav-item pl-5 pr-4 ads">
                <a  style={{color:"white",backgroundColor:"#6432f9",height:"37px",fontWeight:"bolder",borderRadius:"5px"}} className="nav-link" href="#">
                  Go Ad-Free
                </a>
              </li>
              <li className="nav-item pl-2">
                <a  style={{color:"white"}} className="nav-link disabled" href="#">
                  Sign in
                </a>
              </li>
              <li className="nav-item active pl-4 up">
                <a  style={{color:"white",backgroundColor:"#01b96b",padding:"6px",width:"90px",fontWeight:"bolder",textAlign:"center",borderRadius:"5px"}} className="nav-link" href="#">
                  Sign Up <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
