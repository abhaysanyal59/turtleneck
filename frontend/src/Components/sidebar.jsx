import React from "react";
import { ToFirstCapital } from "../Utils/helpers";
import logo from "../Assets/Logo.png"

const SideBar = () => {
  const testArray = ["dashboard", "logs"];

  return (
    <div className="bg-grey flex-container flex-col gap-20 padding-20 font-20 border-10 font-white">
      <img className="border-10" src={logo} alt=""></img>
      {Array.isArray(testArray)
        ? testArray.map((item) => (
            <div
              className="cursor-pointer "
              onClick={() => (window.location.href = `${item}`)}
            >
              {ToFirstCapital(item)}
            </div>
          ))
        : []}
    </div>
  );
};

export default SideBar;
