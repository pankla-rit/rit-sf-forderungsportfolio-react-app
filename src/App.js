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
      <div>
      {tabObjects.map((tab, index) => (
        <RichTextBoxDiv key={index} activeTab={activeTab} index={index}>
          <h3>Text-Editor 1</h3>
          {tab.content}
        </RichTextBoxDiv>
      ))}
      </div>
      <div>
      {tabObjects.map((tab, index) => (
        <RichTextBoxDiv key={index} activeTab={activeTab} index={index}>
          <h3>Text-Editor 2</h3>
          {tab.content}
        </RichTextBoxDiv>
      ))}
      </div>
      <div>
      {tabObjects.map((tab, index) => (
        <RichTextBoxDiv key={index} activeTab={activeTab} index={index}>
          <h3>Text-Editor 3</h3>
          {tab.content}
        </RichTextBoxDiv>
      ))}
      </div>
      <div>
      {tabObjects.map((tab, index) => (
        <RichTextBoxDiv key={index} activeTab={activeTab} index={index}>
          <h3>Text-Editor 4</h3>
          {tab.content}
        </RichTextBoxDiv>
      ))}
      </div>
      <div>
      {tabObjects.map((tab, index) => (
        <RichTextBoxDiv key={index} activeTab={activeTab} index={index}>
          <h3>Text-Editor 5</h3>
          {tab.content}
        </RichTextBoxDiv>
      ))}
      </div>
    </div>
  );
}

export default App;


// import React, { useState, useEffect } from "react";
// import TabButtons from "./TabButtons";
// import RichTextBoxDiv from "./RichTextBox ";
// import RichTextEditor from "./RichTextEditor";
// import "./App.css";
// import { getForderungsportfolioResult } from "./ForderungsportfolioApi";

// function App() {
//   const [activeTab, setActiveTab] = useState(0);
//   const [tabObjects, setTabObjects] = useState([]);

//   useEffect(() => {
//     async function fetchTabs(){
//       const apiObjects = await getForderungsportfolioResult();
//       const newTabs = apiObjects.map((obj, index) => ({
//         label: obj.index,
//         content: (
//           <div>
//             {[1, 2, 3].map((index) => (
//               <div
//                 key={index}
//               >
//                 <RichTextEditor />
//               </div>
//             ))}
//           </div>
//         )
//       }));
//       setTabObjects(newTabs);
//     }
//     fetchTabs();
//   }, []);

//   return (
//     <div id="App">
//       <TabButtons tabs={tabObjects} activeTab={activeTab} setActiveTab={setActiveTab} />   
//       <div>
//       {tabObjects.map((tab, index) => (
//         <RichTextBoxDiv key={index} activeTab={activeTab} index={index}>
//           <h3>Text-Editor 1</h3>
//           {tab.content}
//         </RichTextBoxDiv>
//       ))}
//       </div>
//       <div>
//       {tabObjects.map((tab, index) => (
//         <RichTextBoxDiv key={index} activeTab={activeTab} index={index}>
//           <h3>Text-Editor 2</h3>
//           {tab.content}
//         </RichTextBoxDiv>
//       ))}
//       </div>
//       <div>
//       {tabObjects.map((tab, index) => (
//         <RichTextBoxDiv key={index} activeTab={activeTab} index={index}>
//           <h3>Text-Editor 3</h3>
//           {tab.content}
//         </RichTextBoxDiv>
//       ))}
//       </div>
//       <div>
//       {tabObjects.map((tab, index) => (
//         <RichTextBoxDiv key={index} activeTab={activeTab} index={index}>
//           <h3>Text-Editor 4</h3>
//           {tab.content}
//         </RichTextBoxDiv>
//       ))}
//       </div>
//       <div>
//       {tabObjects.map((tab, index) => (
//         <RichTextBoxDiv key={index} activeTab={activeTab} index={index}>
//           <h3>Text-Editor 5</h3>
//           {tab.content}
//         </RichTextBoxDiv>
//       ))}
//       </div>
//     </div>
//   );
// }

// export default App;
