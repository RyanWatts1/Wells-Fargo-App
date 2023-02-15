import React, { useState } from "react";

export default function Card({ holiday }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3>{holiday.name}</h3>
        <button onClick={toggleOpen}>Read More</button>
      </div>
      {open && (
        <div>
          <p>{holiday.date}</p>{" "}
        </div>
      )}
    </div>
  );
}
