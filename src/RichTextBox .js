import React from "react";

const RichTextBoxDiv = ({ activeTab, index, children }) => {
  return (
    <div id= "textEditorBox" hidden={activeTab !== index}>
      {activeTab === index && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
};

export default RichTextBoxDiv;
