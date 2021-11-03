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
    <AceEditor
      mode="gcode"
      theme="github"
      name="UNIQUE_ID_OF_DIV"
      value={content}
      editorProps={{ $blockScrolling: true }}
    />
  );
};

export default Editor;
