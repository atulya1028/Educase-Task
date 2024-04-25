import React, { useEffect, useState } from "react";
import "../styles/AccountSettings.css";
import profile from "../images/profile.png";
import camera from "../images/camera.png";

export const AccountSetting = () => {

  const [screenWidth,setScreenWidth] = useState(window.screen);

 const handleScreenWidth = ()=>{
  setScreenWidth(window.innerWidth);
 }
  
  useEffect(()=>{
    handleScreenWidth();
    window.addEventListener('resize',handleScreenWidth);

    return ()=>{
      window.removeEventListener('resize',handleScreenWidth);
    }
  },[]);

  useEffect(()=>{
    console.log(screenWidth);
  })

  console.log(screenWidth);

  return (
    <>
      <div className="header">Account Settings</div>
      <div className="block">
        <div className="profile-main">
          <div className="profile" >
           <div className="intro">
           <img src={profile} alt="Profile" />
            <img src={camera} alt="Camera" className={screenWidth <=574 ? "camera" :screenWidth >=1440 ? 'xl-camera': 'full-camera'} />
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
