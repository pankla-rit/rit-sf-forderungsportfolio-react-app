import React, { useState, useRef } from "react";

const RichTextEditor = () => {
  const editorRef = useRef(null);
  const [content, setContent] = useState("");

  const formatText = (buttonClick) => {
    document.execCommand(buttonClick, false, null);
    setContent(editorRef.current.innerHTML); 
  };

  return (
    <div className="rich-text-editor">
      <h2>Zusätzliche Notizen</h2>
      
      <div className="toolbar" >
        <button onClick={() => formatText("bold")}><b>Bolt</b></button>
        <button onClick={() => formatText("italic")}><i>Italic</i></button>
        <button onClick={() => formatText("underline")}><u>Underline</u></button>
      </div>

      <div
        ref={editorRef}
        contentEditable="true"
        className="editor"
        onInput={() => setContent(editorRef.current.innerHTML)}
      ></div>
    </div>
  );
};

export default RichTextEditor;
