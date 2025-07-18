import React, { useState } from "react";
import { ReactComponent as ArrowDropDown } from "../Assets/Drop.svg";
import ProfileDropdown from "./dropdown/profileDropdown";

const Topbar = () => {
  const [dropDown, setDropDown] = useState(false);

  const clickTrigger = () => {
    setDropDown(!dropDown);
  };

  return (
    <div style={{ gridColumn: "span 6" }}>
      <input
        className="padding-10 font-20 border-10"
        style={{ width: "150vh" }}
        type="text"
        name=""
        id=""
      />
      <ArrowDropDown
        onClick={clickTrigger}
        style={{ height: "50px", width: "50px" }}
        className="cursor-pointer"
      />
      <div className="flex-container flex-end">
        {dropDown ? (
            <ProfileDropdown></ProfileDropdown>
          
        ) : null}
      </div>
    </div>
  );
};

export default Topbar;
