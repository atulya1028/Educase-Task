import React,{useEffect} from "react";
import "../styles/AccountSettings.css";
import profile from "../images/profile.png";
import camera from "../images/camera.png";

export const AccountSetting = () => {

  useEffect((event)=>{
    event.preventDefault();
  },[]);


  return (
    <>
      <div className="header">Account Settings</div>
      <div className="block">
        <div>
          <div className="profile">
            <img src={profile} alt="Profile" />
            <img src={camera} alt="Camera" className="camera" />
            <div>
              <div className="name">Marry Doe</div>
              <div className="email">Marry@Gmail.Com</div>
            </div>
          </div>
        </div>
        <div className="details">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </div>
      </div>
      <hr />
    </>
  );
};
