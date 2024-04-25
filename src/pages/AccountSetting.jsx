import React, { useEffect, useState } from "react";
import "../styles/AccountSettings.css";
import profile from "../images/profile.png";
import camera from "../images/camera.png";

export const AccountSetting = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };


  useEffect(() => {
    console.log('Width:',window.innerWidth);
    handleScreenWidth();
    window.addEventListener("resize", handleScreenWidth);

    return () => {
      window.removeEventListener("resize", handleScreenWidth);
    };
  }, []);


  console.log("Width: ", window.innerWidth);

  let minimize = "mobile";
  if (screenWidth >= 320 && screenWidth <= 480) {
    minimize = "tablet";
  } else if (screenWidth >= 481 && screenWidth <= 768) {
    minimize = "laptops";
  } else if (screenWidth >= 769 && screenWidth <= 1024) {
    minimize = "desktop";
  } else if (screenWidth >= 1025 && screenWidth <= 1200) {
    minimize = "extra";
  } else if(screenWidth>=1201) {
    minimize ="extra-large";
  }

  let maximize = "over";
  if(screenWidth>=1201){
    maximize='xxl';
  }

  return (
    <>
      <div className="header">Account Settings</div>
      <div className="block" style={{
      }}>
        <div className="profile-main">
          <div className="profile">
            <div className="intro" >
              <img src={profile} alt="Profile" />
               <img src={camera} alt="Camera" className={`${minimize} ${maximize}`}/> 
            </div>
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
