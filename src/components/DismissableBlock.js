import React, { useState } from "react";

const DismissableBlock = () => {
  const [displayStatus, setDisplayStatus] = useState("");
  return (
    <div className={`ui negative message ${displayStatus}`}>
      <i className="close icon" onClick={() => setDisplayStatus("hidden")}></i>
      Privacy Notice! We are not storing your data.
    </div>
  );
};

export default DismissableBlock;
