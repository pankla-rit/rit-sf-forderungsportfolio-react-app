import React from "react";

const Tab = ({label, active, onClick}) => {
    return (
        <button onClick={onClick}
        style={{
            border: active ? "2px solid blue" : "1px solid gray",
            backgroundColor: active ? "#e0f0ff" : "white",
            padding: "10px 20px",
            marginRight: "5px",
            cursor: "pointer",
          }}
          >
            {label}
          </button>
    );
};

export default Tab;