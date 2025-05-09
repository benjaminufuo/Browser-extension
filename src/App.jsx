import React, { useState } from "react";
import logo from "./assets/public/logo-cropped.svg";
import devlens from "./assets/public/logo-devlens.svg";
import stylespy from "./assets/public/logo-style-spy.svg";
import speedboost from "./assets/public/logo-speed-boost.svg";
import jsonwizard from "./assets/public/logo-json-wizard.svg";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import tabmasterpro from "./assets/public/logo-tab-master-pro.svg";
import viewportbuddy from "./assets/public/logo-viewport-buddy.svg";
import Markupnotes from "./assets/public/logo-markup-notes.svg";
import gridguides from "./assets/public/logo-grid-guides.svg";
import palletpicker from "./assets/public/logo-palette-picker.svg";
import linkchecker from "./assets/public/logo-link-checker.svg";
import domsnapshot from "./assets/public/logo-dom-snapshot.svg";
import ConsolePlus from "./assets/public/logo-console-plus.svg";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("All");
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const [cardData, setCardData] = useState([
    {
      img: devlens,
      title: "DevLens",
      description:
        "Quickly inspect page layouts and visualize element boundaries.",
      toggle: false,
      status: "Active",
    },
    {
      img: stylespy,
      title: "StyleSpy",
      description: "Instantly analyze and copy CSS from any webpage element.",
      toggle: false,
      status: "Active",
    },
    {
      img: speedboost,
      title: "SpeedBoost",
      description:
        "Optimizes browser resource usage to accelerate page loading.",
      toggle: false,
      status: "Inactive",
    },
    {
      img: jsonwizard,
      title: "JSONWizard",
      description:
        "Quickly inspect page layouts and visualize element boundaries.",
      toggle: false,
      status: "Active",
    },
    {
      img: tabmasterpro,
      title: "TabMaster Pro",
      description: "Organizes browser tabs into groups and sessions.",
      toggle: false,
      status: "Active",
    },
    {
      img: viewportbuddy,
      title: "ViewportBuddy",
      description:
        "Simulates various screen resolutions directly within the browser.",
      toggle: false,
      status: "Inactive",
    },
    {
      img: Markupnotes,
      title: "Markup Notes",
      description:
        "Enables annotation and notes directly onto webpages for collaborative debugging..",
      toggle: false,
      status: "Active",
    },
    {
      img: gridguides,
      title: "GridGuides",
      description:
        "Overlay customizable grids and alignment guides on any webpage.",
      toggle: false,
      status: "Active",
    },
    {
      img: palletpicker,
      title: "Palette Picker",
      description: "Instantly extracts color palettes from any webpage.",
      toggle: false,
      status: "Inactive",
    },
    {
      img: linkchecker,
      title: "LinkChecker",
      description: "Scans and highlights broken links on any page.",
      toggle: false,
      status: "Active",
    },
    {
      img: domsnapshot,
      title: "DOM Snapshot",
      description: "Capture and export DOM structures quickly.",
      toggle: false,
      status: "Inactive",
    },
    {
      img: ConsolePlus,
      title: "ConsolePlus",
      description:
        "Enhanced developer console with advanced filtering and logging. ",
      toggle: false,
      status: "Acctive",
    },
  ]);
  const handleCardToggle = (title) => {
    setCardData((prevData) =>
      prevData.map((card) =>
        card.title === title
          ? {
              ...card,
              status: card.status === "Active" ? "Inactive" : "Active",
            }
          : card
      )
    );
  };

  const handleRemove = (index) => {
    setCardData((prevData) => prevData.filter((_, i) => i !== index));
  };
  const filteredCards =
    active === "All"
      ? cardData
      : cardData.filter((card) => card.status === active);

  return (
    <div className={`app-main ${toggle ? "dark-mode" : "light-mode"}`}>
      <div className="header-wrapper">
        <div className={toggle ? "header" : "header1"}>
          <div className="logo">
            <img className="logoimg" src={logo} />
            <h1 className={toggle ? "logo-text" : "logo-text1"}>Extensions</h1>
          </div>
          <div
            className={toggle ? "light-darkmode1" : "light-darkmode"}
            onClick={handleToggle}
          >
            {toggle ? (
              <MdOutlineLightMode onClick={handleToggle} />
            ) : (
              <MdDarkMode onClick={handleToggle} />
            )}
          </div>
        </div>
      </div>

      <div className="extensionlist-activestate">
        <h1 className={toggle ? "extentions" : "extensions1"}>
          Extensions List
        </h1>
        <div className="activestates">
          <div
            className="all"
            style={{
              color: toggle ? "white" : "#212636",
              border: toggle
                ? "1px solid hsl(226, 11%, 37%)"
                : "1px solid hsl(0, 0%, 78%)",
              backgroundColor:
                active === "All"
                  ? "hsl(3, 77%, 44%)"
                  : toggle
                  ? "hsl(225, 23%, 24%)"
                  : "#ffffff",
            }}
            onClick={() => {
              setActive("All");
            }}
          >
            <p className="state-text">All</p>
          </div>
          <div
            className="active"
            style={{
              color: toggle ? "white" : "#212636",
              border: toggle
                ? "1px solid hsl(226, 11%, 37%)"
                : "1px solid hsl(0, 0%, 78%)",
              backgroundColor:
                active === "Active"
                  ? "hsl(3, 77%, 44%)"
                  : toggle
                  ? "hsl(225, 23%, 24%)"
                  : "#ffffff",
            }}
            onClick={() => {
              setActive("Active");
            }}
          >
            <p className="state-text">Active</p>
          </div>
          <div
            className="inactive"
            style={{
              color: toggle ? "white" : "#212636",
              border: toggle
                ? "1px solid hsl(226, 11%, 37%)"
                : "1px solid hsl(0, 0%, 78%)",
              backgroundColor:
                active === "Inactive"
                  ? "hsl(3, 77%, 44%)"
                  : toggle
                  ? "hsl(225, 23%, 24%)"
                  : "#ffffff",
            }}
            onClick={() => {
              setActive("Inactive");
            }}
          >
            <p className="state-text">Inactive</p>
          </div>
        </div>
      </div>
      <div className="card-container">
        {filteredCards.map((item, index) => (
          <div
            key={index}
            className="card"
            style={{
              backgroundColor: toggle ? "#1f2536" : "#ffffff",
              border: toggle
                ? "1px solid hsl(226, 11%, 37%)"
                : "1px solid hsl(0, 0%, 78%)",
            }}
          >
            <div className="top-card">
              <img src={item.img} alt={item.title} className="imgage" />
              <div className="right-card">
                <h2
                  className="card-title"
                  style={{ color: toggle ? "white" : "#212636" }}
                >
                  {item.title}
                </h2>
                <p
                  className="card-description"
                  style={{
                    color: toggle ? "hsl(0, 0%, 78%)" : "hsl(226, 11%, 37%)",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
            <div className="bottom-card">
              <button
                className="remove-button"
                onClick={() => handleRemove(index)}
                style={{
                  border: "0.1px solid hsl(226, 11%, 37%)",
                  backgroundColor: toggle
                    ? "hsl(226, 25%, 17%)"
                    : "hsl(200, 60%, 99%)",
                  color: toggle ? "white" : "#212636",
                }}
              >
                Remove
              </button>
              <div
                className="toggle-btn"
                onClick={() => handleCardToggle(item.title)}
                style={{
                  backgroundColor:
                    item.status === "Active"
                      ? "hsl(3, 77%, 44%)"
                      : "hsl(226, 11%, 37%)",
                  justifyContent:
                    item.status === "Active" ? "flex-end" : "flex-start",
                }}
              >
                <button className="btn1"></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
