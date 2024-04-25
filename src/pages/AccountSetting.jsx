import React, { useEffect, useState } from "react";
import "../styles/AccountSettings.css";
import profile from "../images/profile.png";
import camera from "../images/camera.png";

export const AccountSetting = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const handleScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };
  const handleScreenHeight = () => {
    setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
    handleScreenWidth();
    window.addEventListener("resize", handleScreenWidth);

    return () => {
      window.removeEventListener("resize", handleScreenWidth);
    };
  }, []);

  useEffect(() => {
    handleScreenHeight();
    window.addEventListener("resize", handleScreenHeight);

    return () => {
      window.removeEventListener("resize", handleScreenHeight);
    };
  }, []);

  useEffect(() => {
    console.log(screenWidth);
  });

  console.log("Width: ", screenWidth);
  console.log("Height: ", window.innerHeight);

  return (
    <>
      <div className="header">Account Settings</div>
      <div className="block" style={{
        backgroundColor:'bisque',
        width: screenHeight == 1440 ? 340 :'auto'
      }}>
        <div className="profile-main">
          <div className="profile">
            <div className="intro" >
              <img src={profile} alt="Profile" />
              {screenHeight >=750 ? <img src={camera} alt="Camera" className="fl"/> :
              screenWidth >= 1440 ? (
                <img src={camera} alt="Camera" className="xl" />
              ) : screenWidth >= 710 ? (
                <img src={camera} alt="Camera" className="l" />
              ) : screenWidth >= 576 ? (
                <img src={camera} alt="Camera" className="m" />
              ) : (
                <img src={camera} alt="Camera" className="s" />
              )}
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
