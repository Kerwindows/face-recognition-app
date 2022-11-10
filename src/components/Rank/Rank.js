import React from "react";

const Rank = ({ name, entries, error }) => {
  return (
    <div>
      <div className="white f3">
        {`Hi ${name},  your current entry count is...`}
      </div>
      <div className="white f1">{entries}</div>
      <div className="light-green">{error}</div>
    </div>
  );
};

export default Rank;
