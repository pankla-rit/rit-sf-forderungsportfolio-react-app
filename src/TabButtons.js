import React from "react";
import "./App.css"

const TabButtons = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div style={{ marginBottom: "5px" }}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`tab-button ${activeTab === index ? "active" : ""}`}
          onClick={() => setActiveTab(index)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabButtons;
