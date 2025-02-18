// src/TabButtons.js
import React from "react";

const TabButtons = ({ tabs, activeTab, setActiveTab }) => {
  const buttonStyle = (tabIndex) => ({
    
    padding: "10px 20px",
    marginRight: "10px",
    backgroundColor: activeTab === tabIndex ? "#e0f0ff" : "#fff",
    border: "1px solid #ccc",
    cursor: "pointer",
  });

  return (
    <div id="tabPanel">
      {tabs.map((tab, index) => (
        <button
          key={index}
          style={buttonStyle(index)}
          onClick={() => setActiveTab(index)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabButtons;
