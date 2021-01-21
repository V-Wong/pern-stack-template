import React from "react";

function ProjectTitle({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", placeContent: "center" }}>
      <h1 style={{ color: "green" }}>
        {text}
      </h1>
    </div>
  );
};

export default ProjectTitle;