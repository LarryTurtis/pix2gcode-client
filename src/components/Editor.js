import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-gcode";
import "ace-builds/src-noconflict/theme-github";
import Loader from "./Loader";
// Render editor
const Editor = ({ content, isLoading }) => {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="editor-container">
      <AceEditor
        mode="gcode"
        theme="github"
        name="editor"
        value={content}
        width="100%"
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
};

export default Editor;
