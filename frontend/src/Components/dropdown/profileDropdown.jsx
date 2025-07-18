import React from "react";
import { ToFirstCapital } from "../../Utils/helpers";
import Settings from "../../Assets/Settings.svg";
import Profile from "../../Assets/Profile.svg";

const ProfileDropdown = () => {
  const dropData = [
    {
      name: "profile",
      icon: Profile,
    },
    {
      name: "settings",
      icon: Settings,
    },
  ];

  return (
    <div
      className="flex-container flex-end gap-10 flex-col padding-20"
      style={{
        position: "absolute",
        border: "1px solid #ccc",
        borderRadius: "5px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        zIndex: "9999",
        color:"black",
        background:"white"
      }}
    >
      <h4 className="margin-h-10">Hello Admin</h4>
      <hr style={{ width: "100%" }} />
      {Array.isArray(dropData)
        ? dropData.map((item, index) => (
            <div className="flex-container gap-10 cursor-pointer" key={index}>
              <img style={{ height: "20px" }} src={item?.icon} alt="" />
              <span>{ToFirstCapital(item?.name)}</span>
            </div>
          ))
        : []}
    </div>
  );
};

export default ProfileDropdown;
