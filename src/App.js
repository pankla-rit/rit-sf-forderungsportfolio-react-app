import React, { useState } from "react";
import TabButtons from "./TabButtons";
import RichTextBoxDiv from "./RichTextBox ";
import RichTextEditor from "./RichTextEditor";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState(0);

  
  const tabObjects = [
    { 
      label: "Tab 1", 
      content: <div><RichTextEditor /></div> 
    },
    { 
      label: "Tab 2", 
      content: <div><RichTextEditor /></div> 
    },
    { 
      label: "Tab 3", 
      content: <div><RichTextEditor /></div> 
    },
    { 
      label: "Tab 4", 
      content: <div><RichTextEditor /></div> 
    },
    
  ];

  return (
    <div id="App">
      
      <TabButtons tabs={tabObjects} activeTab={activeTab} setActiveTab={setActiveTab} />
            
      {tabObjects.map((tab, index) => (
        <RichTextBoxDiv key={index} activeTab={activeTab} index={index}>
          {tab.content}
        </RichTextBoxDiv>
      ))}
    </div>
  );
}

export default App;
