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
    console.log("Width:", window.innerWidth);
    handleScreenWidth();
    window.addEventListener("resize", handleScreenWidth);

    return () => {
      window.removeEventListener("resize", handleScreenWidth);
    };
  }, []);

  console.log("Width: ", window.innerWidth);

  return (
    <>
      <div className="header">Account Settings</div>
      <div className="block" style={{}}>
        <div className="profile-main">
          <div
            className="profile"
          >
            <div className="intro">
              <img src={profile} alt="Profile" />
              <img
                src={camera}
                alt="Camera"
                className={
                  screenWidth >= 320 && screenWidth <= 480
                    ? "mobile"
                    : screenWidth >= 481 && screenWidth <= 768
                    ? "tablet"
                    : screenWidth >= 769 && screenWidth <= 1024
                    ? "laptops"
                    : screenWidth >= 1025 && screenWidth <= 1200
                    ? "desktop"
                    : screenWidth >= 1201
                    ? "extra"
                    : ''
                }
              />
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
      <div>{window.innerWidth}</div>
    </>
  );
};
