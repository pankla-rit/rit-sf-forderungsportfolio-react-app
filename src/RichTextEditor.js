import React, {useState, useRef} from "react";

const RichTextEditor = () => {
    const editorRef = useRef(null);
    const [content, setContent] = useState("");
}

const formatText = (command) => {
    document.execCommand(command, false, null);
}

// Nxt: Warum ist execCommand durchgestrichen? Was macht diese Funktion? 